/* eslint-disable @typescript-eslint/no-explicit-any */
//ArticlesServicesView.tsx
import {
  Package,
  Plus,
  Search,
  Edit2,
  Trash2,
  AlertTriangle,
  RefreshCw,
  Wrench,
  TrendingDown,
  DollarSign,
  BarChart2,
  Clock,
  Tag,
  ChevronRight,
  X,
  CheckCircle2,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";
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
  type StockAdjustReason,
} from "../../api/catalogApi";

// ─── Color tokens ─────────────────────────────────────────────────────────────
// Blue   #2563EB / blue-600   → primary actions, active states, navigation
// Green  #16A34A / green-600  → in-stock success, positive financial values
// Red    #DC2626 / red-600    → stock alerts, critical warnings, destructive
// Orange #EA580C / orange-600 → low-stock warnings, secondary emphasis

// ─── Spacing system ──────────────────────────────────────────────────────────
// Section gaps:  space-y-5 (20px)
// Card padding:  p-5 (20px) — all cards
// Modal padding: px-6 pb-6 (24px)
// Form gap:      gap-4 (16px)
// Inline gap:    gap-3 (12px) standard, gap-2 (8px) tight
// Border radius: rounded-xl (12px) cards/inputs/buttons — uniform

type TabType = "products" | "services";
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
  rateType: "hourly" | "fixed";
  hourlyRate: string;
  fixedRate: string;
  estimatedDuration: string;
}

const UNIT_OPTIONS = [
  "piece",
  "kilogram",
  "liter",
  "meter",
  "hour",
  "day",
  "forfait",
];
const UNIT_LABELS: Record<string, string> = {
  piece: "Pièce",
  kilogram: "Kilogramme",
  liter: "Litre",
  meter: "Mètre",
  hour: "Heure",
  day: "Jour",
  forfait: "Forfait",
};
const STOCK_REASONS: {
  value: StockAdjustReason;
  label: string;
  icon: string;
}[] = [
  { value: "inventaire", label: "Inventaire", icon: "📋" },
  { value: "vente", label: "Vente", icon: "💸" },
  { value: "perte", label: "Perte / Casse", icon: "📉" },
  { value: "autre", label: "Autre", icon: "✏️" },
];

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
  rateType: "hourly",
  hourlyRate: "",
  fixedRate: "",
  estimatedDuration: "",
});

