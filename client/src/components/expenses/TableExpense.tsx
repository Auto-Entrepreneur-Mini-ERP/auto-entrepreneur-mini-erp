/* eslint-disable @typescript-eslint/no-explicit-any */
// client/src/components/expenses/TableExpense.tsx

import {
  AlertTriangle,
  Edit,
  Eye,
  FileDown,
  RefreshCw,
  Search,
  Trash2,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Modal } from "../ui/modal";
import { expenseApi } from "../../api/expenseApi";
import type {
  CreateExpensePayload,
  Expense,
  ExpenseCategory,
  ExpenseFilters,
  ExpensePaymentMethod,
  UpdateExpensePayload,
} from "../../types/expense.types";

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORIES: { id: ExpenseCategory; label: string; icon: string }[] = [
  { id: "FOURNITURES", label: "Fournitures", icon: "📦" },
  { id: "TRANSPORT", label: "Transport", icon: "🚗" },
  { id: "COMMUNICATION", label: "Communication", icon: "📱" },
  { id: "ABONNEMENT", label: "Abonnement", icon: "📅" },
  { id: "FORMATION", label: "Formation", icon: "🎓" },
  { id: "LOGICIEL", label: "Logiciel", icon: "💻" },
  { id: "EQUIPEMENT", label: "Équipement", icon: "🛠️" },
  { id: "HÉBERGEMENT", label: "Hébergement", icon: "🏨" },
  { id: "REPAS", label: "Repas", icon: "🍽️" },
  { id: "LOYER", label: "Loyer / Bureau", icon: "🏠" },
  { id: "MATERIEL", label: "Matériel", icon: "🔧" },
  { id: "MAINTENANCE", label: "Maintenance", icon: "🧰" },
  { id: "PUBLICITE", label: "Publicité", icon: "📢" },
  { id: "ASSURANCE", label: "Assurance", icon: "🛡️" },
  { id: "AUTRE", label: "Autre", icon: "📌" },
];

const PAYMENT_METHODS: { id: ExpensePaymentMethod; label: string }[] = [
  { id: "CASH", label: "Espèces" },
  { id: "CHECK", label: "Chèque" },
  { id: "BANK_TRANSFER", label: "Virement bancaire" },
  { id: "CREDIT_CARD", label: "Carte bancaire" },
  { id: "MOBILE_PAYMENT", label: "Paiement mobile" },
  { id: "OTHER", label: "Autre" },
];

