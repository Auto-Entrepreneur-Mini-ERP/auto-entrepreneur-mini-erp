import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Modal } from "../ui/modal";
import type { Payment } from "../../types/payment.types";

type PaymentModalProps = {
    isPaymentModalOpen: boolean;
    setIsPaymentModalOpen: (isOpen: boolean) => void;
    payment: Payment;
}

function ModalViewPayment({
    isPaymentModalOpen,
    setIsPaymentModalOpen,
    payment
}: PaymentModalProps) {
    
    return (
        <>
            <Modal
                maxWidth="max-w-4xl"
                title="Voir un paiement"
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
            >
                <div className="p-6">

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <Label htmlFor="client">Referance</Label>
                            <Input
                                disabled
                                type="text"
                                id="client"
                                value={payment?.reference}
                                className="h-10 mt-1 border-gray-200 rounded-xl"
                            />
                        </div>
                        <div>
                            <Label htmlFor="client">Nom du client</Label>
                            <Input
                                disabled
                                type="text"
                                id="client"
                                value={payment?.Invoice?.customer?.user.firstName + " " + payment?.Invoice?.customer?.user.lastName}
                                className="h-10 mt-1 border-gray-200 rounded-xl"
                            />
                        </div>
                        <div>
                            <Label htmlFor="client">Numero du Facture</Label>
                            <Input
                                disabled
                                type="text"
                                id="client"
                                value={payment?.Invoice?.invoiceNumber}
                                className="h-10 mt-1 border-gray-200 rounded-xl"
                            />
                        </div>
                        <div>
                            <Label htmlFor="date">Date du paiement</Label>
                            <Input
                                disabled
                                type="date"
                                id="date"
                                value={payment?.paymentDate?.toString().split("T")[0]}
                                className="h-10 mt-1 border-gray-200 rounded-xl"
                            />
                        </div>
                        <div>
                            <Label htmlFor="items">Montant payee</Label>
                            <Input
                                disabled
                                type="number"
                                id="items"
                                value={payment?.amount}
                                className="h-10 mt-1 border-gray-200 rounded-xl"
                            />
                        </div>

                        <div>
                            <Label htmlFor="items">Total du Facture</Label>
                            <Input
                                disabled
                                type="number"
                                id="items"
                                value={payment?.Invoice?.totalAmount}
                                className="h-10 mt-1 border-gray-200 rounded-xl"
                            />
                        </div>
                        <div>
                            <Label htmlFor="notes">Notes</Label>
                            <Input
                                disabled
                                type="text"
                                id="notes"
                                value={payment?.isReconciled ? "Reconsiliee":"Non Reconsiliee"}
                                className="h-10 mt-1 border-gray-200 rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalViewPayment