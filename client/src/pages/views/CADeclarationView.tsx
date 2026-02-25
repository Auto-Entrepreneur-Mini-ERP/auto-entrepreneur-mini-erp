import {
  FileCheck,
  Calendar,
  Download,
  Send,
  AlertCircle,
  CheckCircle2,
  Eye,
  Trash2,
  Search,
  CreditCard,
  Hash,
  Clock,
  FileText,
  CheckCircle,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Modal } from "../../components/ui/modal";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router";

import {
  useGetAllTaxDeclaration,
  useGetCurrentDeclarationData,
  useDeleteDeclarationData,
  useCreateDeclarationData,
  useUpdateDeclarationData,
} from "../../hooks/useTaxDeclaration";
import type { TaxDeclaration } from "../../types/taxDeclaration.types";
import { DeclarationStatus } from "../../types/taxDeclaration.types";

export function CADeclarationView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedDeclaration, setSelectedDeclaration] =
    useState<TaxDeclaration | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [searchParams] = useSearchParams();

  const getStatusStyle = (status: string) => {
    switch (status) {
      case DeclarationStatus.PAID:
        return "bg-green-100 text-green-700 border border-green-200";
      case DeclarationStatus.SUBMITTED:
        return "bg-blue-100 text-blue-700 border border-blue-200";
      case DeclarationStatus.DRAFT:
        return "bg-gray-100 text-gray-700 border border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case DeclarationStatus.PAID:
        return "Payée";
      case DeclarationStatus.SUBMITTED:
        return "Soumise";
      case DeclarationStatus.DRAFT:
        return "Brouillon";
      default:
        return status;
    }
  };

  const { allTaxDeclaration, loading, refetch } = useGetAllTaxDeclaration();
