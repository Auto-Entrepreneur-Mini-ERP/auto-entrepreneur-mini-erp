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
import type { Invoice } from "../../types/invoice.types";

type ModalInvoiceProps = {
  isInvoiceModalOpen: boolean;
  setIsInvoiceModalOpen: (isOpen: boolean) => void;
  invoice: Invoice;
};

function ModalViewInvoice({
  isInvoiceModalOpen,
  setIsInvoiceModalOpen,
  invoice,
}: ModalInvoiceProps) {

  return (
    <>
      {/* Invoice Modal */}
      <Modal
        maxWidth="max-w-7xl"
        title="Voire une facture"
        isOpen={isInvoiceModalOpen}
        onClose={() => setIsInvoiceModalOpen(false)}
      >
        <div className="p-6">

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
                value={invoice?.customer.user.firstName + " " + invoice?.customer.user.lastName}
                className="h-10 mt-1 border-gray-200 rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="date">Date du facture</Label>
              <Input
                disabled
                type="date"
                id="date"
                value={invoice?.issueDate.toString().split("T")[0]}
                className="h-10 mt-1 border-gray-200 rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="date">Date d'echeance</Label>
              <Input
                disabled
                type="date"
                id="date"
                value={invoice?.dueDate.toString().split("T")[0]}
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
              <Label htmlFor="items">Total du Facture</Label>
              <Input
                disabled
                type="number"
                id="items"
                value={invoice?.totalAmount}
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
                value={invoice?.note || ""}
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
                <TableHead>Referance Article/Service</TableHead>
                <TableHead>Nom Article/Service</TableHead>
                <TableHead>Designation</TableHead>
                <TableHead>Quantite</TableHead>
                <TableHead className="text-right">Prix unitaire</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoice?.invoiceLines && invoice?.invoiceLines?.map((invoice) => (
                <TableRow key={invoice.order}>
                  <TableCell className="font-medium">{invoice.order}</TableCell>
                  <TableCell>{invoice.lineType.toString()}</TableCell>
                  <TableCell>{invoice.product?.reference}</TableCell>
                  <TableCell>{invoice.product?.item.name}</TableCell>
                  <TableCell>{invoice.description}</TableCell>
                  <TableCell>{invoice.quantity}</TableCell>
                  <TableCell className="text-right">{invoice.product?.unitPrice} DHs</TableCell>
                  <TableCell className="text-right">{invoice.quantity * (invoice.product?.unitPrice as number)} DHs</TableCell>
                </TableRow>
              ))}
            </TableBody>
            {invoice?.invoiceLines && invoice.invoiceLines?.length > 0 && (
              <TableFooter>
                <TableRow className="text-md font-bold">
                  <TableCell colSpan={7}>Total</TableCell>
                  <TableCell className="text-right">{invoice.invoiceLines?.reduce((total, line) => total + (line.quantity * (line?.product?.unitPrice as number)), 0)} DHs</TableCell>
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
