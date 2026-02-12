import { Building, Calendar, Download, CreditCard, AlertCircle, CheckCircle2, Users } from "lucide-react";
import { Button } from "../../components/ui/button";

export function CNSSPaymentView() {
  const payments = [
    { quarter: "T4 2023", period: "Oct-Nov-Déc 2023", dueDate: "15/01/2024", amount: "12,450", status: "Payé", date: "10/01/2024" },
    { quarter: "T3 2023", period: "Jul-Aoû-Sep 2023", dueDate: "15/10/2023", amount: "11,800", status: "Payé", date: "12/10/2023" },
    { quarter: "T2 2023", period: "Avr-Mai-Jun 2023", dueDate: "15/07/2023", amount: "12,100", status: "Payé", date: "10/07/2023" },
    { quarter: "T1 2023", period: "Jan-Fév-Mar 2023", dueDate: "15/04/2023", amount: "11,650", status: "Payé", date: "12/04/2023" },
  ];

  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <Building className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">Paiement CNSS</h1>
            <p className="text-gray-600">Gérez vos cotisations sociales trimestrielles</p>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-6">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-bold text-green-900 mb-1">Dernier paiement effectué</h3>
            <p className="text-sm text-green-800">
              Le paiement du <strong>T4 2023</strong> de <strong>12,450€</strong> a été validé le 10/01/2024
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">Employés actifs</p>
            <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-[#2D3194]" />
            </div>
          </div>
          <p className="text-3xl font-bold text-[#2D3194]">42</p>
          <p className="text-green-600 text-sm mt-2">+3 ce trimestre</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">Dernier paiement</p>
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-green-600">12,450€</p>
          <p className="text-gray-600 text-sm mt-2">T4 2023</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">Total 2023</p>
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Building className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-blue-600">48,000€</p>
          <p className="text-gray-600 text-sm mt-2">4 trimestres</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">Prochain paiement</p>
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-orange-600">15/04</p>
          <p className="text-gray-600 text-sm mt-2">T1 2024 (75 jours)</p>
        </div>
      </div>

      {/* Current Quarter Card */}
      <div className="bg-gradient-to-br from-[#2D3194] to-[#1f2266] rounded-2xl p-8 mb-8 text-white shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Trimestre en cours : T1 2024</h2>
            <p className="text-white/80">Période : Janvier - Février - Mars 2024</p>
            <p className="text-white/80">Date limite de paiement : 15 Avril 2024</p>
          </div>
          <div className="w-16 h-16 bg-[#F8BC00] rounded-2xl flex items-center justify-center">
            <Calendar className="w-8 h-8 text-[#2D3194]" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white/80 text-sm mb-2">Employés déclarés</p>
            <p className="text-3xl font-bold">42</p>
            <p className="text-white/70 text-xs mt-1">Mise à jour : 01/01/2024</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white/80 text-sm mb-2">Masse salariale</p>
            <p className="text-3xl font-bold">95,400€</p>
            <p className="text-white/70 text-xs mt-1">Base de calcul</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white/80 text-sm mb-2">Cotisation estimée</p>
            <p className="text-3xl font-bold">12,850€</p>
            <p className="text-white/70 text-xs mt-1">13.47% taux moyen</p>
          </div>
        </div>

        <div className="bg-[#F8BC00]/20 border border-[#F8BC00]/40 rounded-xl p-4 mt-6">
          <p className="text-white/90 text-sm">
            <strong>Note :</strong> Le calcul définitif sera effectué après clôture du trimestre. 
            Vous pouvez préparer votre déclaration à partir du 1er avril 2024.
          </p>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-[#2D3194] text-lg">Historique des paiements</h3>
          <Button className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-10 px-4 rounded-xl text-sm">
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Trimestre</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Période</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Date limite</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Montant (€)</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Date paiement</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Statut</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
                        <Building className="w-5 h-5 text-[#2D3194]" />
                      </div>
                      <span className="font-semibold text-gray-900">{payment.quarter}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{payment.period}</td>
                  <td className="px-6 py-4 text-gray-600">{payment.dueDate}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{payment.amount}</td>
                  <td className="px-6 py-4 text-gray-600">{payment.date}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      <CheckCircle2 className="w-3 h-3" />
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Télécharger reçu">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Voir détails">
                        <CreditCard className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          Informations importantes
        </h4>
        <ul className="text-sm text-blue-800 space-y-2 ml-7">
          <li>• Les cotisations CNSS sont calculées sur la base de la masse salariale trimestrielle</li>
          <li>• Le taux de cotisation moyen est de 13.47% (part employeur + part salarié)</li>
          <li>• Les paiements doivent être effectués avant le 15 du mois suivant la fin du trimestre</li>
          <li>• Des pénalités de retard de 1% par mois sont appliquées en cas de paiement tardif</li>
        </ul>
      </div>
    </div>
  );
}