const CATEGORY_COLORS: Record<string, string> = {
  FOURNITURES: "bg-indigo-100 text-indigo-700",
  TRANSPORT: "bg-amber-100 text-amber-700",
  COMMUNICATION: "bg-emerald-100 text-emerald-700",
  FORMATION: "bg-blue-100 text-blue-700",
  LOGICIEL: "bg-violet-100 text-violet-700",
  REPAS: "bg-red-100 text-red-700",
  LOYER: "bg-pink-100 text-pink-700",
  MATERIEL: "bg-teal-100 text-teal-700",
  PUBLICITE: "bg-orange-100 text-orange-700",
  ASSURANCE: "bg-slate-100 text-slate-600",
  AUTRE: "bg-gray-100 text-gray-600",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmtMAD = (n: number) =>
  n.toLocaleString("fr-MA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + " MAD";

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

// ─── Form state ───────────────────────────────────────────────────────────────

interface FormState {
  category: ExpenseCategory;
  description: string;
  amount: string;
  date: string;
  supplier: string;
  paymentMethod: ExpensePaymentMethod;
  isDeductible: boolean;
}

const emptyForm = (): FormState => ({
  category: "AUTRE",
  description: "",
  amount: "",
  date: new Date().toISOString().split("T")[0],
  supplier: "",
  paymentMethod: "BANK_TRANSFER",
  isDeductible: true,
});

// ─── Main component ───────────────────────────────────────────────────────────

export default function TableExpense() {
  // ── Data ────────────────────────────────────────────────────────────────────
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ── Filters ─────────────────────────────────────────────────────────────────
  const [catFilter, setCatFilter] = useState<string>("");
  const [deductFilter, setDeductFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  // ── Modal state ─────────────────────────────────────────────────────────────
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerExpense, setViewerExpense] = useState<Expense | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<Expense | null>(null);

  // ── Form ────────────────────────────────────────────────────────────────────
  const [form, setForm] = useState<FormState>(emptyForm());
  const [file, setFile] = useState<File | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // ── Fetch ────────────────────────────────────────────────────────────────────
  const fetchExpenses = useCallback(
    async (silent = false) => {
      if (!silent) setLoading(true);
      setError(null);
      try {
        const filters: ExpenseFilters = {
          category: (catFilter as ExpenseCategory) || undefined,
          isDeductible:
            deductFilter === "true"
              ? true
              : deductFilter === "false"
                ? false
                : "",
          page,
          limit: 10,
        };
        const res = await expenseApi.getAll(filters);
        const list: Expense[] = res.data ?? [];
        const filtered = searchQuery
          ? list.filter(
              (e) =>
                e.description
                  ?.toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                e.supplier?.toLowerCase().includes(searchQuery.toLowerCase()),
            )
          : list;
        setExpenses(filtered);
        setTotal(res.total ?? 0);
        setTotalPages(res.totalPages ?? 1);
      } catch {
        setError("Impossible de charger les dépenses.");
      } finally {
        if (!silent) setLoading(false);
      }
    },
    [catFilter, deductFilter, page, searchQuery],
  );

  // Parallel silent refresh after mutations — no loading flash
  const refreshAll = useCallback(() => {
    fetchExpenses(true);
  }, [fetchExpenses]);

  useEffect(() => {
    const t = setTimeout(() => fetchExpenses(false), 300);
    return () => clearTimeout(t);
  }, [fetchExpenses]);


  // ── Open edit modal ──────────────────────────────────────────────────────────
  const openEdit = (expense: Expense) => {
    setEditingExpense(expense);
    setForm({
      category: expense.category,
      description: expense.description ?? "",
      amount: String(expense.amount),
      date: expense.date.split("T")[0],
      supplier: expense.supplier ?? "",
      paymentMethod: expense.paymentMethod,
      isDeductible: expense.isDeductible,
    });
    setFile(null);
    setFormError(null);
    setEditModalOpen(true);
  };

  // ── Validate ─────────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    if (!form.description.trim()) {
      setFormError("La description est requise.");
      return false;
    }
    if (
      !form.amount ||
      isNaN(Number(form.amount)) ||
      Number(form.amount) <= 0
    ) {
      setFormError("Le montant doit être supérieur à 0.");
      return false;
    }
    if (!form.date) {
      setFormError("La date est requise.");
      return false;
    }
    return true;
  };

  // ── Submit create ────────────────────────────────────────────────────────────
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!validate()) return;
    setSaving(true);
    try {
      const payload: CreateExpensePayload = {
        category: form.category,
        description: form.description || undefined,
        amount: Number(form.amount),
        date: form.date,
        supplier: form.supplier || undefined,
        paymentMethod: form.paymentMethod,
        isDeductible: form.isDeductible,
        receipt: file ?? undefined,
      };
      await expenseApi.create(payload);
      setCreateModalOpen(false);
      setForm(emptyForm());
      setFile(null);
      refreshAll();
    } catch (err: any) {
      setFormError(
        err?.response?.data?.error ?? err.message ?? "Une erreur est survenue.",
      );
    } finally {
      setSaving(false);
    }
  };

  // ── Submit update ────────────────────────────────────────────────────────────
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!validate() || !editingExpense) return;
    setSaving(true);
    try {
      const payload: UpdateExpensePayload = {
        category: form.category,
        description: form.description || undefined,
        amount: Number(form.amount),
        date: form.date,
        supplier: form.supplier || undefined,
        paymentMethod: form.paymentMethod,
        isDeductible: form.isDeductible,
        receipt: file ?? undefined,
      };
      await expenseApi.update(editingExpense.id, payload);
      setEditModalOpen(false);
      setEditingExpense(null);
      refreshAll();
    } catch (err: any) {
      setFormError(
        err?.response?.data?.error ?? err.message ?? "Une erreur est survenue.",
      );
    } finally {
      setSaving(false);
    }
  };

  // ── Delete ───────────────────────────────────────────────────────────────────
  const handleDelete = async () => {
    if (!deleteConfirm) return;
    try {
      await expenseApi.remove(deleteConfirm.id);
      setDeleteConfirm(null);
      refreshAll();
    } catch {
      setError("Impossible de supprimer cette dépense.");
    }
  };

  // ── Export ───────────────────────────────────────────────────────────────────
  const handleExport = async () => {
    try {
      const blob = await expenseApi.exportExcel({
        category: (catFilter as ExpenseCategory) || undefined,
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `depenses-${new Date().toISOString().split("T")[0]}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setError("Erreur lors de l'export.");
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <div className="w-full space-y-6 mt-4">
      {/* ── Stats ── */}
      {/* {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total dépenses", value: fmtMAD(stats.totalAmount), color: "text-[#2D3194]" },
            { label: "Déductibles", value: fmtMAD(stats.deductibleAmount), color: "text-green-600" },
            { label: "Non déductibles", value: fmtMAD(stats.nonDeductibleAmount), color: "text-red-600" },
            { label: "Nombre", value: String(stats.count), color: "text-amber-600" },
          ].map((c) => (
            <div key={c.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-gray-500 text-sm mb-1">{c.label}</p>
              <p className={`text-lg font-bold ${c.color}`}>{c.value}</p>
            </div>
          ))}
        </div>
      )} */}

      {/* ── Toolbar ── */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          {/* <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span> */}
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher une dépense..."
            className="pl-10 h-11 border-gray-200 rounded-xl"
          />
        </div>

        <select
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
          className="h-11 px-3 border border-gray-200 rounded-xl text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2D3194]"
        >
          <option value="">Toutes catégories</option>
          {CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.icon} {c.label}
            </option>
          ))}
        </select>

        <select
          value={deductFilter}
          onChange={(e) => setDeductFilter(e.target.value)}
          className="h-11 px-3 border border-gray-200 rounded-xl text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2D3194]"
        >
          <option value="">Déductibilité</option>
          <option value="true">✅ Déductible</option>
          <option value="false">❌ Non déductible</option>
        </select>

        <button
          onClick={() => {
            fetchExpenses();
          }}
          className="h-11 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-600"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          <span className="hidden sm:inline text-sm">Actualiser</span>
        </button>

        <button
          onClick={handleExport}
          className="h-11 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-600"
        >
          <FileDown className="w-4 h-4" />
          <span className="hidden sm:inline text-sm">Export Excel</span>
        </button>

        <Button
          className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-11 px-5 rounded-xl"
          onClick={() => {
            setForm(emptyForm());
            setFile(null);
            setFormError(null);
            setCreateModalOpen(true);
          }}
        >
          + Dépense
        </Button>
      </div>

      {/* ── Error ── */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center gap-2 text-sm">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          {error}
          <button
            onClick={() => setError(null)}
            className="ml-auto underline text-xs"
          >
            Fermer
          </button>
        </div>
      )}

      {/* ── Table ── */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16 text-gray-400">
            <RefreshCw className="w-5 h-5 animate-spin mr-2" />
            Chargement...
          </div>
        ) : expenses.length === 0 ? (
          <div className="py-16 text-center text-gray-400">
            <p className="text-4xl mb-3">💸</p>
            <p className="font-medium">Aucune dépense trouvée</p>
            <p className="text-sm mt-1">
              {searchQuery || catFilter
                ? "Essayez d'autres filtres."
                : "Ajoutez votre première dépense."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                    Description
                  </th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                    Catégorie
                  </th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                    Montant
                  </th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                    Déductible
                  </th>
                  <th className="text-left px-5 py-4 text-sm font-semibold text-gray-700">
                    Justif.
                  </th>
                  <th className="text-right px-5 py-4 text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => {
                  const cat = CATEGORIES.find((c) => c.id === expense.category);
                  const colorClass =
                    CATEGORY_COLORS[expense.category] ??
                    "bg-gray-100 text-gray-600";
                  return (
                    <tr
                      key={expense.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-5 py-4">
                        <p className="font-medium text-gray-900 text-sm">
                          {expense.description ?? (
                            <span className="text-gray-300">—</span>
                          )}
                        </p>
                        {expense.supplier && (
                          <p className="text-xs text-gray-400">
                            {expense.supplier}
                          </p>
                        )}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${colorClass}`}
                        >
                          {cat?.icon} {cat?.label ?? expense.category}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-600">
                        {fmtDate(expense.date)}
                      </td>

                      <td className="px-5 py-4 font-bold text-gray-900 text-sm font-mono">
                        {fmtMAD(expense.amount)}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            expense.isDeductible
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {expense.isDeductible ? "✅ Oui" : "❌ Non"}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm">
                        {expense.receiptUrl ? (
                          <button
                            onClick={() => {
                              setViewerExpense(expense);
                              setViewerOpen(true);
                            }}
                            className="flex items-center gap-1 text-[#2D3194] hover:underline text-xs"
                          >
                            <Eye className="w-3 h-3" /> Voir
                          </button>
                        ) : (
                          <span className="text-gray-300 text-xs">—</span>
                        )}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openEdit(expense)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(expense)}
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
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

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-1">
          <p className="text-sm text-gray-400">
            Page {page} / {totalPages} — {total} dépense{total > 1 ? "s" : ""}
          </p>
          <div className="flex gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Préc.
            </button>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Suiv. →
            </button>
          </div>
        </div>
      )}

      {/* ── Create modal ── */}
      <Modal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        title="Ajouter une dépense"
      >
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleCreate} className="space-y-4">
            <ExpenseForm
              form={form}
              onChange={setForm}
              file={file}
              onFileChange={setFile}
              fileInputRef={fileInputRef}
            />
            {formError && <FormErrorBanner message={formError} />}
            <FormActions
              onCancel={() => setCreateModalOpen(false)}
              saving={saving}
              label="Ajouter"
            />
          </form>
        </div>
      </Modal>

      {/* ── Edit modal ── */}
      <Modal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        title="Modifier la dépense"
      >
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleUpdate} className="space-y-4">
            <ExpenseForm
              form={form}
              onChange={setForm}
              file={file}
              onFileChange={setFile}
              fileInputRef={fileInputRef}
              existingReceiptUrl={editingExpense?.receiptUrl ?? null}
            />
            {formError && <FormErrorBanner message={formError} />}
            <FormActions
              onCancel={() => setEditModalOpen(false)}
              saving={saving}
              label="Enregistrer"
            />
          </form>
        </div>
      </Modal>

      {/* ── Receipt viewer ── */}
      {viewerExpense && (
        <Modal
          isOpen={viewerOpen}
          onClose={() => setViewerOpen(false)}
          title="Justificatif"
        >
          <div className="p-6">
            <ReceiptViewer receiptUrl={viewerExpense.receiptUrl} />
            <div className="flex justify-end mt-4">
              <Button
                onClick={() => setViewerOpen(false)}
                className="bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 h-11 px-5 rounded-xl"
              >
                Fermer
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* ── Delete confirm ── */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-4 w-80 h-40 ">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-9 bg-red-100 rounded-xl flex items-center justify-center">
                <Trash2 className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  Confirmer la suppression
                </h3>
                <p className="text-xs text-gray-500">
                  Cette action est irréversible
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4">
              Supprimer{" "}
              <strong>
                «{deleteConfirm.description ?? deleteConfirm.category}»
              </strong>{" "}
              ?
              {deleteConfirm.receiptUrl && (
                <span className="block text-xs text-orange-600 mt-1">
                  ⚠ Le justificatif sera également supprimé.
                </span>
              )}
            </p>

            <div className="flex gap-2">
              <Button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 h-10 rounded-xl text-sm"
              >
                Annuler
              </Button>
              <Button
                onClick={handleDelete}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white h-10 rounded-xl text-sm"
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

// ─── Sub-components ───────────────────────────────────────────────────────────

function ExpenseForm({
  form,
  onChange,
  file,
  onFileChange,
  fileInputRef,
  existingReceiptUrl,
}: {
  form: FormState;
  onChange: (f: FormState) => void;
  file: File | null;
  onFileChange: (f: File | null) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  existingReceiptUrl?: string | null;
}) {
  const set =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      onChange({
        ...form,
        [key]:
          e.target.type === "checkbox"
            ? (e.target as HTMLInputElement).checked
            : e.target.value,
      });
    };

  return (
    <>
      <FieldWrap label="Description" required>
        <Input
          value={form.description}
          onChange={set("description")}
          required
          placeholder="Ex: Abonnement Adobe Cloud"
          className="h-11 border-gray-200 rounded-xl"
        />
      </FieldWrap>

      <div className="grid grid-cols-2 gap-4">
        <FieldWrap label="Catégorie" required>
          <select
            value={form.category}
            onChange={set("category")}
            className="w-full h-11 px-3 border border-gray-200 rounded-xl text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2D3194]"
          >
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.icon} {c.label}
              </option>
            ))}
          </select>
        </FieldWrap>
        <FieldWrap label="Montant (MAD)" required>
          <Input
            type="number"
            value={form.amount}
            onChange={set("amount")}
            required
            placeholder="0.00"
            min={0.01}
            step={0.01}
            className="h-11 border-gray-200 rounded-xl"
          />
        </FieldWrap>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FieldWrap label="Date" required>
          <Input
            type="date"
            value={form.date}
            onChange={set("date")}
            required
            className="h-11 border-gray-200 rounded-xl"
          />
        </FieldWrap>
        <FieldWrap label="Moyen de paiement">
          <select
            value={form.paymentMethod}
            onChange={set("paymentMethod")}
            className="w-full h-11 px-3 border border-gray-200 rounded-xl text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2D3194]"
          >
            {PAYMENT_METHODS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </FieldWrap>
      </div>

      <FieldWrap label="Fournisseur">
        <Input
          value={form.supplier}
          onChange={set("supplier")}
          placeholder="Nom du fournisseur (optionnel)"
          className="h-11 border-gray-200 rounded-xl"
        />
      </FieldWrap>

      <div className="flex items-center gap-3 py-1">
        <input
          id="deductible"
          type="checkbox"
          checked={form.isDeductible}
          onChange={(e) =>
            onChange({ ...form, isDeductible: e.target.checked })
          }
          className="w-4 h-4 accent-[#2D3194] rounded"
        />
        <Label htmlFor="deductible" className="cursor-pointer select-none">
          Déductible fiscalement
        </Label>
      </div>

      <FieldWrap label="Justificatif (PDF / image)">
        {existingReceiptUrl && !file && (
          <p className="text-xs text-gray-500 mb-1">
            📎 Fichier existant :{" "}
            <a
              href={existingReceiptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D3194] underline"
            >
              Voir
            </a>{" "}
            — Sélectionnez un nouveau fichier pour le remplacer.
          </p>
        )}
        {file ? (
          <div className="flex items-center gap-2 p-3 rounded-xl border border-green-200 bg-green-50">
            <span className="text-xl">
              {file.name.endsWith(".pdf") ? "📄" : "🖼️"}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">
                {file.name}
              </p>
              <p className="text-xs text-gray-400">
                {(file.size / 1024).toFixed(1)} Ko
              </p>
            </div>
            <button
              type="button"
              onClick={() => onFileChange(null)}
              className="text-xs text-red-500 hover:text-red-700 font-semibold px-2 py-1 rounded-lg hover:bg-red-50"
            >
              Retirer
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full border-2 border-dashed border-gray-200 hover:border-[#2D3194] rounded-xl p-4 text-center text-sm text-gray-400 hover:text-gray-600 transition-all"
          >
            📎 Cliquez pour joindre un fichier (PDF, JPG, PNG — max 10 Mo)
          </button>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onFileChange(f);
          }}
        />
      </FieldWrap>
    </>
  );
}