type StockLevel = "ok" | "low" | "empty";
const stockStatus = (p: Product): StockLevel => {
  if (p.product.stockQuantity === 0) return "empty";
  if (p.product.stockQuantity <= p.product.alertThreshold) return "low";
  return "ok";
};
const fmt = (n: number) =>
  n.toLocaleString("fr-MA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

// ─── Stock Status Badge ───────────────────────────────────────────────────────

function StockBadge({ status }: { status: StockLevel }) {
  const cfg = {
    ok: {
      label: "En stock",
      cls: "bg-green-50 text-green-700 border-green-200",
      dot: "bg-green-500",
    },
    low: {
      label: "Stock faible",
      cls: "bg-orange-50 text-orange-700 border-orange-200",
      dot: "bg-orange-500",
    },
    empty: {
      label: "Rupture",
      cls: "bg-red-50 text-red-700 border-red-200",
      dot: "bg-red-500",
    },
  }[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${cfg.cls}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({
  product,
  onEdit,
  onDelete,
  onStock,
}: {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
  onStock: () => void;
}) {
  const st = stockStatus(product);
  const pct =
    product.product.alertThreshold > 0
      ? Math.min(
          100,
          (product.product.stockQuantity /
            (product.product.alertThreshold * 4)) *
            100,
        )
      : product.product.stockQuantity > 0
        ? 100
        : 0;

  // Status-aware styles
  const stripeColor = {
    ok: "bg-blue-500",
    low: "bg-orange-400",
    empty: "bg-red-400",
  }[st];
  const iconWrap = {
    ok: "bg-blue-50 border-blue-100 text-blue-600",
    low: "bg-orange-50 border-orange-100 text-orange-600",
    empty: "bg-red-50 border-red-100 text-red-600",
  }[st];
  const cardBorder = {
    ok: "border-slate-200 hover:border-slate-300",
    low: "border-orange-200 hover:border-orange-300",
    empty: "border-red-200 hover:border-red-300",
  }[st];
  const gaugeColor = {
    ok: "bg-blue-500",
    low: "bg-orange-400",
    empty: "bg-red-400",
  }[st];

  return (
  <div
    className={`group bg-white border rounded-2xl overflow-hidden flex flex-col
    transition-all duration-200 hover:shadow-md shadow-sm ${cardBorder}`}
  >
    {/* Top accent stripe */}
    <div className={`h-[3px] w-full ${stripeColor}`} />

    <div className="p-6 flex-1 flex flex-col gap-4">
      
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div
            className={`shrink-0 w-9 h-9 rounded-xl border flex items-center justify-center ${iconWrap}`}
          >
            <Package className="w-4 h-4" strokeWidth={1.8} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-slate-800 text-sm leading-snug truncate">
              {product.name}
            </h3>

            {product.product.reference && (
              <p className="text-[11px] text-slate-400 font-mono tracking-wide mt-1">
                {product.product.reference}
              </p>
            )}
          </div>
        </div>

        <StockBadge status={st} />
      </div>

      {/* Tags */}
      {(product.category || product.unit) && (
        <div className="flex flex-wrap gap-2">
          {product.category && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1
              bg-slate-50 border border-slate-200 rounded-lg
              text-[11px] font-medium text-slate-500">
              <Tag className="w-3 h-3" />
              {product.category}
            </span>
          )}

          <span className="inline-flex items-center px-2.5 py-1
            bg-slate-50 border border-slate-200 rounded-lg
            text-[11px] font-medium text-slate-500">
            {UNIT_LABELS[product.unit] ?? product.unit}
          </span>
        </div>
      )}

      {/* Pricing */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-1">
              Prix unitaire
            </p>
            <p className="text-lg font-bold text-slate-900 tabular-nums leading-tight">
              {fmt(product.product.unitPrice)}
              <span className="text-xs font-normal text-slate-400 ml-1">
                MAD
              </span>
            </p>
          </div>

          <div className="text-right">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-1">
              Valeur stock
            </p>
            <p className="text-sm font-semibold text-slate-600 tabular-nums leading-tight">
              {fmt(product.product.unitPrice * product.product.stockQuantity)}
              <span className="text-xs font-normal text-slate-400 ml-1">
                MAD
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Stock Gauge */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
            Stock actuel
          </span>
          <span className="text-xs font-semibold text-slate-700 tabular-nums">
            {product.product.stockQuantity}
            <span className="text-slate-300 font-normal">
              {" "} / {product.product.alertThreshold}
            </span>
          </span>
        </div>

        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${gaugeColor}`}
            style={{ width: st === "empty" ? "2%" : `${Math.max(2, pct)}%` }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-4 mt-auto border-t border-slate-100">
        <button
          onClick={onStock}
          className="flex-1 flex items-center justify-center gap-2 h-9
            rounded-xl bg-blue-50 hover:bg-blue-100
            text-blue-700 text-xs font-semibold
            border border-blue-100 hover:border-blue-200
            transition-all duration-150"
        >
          <BarChart2 className="w-4 h-4" />
          Ajuster
        </button>

        <button
          onClick={onEdit}
          className="w-9 h-9 rounded-xl border border-slate-200 text-slate-400
            hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600
            flex items-center justify-center transition-all duration-150"
        >
          <Edit2 className="w-4 h-4" />
        </button>

        <button
          onClick={onDelete}
          className="w-9 h-9 rounded-xl border border-slate-200 text-slate-400
            hover:border-red-200 hover:bg-red-50 hover:text-red-500
            flex items-center justify-center transition-all duration-150"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);
}

// ─── Form primitives ──────────────────────────────────────────────────────────

const inputCls =
  "w-full h-10 border border-slate-200 rounded-xl px-3.5 text-sm text-slate-800 " +
  "placeholder:text-slate-300 bg-white pl-2 " +
  "focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 " +
  "transition-colors duration-150";

const selectCls =
  "w-full h-10 border border-slate-200 rounded-xl px-3.5 text-sm text-slate-800 bg-white " +
  "focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 " +
  "transition-colors duration-150";

const textareaCls =
  "w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 " +
  "placeholder:text-slate-300 bg-white leading-relaxed pl-2 " +
  "focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50 " +
  "resize-none transition-colors duration-150";

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
        {label}
        {required && (
          <span className="text-red-500 ml-0.5 normal-case tracking-normal font-medium">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {hint && (
        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
          {hint}
        </p>
      )}
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
  const set = (k: keyof ProductFormData, v: string) =>
    onChange({ ...form, [k]: v });
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <Field label="Nom du produit" required>
          <input
            required
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Ex: Câble HDMI 2m"
            className={inputCls} required
          />
        </Field>
      </div>
      <Field label="Référence">
        <input
          value={form.reference}
          onChange={(e) => set("reference", e.target.value)}
          placeholder="REF-001"
          className={inputCls} required
        />
      </Field>
      <Field label="Catégorie">
        <input
          value={form.category}
          onChange={(e) => set("category", e.target.value)}
          placeholder="Électronique..."
          className={inputCls} required
        />
      </Field>
      <Field label="Unité" required>
        <select
          value={form.unit}
          onChange={(e) => set("unit", e.target.value)}
          className={selectCls}
        >
          {UNIT_OPTIONS.map((u) => (
            <option key={u} value={u}>
              {UNIT_LABELS[u] ?? u}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Prix unitaire (MAD)" required>
        <input
          required
          type="number"
          min={0}
          step="0.01"
          value={form.unitPrice}
          onChange={(e) => set("unitPrice", e.target.value)}
          placeholder="0.00"
          className={inputCls} required
        />
      </Field>
      <Field label="Stock initial">
        <input
          type="number"
          min={0}
          value={form.stockQuantity}
          onChange={(e) => set("stockQuantity", e.target.value)}
          className={inputCls} required
        />
      </Field>
      <Field
        label="Seuil d'alerte"
        hint="Alerte déclenchée si stock ≤ ce seuil"
      >
        <input
          type="number"
          min={0}
          value={form.alertThreshold}
          onChange={(e) => set("alertThreshold", e.target.value)}
          className={inputCls} 
        />
      </Field>
      <div className="col-span-2">
        <Field label="Description">
          <textarea
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            placeholder="Description optionnelle..."
            rows={2}
            className={textareaCls}
          />
        </Field>
      </div>
    </div>
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
  const set = (k: keyof ServiceFormData, v: string) =>
    onChange({ ...form, [k]: v });

  return (
    <div className="grid grid-cols-2 gap-3.5">
      <div className="col-span-2">
        <Field label="Nom du service" required>
          <input
            required
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Ex: Transport express"
            className={inputCls} required
          />
        </Field>
      </div>

      <Field label="Catégorie">
        <input
          value={form.category}
          onChange={(e) => set("category", e.target.value)}
          placeholder="Ex: Transport"
          className={inputCls} required
        />
      </Field>

      <Field label="Unité">
        <select
          value={form.unit}
          onChange={(e) => set("unit", e.target.value)}
          className={selectCls}
        >
          {UNIT_OPTIONS.map((u) => (
            <option key={u} value={u}>
              {UNIT_LABELS[u] ?? u}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tarif horaire (MAD/h)">
        <input
          type="number"
          step="0.01"
          min={0}
          value={form.hourlyRate}
          onChange={(e) => set("hourlyRate", e.target.value)}
          placeholder="0.00"
          className={inputCls}
        />
      </Field>

      <Field label="Tarif fixe (MAD)">
        <input
          type="number"
          step="0.01"
          min={0}
          value={form.fixedRate}
          onChange={(e) => set("fixedRate", e.target.value)}
          placeholder="0.00"
          className={inputCls}
        />
      </Field>

      <Field label="Durée estimée (min)">
        <input
          type="number"
          min={0}
          value={form.estimatedDuration}
          onChange={(e) => set("estimatedDuration", e.target.value)}
          placeholder="60"
          className={inputCls}
        />
      </Field>

      <div className="col-span-2">
        <Field label="Description">
          <textarea
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            placeholder="Description optionnelle..."
            rows={2}
            className={textareaCls}
          />
        </Field>
      </div>
    </div>
  );
}

// ─── Main View ────────────────────────────────────────────────────────────────

export function ArticlesServicesView() {
  const [tab, setTab] = useState<TabType>("products");
  const [products, setProducts] = useState<Product[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [modalItemType, setModalItemType] = useState<ItemType>("product");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [productForm, setProductForm] =
    useState<ProductFormData>(emptyProductForm());
  const [serviceForm, setServiceForm] =
    useState<ServiceFormData>(emptyServiceForm());
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [stockModalOpen, setStockModalOpen] = useState(false);
  const [stockProductId, setStockProductId] = useState<string | null>(null);
  const [stockDelta, setStockDelta] = useState("");
  const [stockReason, setStockReason] =
    useState<StockAdjustReason>("inventaire");

  const [deleteConfirm, setDeleteConfirm] = useState<{
    id: string;
    type: ItemType;
    name: string;
  } | null>(null);

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

  const alertCount = products.filter((p) => stockStatus(p) !== "ok").length;
  const stockValue = products.reduce(
    (a, p) => a + p.product.unitPrice * p.product.stockQuantity,
    0,
  );

  const openCreate = (type: ItemType) => {
    setModalMode("create");
    setModalItemType(type);
    setProductForm(emptyProductForm());
    setServiceForm(emptyServiceForm());
    setFormError(null);
    setEditingId(null);
    setIsModalOpen(true);
  };

  const openEdit = (id: string, type: ItemType) => {
    setModalMode("edit");
    setModalItemType(type);
    setEditingId(id);
    setFormError(null);
    if (type === "product") {
      const p = products.find((x) => x.id === id);
      if (p)
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
    } else {
      const s = services.find((x) => x.id === id);
      if (s) {
        const hasHourly =
          s.service?.hourlyRate != null && Number(s.service.hourlyRate) > 0;
        setServiceForm({
          name: s.name,
          description: s.description ?? "",
          unit: s.unit,
          category: s.category ?? "",
          rateType: hasHourly ? "hourly" : "fixed",
          hourlyRate:
            s.service?.hourlyRate != null ? String(s.service.hourlyRate) : "",
          fixedRate:
            s.service?.fixedRate != null ? String(s.service.fixedRate) : "",
          estimatedDuration:
            s.service?.estimatedDuration != null
              ? String(s.service.estimatedDuration)
              : "",
        });
      }
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);
    try {
      if (modalItemType === "product") {
        const payload: CreateProductPayload = {
          name: productForm.name.trim(),
          description: productForm.description.trim() || undefined,
          unit: productForm.unit,
          category: productForm.category.trim() || undefined,
          unitPrice: parseFloat(productForm.unitPrice),
          reference: productForm.reference.trim() || undefined,
          stockQuantity: parseInt(productForm.stockQuantity, 10) || 0,
          alertThreshold: parseInt(productForm.alertThreshold, 10) || 0,
        };
        if (!payload.name) {
          setFormError("Le nom est requis.");
          setSubmitting(false);
          return;
        }
        if (isNaN(payload.unitPrice) || payload.unitPrice < 0) {
          setFormError("Prix invalide.");
          setSubmitting(false);
          return;
        }
        modalMode === "create"
          ? await productApi.create(payload)
          : editingId &&
            (await productApi.update(
              editingId,
              payload as UpdateProductPayload,
            ));
      } else {
        const isHourly = serviceForm.rateType === "hourly";
        const payload: CreateServicePayload = {
          name: serviceForm.name.trim(),
          description: serviceForm.description.trim() || undefined,
          unit: serviceForm.unit,
          category: serviceForm.category.trim() || undefined,
          hourlyRate:
            isHourly && serviceForm.hourlyRate
              ? parseFloat(serviceForm.hourlyRate)
              : undefined,
          fixedRate:
            !isHourly && serviceForm.fixedRate
              ? parseFloat(serviceForm.fixedRate)
              : undefined,
          estimatedDuration: serviceForm.estimatedDuration
            ? parseInt(serviceForm.estimatedDuration, 10)
            : undefined,
        };
        if (!payload.name) {
          setFormError("Le nom est requis.");
          setSubmitting(false);
          return;
        }
        if (isHourly && (!payload.hourlyRate || payload.hourlyRate <= 0)) {
          setFormError("Le taux horaire est requis.");
          setSubmitting(false);
          return;
        }
        if (!isHourly && (!payload.fixedRate || payload.fixedRate <= 0)) {
          setFormError("Le tarif forfait est requis.");
          setSubmitting(false);
          return;
        }
        modalMode === "create"
          ? await serviceApi.create(payload)
          : editingId &&
            (await serviceApi.update(
              editingId,
              payload as UpdateServicePayload,
            ));
      }
      setIsModalOpen(false);
      fetchAll();
    } catch (e: any) {
      setFormError(
        e?.response?.data?.error ??
          e?.response?.data?.message ??
          e.message ??
          "Erreur inattendue",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteConfirm) return;
    try {
      deleteConfirm.type === "product"
        ? await productApi.delete(deleteConfirm.id)
        : await serviceApi.delete(deleteConfirm.id);
      setDeleteConfirm(null);
      fetchAll();
    } catch (e: any) {
      alert(e?.response?.data?.error ?? "Impossible de supprimer.");
    }
  };

  const handleUpdateStock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stockProductId) return;
    const qty = parseInt(stockDelta, 10);
    if (isNaN(qty)) {
      alert("Quantité invalide");
      return;
    }
    try {
      await productApi.updateStock(stockProductId, {
        quantity: qty,
        reason: stockReason,
      });
      setStockModalOpen(false);
      setStockDelta("");
      setStockReason("inventaire");
      fetchAll();
    } catch (e: any) {
      alert(e?.response?.data?.error ?? "Erreur de mise à jour.");
    }
  };

  const stockProduct = products.find((p) => p.id === stockProductId);
  const newStockQty = stockProduct
    ? stockProduct.product.stockQuantity + (parseInt(stockDelta, 10) || 0)
    : 0;

  // KPI card definitions
  const kpis = [
    {
      label: "Produits actifs",
      value: products.length,
      sub: "références",
      icon: Package,
      stripe: "bg-blue-500",
      iconCls: "bg-blue-50 border-blue-100 text-blue-600",
      valCls: "text-slate-900",
    },
    {
      label: "Services actifs",
      value: services.length,
      sub: "prestations",
      icon: Wrench,
      stripe: "bg-indigo-500",
      iconCls: "bg-indigo-50 border-indigo-100 text-indigo-600",
      valCls: "text-slate-900",
    },
    {
      label: "Alertes stock",
      value: alertCount,
      sub: alertCount > 0 ? "à réapprovisionner" : "aucune alerte",
      icon: ShieldAlert,
      stripe: alertCount > 0 ? "bg-red-500" : "bg-slate-300",
      iconCls:
        alertCount > 0
          ? "bg-red-50 border-red-200 text-red-600"
          : "bg-slate-50 border-slate-200 text-slate-400",
      valCls: alertCount > 0 ? "text-red-600" : "text-slate-900",
    },
    {
      label: "Valeur du stock",
      value: fmt(stockValue),
      sub: "MAD total",
      icon: DollarSign,
      stripe: "bg-green-500",
      iconCls: "bg-green-50 border-green-100 text-green-600",
      valCls: "text-green-700",
    },
  ];

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="py-6 space-y-5">
      {/* ── Page Header ────────────────────────────────────────────────────────── */}
      <div className="py-7">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
              <Package className="w-5 h-5 text-[#2D3194]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#2D3194]">
                Produits & Services
              </h1>
              <p className="text-gray-600">
                Gérez votre catalogue de produits et services
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Secondary action */}
          <button
            onClick={() => openCreate("service")}
            className="h-9 px-4 rounded-xl border border-slate-300 bg-white
              text-slate-700 text-sm font-medium
              hover:bg-slate-50 hover:border-slate-400
              transition-colors duration-150 flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" strokeWidth={2} />
            Nouveau service
          </button>
          {/* Primary action */}
          <button
            onClick={() => openCreate("product")}
            className="h-9 px-4 rounded-xl border border-slate-300 bg-white
              text-slate-700 text-sm font-medium
              hover:bg-slate-50 hover:border-slate-400
              transition-colors duration-150 flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" strokeWidth={2} />
            Nouveau produit
          </button>
        </div>
      </div>

      {/* ── KPI Cards ──────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="relative bg-white border border-slate-200 rounded-xl overflow-hidden
              shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Vertical left accent — 3px for intentional visual presence */}
            <div
              className={`absolute inset-y-0 left-0 w-[3px] ${kpi.stripe}`}
            />
            <div className="pl-5 pr-4 py-4 px-4 flex flex-col gap-1">
              <div className="flex items-start justify-between mb-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide leading-none pt-0.5">
                  {kpi.label}
                </p>
                <div
                  className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${kpi.iconCls}`}
                >
                  <kpi.icon className="w-4 h-4" strokeWidth={1.8} />
                </div>
              </div>
              <p
                className={`text-2xl font-bold leading-none tabular-nums ${kpi.valCls}`}
              >
                {kpi.value}
              </p>
              <p className="text-xs text-slate-400 mt-1.5">{kpi.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Stock Alert Banner ─────────────────────────────────────────────────── */}
      {alertCount > 0 && !loading && (
        <div
          className="flex items-center gap-4 px-6 py-4
          bg-red-50 border border-red-200 rounded-xl
          border-l-4 border-l-red-500"
        >
          <div
            className="w-8 h-8 rounded-lg bg-red-100 border border-red-200
            flex items-center justify-center shrink-0"
          >
            <ShieldAlert className="w-4 h-4 text-red-600" strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-red-800 leading-snug">
              {alertCount} produit{alertCount > 1 ? "s" : ""} en alerte de stock
            </p>
            <p className="text-xs text-red-600 mt-0.5 font-normal">
              Approvisionnement requis — vérifiez vos niveaux d'inventaire.
            </p>
          </div>
          {/* <button
            onClick={() => setTab("products")}
            className="shrink-0 flex items-center gap-1 text-xs font-semibold text-red-700
              hover:text-red-900 transition-colors px-3 py-1.5 rounded-lg
              hover:bg-red-100 border border-transparent hover:border-red-200"
          >
            Voir <ArrowUpRight className="w-3.5 h-3.5" />
          </button> */}
        </div>
      )}

      {/* ── Toolbar ────────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 inset-y-0 my-auto w-4 h-4 text-slate-400 pointer-events-none" />{" "}
          <input
            type="text"
            placeholder={`Rechercher un ${tab === "products" ? "produit" : "service"}…`}
            className="w-full pl-10 pr-8 h-10 border border-slate-200 rounded-xl text-sm
              text-slate-800 placeholder:text-slate-400 bg-white
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200/50
              transition-colors duration-150"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded
                flex items-center justify-center text-slate-400 hover:text-slate-600
                hover:bg-slate-100 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex bg-slate-100 border border-slate-200 rounded-xl p-1 gap-0.5 shrink-0">
          {(["products", "services"] as TabType[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex items-center gap-1.5 px-4 py-1 rounded-lg text-sm font-medium
                transition-all duration-150
                ${
                  tab === t
                    ? "bg-white text-blue-700 shadow-sm ring-1 ring-slate-200/60"
                    : "text-slate-500 hover:text-slate-700 hover:bg-white/60"
                }`}
            >
              {t === "products" ? (
                <Package className="w-3.5 h-3.5" />
              ) : (
                <Wrench className="w-3.5 h-3.5" />
              )}
              {t === "products" ? "Produits" : "Services"}
              <span
                className={`px-1.5 py-px rounded text-[10px] font-semibold
                ${tab === t ? "bg-blue-100 text-blue-600" : "bg-slate-200 text-slate-500"}`}
              >
                {t === "products" ? products.length : services.length}
              </span>
            </button>
          ))}
        </div>

        {/* Refresh */}
        <button
          onClick={fetchAll}
          className="h-10 w-10 rounded-xl border border-slate-200 bg-white
            hover:bg-slate-50 flex items-center justify-center
            text-slate-400 hover:text-slate-600 transition-colors shrink-0"
          title="Actualiser"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {/* ── Error state ────────────────────────────────────────────────────────── */}
      {error && (
        <div className="flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-xl">
          <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
          <span className="text-sm text-red-700 flex-1">{error}</span>
          <button
            onClick={fetchAll}
            className="text-xs font-semibold text-red-600 hover:text-red-800 underline underline-offset-2 shrink-0"
          >
            Réessayer
          </button>
        </div>
      )}

      {/* ── Products Grid ──────────────────────────────────────────────────────── */}
      {tab === "products" &&
        (loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-[272px] bg-slate-100 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-12
  border border-dashed border-slate-200 rounded-xl bg-white"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
              <Package className="w-6 h-6 text-slate-300" strokeWidth={1.5} />
            </div>

            <p className="font-semibold text-slate-700">
              Aucun produit{searchQuery ? ` pour "${searchQuery}"` : ""}
            </p>

            <p className="text-sm text-slate-400 mt-1">
              {searchQuery
                ? "Essayez d'autres termes de recherche"
                : "Créez votre premier produit pour commencer"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onEdit={() => openEdit(p.id, "product")}
                onDelete={() =>
                  setDeleteConfirm({ id: p.id, type: "product", name: p.name })
                }
                onStock={() => {
                  setStockProductId(p.id);
                  setStockDelta("");
                  setStockReason("inventaire");
                  setStockModalOpen(true);
                }}
              />
            ))}
          </div>
        ))}

      {/* ── Services Table ─────────────────────────────────────────────────────── */}
      {tab === "services" &&
        (loading ? (
          <div className="space-y-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-[60px] bg-slate-100 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : services.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-12
  border border-dashed border-slate-200 rounded-xl bg-white"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
              <Wrench className="w-6 h-6 text-slate-300" strokeWidth={1.5} />
            </div>

            <p className="font-semibold text-slate-700">
              Aucun service{searchQuery ? ` pour "${searchQuery}"` : ""}
            </p>

            <p className="text-sm text-slate-400 mt-1">
              {searchQuery
                ? "Essayez d'autres termes de recherche"
                : "Créez votre premier service pour commencer"}
            </p>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Service
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden sm:table-cell">
                    Catégorie
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Tarif
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden md:table-cell">
                    Durée
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden sm:table-cell">
                    Statut
                  </th>
                  <th className="w-24" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {services.map((s) => {
                  const hr = s.service?.hourlyRate
                    ? Number(s.service.hourlyRate)
                    : null;
                  const fr = s.service?.fixedRate
                    ? Number(s.service.fixedRate)
                    : null;
                  const dur = s.service?.estimatedDuration;
                  return (
                    <tr
                      key={s.id}
                      className="hover:bg-slate-50/80 transition-colors group"
                    >
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200
                            flex items-center justify-center shrink-0"
                          >
                            <Wrench
                              className="w-3.5 h-3.5 text-slate-500"
                              strokeWidth={1.8}
                            />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-800">
                              {s.name}
                            </p>
                            {s.description && (
                              <p className="text-xs text-slate-400 truncate max-w-[180px] mt-0.5">
                                {s.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 hidden sm:table-cell">
                        {s.category ? (
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5
                              bg-slate-50 border border-slate-200 rounded-md
                              text-[11px] font-medium text-slate-600"
                          >
                            <Tag className="w-2.5 h-2.5 text-slate-400" />{" "}
                            {s.category}
                          </span>
                        ) : (
                          <span className="text-slate-300 text-sm">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3.5">
                        <div>
                          {hr && hr > 0 && (
                            <p className="text-sm font-semibold text-slate-800 tabular-nums">
                              {fmt(hr)}
                              <span className="text-xs font-normal text-slate-400 ml-1">
                                MAD/h
                              </span>
                            </p>
                          )}
                          {fr && fr > 0 && (
                            <p
                              className={`tabular-nums ${hr ? "text-xs text-slate-500 mt-0.5" : "text-sm font-semibold text-slate-800"}`}
                            >
                              {fmt(fr)}
                              <span className="text-xs font-normal text-slate-400 ml-1">
                                MAD forfait
                              </span>
                            </p>
                          )}
                          {!hr && !fr && (
                            <span className="text-slate-300 text-sm">—</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 hidden md:table-cell">
                        {dur ? (
                          <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {dur >= 60
                              ? `${Math.floor(dur / 60)}h${dur % 60 > 0 ? `${dur % 60}m` : ""}`
                              : `${dur} min`}
                          </span>
                        ) : (
                          <span className="text-slate-300 text-sm">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 hidden sm:table-cell">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1
                          rounded-full text-[11px] font-medium border
                          ${
                            s.isActive
                              ? "bg-green-50 text-green-700 border-green-200"
                              : "bg-slate-50 text-slate-500 border-slate-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0
                            ${s.isActive ? "bg-green-500" : "bg-slate-300"}`}
                          />
                          {s.isActive ? "Actif" : "Inactif"}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => openEdit(s.id, "service")}
                            title="Modifier"
                            className="w-7 h-7 rounded-lg border border-slate-200 text-slate-400
                              hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600
                              flex items-center justify-center transition-all"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() =>
                              setDeleteConfirm({
                                id: s.id,
                                type: "service",
                                name: s.name,
                              })
                            }
                            title="Supprimer"
                            className="w-7 h-7 rounded-lg border border-slate-200 text-slate-400
                              hover:border-red-200 hover:bg-red-50 hover:text-red-500
                              flex items-center justify-center transition-all"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}

      {/* ── Create / Edit Modal ────────────────────────────────────────────────── */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${modalMode === "create" ? "Nouveau" : "Modifier"} ${
          modalItemType === "product" ? "produit" : "service"
        }`}
      >
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Content */}
            {modalItemType === "product" ? (
              <ProductForm form={productForm} onChange={setProductForm} />
            ) : (
              <ServiceForm form={serviceForm} onChange={setServiceForm} />
            )}

            {/* Error Message */}
            {formError && (
              <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <p className="text-sm text-red-700 leading-relaxed">
                  {formError}
                </p>
              </div>
            )}

            {/* Footer Actions */}
            <div className="flex gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 h-11 rounded-xl border border-slate-200 bg-white
            text-sm font-medium text-slate-600
            hover:bg-slate-50 hover:border-slate-300
            transition-all duration-200"
              >
                Annuler
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="flex-1 h-11 rounded-xl border border-slate-200 bg-white
            text-sm font-medium text-slate-600
            hover:bg-slate-50 hover:border-slate-300
            transition-all duration-200"
              >
                {submitting && <RefreshCw className="w-4 h-4 animate-spin" />}
                {modalMode === "create" ? "Créer" : "Enregistrer"}
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* ── Stock Adjustment Modal ─────────────────────────────────────────────── */}
      <Modal
  isOpen={stockModalOpen}
  onClose={() => setStockModalOpen(false)}
  title="Ajustement de stock"
>
  <div className="px-4 sm:px-6 pb-6 space-y-5">
    {/* Product context */}
    {stockProduct && (
      <div
        className="flex items-center gap-3 p-4
        bg-slate-50 border border-slate-200 rounded-xl"
      >
        <div
          className="w-10 h-10 rounded-lg bg-white border border-slate-200
          flex items-center justify-center shrink-0"
        >
          <Package className="w-4 h-4 text-slate-600" strokeWidth={1.8} />
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-slate-800 text-sm truncate">
            {stockProduct.name}
          </p>

          <div className="flex items-center gap-2 mt-1">
            <StockBadge status={stockStatus(stockProduct)} />

            <span className="text-xs text-slate-400">
              {stockProduct.product.stockQuantity} unités · seuil{" "}
              {stockProduct.product.alertThreshold}
            </span>
          </div>
        </div>
      </div>
    )}

    <form onSubmit={handleUpdateStock} className="space-y-5">
      {/* Quantity */}
      <div>
        <label
          className="block text-xs font-semibold uppercase tracking-wide
          text-slate-500 mb-3"
        >
          Ajustement de quantité
        </label>

        <div className="flex gap-2 items-center">
          <button
            type="button"
            onClick={() =>
              setStockDelta((v) => String((parseInt(v, 10) || 0) - 1))
            }
            className="w-10 h-10 rounded-xl border border-slate-200 bg-white
              text-slate-600 font-bold text-lg flex items-center justify-center
              hover:bg-slate-50 transition-colors"
          >
            −
          </button>

          <input
            type="number"
            required
            value={stockDelta}
            onChange={(e) => setStockDelta(e.target.value)}
            placeholder="ex: +20 ou −5"
            className="flex-1 h-10 border border-slate-200 rounded-xl px-3 text-center
              text-base font-bold text-slate-800 bg-white
              focus:outline-none focus:border-blue-500 focus:ring-2
              focus:ring-blue-200/50 transition-colors"
          />

          <button
            type="button"
            onClick={() =>
              setStockDelta((v) => String((parseInt(v, 10) || 0) + 1))
            }
            className="w-10 h-10 rounded-xl border border-slate-200 bg-white
              text-slate-600 font-bold text-lg flex items-center justify-center
              hover:bg-slate-50 transition-colors"
          >
            +
          </button>
        </div>

        {/* Live preview */}
        {stockDelta && stockProduct && (
          <div
            className={`mt-3 flex items-center gap-2.5 px-3.5 py-2.5
            rounded-xl text-sm font-medium border
            ${
              newStockQty <= 0
                ? "bg-red-50 border-red-200 text-red-700"
                : newStockQty <= stockProduct.product.alertThreshold
                  ? "bg-orange-50 border-orange-200 text-orange-700"
                  : "bg-green-50 border-green-200 text-green-700"
            }`}
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" />

            <span>
              Nouveau stock :
              <strong className="tabular-nums ml-1">
                {newStockQty} unités
              </strong>
            </span>
          </div>
        )}
      </div>

      {/* Reason */}
      <div>
  <label
    className="block text-xs font-semibold uppercase tracking-wide
    text-slate-500 mb-4"
  >
    Motif de l'ajustement
  </label>

  <div className="grid grid-cols-2 gap-3">
    {STOCK_REASONS.map((r) => (
      <label
        key={r.value}
        className={`flex items-center gap-3 p-4 rounded-xl border-2
          cursor-pointer transition-colors duration-150 select-none
          ${
            stockReason === r.value
              ? "border-blue-500 bg-blue-50"
              : "border-slate-200 hover:border-slate-300 bg-white"
          }`}
      >
        <input
          type="radio"
          name="stockReason"
          value={r.value}
          checked={stockReason === r.value}
          onChange={() => setStockReason(r.value)}
          className="sr-only"
        />

        <span className="text-base">{r.icon}</span>

        <span
          className={`text-sm font-medium
          ${
            stockReason === r.value
              ? "text-blue-700"
              : "text-slate-600"
          }`}
        >
          {r.label}
        </span>
      </label>
    ))}
  </div>
</div>

      {/* Actions */}
      <div className="flex gap-3 pt-2 pb-4">
        <button
          type="button"
          onClick={() => setStockModalOpen(false)}
          className="flex-1 h-10 rounded-xl border border-slate-200 bg-white
            text-sm font-medium text-slate-600
            hover:bg-slate-50 hover:border-slate-300 transition-colors"
        >
          Annuler
        </button>

        <button
          type="submit"
          className="flex-1 h-10 rounded-xl border border-slate-200 bg-white
            text-sm font-medium text-slate-600
            hover:bg-slate-50 hover:border-slate-300 transition-colors"
        >
          Confirmer
        </button>
      </div>
    </form>
  </div>
</Modal>

      {/* ── Delete Confirmation Modal ──────────────────────────────────────────── */}
      <Modal
  isOpen={!!deleteConfirm}
  onClose={() => setDeleteConfirm(null)}
  title="Confirmer la suppression"
>
  <div className="p-6 space-y-6">

    {/* Warning Block */}
    <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-2xl">
      
      <div
        className="w-10 h-10 rounded-xl bg-red-100 border border-red-200
        flex items-center justify-center shrink-0"
      >
        <Trash2 className="w-4 h-4 text-red-600 " strokeWidth={1.8} />
      </div>

      <div className="space-y-2">
        <p className="font-semibold text-slate-800 text-sm">
          Supprimer «{deleteConfirm?.name}» ?
        </p>

        <p className="text-sm text-slate-500 leading-relaxed">
          Cette action est irréversible. L'élément sera retiré définitivement
          du catalogue et ne pourra pas être restauré.
        </p>
      </div>
    </div>

    {/* Footer */}
    <div className="flex gap-3 pt-4 border-t border-slate-100">
      
      <button
        onClick={() => setDeleteConfirm(null)}
        className="flex-1 h-11 rounded-xl border border-slate-200 bg-white
          text-sm font-medium text-slate-600
          hover:bg-slate-50 hover:border-slate-300
          transition-all duration-200"
      >
        Annuler
      </button>

      <button
        onClick={handleDelete}
        className="flex-1 h-11 rounded-xl border border-slate-200 bg-white
          text-sm font-medium text-slate-600
          hover:bg-slate-50 hover:border-slate-300
          transition-all duration-200"
      >
        Supprimer définitivement
      </button>

    </div>
  </div>
</Modal>
    </div>
  );
}
