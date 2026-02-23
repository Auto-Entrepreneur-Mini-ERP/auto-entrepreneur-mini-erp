/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Package,
  Plus,
  Search,
  Edit,
  Trash2,
  AlertTriangle,
  RefreshCw,
  Boxes,
  Wrench,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Modal } from "../../components/ui/modal";
import { useState, useEffect, useCallback } from "react";
import {
  productApi,
  serviceApi,
  type Product,
  type Service,
  type CreateProductPayload,
  type CreateServicePayload,
  type UpdateProductPayload,
  type UpdateServicePayload,
} from "../../api/catalogApi";

// ─── Types ────────────────────────────────────────────────────────────────────

type TabType = "all" | "products" | "services";
type ItemType = "product" | "service";

interface ProductFormData {
  name: string;
  description: string;
  unit: string;
  category: string;
  unitPrice: string;
  reference: string;
  stockQuantity: string;
  alertThreshold: string;
}

interface ServiceFormData {
  name: string;
  description: string;
  unit: string;
  category: string;
  hourlyRate: string;
  fixedRate: string;
  estimatedDuration: string;
}

const UNIT_OPTIONS = ["piece", "kilogram", "liter", "meter", "hour", "day"];
const UNIT_LABELS: Record<string, string> = {
  piece: "Pièce",
  kilogram: "Kilogramme",
  liter: "Litre",
  meter: "Mètre",
  hour: "Heure",
  day: "Jour",
};

const emptyProductForm = (): ProductFormData => ({
  name: "",
  description: "",
  unit: "piece",
  category: "",
  unitPrice: "",
  reference: "",
  stockQuantity: "0",
  alertThreshold: "10",
});