function FieldWrap({
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

function FormErrorBanner({ message }: { message: string }) {
  return (
    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-start gap-2">
      <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
      {message}
    </div>
  );
}

function FormActions({
  onCancel,
  saving,
  label,
}: {
  onCancel: () => void;
  saving: boolean;
  label: string;
}) {
  return (
    <div className="flex gap-3 pt-4 border-t border-gray-100">
      <Button
        type="button"
        onClick={onCancel}
        disabled={saving}
        className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 h-12 rounded-xl font-medium"
      >
        Annuler
      </Button>
      <Button
        type="submit"
        disabled={saving}
        className="flex-1 bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 rounded-xl font-medium"
      >
        {saving && <RefreshCw className="w-4 h-4 animate-spin mr-2" />}
        {saving ? "Enregistrement..." : label}
      </Button>
    </div>
  );
}

function ReceiptViewer({ receiptUrl }: { receiptUrl: string | null }) {
  if (!receiptUrl)
    return (
      <p className="text-gray-400 text-center py-8">Aucun justificatif.</p>
    );

  const filename = receiptUrl.split("/").pop() ?? "";
  const isPdf = filename.toLowerCase().endsWith(".pdf");
  const isImage = /\.(jpg|jpeg|png|webp)$/i.test(filename);
  const fullUrl = receiptUrl.startsWith("http")
    ? receiptUrl
    : `${import.meta.env.VITE_API_URL ?? "http://localhost:3001"}/${receiptUrl}`;

  return (
    <div className="space-y-3">
      {isImage && (
        <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center min-h-[200px]">
          <img
            src={fullUrl}
            alt={filename}
            className="max-w-full max-h-[450px] object-contain"
          />
        </div>
      )}
      {isPdf && (
        <iframe
          src={fullUrl}
          title={filename}
          className="w-full h-[450px] rounded-xl border border-gray-100"
        />
      )}
      {!isImage && !isPdf && (
        <div className="text-center py-10 text-gray-400">
          <p className="text-4xl mb-2">📎</p>
          <p className="text-sm">Aperçu non disponible.</p>
        </div>
      )}
      <a
        href={fullUrl}
        download={filename}
        className="flex items-center justify-center gap-2 w-full py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
      >
        ⬇ Télécharger
      </a>
    </div>
  );
}
