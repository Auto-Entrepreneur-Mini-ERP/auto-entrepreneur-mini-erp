import {
  Building,
  Calendar,
  Download,
  CreditCard,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { useContributions } from "../../hooks/useContribution";
import { useCurrentContribution } from "../../hooks/useContribution";
// import type { Contribution } from "../../types/contribution.types";
import { PaymentStatus } from "../../types/contribution.types";

function formatAmount(amount: number) {
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 0,
  }).format(amount);
}

function formatDate(date?: Date) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("fr-FR").format(new Date(date));
}

  

function StatusBadge({ status }: { status: PaymentStatus }) {
  const config: Record<
    PaymentStatus,
    { label: string; icon: React.ReactNode; className: string }
  > = {
    PAID: {
      label: "Payé",
      icon: <CheckCircle2 className="w-3 h-3" />,
      className: "bg-green-100 text-green-700",
    },
    PENDING: {
      label: "En attente",
      icon: <Clock className="w-3 h-3" />,
      className: "bg-yellow-100 text-yellow-700",
    },
    OVERDUE: {
      label: "En retard",
      icon: <AlertCircle className="w-3 h-3" />,
      className: "bg-red-100 text-red-700",
    },
    CANCELLED: {
      label: "Annulé",
      icon: <AlertCircle className="w-3 h-3" />,
      className: "bg-gray-100 text-gray-500",
    },
  };

  const { label, icon, className } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${className}`}
    >
      {icon}
      {label}
    </span>
  );
}

export function CNSSPaymentView() {
  const { contributions, isLoading, error, refetch } = useContributions({});
  const { current } = useCurrentContribution();

  // ── Loading State ─────────────────────────────
  if (isLoading) {
    return (
      <div className="py-8 text-center text-gray-500">
        Chargement des cotisations...
      </div>
    );
  }

  // ── Error State ───────────────────────────────
  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <Button onClick={refetch}>Réessayer</Button>
      </div>
    );
  }

  // ── Empty State ───────────────────────────────
  if (!contributions.length) {
    return (
      <div className="py-8 text-center text-gray-500">
        Aucune cotisation trouvée.
      </div>
    );
  }



  if (isLoading)
    return (
      <div className="bg-gradient-to-br from-[#2D3194] to-[#1f2266] rounded-2xl p-8 mb-8 animate-pulse">
        <div className="h-8 bg-white/20 rounded w-1/2 mb-4" />
        <div className="h-4 bg-white/10 rounded w-1/3 mb-2" />
        <div className="h-4 bg-white/10 rounded w-1/4" />
      </div>
    );

  if (error)
    return (
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8 text-red-700">
        <p className="font-medium">Impossible de charger la cotisation</p>
        <p className="text-sm mt-1">{error}</p>
        <button
          onClick={refetch}
          className="mt-3 text-sm underline hover:no-underline"
        >
          Réessayer
        </button>
      </div>
    );

  // ── Sort by year & quarter (latest first) ────
  const sorted = [...contributions].sort(
    (a, b) => b.year - a.year || (b.quarter ?? 0) - (a.quarter ?? 0),
  );

  

  const lastPaid = sorted.find((c) => c.status === PaymentStatus.PAID);

  const history = sorted.filter((c) => c.status !== PaymentStatus.PENDING);

  return (
    <div className="py-8">
      {/* ── Header ───────────────────────────── */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <Building className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">Paiement CNSS</h1>
            <p className="text-gray-600">
              Gérez vos cotisations sociales trimestrielles
            </p>
          </div>
        </div>
      </div>



      {/* ── Last Paid Banner ───────────────────── */}
      {lastPaid && (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-6">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-bold text-green-900 mb-1">
                Dernier paiement effectué
              </h3>
              <p className="text-sm text-green-800">
                Le paiement de la période <strong>{lastPaid.period}</strong> de{" "}
                <strong>{formatAmount(lastPaid.amount)}€</strong> a été validé
                le {formatDate(lastPaid.paymentDate)}
              </p>
              <p className="text-xs text-green-700 mt-1">
                Référence : {lastPaid.reference}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Current Contribution ──────────────── */}
      {current && (
        <div className="bg-gradient-to-br from-[#2D3194] to-[#1f2266] rounded-2xl p-8 mb-8 text-white shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Période en cours : {current.period}
              </h2>
              <p className="text-white/80">
                Trimestre {current.quarter} · {current.year}
              </p>
              <p className="text-white/80">
                Date limite : {formatDate(current.dueDate)}
              </p>
            </div>
            <div className="w-16 h-16 bg-[#F8BC00] rounded-2xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-[#2D3194]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-white/80 text-sm mb-2">Cotisation estimée</p>
              <p className="text-3xl font-bold">
                {formatAmount(current.amount)}€
              </p>
              <p className="text-white/70 text-xs mt-1">
                Référence : {current.reference}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-white/80 text-sm mb-2">Statut</p>
              <StatusBadge status={current.status} />
            </div>
          </div>
        </div>
      )}

      {/* ── History Table ─────────────────────── */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-[#2D3194] text-lg">
            Historique des paiements
          </h3>
          
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Période
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Référence
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Date limite
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Montant (MAD)
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Date paiement
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Statut
                </th>
                
              </tr>
            </thead>
            <tbody>
              {history.map((contribution) => (
                <tr
                  key={contribution.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {contribution.period}
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-500">
                    {contribution.reference}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {formatDate(contribution.dueDate)}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {formatAmount(contribution.amount)}MAD
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {formatDate(contribution.paymentDate)}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={contribution.status} />
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
