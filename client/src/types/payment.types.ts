
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
    refrence: string,
    amount: number,
    paymentDate: Date,
    payementMethod: PayementMetod,
    notes: string,
    transactionNumber: string,
    isReconciled: boolean,
    invoiceId: string,
}

export interface PaymentCreateInput{
    amount: number,
    paymentDate: Date,
    paymentMethod: PayementMetod,
    notes?: string,
    transactionNumber: string,
    invoiceId: string,
}

export interface PaymentUpdateInput{
    amount?: number,
    paymentDate: Date,
    paymentMethod: PayementMetod,
    notes: string,
    transactionNumber?: string,
}