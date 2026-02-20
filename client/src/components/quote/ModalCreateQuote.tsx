import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Modal } from "../../components/ui/modal";

type ModalQuoteProps = {
    isQuoteModalOpen: boolean;
    setIsQuoteModalOpen: (isOpen: boolean) => void;
};

function ModalCreateQuote({isQuoteModalOpen, setIsQuoteModalOpen}: ModalQuoteProps) {
    const [quoteFormData, setQuoteFormData] = useState({
        client: "",
        date: "",
        validUntil: "",
        items: "",
        amount: "",
        notes: "",
      });
    
      const handleQuoteSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Quote data:", quoteFormData);
        setIsQuoteModalOpen(false);
        setQuoteFormData({ client: "", date: "", validUntil: "", items: "", amount: "", notes: "" });
      };
    return (
        <>
            <Modal title='' isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)}>
                <div className="p-6">
                    <h2 className="text-xl font-bold text-[#2D3194] mb-4">Nouveau Devis</h2>
                    <form onSubmit={handleQuoteSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="client">Client</Label>
                                <Input
                                    type="text"
                                    id="client"
                                    value={quoteFormData.client}
                                    onChange={(e) => setQuoteFormData({ ...quoteFormData, client: e.target.value })}
                                    className="h-10 border-gray-200 rounded-xl"
                                />
                            </div>
                            <div>
                                <Label htmlFor="date">Date</Label>
                                <Input
                                    type="date"
                                    id="date"
                                    value={quoteFormData.date}
                                    onChange={(e) => setQuoteFormData({ ...quoteFormData, date: e.target.value })}
                                    className="h-10 border-gray-200 rounded-xl"
                                />
                            </div>
                            <div>
                                <Label htmlFor="validUntil">Valide jusqu'au</Label>
                                <Input
                                    type="date"
                                    id="validUntil"
                                    value={quoteFormData.validUntil}
                                    onChange={(e) => setQuoteFormData({ ...quoteFormData, validUntil: e.target.value })}
                                    className="h-10 border-gray-200 rounded-xl"
                                />
                            </div>
                            <div>
                                <Label htmlFor="items">Articles</Label>
                                <Input
                                    type="text"
                                    id="items"
                                    value={quoteFormData.items}
                                    onChange={(e) => setQuoteFormData({ ...quoteFormData, items: e.target.value })}
                                    className="h-10 border-gray-200 rounded-xl"
                                />
                            </div>
                            <div>
                                <Label htmlFor="amount">Montant (€)</Label>
                                <Input
                                    type="text"
                                    id="amount"
                                    value={quoteFormData.amount}
                                    onChange={(e) => setQuoteFormData({ ...quoteFormData, amount: e.target.value })}
                                    className="h-10 border-gray-200 rounded-xl"
                                />
                            </div>
                            <div>
                                <Label htmlFor="notes">Notes</Label>
                                <Input
                                    type="text"
                                    id="notes"
                                    value={quoteFormData.notes}
                                    onChange={(e) => setQuoteFormData({ ...quoteFormData, notes: e.target.value })}
                                    className="h-10 border-gray-200 rounded-xl"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button type="submit" className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-10 px-6 rounded-xl">
                                Créer Devis
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default ModalCreateQuote