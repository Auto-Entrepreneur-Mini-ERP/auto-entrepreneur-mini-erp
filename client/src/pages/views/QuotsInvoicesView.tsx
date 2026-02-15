import { FileText, Plus, Search, Eye, Download, Send, ChevronDownIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import ModalCreateInvoice from "../../components/invoice/ModalCreateInvoice";
import TableInvoice from "../../components/invoice/TableInvoice";
import TableQuote from "../../components/quote/TableQuote";
import ModalCreateQuote from "../../components/quote/ModalCreateQuote";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible"
import { Card, CardContent } from "../../components/ui/card";
import { useInvoice } from "../../hooks/useInvoice";

export function QuotsInvoicesView() {

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);

  const [openQuote, setOpenQuote] = useState(true);
  const [openInvoice, setOpenInvoice] = useState(true);

  const [quoteDocuments, setQuoteDocuments] = useState([
    { id: "QT-2024-001", type: "Devis", client: "Société XYZ", date: "15/01/2024", amount: "2,450.00", status: "En attente" },
    { id: "QT-2024-002", type: "Devis", client: "Transport ABC", date: "10/01/2024", amount: "1,200.00", status: "Accepté" },
  ]);

  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">Devis & Factures</h1>
            <p className="text-gray-600">Gérez vos devis et factures clients</p>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Rechercher par nom du client..."
            className="pl-10 h-12 border-gray-200 rounded-xl"
          />
        </div>
        <div className="flex gap-3">
          <Button className="bg-white hover:bg-gray-50 text-[#2D3194] border-2 border-[#2D3194] h-12 px-6 rounded-xl" onClick={() => setIsQuoteModalOpen(true)}>
            <Plus className="w-5 h-5 mr-2" />
            Nouveau Devis
          </Button>
          <Button className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 px-6 rounded-xl" onClick={() => setIsInvoiceModalOpen(true)}>
            <Plus className="w-5 h-5 mr-2" />
            Nouvelle Facture
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Devis en cours</p>
          <p className="text-3xl font-bold text-[#2D3194]">18</p>
          <p className="text-gray-600 text-sm mt-2">45,200€ total</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Factures payées</p>
          <p className="text-3xl font-bold text-green-600">124</p>
          <p className="text-gray-600 text-sm mt-2">Ce mois</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">En attente paiement</p>
          <p className="text-3xl font-bold text-orange-600">32</p>
          <p className="text-gray-600 text-sm mt-2">68,900€</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">CA du mois</p>
          <p className="text-3xl font-bold text-[#2D3194]">285K€</p>
          <p className="text-green-600 text-sm mt-2">+12.5%</p>
        </div>
      </div> */}

      {/* Table Quote */}
      <Card className="mx-auto w-full max-w-sm mt-4">
        <CardContent>
          <Collapsible open={openQuote} onOpenChange={setOpenQuote} className="data-[state=open]:bg-muted rounded-md w-full">
            <CollapsibleTrigger className="my-2" asChild>
              <Button variant="ghost" className="group w-full text-md hover:bg-none">
                Devis
                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col items-center gap-2 p-2.5 pt-0 mt-2 w-full">
              <TableQuote documents={quoteDocuments} />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Table Invoice */}
      <Card className="mx-auto w-full max-w-sm mt-4">
        <CardContent>
          <Collapsible open={openInvoice} onOpenChange={setOpenInvoice} className="data-[state=open]:bg-muted rounded-md w-full">
            <CollapsibleTrigger className="my-2" asChild>
              <Button variant="ghost" className="group w-full text-md">
                Factures
                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col items-center gap-2 p-2.5 pt-0 mt-2 w-full">
              <TableInvoice />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Quote Modal */}
      <ModalCreateQuote isQuoteModalOpen={isQuoteModalOpen} setIsQuoteModalOpen={setIsQuoteModalOpen} />

      {/* Invoice Modal */}
      <ModalCreateInvoice isInvoiceModalOpen={isInvoiceModalOpen} setIsInvoiceModalOpen={setIsInvoiceModalOpen} />
    </div>
  );
}