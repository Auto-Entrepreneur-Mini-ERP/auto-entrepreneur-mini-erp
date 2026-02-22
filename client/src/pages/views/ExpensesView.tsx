import { Receipt } from "lucide-react";
import TableExpense from "../../components/expenses/TableExpense";

export function ExpensesView() {
  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <Receipt className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">Dépenses</h1>
            <p className="text-gray-600">Gérez vos dépenses et justificatifs</p>
          </div>
        </div>
      </div>

      <TableExpense />
    </div>
  );
}