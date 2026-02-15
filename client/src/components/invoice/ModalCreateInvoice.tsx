import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Modal } from "../ui/modal";

type ModalInvoiceProps = {
    isInvoiceModalOpen: boolean;
    setIsInvoiceModalOpen: (isOpen: boolean) => void;
};

function ModalCreateInvoice({isInvoiceModalOpen, setIsInvoiceModalOpen}: ModalInvoiceProps) {

    const [invoiceFormData, setInvoiceFormData] = useState({
        client: "",
        date: "",
        dueDate: "",
        items: "",
        amount: "",
        notes: "",
      });

    const handleInvoiceSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Invoice data:", invoiceFormData);
        setIsInvoiceModalOpen(false);
        setInvoiceFormData({ client: "", date: "", dueDate: "", items: "", amount: "", notes: "" });
    };

    return (
        <>
            {/* Invoice Modal */}
            <Modal title="" isOpen={isInvoiceModalOpen} onClose={() => setIsInvoiceModalOpen(false)}>
                <div className="p-6">
                    <h2 className="text-xl font-bold text-[#2D3194] mb-4">Nouvelle Facture</h2>
                    <form onSubmit={handleInvoiceSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="client">Client</Label>
                                <Input
                                    type="text"
                                    id="client"
                                    value={invoiceFormData.client}
                                    onChange={(e) => setInvoiceFormData({ ...invoiceFormData, client: e.target.value })}
                                    className="h-10 border-gray-200 rounded-xl"
                                />
                            </div>
                            <div>
                                <Label htmlFor="date">Date</Label>
                                <Input
                                    type="date"
                                    id="date"
                                    value={invoiceFormData.date}
                                    onChange={(e) => setInvoiceFormData({ ...invoiceFormData, date: e.target.value })}
                                    className="h-10 border-gray-200 rounded-xl"
                                />
                            </div>
                            <div>
                                <Label htmlFor="dueDate">Date d'échéance</Label>
                                <Input
                                    type="date"
                                    id="dueDate"
                                    value={invoiceFormData.dueDate}
                                    onChange={(e) => setInvoiceFormData({ ...invoiceFormData, dueDate: e.target.value })}
                                    className="h-10 border-gray-200 rounded-xl"
                                />
                            </div>
                            <div>
                                <Label htmlFor="items">Articles</Label>
                                <Input
                                    type="text"
                                    id="items"
                                    value={invoiceFormData.items}
                                    onChange={(e) => setInvoiceFormData({ ...invoiceFormData, items: e.target.value })}
                                    className="h-10 border-gray-200 rounded-xl"
                                />
                            </div>
                            <div>
                                <Label htmlFor="amount">Montant (€)</Label>
                                <Input
                                    type="text"
                                    id="amount"
                                    value={invoiceFormData.amount}
                                    onChange={(e) => setInvoiceFormData({ ...invoiceFormData, amount: e.target.value })}
                                    className="h-10 border-gray-200 rounded-xl"
                                />
                            </div>
                            <div>
                                <Label htmlFor="notes">Notes</Label>
                                <Input
                                    type="text"
                                    id="notes"
                                    value={invoiceFormData.notes}
                                    onChange={(e) => setInvoiceFormData({ ...invoiceFormData, notes: e.target.value })}
                                    className="h-10 border-gray-200 rounded-xl"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button type="submit" className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-10 px-6 rounded-xl">
                                Créer Facture
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default ModalCreateInvoice