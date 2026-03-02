import { useEffect, useState } from "react";
import { Button } from "../ui/button";
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
import { CircleArrowDown, CircleArrowUp, CircleX, Search } from "lucide-react";
import { useQuote } from "../../hooks/useQuote";
import type { LineType, Quote, QuoteLineInput, UpdateQuoteInput } from "../../types/quote.types";

type ModalQuoteProps = {
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (isOpen: boolean) => void;
  quote: Quote;
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

function ModalEditQuote({
  isQuoteModalOpen,
  setIsQuoteModalOpen,
  quote
}: ModalQuoteProps) {

  const { errors, getArticlesNames, updateQuote } = useQuote();

  const [quoteFormData, setQuoteFormData] = useState<UpdateQuoteInput>(quote);
  const [quoteLineFormData, setQuoteLineFormData] = useState<QuoteLineInput[]>(quote?.quoteLines);

  const [articleSearch, setArticleSearch] = useState<ArticleSearch[]>([]);
  const [showArticleSearch, setShowArticleSearch] = useState(false);

  useEffect(() => {
    setQuoteFormData(quote as Quote)
    setQuoteLineFormData(quote?.quoteLines)
  }, [quote])

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateQuote(quote.id, quoteFormData)
    
    if (!errors) {
      setIsQuoteModalOpen(false);
      setQuoteFormData({});
      setQuoteLineFormData([]);
      window.location.reload();
    }
  };

  const handleArticleNameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    const res = await getArticlesNames(searchTerm as string);
    
    if (res?.length > 0) {
      setArticleSearch(res);
      setShowArticleSearch(true);
    }
  };

  const handleSelectSuggestedArticle = (articleId: string, articleType: string, name: string, unitPrice: number) => () => {
    setQuoteLineFormData([
      ...quoteLineFormData,
      {
        order: quoteLineFormData.length + 1,
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
      <Modal
        maxWidth="max-w-7xl"
        title="Modifier un devis"
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      >
        <div className="p-6">
          {errors && <p className="text-red-500 mb-4 text-center">{errors}</p>}
          <form onSubmit={handleQuoteSubmit}>
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
                  type="date"
                  id="date"
                  value={quoteFormData?.validityDate?.toString().split("T")[0]}
                  onChange={(e) =>
                    setQuoteFormData({
                      ...quoteFormData,
                      validityDate: e.target.value.toString().split("T")[0],
                    } as UpdateQuoteInput)
                  }
                  className="h-10 mt-1 border-gray-200 rounded-xl"
                />
              </div>
              
              <div>
                <Label htmlFor="items">Total Devis</Label>
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
                  type="text"
                  id="notes"
                  value={quote?.notes}
                  onChange={(e) =>
                    setQuoteFormData({
                      ...quoteFormData,
                      notes: e.target.value,
                    } as UpdateQuoteInput)
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
                Modifier Devis
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
              {quoteLineFormData?.map((quote) => (
                <TableRow key={quote.order}>
                  <TableCell className="font-medium">
                    {quote.order}
                  </TableCell>
                  <TableCell>{quote.lineType?.toString()}</TableCell>
                  <TableCell>{quote.name}</TableCell>
                  <TableCell className="text-center">{quote.quantity}</TableCell>
                  <TableCell className="text-right">{quote.unitPrice} DHs</TableCell>
                  <TableCell className="text-right">{quote.quantity * quote.unitPrice} DHs</TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setQuoteLineFormData(prev =>
                          prev.map(line =>
                            line.order === quote.order
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
                        setQuoteLineFormData(prev =>
                          prev.map(line =>
                            line.order === quote.order
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
                    <Button variant="ghost" size="icon" onClick={() => setQuoteLineFormData(quoteLineFormData.filter((line) => line.order !== quote.order))}>
                      <CircleX className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {quoteLineFormData?.length > 0 && (
              <TableFooter>
                <TableRow className="text-md font-bold">
                  <TableCell colSpan={5}>Total</TableCell>
                  <TableCell className="text-right">{quoteLineFormData.reduce((total, line) => total + (line.quantity * line.unitPrice), 0)} DHs</TableCell>
                </TableRow>
              </TableFooter>
            )}
          </Table>
          {quoteLineFormData?.length === 0 && (
            <p className="text-muted-foreground mt-4 text-sm text-center">Ajouter des articles ou des services.</p>
          )}
        </div>
      </Modal>
    </>
  );
}

export default ModalEditQuote;