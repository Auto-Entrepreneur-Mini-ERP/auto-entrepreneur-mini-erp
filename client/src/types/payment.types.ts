
export type PayementMetod = {
    CASH : 'CASH',
    CHECK : 'CHECK',
    BANK_TRANSFER : 'BANK TRANSFER',
    CREDIT_CARD : 'CREDIT CARD',
    MOBILE_PAYMENT : 'MOBILE PAYMENT',
    OTHER : 'OTHER',
}

export interface Payment {
    id: string,
    reference: string,
    amount: number,
    paymentDate: Date,
    paymentMethod: string,
    notes: string,
    transactionNumber: string,
    isReconciled: boolean,
    Invoice: {
        invoiceId: string,
        invoiceNumber: string,
        totalAmount: number,
        customer:{
            user:{
                firstName: string,
                lastName: string,
            }
        }
    },
}

export interface PaymentCreateInput{
    invoiceId: string,
    invoiceNumber?: string,
    amount: number,
    paymentDate: Date,
    paymentMethod: string,
    transactionNumber?: string,
    notes?: string,
}

export interface PaymentUpdateInput{
    amount?: number,
    paymentDate: Date,
    paymentMethod: PayementMetod,
    notes: string,
    transactionNumber?: string,
}