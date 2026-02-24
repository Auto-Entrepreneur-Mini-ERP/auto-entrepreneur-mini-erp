import type { Quote } from "../../types/quote.types";
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
} from "../ui/table";

type ModalQuoteProps = {
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (isOpen: boolean) => void;
  quote: Quote;
};

function ModalViewQuote({
  isQuoteModalOpen,
  setIsQuoteModalOpen,
  quote,
}: ModalQuoteProps) {

  return (
    <>
      <Modal
        maxWidth="max-w-7xl"
        title="Voir le devis"
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      >
        <div className="p-6">

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Label htmlFor="client">Numero du devis</Label>
              <Input
                disabled
                type="text"
                id="client"
                value={quote?.quoteNumber}
                className="h-10 mt-1 border-gray-200 rounded-xl"
              />
            </div>
            <div className="relative">
              <Label htmlFor="client">Nom du client</Label>
              <Input
                disabled
                type="text"
                id="client"
                value={quote?.customer.user.firstName + " " + quote?.customer.user.lastName}
                className="h-10 mt-1 border-gray-200 rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="date">Date du devis</Label>
              <Input
                disabled
                type="date"
                id="date"
                value={quote?.issueDate.toString().split("T")[0]}
                className="h-10 mt-1 border-gray-200 rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="date">Valide Jusqu'a</Label>
              <Input
                disabled
                type="date"
                id="date"
                value={quote?.validityDate.toString().split("T")[0]}
                className="h-10 mt-1 border-gray-200 rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="items">Montant du Devis</Label>
              <Input
                disabled
                type="number"
                id="items"
                value={quote?.totalAmount}
                className="h-10 mt-1 border-gray-200 rounded-xl"
              />
            </div>

            <div>
              <Label htmlFor="notes">Notes</Label>
              <Input
                disabled
                type="text"
                id="notes"
                value={quote?.notes || ""}
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
              {quote?.quoteLines && quote?.quoteLines?.map((line) => (
                <TableRow key={line.order}>
                  <TableCell className="font-medium">{line.order}</TableCell>
                  <TableCell>{line.lineType.toString()}</TableCell>
                  <TableCell>{line.product?.reference || line.service?.reference}</TableCell>
                  <TableCell>{line.product?.item?.name || line.service?.item?.name}</TableCell>
                  <TableCell>{line.description}</TableCell>
                  <TableCell>{line.quantity}</TableCell>
                  <TableCell className="text-right">{line.product?.unitPrice || line.service?.unitPrice} DHs</TableCell>
                  <TableCell className="text-right">{line.quantity * (line?.product?.unitPrice as number)} DHs</TableCell>
                </TableRow>
              ))}
            </TableBody>
            {quote?.quoteLines && quote.quoteLines?.length > 0 && (
              <TableFooter>
                <TableRow className="text-md font-bold">
                  <TableCell colSpan={7}>Total</TableCell>
                  <TableCell className="text-right">{quote.quoteLines?.reduce((total, line) => total + (line.quantity * (line?.product?.unitPrice as number)), 0)} DHs</TableCell>
                </TableRow>
              </TableFooter>
            )}
          </Table>
        </div>
      </Modal>
    </>
  );
}

export default ModalViewQuote;