import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Modal } from "../ui/modal";
import type { CreateInvoiceData, CreateInvoiceLineData, LineType } from "../../types/invoice.types";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { CircleArrowDown, CircleArrowUp, CircleX, HandCoins, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { PaymentMethod } from "../../types/invoice.types";
import { useInvoice } from "../../hooks/useInvoice";
import { useNavigate } from "react-router";

type ModalInvoiceProps = {
  isInvoiceModalOpen: boolean;
  setIsInvoiceModalOpen: (isOpen: boolean) => void;
};

function ModalCreateInvoice({
  isInvoiceModalOpen,
  setIsInvoiceModalOpen,
}: ModalInvoiceProps) {
  const navigate = useNavigate();

  const { errors, getCustomersNames, getArticlesNames, createInvoice } = useInvoice();

  const [invoiceFormData, setInvoiceFormData] = useState<CreateInvoiceData>();
  const [invoiceLineFormData, setInvoiceLineFormData] = useState<CreateInvoiceLineData[]>([]);

  const [article, setArticle] = useState<string>("");
  const [articleSearch, setArticleSearch] = useState<{ id: string, type: string, name: string, description: string, unitPrice: number }[]>([]);
  const [showArticleSearch, setShowArticleSearch] = useState(false);

  const [customerSearch, setCustomerSearch] = useState<{ id: string, name: string }[]>([]);
  const [showCustomerSearch, setShowCustomerSearch] = useState(false);

  const handleInvoiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Invoice:", invoiceFormData, "InvoiceLine:", invoiceLineFormData);

    // api all create invoice and invoice lines
    const result = await createInvoice(invoiceFormData as CreateInvoiceData, invoiceLineFormData);
    if(result.data.statusCode && result.data.statusCode === 200){
      navigate("/quots-invoices");
      setIsInvoiceModalOpen(false);
      setInvoiceFormData(undefined);
      setInvoiceLineFormData([]);
    }
  };

  const handleCustomerNameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceFormData({
      ...invoiceFormData,
      customerName: e.target.value,
    } as CreateInvoiceData);
    const customerName = invoiceFormData?.customerName;
    // call cusomers api
    const res: { id: string, name: string }[] = await getCustomersNames(customerName as string);
    
    if(res.length > 0) {
      setCustomerSearch(res);
      setShowCustomerSearch(true);
    }
  };

  const handleSelectSuggestedCustomer = (customerId: string, customerName: string) => () => {
    setInvoiceFormData({
      ...invoiceFormData,
      customerId,
      customerName,
    } as CreateInvoiceData);
    setShowCustomerSearch(false);
  };

  const handleArticleNameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticle(e.target.value);
    const searchTerm = article;
    // call articles api
    const res = await getArticlesNames(searchTerm as string);
    
    if(res.length > 0) {
      setArticleSearch(res);
      setShowArticleSearch(true);
    }
  };

  const handleSelectSuggestedArticle = (articleId: string, articleType: string, articleName: string, description: string, unitPrice: number) => () => {
    setInvoiceLineFormData([
      ...invoiceLineFormData,
      {
        order: invoiceLineFormData.length + 1,
        lineType: articleType as unknown as LineType,
        description: description,
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
                <Label htmlFor="client">Nom du client</Label>
                <Input
                  type="text"
                  id="client"
                  value={invoiceFormData?.customerName || ""}
                  onChange={(e) => handleCustomerNameChange(e)}
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
                <CircleX className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 mt-2" onClick={() => setShowCustomerSearch(false)} />
                {showCustomerSearch && (
                  <div className="absolute w-[800px] border border-gray-200 rounded-xl mt-1 max-h-40 overflow-y-auto z-1000 bg-white">
                    {customerSearch.length > 0 && customerSearch.map((customer) => (
                      <div onClick={handleSelectSuggestedCustomer(customer.id, customer.name)} key={customer.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                        {customer.name}
                      </div>
                    ))}
                  </div>
                )}
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
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="items">Montant payee</Label>
                <Input
                  type="number"
                  id="items"
                  value={invoiceFormData?.paidAmount}
                  onChange={(e) =>
                    setInvoiceFormData({
                      ...invoiceFormData,
                      paidAmount: parseFloat(e.target.value) || 0,
                    } as CreateInvoiceData)
                  }
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>

              <div className="relative">
                <Label htmlFor="items">Methode de paiement</Label>
                <HandCoins className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 mt-2" />
                <Select value={invoiceFormData?.payementMethod} onValueChange={(value: string) => setInvoiceFormData({ ...invoiceFormData, payementMethod: value } as CreateInvoiceData)} required>
                  <SelectTrigger className=" mt-1 pl-10 h-11 border-gray-300 focus:border-[#2D3194] focus:ring-[#2D3194] rounded-xl">
                    <SelectValue placeholder="Selectionnez la methode de paiement" />
                  </SelectTrigger>
                  <SelectContent>
                    {PaymentMethod && Object.values(PaymentMethod).map((method) => (
                      <SelectItem key={method} value={method}>{method}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                  className="h-10 mt-1 border-gray-200 rounded-xl"
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
                  placeholder="Rechercher par nom du service/article..."
                  className="pl-10 h-10 border-gray-200 rounded-xl"
                  onChange={(e) => handleArticleNameChange(e)}
                />
                <CircleX className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" onClick={() => setShowArticleSearch(false)} />
                {showArticleSearch && (
                  <div className="absolute w-full border border-gray-200 rounded-xl mt-1 max-h-40 overflow-y-auto z-10 bg-white">
                    {articleSearch.map((article) => (
                      <div onClick={handleSelectSuggestedArticle(article.id, article.type, article.name, article.description, article.unitPrice)} key={article.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                        {article.name} - {article.type} - ${article.unitPrice}
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
                  <TableCell>{invoice.description}</TableCell>
                  <TableCell>{invoice.quantity}</TableCell>
                  <TableCell className="text-right">
                    {invoice.unitPrice}
                  </TableCell>
                  <TableCell className="text-right">
                    {invoice.quantity * invoice.unitPrice}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => setInvoiceLineFormData(invoiceLineFormData.filter((line) => line.quantity++))}>
                      <CircleArrowUp className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setInvoiceLineFormData(invoiceLineFormData.filter((line) => line.quantity--))}>
                      <CircleArrowDown className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setInvoiceLineFormData(invoiceLineFormData.filter((line) => line.order !== invoice.order))}>
                      <CircleX className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {invoiceLineFormData.length > 0 && (
              <TableFooter>
                <TableRow className="text-md font-bold">
                  <TableCell  colSpan={5}>Total</TableCell>
                  <TableCell className="text-right">{invoiceLineFormData.reduce((total, line) => total + (line.quantity * line.unitPrice), 0)}</TableCell>
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
