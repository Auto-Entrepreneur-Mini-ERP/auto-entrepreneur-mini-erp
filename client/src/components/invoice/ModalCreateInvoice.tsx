import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Modal } from "../ui/modal";
import type { CreateInvoiceData, CreateInvoiceLineData } from "../../types/invoice.types";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Search } from "lucide-react";

type ModalInvoiceProps = {
  isInvoiceModalOpen: boolean;
  setIsInvoiceModalOpen: (isOpen: boolean) => void;
};

function ModalCreateInvoice({
  isInvoiceModalOpen,
  setIsInvoiceModalOpen,
}: ModalInvoiceProps) {
  const [invoiceFormData, setInvoiceFormData] = useState<CreateInvoiceData>();
  const [invoiceLineFormData, setInvoiceLineFormData] = useState<CreateInvoiceLineData[]>([]);

  const handleInvoiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Invoice data:", invoiceFormData);
    setIsInvoiceModalOpen(false);
    setInvoiceFormData(undefined);
    // setInvoiceLineFormData([]);
  };

  const handleAticleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Invoice Modal */}
      <Modal
      maxWidth="max-w-7xl"
        title="Créer une facture"
        isOpen={isInvoiceModalOpen}
        onClose={() => setIsInvoiceModalOpen(false)}
      >
        <div className="p-6">
          <form onSubmit={handleInvoiceSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="client">Nom client</Label>
                <Input
                  type="text"
                  id="client"
                  value={invoiceFormData?.customerId || ""}
                  onChange={(e) =>
                    setInvoiceFormData({
                      ...invoiceFormData,
                      customerId: e.target.value,
                    } as CreateInvoiceData)
                  }
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="date">Date d'echeance</Label>
                <Input
                  type="date"
                  id="date"
                  value={
                    new Date(invoiceFormData?.dueDate || new Date())
                      .toISOString()
                      .split("T")[0] || ""
                  }
                  onChange={(e) =>
                    setInvoiceFormData({
                      ...invoiceFormData,
                      dueDate: new Date(e.target.value),
                    } as CreateInvoiceData)
                  }
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="items">Montant payee</Label>
                <Input
                  type="text"
                  id="items"
                  value={invoiceFormData?.paidAmount}
                  onChange={(e) =>
                    setInvoiceFormData({
                      ...invoiceFormData,
                      paidAmount: parseFloat(e.target.value) || 0,
                    } as CreateInvoiceData)
                  }
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="amount">Methode de paiement</Label>
                <Input
                  type="text"
                  id="amount"
                  value={invoiceFormData?.payementMethod}
                  onChange={(e) =>
                    setInvoiceFormData({
                      ...invoiceFormData,
                      payementMethod: e.target.value || "",
                    } as CreateInvoiceData)
                  }
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Input
                  type="text"
                  id="notes"
                  value={invoiceFormData?.notes || ""}
                  onChange={(e) =>
                    setInvoiceFormData({
                      ...invoiceFormData,
                      notes: e.target.value,
                    } as CreateInvoiceData)
                  }
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button
                type="submit"
                className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-10 px-6 rounded-xl"
              >
                Créer Facture
              </Button>
            </div>
          </form>
        </div>
        <hr />

        <div className="p-6">
          <div>
            <form>
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Rechercher par nom du client..."
                  className="pl-10 h-10 border-gray-200 rounded-xl"
                  onChange={(e) => handleAticleSearch(e)}
                />
              </div>
            </form>
          </div>
          <Table className="mt-3">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Order</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Designation</TableHead>
                <TableHead>quantity</TableHead>
                <TableHead className="text-right">Prix unitaire</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoiceLineFormData?.map((invoice) => (
                <TableRow key={invoice.order}>
                  <TableCell className="font-medium">
                    {invoice.order}
                  </TableCell>
                  <TableCell>{invoice.lineType.toString()}</TableCell>
                  <TableCell>atricle name</TableCell>
                  <TableCell>{invoice.quantity}</TableCell>
                  <TableCell className="text-right">
                    {invoice.unitPrice}
                  </TableCell>
                  <TableCell className="text-right">
                    {invoice.quantity * invoice.unitPrice}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {invoiceLineFormData.length > 0 && (
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={5}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            )}
          </Table>
          {invoiceLineFormData.length === 0 && (
            <p className="text-muted-foreground mt-4 text-sm text-center">Ajouter des articles ou des services.</p>
          )}
        </div>
      </Modal>
    </>
  );
}

export default ModalCreateInvoice;
