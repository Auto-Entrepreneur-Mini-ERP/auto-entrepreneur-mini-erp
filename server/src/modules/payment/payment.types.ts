
enum PayementMetod {
    CASH = 'CASH',
    CHECK = 'CHECK',
    BANK_TRANSFER = 'BANK_TRANSFER',
    CREDIT_CARD = 'CREDIT_CARD',
    MOBILE_PAYMENT = 'MOBILE_PAYMENT',
    OTHER = 'OTHER',
}

export interface PaymentOutput {
    id: string,
    refrence: string,
    amount: number,
    paymentDate: Date,
    payementMethod: PayementMetod,
    notes: string,
    transactionNumber: string,
    isReconciled: boolean,
    AutoEntrepreneurId: string,
    invoiceId: string,
    creationDate: Date,
}

export interface PaymentCreateInput{
    refrence: string,
    amount: number,
    paymentDate: Date,
    payementMethod: PayementMetod,
    notes?: string,
    transactionNumber?: string,
    AutoEntrepreneurId: string,
    invoiceId: string,
}

export interface PaymentUpdateInput{
    amount?: number,
    paymentDate?: Date,
    payementMethod?: PayementMetod,
    notes?: string,
    transactionNumber?: string,
}