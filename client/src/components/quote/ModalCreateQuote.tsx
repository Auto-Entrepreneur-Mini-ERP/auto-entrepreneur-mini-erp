import { useState } from "react";
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
import { CircleArrowDown, CircleArrowUp, CircleX, HandCoins, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { PaymentMethod } from "../../types/invoice.types";
import { useQuote } from "../../hooks/useQuote";
import { useNavigate } from "react-router";
import type { CreateQuoteInput, QuoteLineInput } from "../../types/quote.types";

type ModalQuoteProps = {
    isQuoteModalOpen: boolean;
    setIsQuoteModalOpen: (isOpen: boolean) => void;
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

type CustomerSearch = {
    id: string,
    user: {
        firstName: string,
        lastName: string
    }
}

function ModalCreateQuote({
    isQuoteModalOpen,
    setIsQuoteModalOpen,
}: ModalQuoteProps) {
    const navigate = useNavigate();

    const { errors, getCustomersNames, getArticlesNames, createQuote } = useQuote();

    const [quoteFormData, setQuoteFormData] = useState<CreateQuoteInput>();
    const [quoteLineFormData, setQuoteLineFormData] = useState<QuoteLineInput[]>([]);

    const [article, setArticle] = useState<string>("");
    const [articleSearch, setArticleSearch] = useState<ArticleSearch[]>([]);
    const [showArticleSearch, setShowArticleSearch] = useState(false);

    const [customerSearch, setCustomerSearch] = useState<CustomerSearch[]>([]);
    const [showCustomerSearch, setShowCustomerSearch] = useState(false);

    const handleQuoteSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(quoteFormData, quoteLineFormData);
        
        await createQuote(quoteFormData as CreateQuoteInput, quoteLineFormData as QuoteLineInput[]);
        if (!errors) {
            navigate("/quots-invoices");
            setIsQuoteModalOpen(false);
            setQuoteFormData(undefined);
            setQuoteLineFormData([]);
        }
    };

    const handleCustomerNameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuoteFormData({
            ...quoteFormData,
            customerName: e.target.value,
        } as CreateQuoteInput);
        const customerName = quoteFormData?.customerName;
        const res = await getCustomersNames(customerName as string);
        if (res.length > 0) {
            setCustomerSearch(res);
            setShowCustomerSearch(true);
        }
    };

    const handleSelectSuggestedCustomer = (customerId: string, customerName: string) => () => {
        setQuoteFormData({
            ...quoteFormData,
            customerId,
            customerName,
        } as CreateQuoteInput);
        setShowCustomerSearch(false);
    };

    const handleArticleNameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setArticle(e.target.value);
        const searchTerm = article;
        const res = await getArticlesNames(searchTerm as string);

        if (res.length > 0) {
            setArticleSearch(res);
            setShowArticleSearch(true);
        }
    };

    const handleSelectSuggestedArticle = (articleId: string, articleType: string, name: string, unitPrice: number) => () => {
        setQuoteLineFormData([
            ...quoteLineFormData,
            {
                order: quoteLineFormData.length + 1,
                lineType: articleType as unknown as any,
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
                title="Créer un devis"
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            >
                <div className="p-6">
                    {errors && <p className="text-red-500 mb-4">{errors}</p>}
                    <form onSubmit={handleQuoteSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                                <Label htmlFor="client">Nom du client</Label>
                                <Input
                                    type="text"
                                    id="client"
                                    value={quoteFormData?.customerName || ""}
                                    onChange={(e) => handleCustomerNameChange(e)}
                                    className="h-10 mt-1 border-gray-200 rounded-xl"
                                />
                                <CircleX className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 mt-2" onClick={() => setShowCustomerSearch(false)} />
                                {showCustomerSearch && (
                                    <div className="absolute w-full border border-gray-200 rounded-xl mt-1 max-h-40 overflow-y-auto z-10 bg-white">
                                        {customerSearch.length > 0 && customerSearch?.map((customer) => (
                                            <div onClick={handleSelectSuggestedCustomer(customer.id, customer.user.firstName +" "+ customer.user.lastName)} key={customer.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                                                {customer.user.firstName} {customer.user.lastName}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="date">Date de validation</Label>
                                <Input
                                    type="date"
                                    id="date"
                                    value={
                                        new Date(quoteFormData?.validityDate || new Date())
                                            .toISOString()
                                            .split("T")[0] || ""
                                    }
                                    onChange={(e) =>
                                        setQuoteFormData({
                                            ...quoteFormData,
                                            validityDate: new Date(e.target.value),
                                        } as CreateQuoteInput)
                                    }
                                    className="h-10 mt-1 border-gray-200 rounded-xl"
                                />
                            </div>
                            
                            <div>
                                <Label htmlFor="notes">Notes</Label>
                                <Input
                                    type="text"
                                    id="notes"
                                    value={quoteFormData?.notes || ""}
                                    onChange={(e) =>
                                        setQuoteFormData({
                                            ...quoteFormData,
                                            notes: e.target.value,
                                        } as CreateQuoteInput)
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
                                Créer Devis
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
                                                article.service ? "SERVICE" : "PRODUCT",
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
                                    <TableCell>{quote.quantity}</TableCell>
                                    <TableCell className="text-right">
                                        {quote.unitPrice} DHs
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {quote.quantity * quote.unitPrice} DHs
                                    </TableCell>
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
                        {quoteLineFormData.length > 0 && (
                            <TableFooter>
                                <TableRow className="text-md font-bold">
                                    <TableCell colSpan={5}>Total</TableCell>
                                    <TableCell className="text-right">{quoteLineFormData.reduce((total, line) => total + (line.quantity * line.unitPrice), 0)} DHs</TableCell>
                                </TableRow>
                            </TableFooter>
                        )}
                    </Table>
                    {quoteLineFormData.length === 0 && (
                        <p className="text-muted-foreground mt-4 text-sm text-center">Ajouter des articles ou des services.</p>
                    )}
                </div>
            </Modal>
        </>
    );
}

export default ModalCreateQuote;