const emptyServiceForm = (): ServiceFormData => ({
  name: "",
  description: "",
  unit: "hour",
  category: "",
  hourlyRate: "",
  fixedRate: "",
  estimatedDuration: "",
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

const stockStatus = (p: Product): "low" | "ok" | "empty" => {
  const qty = p.product.stockQuantity;
  const thresh = p.product.alertThreshold;
  if (qty === 0) return "empty";
  if (qty <= thresh) return "low";
  return "ok";
};

const formatPrice = (n: number) =>
  n.toLocaleString("fr-MA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ─── Sub-components ───────────────────────────────────────────────────────────

function StockBadge({ status }: { status: "low" | "ok" | "empty" }) {
  if (status === "ok")
    return (
      <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
        En stock
      </span>
    );
  if (status === "low")
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
        <AlertTriangle className="w-3 h-3" /> Stock faible
      </span>
    );
  return (
    <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700">
      Rupture
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ArticlesServicesView() {
  // ── State ──
  const [tab, setTab] = useState<TabType>("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [modalItemType, setModalItemType] = useState<ItemType>("product");
  const [editingId, setEditingId] = useState<string | null>(null);

  const [productForm, setProductForm] = useState<ProductFormData>(emptyProductForm());
  const [serviceForm, setServiceForm] = useState<ServiceFormData>(emptyServiceForm());
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Stock modal
  const [stockModalOpen, setStockModalOpen] = useState(false);
  const [stockProductId, setStockProductId] = useState<string | null>(null);
  const [stockDelta, setStockDelta] = useState("");

  // Delete confirm
  const [deleteConfirm, setDeleteConfirm] = useState<{
    id: string;
    type: ItemType;
    name: string;
  } | null>(null);

  // ── Fetch ──
  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [prods, servs] = await Promise.all([
        productApi.getAll(searchQuery ? { name: searchQuery } : undefined),
        serviceApi.getAll(searchQuery ? { name: searchQuery } : undefined),
      ]);
      setProducts(prods);
      setServices(servs);
    } catch (e: any) {
      setError(e?.response?.data?.error ?? e.message ?? "Erreur de chargement");
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const t = setTimeout(fetchAll, 300);
    return () => clearTimeout(t);
  }, [fetchAll]);

  // ── Derived data ──
  const lowStockCount = products.filter((p) => stockStatus(p) !== "ok").length;
  const stockValue = products.reduce(
    (acc, p) => acc + p.product.unitPrice * p.product.stockQuantity,
    0
  );

  const visibleItems: Array<{ item: Product | Service; type: ItemType }> =
    tab === "products"
      ? products.map((p) => ({ item: p, type: "product" as ItemType }))
      : tab === "services"
      ? services.map((s) => ({ item: s, type: "service" as ItemType }))
      : [
          ...products.map((p) => ({ item: p, type: "product" as ItemType })),
          ...services.map((s) => ({ item: s, type: "service" as ItemType })),
        ].sort(
          (a, b) =>
            new Date(b.item.creationDate).getTime() -
            new Date(a.item.creationDate).getTime()
        );

  // ── Open modal ──
  const openCreateModal = (type: ItemType) => {
    setModalMode("create");
    setModalItemType(type);
    setProductForm(emptyProductForm());
    setServiceForm(emptyServiceForm());
    setFormError(null);
    setEditingId(null);
    setIsModalOpen(true);
  };

  const openEditModal = (id: string, type: ItemType) => {
    setModalMode("edit");
    setModalItemType(type);
    setEditingId(id);
    setFormError(null);
    if (type === "product") {
      const p = products.find((x) => x.id === id);
      if (p) {
        setProductForm({
          name: p.name,
          description: p.description ?? "",
          unit: p.unit,
          category: p.category ?? "",
          unitPrice: String(p.product.unitPrice),
          reference: p.product.reference ?? "",
          stockQuantity: String(p.product.stockQuantity),
          alertThreshold: String(p.product.alertThreshold),
        });
      }
    } else {
      const s = services.find((x) => x.id === id);
      if (s) {
        setServiceForm({
          name: s.name,
          description: s.description ?? "",
          unit: s.unit,
          category: s.category ?? "",
          hourlyRate: s.service?.hourlyRate != null ? String(s.service.hourlyRate) : "",
          fixedRate: s.service?.fixedRate != null ? String(s.service.fixedRate) : "",
          estimatedDuration:
            s.service?.estimatedDuration != null
              ? String(s.service.estimatedDuration)
              : "",
        });
      }
    }
    setIsModalOpen(true);
  };

  // ── Submit ──
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setSubmitting(true);

    try {
      if (modalItemType === "product") {
        const payload: CreateProductPayload = {
          name: productForm.name,
          description: productForm.description || undefined,
          unit: productForm.unit,
          category: productForm.category || undefined,
          unitPrice: parseFloat(productForm.unitPrice),
          reference: productForm.reference || undefined,
          stockQuantity: parseInt(productForm.stockQuantity, 10) || 0,
          alertThreshold: parseInt(productForm.alertThreshold, 10) || 0,
        };

        if (modalMode === "create") {
          await productApi.create(payload);
        } else if (editingId) {
          const upd: UpdateProductPayload = { ...payload };
          await productApi.update(editingId, upd);
        }
      } else {
        const payload: CreateServicePayload = {
          name: serviceForm.name,
          description: serviceForm.description || undefined,
          unit: serviceForm.unit,
          category: serviceForm.category || undefined,
          hourlyRate: serviceForm.hourlyRate ? parseFloat(serviceForm.hourlyRate) : undefined,
          fixedRate: serviceForm.fixedRate ? parseFloat(serviceForm.fixedRate) : undefined,
          estimatedDuration: serviceForm.estimatedDuration
            ? parseInt(serviceForm.estimatedDuration, 10)
            : undefined,
        };

        if (!payload.hourlyRate && !payload.fixedRate) {
          setFormError("Au moins un tarif (horaire ou fixe) est requis.");
          setSubmitting(false);
          return;
        }

        if (modalMode === "create") {
          await serviceApi.create(payload);
        } else if (editingId) {
          const upd: UpdateServicePayload = { ...payload };
          await serviceApi.update(editingId, upd);
        }
      }

      setIsModalOpen(false);
      fetchAll();
    } catch (e: any) {
      setFormError(
        e?.response?.data?.error ??
          e?.response?.data?.message ??
          e.message ??
          "Une erreur est survenue"
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ── Delete ──
  const handleDelete = async () => {
    if (!deleteConfirm) return;
    try {
      if (deleteConfirm.type === "product") {
        await productApi.delete(deleteConfirm.id);
      } else {
        await serviceApi.delete(deleteConfirm.id);
      }
      setDeleteConfirm(null);
      fetchAll();
    } catch (e: any) {
      alert(e?.response?.data?.error ?? "Impossible de supprimer cet élément.");
    }
  };

  // ── Update stock ──
  const handleUpdateStock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stockProductId) return;
    try {
      await productApi.updateStock(stockProductId, parseInt(stockDelta, 10));
      setStockModalOpen(false);
      setStockDelta("");
      fetchAll();
    } catch (e: any) {
      alert(e?.response?.data?.error ?? "Erreur lors de la mise à jour du stock.");
    }
  };

  // ── Render ──
  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <Package className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">Produits & Services</h1>
            <p className="text-gray-600">Gérez votre catalogue de produits et services</p>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Rechercher un produit ou service..."
            className="pl-10 h-12 border-gray-200 rounded-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={fetchAll}
          className="h-12 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-600"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          <span className="hidden sm:inline">Actualiser</span>
        </button>
        <div className="flex gap-2">
          <Button
            className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 px-4 rounded-xl"
            onClick={() => openCreateModal("product")}
          >
            <Plus className="w-5 h-5 mr-1" />
            <span className="hidden sm:inline">Produit</span>
            <Boxes className="w-4 h-4 ml-1 hidden sm:block" />
          </Button>
          <Button
            className="bg-indigo-500 hover:bg-indigo-600 text-white h-12 px-4 rounded-xl"
            onClick={() => openCreateModal("service")}
          >
            <Plus className="w-5 h-5 mr-1" />
            <span className="hidden sm:inline">Service</span>
            <Wrench className="w-4 h-4 ml-1 hidden sm:block" />
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
    <p className="text-gray-600 text-sm mb-2">Total Produits</p>
    <p className="text-3xl font-bold text-[#2D3194]">{products.length}</p>
    <p className="text-green-600 text-sm mt-2">
      {products.filter(p => p.isActive).length} actifs
    </p>
  </div>

  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
    <p className="text-gray-600 text-sm mb-2">Total Services</p>
    <p className="text-3xl font-bold text-[#2D3194]">{services.length}</p>
    <p className="text-green-600 text-sm mt-2">
      {services.filter(s => s.isActive).length} actifs
    </p>
  </div>

  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
    <p className="text-gray-600 text-sm mb-2">Stock Faible</p>
    <p className="text-3xl font-bold text-orange-600">{lowStockCount}</p>
    <p className="text-gray-600 text-sm mt-2">Nécessite réappro</p>
  </div>

  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
    <p className="text-gray-600 text-sm mb-2">Valeur Stock</p>
    <p className="text-3xl font-bold text-[#2D3194]">
      {stockValue >= 1000
        ? `${(stockValue / 1000).toFixed(1)}K MAD`
        : `${stockValue.toFixed(0)} MAD`}
    </p>
    <p className="text-green-600 text-sm mt-2">Valeur totale</p>
  </div>
</div>


      {/* Tabs */}
      <div className="flex gap-1 mb-4 bg-gray-100 p-1 rounded-xl w-fit">
        {(["all", "products", "services"] as TabType[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === t ? "bg-white text-[#2D3194] shadow-sm" : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {t === "all" ? "Tout" : t === "products" ? "Produits" : "Services"}
          </button>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          {error}
          <button onClick={fetchAll} className="ml-auto text-sm underline">
            Réessayer
          </button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-gray-400">
            <RefreshCw className="w-6 h-6 animate-spin mr-2" />
            Chargement...
          </div>
        ) : visibleItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Package className="w-12 h-12 mb-3 opacity-30" />
            <p className="text-lg font-medium">Aucun élément trouvé</p>
            <p className="text-sm mt-1">
              {searchQuery ? "Essayez d'autres mots-clés." : "Créez votre premier produit ou service."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Nom</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Type</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Catégorie</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Prix / Tarif</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Stock</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Statut</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleItems.map(({ item, type }) => {
                  const isProduct = type === "product";
                  const p = isProduct ? (item as Product) : null;
                  const s = !isProduct ? (item as Service) : null;
                  const status = p ? stockStatus(p) : null;

                  return (
                    <tr
                      key={item.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      {/* Name */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                              isProduct ? "bg-purple-50" : "bg-blue-50"
                            }`}
                          >
                            {isProduct ? (
                              <Boxes className="w-4 h-4 text-purple-600" />
                            ) : (
                              <Wrench className="w-4 h-4 text-blue-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                            {item.description && (
                              <p className="text-xs text-gray-400 truncate max-w-[180px]">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Type */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            isProduct
                              ? "bg-purple-100 text-purple-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {isProduct ? "Produit" : "Service"}
                        </span>
                      </td>

                      {/* Category */}
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {item.category ?? <span className="text-gray-300">—</span>}
                      </td>

                      {/* Price */}
                      <td className="px-6 py-4 font-semibold text-gray-900 text-sm">
                        {isProduct && p ? (
                          <>{formatPrice(p.product.unitPrice)} MAD</>
                        ) : s?.service ? (
                          <div className="space-y-0.5">
                            {s.service.hourlyRate != null && s.service.hourlyRate > 0 && (
                              <p>{formatPrice(Number(s.service.hourlyRate))} MAD/h</p>
                            )}
                            {s.service.fixedRate != null && s.service.fixedRate > 0 && (
                              <p className="text-gray-500 text-xs">
                                Fixe: {formatPrice(Number(s.service.fixedRate))} MAD
                              </p>
                            )}
                          </div>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>

                      {/* Stock */}
                      <td className="px-6 py-4 text-sm">
                        {isProduct && p ? (
                          <button
                            onClick={() => {
                              setStockProductId(p.id);
                              setStockDelta("");
                              setStockModalOpen(true);
                            }}
                            className="flex items-center gap-1.5 hover:text-[#2D3194] transition-colors group"
                            title="Ajuster le stock"
                          >
                            <span className="font-medium">{p.product.stockQuantity}</span>
                            <span className="text-gray-400 text-xs">
                              {UNIT_LABELS[p.unit] ?? p.unit}
                            </span>
                            <Edit className="w-3 h-3 text-gray-300 group-hover:text-[#2D3194]" />
                          </button>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">
                        {isProduct && p ? (
                          <StockBadge status={status!} />
                        ) : (
                          <span
                            className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              item.isActive
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {item.isActive ? "Actif" : "Inactif"}
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openEditModal(item.id, type)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Modifier"
                          >
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button
                            onClick={() =>
                              setDeleteConfirm({ id: item.id, type, name: item.name })
                            }
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                            title="Supprimer"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ─── Create / Edit Modal ─── */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          modalMode === "create"
            ? `Ajouter un ${modalItemType === "product" ? "Produit" : "Service"}`
            : `Modifier le ${modalItemType === "product" ? "Produit" : "Service"}`
        }
      >
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {modalMode === "create" && (
            <div className="flex gap-2 mb-5 p-1 bg-gray-100 rounded-xl">
              {(["product", "service"] as ItemType[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setModalItemType(t)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    modalItemType === t
                      ? "bg-white text-[#2D3194] shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {t === "product" ? "Produit" : "Service"}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {modalItemType === "product" ? (
              <ProductForm form={productForm} onChange={setProductForm} />
            ) : (
              <ServiceForm form={serviceForm} onChange={setServiceForm} />
            )}

            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                {formError}
              </div>
            )}

            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <Button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 h-12 rounded-xl font-medium"
              >
                Annuler
              </Button>
              <Button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 rounded-xl font-medium"
              >
                {submitting ? (
                  <RefreshCw className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <Plus className="w-5 h-5 mr-2" />
                )}
                {modalMode === "create" ? "Ajouter" : "Enregistrer"}
              </Button>
            </div>
          </form>
        </div>
      </Modal>

      {/* ─── Stock Modal ─── */}
      <Modal
        isOpen={stockModalOpen}
        onClose={() => setStockModalOpen(false)}
        title="Ajuster le stock"
      >
        <div className="p-6">
          {stockProductId && (
            <div className="mb-4 p-3 bg-blue-50 rounded-xl text-sm text-blue-700">
              Stock actuel :{" "}
              <strong>
                {products.find((p) => p.id === stockProductId)?.product.stockQuantity ?? 0}
              </strong>{" "}
              unités
            </div>
          )}
          <form onSubmit={handleUpdateStock} className="space-y-4">
            <div>
              <Label className="text-gray-700 font-medium mb-2 block">
                Quantité à ajouter / retirer
              </Label>
              <Input
                type="number"
                required
                value={stockDelta}
                onChange={(e) => setStockDelta(e.target.value)}
                placeholder="Ex : +50 ou -10"
                className="h-12 border-gray-200 rounded-xl"
              />
              <p className="text-xs text-gray-400 mt-1">
                Entrez un nombre positif pour ajouter, négatif pour retirer.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                type="button"
                onClick={() => setStockModalOpen(false)}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 h-12 rounded-xl"
              >
                Annuler
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 rounded-xl"
              >
                Confirmer
              </Button>
            </div>
          </form>
        </div>
      </Modal>

      {/* ─── Delete Confirm ─── */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Confirmer la suppression</h3>
                <p className="text-sm text-gray-500">Cette action est irréversible</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Voulez-vous vraiment désactiver{" "}
              <strong>« {deleteConfirm.name} »</strong> ?
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 h-11 rounded-xl"
              >
                Annuler
              </Button>
              <Button
                onClick={handleDelete}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white h-11 rounded-xl"
              >
                Supprimer
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
  valueColor = "text-[#2D3194]",
  isString = false,
}: {
  label: string;
  value: number | string;
  sub: string;
  valueColor?: string;
  isString?: boolean;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
      <p className="text-gray-500 text-sm mb-1">{label}</p>
      <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
      <p className="text-gray-400 text-xs mt-1">{sub}</p>
    </div>
  );
}

// ─── Product Form ─────────────────────────────────────────────────────────────

function ProductForm({
  form,
  onChange,
}: {
  form: ProductFormData;
  onChange: (f: ProductFormData) => void;
}) {
  const set = (key: keyof ProductFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    onChange({ ...form, [key]: e.target.value });

  return (
    <>
      <FormField label="Nom" required>
        <Input value={form.name} onChange={set("name")} required placeholder="Ex: Palette bois" className="h-11 border-gray-200 rounded-xl" />
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Unité" required>
          <select value={form.unit} onChange={set("unit")} required className="w-full h-11 px-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D3194] bg-white text-sm">
            {UNIT_OPTIONS.map((u) => (
              <option key={u} value={u}>{UNIT_LABELS[u]}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Catégorie">
          <Input value={form.category} onChange={set("category")} placeholder="Ex: Emballage" className="h-11 border-gray-200 rounded-xl" />
        </FormField>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Prix unitaire (MAD)" required>
          <Input type="number" step="0.01" min="0.01" value={form.unitPrice} onChange={set("unitPrice")} required placeholder="0.00" className="h-11 border-gray-200 rounded-xl" />
        </FormField>
        <FormField label="Référence">
          <Input value={form.reference} onChange={set("reference")} placeholder="REF-001" className="h-11 border-gray-200 rounded-xl" />
        </FormField>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Stock initial">
          <Input type="number" min="0" value={form.stockQuantity} onChange={set("stockQuantity")} className="h-11 border-gray-200 rounded-xl" />
        </FormField>
        <FormField label="Seuil d'alerte">
          <Input type="number" min="0" value={form.alertThreshold} onChange={set("alertThreshold")} className="h-11 border-gray-200 rounded-xl" />
        </FormField>
      </div>

      <FormField label="Description">
        <textarea value={form.description} onChange={(e) => onChange({ ...form, description: e.target.value })} rows={3} placeholder="Description optionnelle..." className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2D3194] resize-none" />
      </FormField>
    </>
  );
}

// ─── Service Form ─────────────────────────────────────────────────────────────

function ServiceForm({
  form,
  onChange,
}: {
  form: ServiceFormData;
  onChange: (f: ServiceFormData) => void;
}) {
  const set = (key: keyof ServiceFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    onChange({ ...form, [key]: e.target.value });

  return (
    <>
      <FormField label="Nom" required>
        <Input value={form.name} onChange={set("name")} required placeholder="Ex: Transport express" className="h-11 border-gray-200 rounded-xl" />
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Unité" required>
          <select value={form.unit} onChange={set("unit")} required className="w-full h-11 px-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D3194] bg-white text-sm">
            {UNIT_OPTIONS.map((u) => (
              <option key={u} value={u}>{UNIT_LABELS[u]}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Catégorie">
          <Input value={form.category} onChange={set("category")} placeholder="Ex: Transport" className="h-11 border-gray-200 rounded-xl" />
        </FormField>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Tarif horaire (MAD/h)">
          <Input type="number" step="0.01" min="0" value={form.hourlyRate} onChange={set("hourlyRate")} placeholder="0.00" className="h-11 border-gray-200 rounded-xl" />
        </FormField>
        <FormField label="Tarif fixe (MAD)">
          <Input type="number" step="0.01" min="0" value={form.fixedRate} onChange={set("fixedRate")} placeholder="0.00" className="h-11 border-gray-200 rounded-xl" />
        </FormField>
      </div>

      <FormField label="Durée estimée (minutes)">
        <Input type="number" min="0" value={form.estimatedDuration} onChange={set("estimatedDuration")} placeholder="Ex: 60" className="h-11 border-gray-200 rounded-xl" />
      </FormField>

      <FormField label="Description">
        <textarea value={form.description} onChange={(e) => onChange({ ...form, description: e.target.value })} rows={3} placeholder="Description optionnelle..." className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2D3194] resize-none" />
      </FormField>
    </>
  );
}

// ─── Field wrapper ────────────────────────────────────────────────────────────

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="text-gray-700 font-medium mb-1.5 block text-sm">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      {children}
    </div>
  );
}