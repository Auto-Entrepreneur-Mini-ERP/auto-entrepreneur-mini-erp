
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Modal } from "../ui/modal";
import type { Invoice, LineType, UpdateInvoiceData, UpdateInvoiceLineData } from "../../types/invoice.types";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { CircleArrowDown, CircleArrowUp, CircleX, Search } from "lucide-react";
import { useInvoice } from "../../hooks/useInvoice";

type ModalInvoiceProps = {
  isInvoiceModalOpen: boolean;
  setIsInvoiceModalOpen: (isOpen: boolean) => void;
  invoice: Invoice;
};

type ArticleSearch = {
  id: string,
  type: string,
  name: string,
  category?: string,
  unit: string,
  product?: {
    unitPrice: number,
    reference: string,
  },
  service?: {
    hourlyRate: number
  }
};

function ModalEditInvoice({
  isInvoiceModalOpen,
  setIsInvoiceModalOpen,
  invoice
}: ModalInvoiceProps) {

  const { errors, getArticlesNames, updateInvoice } = useInvoice();

  const [invoiceFormData, setInvoiceFormData] = useState<UpdateInvoiceData>(invoice);
  const [invoiceLineFormData, setInvoiceLineFormData] = useState<UpdateInvoiceLineData[]>(invoice?.invoiceLines);

  const [articleSearch, setArticleSearch] = useState<ArticleSearch[]>([]);
  const [showArticleSearch, setShowArticleSearch] = useState(false);

  useEffect(() => {
    setInvoiceFormData({
      dueDate: invoice?.dueDate,
      notes: invoice?.note
    })
    setInvoiceLineFormData(invoice?.invoiceLines)
  }, [invoice])

  const handleInvoiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // api all create invoice and invoice lines
    await updateInvoice(invoice.id, invoiceFormData, invoiceLineFormData)
    
    if (!errors) {
      setIsInvoiceModalOpen(false);
      setInvoiceFormData({});
      setInvoiceLineFormData([]);
    }
  };

  const handleArticleNameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    // call articles api
    const res = await getArticlesNames(searchTerm as string);
    
    if (res?.length > 0) {
      setArticleSearch(res);
      setShowArticleSearch(true);
    }
  };

  const handleSelectSuggestedArticle = (articleId: string, articleType: string, name: string, unitPrice: number) => () => {
    setInvoiceLineFormData([
      ...invoiceLineFormData,
      {
        order: invoiceLineFormData.length + 1,
        lineType: articleType as unknown as LineType,
        name: name,
        quantity: 1,
        unitPrice: unitPrice,
        productId: articleType === "PRODUCT" ? articleId : undefined,
        serviceId: articleType === "SERVICE" ? articleId : undefined,
      }
    ]);
    setShowArticleSearch(false);
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
          {errors && <p className="text-red-500 mb-4">{errors}</p>}
          <form onSubmit={handleInvoiceSubmit}>
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
                  type="date"
                  id="date"
                  value={invoiceFormData?.dueDate?.toString().split("T")[0]}
                  onChange={(e) =>
                    setInvoiceFormData({
                      ...invoiceFormData,
                      dueDate: new Date(e.target.value.toString().split("T")[0]),
                    } as UpdateInvoiceData)
                  }
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
                <Label htmlFor="items">Montant Restant</Label>
                <Input
                  disabled
                  type="number"
                  id="items"
                  value={invoice?.remainingAmount}
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="items">Total Facture</Label>
                <Input
                  disabled
                  type="number"
                  id="items"
                  value={invoice?.totalAmount}
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="items">Reduction</Label>
                <Input
                  disabled
                  type="number"
                  id="items"
                  value={invoice?.discount}
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Input
                  type="text"
                  id="notes"
                  value={invoice?.note}
                  onChange={(e) =>
                    setInvoiceFormData({
                      ...invoiceFormData,
                      notes: e.target.value,
                    } as UpdateInvoiceData)
                  }
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button
                type="submit"
                className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-10 px-6 rounded-xl"
              >
                Modifier Facture
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
                  placeholder="Rechercher par nom du service/article..."
                  className="pl-10 h-10 border-gray-200 rounded-xl"
                  onChange={(e) => handleArticleNameChange(e)}
                />
                <CircleX className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" onClick={() => setShowArticleSearch(false)} />
                {showArticleSearch && (
                  <div className="absolute w-full border border-gray-200 rounded-xl mt-1 max-h-40 overflow-y-auto z-10 bg-white">
                    {articleSearch.map((article) => (
                      <div onClick={handleSelectSuggestedArticle(
                          article.id, 
                          article.service ? "Service":"Produit", 
                          article.name, 
                          article.product?.unitPrice as number || article.service?.hourlyRate as number
                        )} 
                        key={article.id} 
                        className="p-2 hover:bg-gray-100 cursor-pointer">
                        {article.name} - {article.service ? "Service" : "Produit"} - {article.category} - ${article.product?.unitPrice || article.service?.hourlyRate} / {article.unit}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </form>
          </div>
          <Table className="mt-3">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Order</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Nom Article/Service</TableHead>
                <TableHead>Quantite</TableHead>
                <TableHead className="text-right">Prix unitaire</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoiceLineFormData?.map((invoice) => (
                <TableRow key={invoice.order}>
                  <TableCell className="font-medium">
                    {invoice.order}
                  </TableCell>
                  <TableCell>{invoice.lineType?.toString()}</TableCell>
                  <TableCell>{invoice.name}</TableCell>
                  <TableCell className="text-center">{invoice.quantity}</TableCell>
                  <TableCell className="text-right">{invoice.unitPrice} DHs</TableCell>
                  <TableCell className="text-right">{invoice.quantity * invoice.unitPrice} DHs</TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setInvoiceLineFormData(prev =>
                          prev.map(line =>
                            line.order === invoice.order
                              ? { ...line, quantity: line.quantity + 1 }
                              : line
                          )
                        )
                      }
                    >
                      <CircleArrowUp className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setInvoiceLineFormData(prev =>
                          prev.map(line =>
                            line.order === invoice.order
                              ? {
                                ...line,
                                quantity: line.quantity > 1
                                  ? line.quantity - 1
                                  : 1
                              }
                              : line
                          )
                        )
                      }
                    >
                      <CircleArrowDown className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setInvoiceLineFormData(invoiceLineFormData.filter((line) => line.order !== invoice.order))}>
                      <CircleX className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {invoiceLineFormData?.length > 0 && (
              <TableFooter>
                <TableRow className="text-md font-bold">
                  <TableCell colSpan={5}>Total</TableCell>
                  <TableCell className="text-right">{invoiceLineFormData.reduce((total, line) => total + (line.quantity * line.unitPrice), 0)} DHs</TableCell>
                </TableRow>
              </TableFooter>
            )}
          </Table>
          {invoiceLineFormData?.length === 0 && (
            <p className="text-muted-foreground mt-4 text-sm text-center">Ajouter des articles ou des services.</p>
          )}
        </div>
      </Modal>
    </>
  );
}

export default ModalEditInvoice;
