import { CreditCard, Search, ArrowDownRight, RefreshCw, FileDown } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useEffect, useState } from "react";
import TablePayment from "../../components/payment/TablePayment";
import ModalCreatePayment from "../../components/payment/ModalCreatePayment";
// import ModalViewPayment from "../../components/payment/ModalViewPayment";
import { usePayment } from "../../hooks/usePayment";
import type { Payment } from "../../types/payment.types";
import { useSearchParams } from "react-router";

export function PaymentsView() {

  const [searchParams] = useSearchParams();

  const { payments} = usePayment();

const [highlightId, setHighlightId] = useState<string | null>(null);  
const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
  const run = () => {
    const id = searchParams.get("highlight");
    if (id) setHighlightId(id);
  };
  run();
}, [searchParams]);

  const handlePaymentSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const handleExcelExport = () => {};

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">Paiements</h1>
            <p className="text-gray-600">Suivez les paiements reçus de vos clients</p>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Rechercher un paiement par reference..."
            className="pl-10 h-12 border-gray-200 rounded-xl"
            onChange={e => handlePaymentSearch(e)}
          />
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => { window.location.reload(); setLoading(true); }}
            className="h-12 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-600"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline text-sm">Actualiser</span>
          </button>

          <button
            onClick={handleExcelExport}
            className="h-12 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-600"
          >
            <FileDown className="w-4 h-4" />
            <span className="hidden sm:inline text-sm">Export Excel</span>
          </button>
         <Button
            className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 h-12 px-6 rounded-xl"
            onClick={() => setIsPaymentModalOpen(true)}
          >
            <ArrowDownRight className="w-5 h-5 mr-2" />
            Enregistrer un Paiement
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
        <TablePayment payments={payments as Payment[]} initialHighlightId={highlightId} /> {/* ✅ */}
      </div>

      <ModalCreatePayment
        isPaymentModalOpen={isPaymentModalOpen}
        setIsPaymentModalOpen={setIsPaymentModalOpen}
      />
    </div>
  );
}