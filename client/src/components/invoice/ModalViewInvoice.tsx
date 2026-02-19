import { useEffect } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Modal } from "../ui/modal";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { useInvoice } from "../../hooks/useInvoice";
import { X } from "lucide-react";

type ModalInvoiceProps = {
  isInvoiceModalOpen: boolean;
  setIsInvoiceModalOpen: (isOpen: boolean) => void;
  invoiceId: string;
};

function ModalViewInvoice({
  isInvoiceModalOpen,
  setIsInvoiceModalOpen,
  invoiceId,
}: ModalInvoiceProps) {

  const { invoice, getOneInvoice } = useInvoice();


  useEffect(() => {
    (async ()=> {
      getOneInvoice(invoiceId)
    })();
  }, []);  

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
          <div className="absolute top-4 right-4">
            <X onClick={() => setIsInvoiceModalOpen(false)} className="w-5 h-5 cursor-pointer text-gray-500 hover:text-red-700" />
          </div>
          
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Label htmlFor="client">Numero du facture</Label>
                <Input
                  disabled
                  type="text"
                  id="client"
                  value={invoice?.invoiceNumber}
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>
              <div className="relative">
                <Label htmlFor="client">Nom du client</Label>
                <Input
                  disabled
                  type="text"
                  id="client"
                  value={invoice?.customerId}
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="date">Date du facture</Label>
                <Input
                  disabled
                  type="date"
                  id="date"
                  value={new Date(invoice?.issueDate as Date).toString().split("T")[0] || ""}
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="date">Date d'echeance</Label>
                <Input
                  disabled
                  type="date"
                  id="date"
                  value={new Date(invoice?.dueDate as Date).toString().split("T")[0] || ""}
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="items">Montant payee</Label>
                <Input
                  disabled
                  type="number"
                  id="items"
                  value={invoice?.paidAmount}
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="items">Montant restant</Label>
                <Input
                  disabled
                  type="number"
                  id="items"
                  value={invoice?.remainingAmount}
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Input
                  disabled
                  type="text"
                  id="notes"
                  value={invoice?.note}
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>
            </div>
        </div>
        <hr />

        <div className="p-6">
          <Table className="mt-3">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Order</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Designation</TableHead>
                <TableHead>quantity</TableHead>
                <TableHead className="text-right">Prix unitaire</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoice?.InvoiceLine && invoice?.InvoiceLine.map((invoice) => (
                <TableRow key={invoice.order}>
                  <TableCell className="font-medium">
                    {invoice.order}
                  </TableCell>
                  <TableCell>{invoice.lineType.toString()}</TableCell>
                  <TableCell>{invoice.lineType.toString()}</TableCell>
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
            {invoice?.InvoiceLine && invoice.InvoiceLine.length > 0 && (
              <TableFooter>
                <TableRow className="text-md font-bold">
                  <TableCell  colSpan={5}>Total</TableCell>
                  <TableCell className="text-right">{invoice.InvoiceLine.reduce((total, line) => total + (line.quantity * line.unitPrice), 0)}</TableCell>
                </TableRow>
              </TableFooter>
            )}
          </Table>
        </div>
      </Modal>
    </>
  );
}

export default ModalViewInvoice;