const { currentTaxDeclaration, fetchCurrentDeclaration, loadingCurrent } =
  useGetCurrentDeclarationData();

  const { deleteTaxDeclaration } = useDeleteDeclarationData();
  const { createTaxDeclaration } = useCreateDeclarationData();
  const { updateTaxDeclaration } = useUpdateDeclarationData();

  useEffect(() => {
  const run = () => {
    const highlight = searchParams.get("highlight");
    const id = searchParams.get("id");

    if (highlight === "declaration" && id && allTaxDeclaration?.length) {
      const found = allTaxDeclaration.find((d) => d.id === id);
      if (found) {
        setSelectedDeclaration(found);
        setIsDetailModalOpen(true);
      }
    }
  };
  setTimeout(run, 0); 
}, [searchParams, allTaxDeclaration]);

  const handleSubmit = async () => {
    await createTaxDeclaration(currentTaxDeclaration!);
    setIsModalOpen(false);
    refetch();
    await fetchCurrentDeclaration();
  };

  const handleViewDetails = (declaration: TaxDeclaration) => {
  setSelectedDeclaration(declaration);
  setIsDetailModalOpen(true);
};

  const handleDeclarationStatusChang = async () => {
    if (currentTaxDeclaration?.id) {
      await updateTaxDeclaration(
        currentTaxDeclaration.id,
        currentTaxDeclaration?.status === DeclarationStatus.DRAFT
          ? "SUBMITTED"
          : "PAID",
      );
      refetch();
      await fetchCurrentDeclaration();
    }
    setIsModalOpen(false);
  };

  const handleDeletTax = async (id: string) => {
    await deleteTaxDeclaration(id);
    refetch();
    await fetchCurrentDeclaration();
  };

  const filteredDeclarations = useMemo(() => {
    if (!allTaxDeclaration?.length) return [];
    if (!searchQuery.trim()) return allTaxDeclaration;
    const q = searchQuery.toLowerCase();
    return allTaxDeclaration.filter((d) => {
      const period = d.period?.toLowerCase() ?? "";
      const status = getStatusLabel(d.status ?? "").toLowerCase();
      const revenue = String(d.totalRevenue ?? "");
      const due = d.dueDate
        ? new Date(d.dueDate).toLocaleDateString("fr-FR")
        : "";
      return (
        period.includes(q) ||
        status.includes(q) ||
        revenue.includes(q) ||
        due.includes(q)
      );
    });
  }, [allTaxDeclaration, searchQuery]);

  const handlCreateDeclaration = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <FileCheck className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">
              Déclaration CA
            </h1>
            <p className="text-gray-600">
              Gérez vos déclarations de chiffre d'affaires
            </p>
          </div>
        </div>
      </div>

      {currentTaxDeclaration?.id && (
        <>
          {/* DRAFT */}
          {currentTaxDeclaration.status === DeclarationStatus.DRAFT && (
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl mb-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-orange-900">
                      Déclaration en brouillon
                    </h3>
                    <span className="text-xs bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full font-medium">
                      Brouillon
                    </span>
                  </div>
                  <p className="text-sm text-orange-800 mb-4">
                    La déclaration pour{" "}
                    <strong>{currentTaxDeclaration.periode}</strong> doit être
                    soumise avant le{" "}
                    <strong>
                      {currentTaxDeclaration.dueDate
                        ? new Date(currentTaxDeclaration.dueDate).toLocaleDateString(
                            "fr-FR"
                          )
                        : "—"}
                    </strong>
                  </p>
                  <Button
                    onClick={handleDeclarationStatusChang}
                    className="bg-orange-600 hover:bg-orange-700 text-white h-10 px-6 rounded-xl"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Soumettre la déclaration
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* SUBMITTED */}
          {currentTaxDeclaration.status === DeclarationStatus.SUBMITTED && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-blue-900">
                      Déclaration soumise — en attente de paiement
                    </h3>
                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full font-medium">
                      Soumise
                    </span>
                  </div>
                  <p className="text-sm text-blue-800 mb-4">
                    La déclaration pour{" "}
                    <strong>{currentTaxDeclaration.periode}</strong> a été
                    soumise. Le paiement doit être effectué avant le{" "}
                    <strong>
                      {currentTaxDeclaration.dueDate
                        ? new Date(currentTaxDeclaration.dueDate).toLocaleDateString(
                            "fr-FR"
                          )
                        : "—"}
                    </strong>
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-100 rounded-xl p-3">
                      <p className="text-xs text-blue-700 mb-1">
                        Impôt sur le chiffre d’affaires
                      </p>
                      <p className="text-xl font-bold text-blue-900">
                        {currentTaxDeclaration.taxAmount} MAD
                      </p>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-3">
                      <p className="text-xs text-blue-700 mb-1">
                        Chiffre d'affaires
                      </p>
                      <p className="text-xl font-bold text-blue-900">
                        {currentTaxDeclaration.totalRevenue} MAD
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={handleDeclarationStatusChang}
                    style={{ backgroundColor: "#3a86f7" }}
                    className="text-white h-10 px-6 rounded-xl transition-all"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Payer la déclaration
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* PAID */}
          {currentTaxDeclaration.status === DeclarationStatus.PAID && (
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl mb-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-green-900">
                      Déclaration payée
                    </h3>
                    <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full font-medium">
                      Payée ✓
                    </span>
                  </div>
                  <p className="text-sm text-green-800 mb-4">
                    La déclaration pour{" "}
                    <strong>{currentTaxDeclaration.periode}</strong> a été
                    réglée avec succès. Aucune action requise.
                  </p>
                  {/* <div className="grid grid-cols-3 gap-4">
                    <div className="bg-green-100 rounded-xl p-3">
                      <p className="text-xs text-green-700 mb-1">
                        Chiffre d'affaires
                      </p>
                      <p className="text-lg font-bold text-green-900">
                        {currentTaxDeclaration.totalRevenue} MAD
                      </p>
                    </div>
                    <div className="bg-green-100 rounded-xl p-3">
                      <p className="text-xs text-green-700 mb-1">Taxe payée</p>
                      <p className="text-lg font-bold text-green-900">
                        {currentTaxDeclaration.taxAmount} MAD
                      </p>
                    </div>
                    <div className="bg-green-100 rounded-xl p-3">
                      <p className="text-xs text-green-700 mb-1">Période</p>
                      <p className="text-lg font-bold text-green-900">
                        {currentTaxDeclaration.periode}
                      </p>
                    </div>
                  </div>
                  NO action button — read-only for PAID status */}
                </div>
              </div>
            </div>
          )}
        </>
      )}
 
 
      {!loadingCurrent &&
        (currentTaxDeclaration?.id == null ||
          allTaxDeclaration.length <= 0) && (
          <div className="bg-gradient-to-br from-[#2D3194] to-[#1f2266] rounded-2xl p-8 mb-8 text-white shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Période en cours : {currentTaxDeclaration?.periode}
                </h2>
                <p className="text-white/80">
                  Date limite de déclaration :{" "}
                  {currentTaxDeclaration?.dueDate
                    ? new Date(
                        currentTaxDeclaration.dueDate,
                      ).toLocaleDateString("fr-FR")
                    : "—"}
                </p>
              </div>
              <div className="w-16 h-16 bg-[#F8BC00] rounded-2xl flex items-center justify-center">
                <Calendar className="w-8 h-8 text-[#2D3194]" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-white/80 text-sm mb-2">Chiffre d'affaires</p>
                <p className="text-3xl font-bold">
                  {currentTaxDeclaration?.totalRevenue}MAD
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-white/80 text-sm mb-2">Tax collectée</p>
                <p className="text-3xl font-bold">
                  {currentTaxDeclaration?.taxAmount}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-white/80 text-sm mb-2">Jours restants</p>
                <p className="text-3xl font-bold">
                  {currentTaxDeclaration?.ramainDays}
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button
                onClick={() => handlCreateDeclaration()}
                className="bg-[#F8BC00] hover:bg-[#e0ab00] text-[#2D3194] h-12 px-6 rounded-xl font-semibold flex-1"
              >
                <Send className="w-5 h-5 mr-2" />
                Creer la déclaration
              </Button>
            </div>
          </div>
        )}

      {/* Historical Declarations */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between gap-4">
          <h3 className="font-bold text-[#2D3194] text-lg shrink-0">
            Historique des déclarations
          </h3>

          <div className="flex items-center gap-2 border border-gray-200 rounded-xl bg-gray-50 px-3 py-2 w-72 focus-within:ring-2 focus-within:ring-[#2D3194]/20 focus-within:border-[#2D3194] focus-within:bg-white transition-all">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm outline-none w-full text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {loading ? (
          <div className="px-6 py-12 text-center text-gray-500">
            Chargement des déclarations...
          </div>
        ) : filteredDeclarations.length === 0 ? (
          <div className="px-6 py-12 text-center text-gray-500">
            {searchQuery
              ? "Aucun résultat pour votre recherche"
              : "Aucune déclaration pour le moment"}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Période
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Date limite
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    CA déclaré (MAD)
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Date d'envoi
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                    Statut
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredDeclarations.map((declaration, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
                          <FileCheck className="w-5 h-5 text-[#2D3194]" />
                        </div>
                        <span className="font-semibold text-gray-900">
                          {declaration.period}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {declaration?.dueDate
                        ? new Date(declaration.dueDate).toLocaleDateString(
                            "fr-FR",
                          )
                        : "—"}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {declaration.totalRevenue}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {declaration?.creationDate
                        ? new Date(declaration.creationDate).toLocaleDateString(
                            "fr-FR",
                          )
                        : "—"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(declaration.status ?? "")}`}
                      >
                        {getStatusLabel(declaration.status ?? "")}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleViewDetails(declaration)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeletTax(declaration.id ?? "")}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* Submit Declaration Modal */}
      <Modal
        title=""
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="bg-gradient-to-br from-[#2D3194] to-[#1f2266] px-6 py-5 flex items-center gap-4">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <FileCheck className="w-5 h-5 text-white" />
          </div>
          <div className="p-8">
            <h2 className="text-lg font-bold text-white">
              Soumettre la déclaration
            </h2>
            <p className="text-white/70 text-sm">
              Récapitulatif de la période en cours
            </p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
            <div className="p-4 bg-[#2D3194]/10 rounded-lg flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 text-[#2D3194]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-0.5">Période</p>
              <p className="font-semibold text-gray-900">
                {currentTaxDeclaration?.periode ?? "—"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
            <div className="p-4 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
              <AlertCircle className="w-4 h-4 text-orange-500" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-0.5">Date limite</p>
              <p className="font-semibold text-gray-900">
                {currentTaxDeclaration?.dueDate
                  ? new Date(currentTaxDeclaration.dueDate).toLocaleDateString(
                      "fr-FR",
                    )
                  : "—"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
            <div className="p-4 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
              <Download className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-0.5">Chiffre d'affaires</p>
              <p className="font-semibold text-gray-900">
                {currentTaxDeclaration?.totalRevenue ?? 0} MAD
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
            <div className="p-4 bg-[#F8BC00]/10 rounded-lg flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#F8BC00]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-0.5">Tax collectée</p>
              <p className="font-semibold text-gray-900">
                {currentTaxDeclaration?.taxAmount ?? 0} MAD
              </p>
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <Button
              onClick={() => setIsModalOpen(false)}
              variant="outline"
              className="flex-1 h-11 rounded-xl border-gray-200 text-gray-600"
            >
              Annuler
            </Button>
            <Button
              onClick={handleSubmit}
              className="flex-1 h-11 bg-[#F8BC00] hover:bg-[#e0ab00] text-[#2D3194] rounded-xl font-semibold"
            >
              <Send className="w-4 h-4 mr-2" />
              Confirmer
            </Button>
          </div>
        </div>
      </Modal>
      {/* Declaration Details Modal */}
      <Modal
        title=""
        isOpen={isDetailModalOpen}
        onClose={() => {
          setIsDetailModalOpen(false);
          setSelectedDeclaration(null);
        }}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-br from-[#2D3194] to-[#1f2266] px-6 py-5 flex items-center gap-4">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div className="py-6">
            <h2 className="text-lg font-bold text-white">
              Détails de la déclaration
            </h2>
            <p className="text-white/70 text-sm">
              {selectedDeclaration?.period}
            </p>
          </div>

          {/* Status badge in header */}
          {selectedDeclaration?.status && (
            <span
              className={`ml-auto inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(selectedDeclaration.status)}`}
            >
              {getStatusLabel(selectedDeclaration.status)}
            </span>
          )}
        </div>

        <div className="p-6 space-y-3">
          {/* Period & Year */}
          <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
            <div className="p-3 bg-[#2D3194]/10 rounded-lg shrink-0">
              <Calendar className="w-4 h-4 text-[#2D3194]" />
            </div>
            <div className="flex-1 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Période</p>
                <p className="font-semibold text-gray-900">
                  {selectedDeclaration?.period ?? "—"}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-0.5">Année</p>
                <p className="font-semibold text-gray-900">
                  {selectedDeclaration?.year ?? "—"}
                </p>
              </div>
            </div>
          </div>

          {/* Revenue & Tax Amount */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">
              <p className="text-xs text-green-600 mb-1">Chiffre d'affaires</p>
              <p className="text-xl font-bold text-green-700">
                {selectedDeclaration?.totalRevenue?.toLocaleString("fr-FR") ??
                  "—"}
                <span className="text-sm font-normal ml-1">MAD</span>
              </p>
            </div>
            <div className="bg-[#2D3194]/5 border border-[#2D3194]/10 rounded-xl px-4 py-3">
              <p className="text-xs text-[#2D3194] mb-1">Tax collectée</p>
              <p className="text-xl font-bold text-[#2D3194]">
                {selectedDeclaration?.taxAmount?.toLocaleString("fr-FR") ?? "—"}
                <span className="text-sm font-normal ml-1">MAD</span>
              </p>
            </div>
          </div>

          {/* Tax Rate */}
          {selectedDeclaration?.taxRate !== undefined && (
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
              <div className="p-3 bg-[#F8BC00]/10 rounded-lg shrink-0">
                <Hash className="w-4 h-4 text-[#F8BC00]" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">
                  Taux d'imposition
                </p>
                <p className="font-semibold text-gray-900">
                  {selectedDeclaration.taxRate}%
                </p>
              </div>
            </div>
          )}

          {/* Due Date & Payment Date */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
              <div className="p-2 bg-orange-50 rounded-lg shrink-0">
                <AlertCircle className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Date limite</p>
                <p className="font-semibold text-gray-900 text-sm">
                  {selectedDeclaration?.dueDate
                    ? new Date(selectedDeclaration.dueDate).toLocaleDateString(
                        "fr-FR",
                      )
                    : "—"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
              <div className="p-2 bg-green-50 rounded-lg shrink-0">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Date de paiement</p>
                <p className="font-semibold text-gray-900 text-sm">
                  {selectedDeclaration?.paymentDate
                    ? new Date(
                        selectedDeclaration.paymentDate,
                      ).toLocaleDateString("fr-FR")
                    : "—"}
                </p>
              </div>
            </div>
          </div>

          {/* Creation Date */}
          <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
            <div className="p-3 bg-[#2D3194]/10 rounded-lg shrink-0">
              <Clock className="w-4 h-4 text-[#2D3194]" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Date de création</p>
              <p className="font-semibold text-gray-900">
                {selectedDeclaration?.creationDate
                  ? new Date(
                      selectedDeclaration.creationDate,
                    ).toLocaleDateString("fr-FR")
                  : "—"}
              </p>
            </div>
          </div>

          {/* ID */}
          {selectedDeclaration?.id && (
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
              <div className="p-3 bg-gray-100 rounded-lg shrink-0">
                <CreditCard className="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Identifiant</p>
                <p className="font-mono text-xs text-gray-600">
                  {selectedDeclaration.id}
                </p>
              </div>
            </div>
          )}

          {/* Close Button */}
          <div className="pt-2">
            <Button
              onClick={() => {
                setIsDetailModalOpen(false);
                setSelectedDeclaration(null);
              }}
              className="w-full h-11 bg-[#2D3194] hover:bg-[#1f2266] text-white rounded-xl font-semibold"
            >
              Fermer
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}