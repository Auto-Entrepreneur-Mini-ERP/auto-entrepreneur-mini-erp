import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Invoice
 *
 */
export type InvoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$InvoicePayload>;
export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type InvoiceAvgAggregateOutputType = {
    subtotal: runtime.Decimal | null;
    discount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    paidAmount: runtime.Decimal | null;
    remainingAmount: runtime.Decimal | null;
};
export type InvoiceSumAggregateOutputType = {
    subtotal: runtime.Decimal | null;
    discount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    paidAmount: runtime.Decimal | null;
    remainingAmount: runtime.Decimal | null;
};
export type InvoiceMinAggregateOutputType = {
    id: string | null;
    invoiceNumber: string | null;
    issueDate: Date | null;
    dueDate: Date | null;
    status: $Enums.InvoiceStatus | null;
    subtotal: runtime.Decimal | null;
    discount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    paidAmount: runtime.Decimal | null;
    remainingAmount: runtime.Decimal | null;
    notes: string | null;
    pdfUrl: string | null;
    AutoEntrepreneurId: string | null;
    customerId: string | null;
    creationDate: Date | null;
    updateDate: Date | null;
    quoteId: string | null;
};
export type InvoiceMaxAggregateOutputType = {
    id: string | null;
    invoiceNumber: string | null;
    issueDate: Date | null;
    dueDate: Date | null;
    status: $Enums.InvoiceStatus | null;
    subtotal: runtime.Decimal | null;
    discount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    paidAmount: runtime.Decimal | null;
    remainingAmount: runtime.Decimal | null;
    notes: string | null;
    pdfUrl: string | null;
    AutoEntrepreneurId: string | null;
    customerId: string | null;
    creationDate: Date | null;
    updateDate: Date | null;
    quoteId: string | null;
};
export type InvoiceCountAggregateOutputType = {
    id: number;
    invoiceNumber: number;
    issueDate: number;
    dueDate: number;
    status: number;
    subtotal: number;
    discount: number;
    totalAmount: number;
    paidAmount: number;
    remainingAmount: number;
    notes: number;
    pdfUrl: number;
    AutoEntrepreneurId: number;
    customerId: number;
    creationDate: number;
    updateDate: number;
    quoteId: number;
    _all: number;
};
export type InvoiceAvgAggregateInputType = {
    subtotal?: true;
    discount?: true;
    totalAmount?: true;
    paidAmount?: true;
    remainingAmount?: true;
};
export type InvoiceSumAggregateInputType = {
    subtotal?: true;
    discount?: true;
    totalAmount?: true;
    paidAmount?: true;
    remainingAmount?: true;
};
export type InvoiceMinAggregateInputType = {
    id?: true;
    invoiceNumber?: true;
    issueDate?: true;
    dueDate?: true;
    status?: true;
    subtotal?: true;
    discount?: true;
    totalAmount?: true;
    paidAmount?: true;
    remainingAmount?: true;
    notes?: true;
    pdfUrl?: true;
    AutoEntrepreneurId?: true;
    customerId?: true;
    creationDate?: true;
    updateDate?: true;
    quoteId?: true;
};
export type InvoiceMaxAggregateInputType = {
    id?: true;
    invoiceNumber?: true;
    issueDate?: true;
    dueDate?: true;
    status?: true;
    subtotal?: true;
    discount?: true;
    totalAmount?: true;
    paidAmount?: true;
    remainingAmount?: true;
    notes?: true;
    pdfUrl?: true;
    AutoEntrepreneurId?: true;
    customerId?: true;
    creationDate?: true;
    updateDate?: true;
    quoteId?: true;
};
export type InvoiceCountAggregateInputType = {
    id?: true;
    invoiceNumber?: true;
    issueDate?: true;
    dueDate?: true;
    status?: true;
    subtotal?: true;
    discount?: true;
    totalAmount?: true;
    paidAmount?: true;
    remainingAmount?: true;
    notes?: true;
    pdfUrl?: true;
    AutoEntrepreneurId?: true;
    customerId?: true;
    creationDate?: true;
    updateDate?: true;
    quoteId?: true;
    _all?: true;
};
export type InvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: Prisma.InvoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.InvoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType;
};
export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvoice[P]> : Prisma.GetScalarType<T[P], AggregateInvoice[P]>;
};
export type InvoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithAggregationInput | Prisma.InvoiceOrderByWithAggregationInput[];
    by: Prisma.InvoiceScalarFieldEnum[] | Prisma.InvoiceScalarFieldEnum;
    having?: Prisma.InvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceCountAggregateInputType | true;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type InvoiceGroupByOutputType = {
    id: string;
    invoiceNumber: string;
    issueDate: Date;
    dueDate: Date;
    status: $Enums.InvoiceStatus;
    subtotal: runtime.Decimal;
    discount: runtime.Decimal | null;
    totalAmount: runtime.Decimal;
    paidAmount: runtime.Decimal;
    remainingAmount: runtime.Decimal;
    notes: string | null;
    pdfUrl: string | null;
    AutoEntrepreneurId: string;
    customerId: string;
    creationDate: Date;
    updateDate: Date;
    quoteId: string | null;
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]>;
}>>;
export type InvoiceWhereInput = {
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    id?: Prisma.StringFilter<"Invoice"> | string;
    invoiceNumber?: Prisma.StringFilter<"Invoice"> | string;
    issueDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    status?: Prisma.EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalNullableFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    AutoEntrepreneurId?: Prisma.StringFilter<"Invoice"> | string;
    customerId?: Prisma.StringFilter<"Invoice"> | string;
    creationDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updateDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    quoteId?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    AutoEntrepreneur?: Prisma.XOR<Prisma.AutoEntrepreneurScalarRelationFilter, Prisma.AutoEntrepreneurWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    invoiceLines?: Prisma.InvoiceLineListRelationFilter;
    payments?: Prisma.PaymentListRelationFilter;
    quote?: Prisma.XOR<Prisma.QuoteNullableScalarRelationFilter, Prisma.QuoteWhereInput> | null;
};
export type InvoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    remainingAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    quoteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    invoiceLines?: Prisma.InvoiceLineOrderByRelationAggregateInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
    quote?: Prisma.QuoteOrderByWithRelationInput;
    _relevance?: Prisma.InvoiceOrderByRelevanceInput;
};
export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    invoiceNumber?: string;
    quoteId?: string;
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    issueDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    status?: Prisma.EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalNullableFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    AutoEntrepreneurId?: Prisma.StringFilter<"Invoice"> | string;
    customerId?: Prisma.StringFilter<"Invoice"> | string;
    creationDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updateDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    AutoEntrepreneur?: Prisma.XOR<Prisma.AutoEntrepreneurScalarRelationFilter, Prisma.AutoEntrepreneurWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    invoiceLines?: Prisma.InvoiceLineListRelationFilter;
    payments?: Prisma.PaymentListRelationFilter;
    quote?: Prisma.XOR<Prisma.QuoteNullableScalarRelationFilter, Prisma.QuoteWhereInput> | null;
}, "id" | "invoiceNumber" | "quoteId">;
export type InvoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    remainingAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    quoteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.InvoiceCountOrderByAggregateInput;
    _avg?: Prisma.InvoiceAvgOrderByAggregateInput;
    _max?: Prisma.InvoiceMaxOrderByAggregateInput;
    _min?: Prisma.InvoiceMinOrderByAggregateInput;
    _sum?: Prisma.InvoiceSumOrderByAggregateInput;
};
export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    invoiceNumber?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    issueDate?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
    dueDate?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
    status?: Prisma.EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalNullableWithAggregatesFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalWithAggregatesFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalWithAggregatesFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalWithAggregatesFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    pdfUrl?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    AutoEntrepreneurId?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    creationDate?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
    updateDate?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
    quoteId?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
};
export type InvoiceCreateInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutInvoicesInput;
    customer: Prisma.CustomerCreateNestedOneWithoutInvoicesInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutInvoiceInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutInvoiceInput;
    quote?: Prisma.QuoteCreateNestedOneWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    quoteId?: string | null;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutInvoicesNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutInvoicesNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutInvoiceNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutInvoiceNestedInput;
    quote?: Prisma.QuoteUpdateOneWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quoteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceCreateManyInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    quoteId?: string | null;
};
export type InvoiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quoteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvoiceListRelationFilter = {
    every?: Prisma.InvoiceWhereInput;
    some?: Prisma.InvoiceWhereInput;
    none?: Prisma.InvoiceWhereInput;
};
export type InvoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvoiceOrderByRelevanceInput = {
    fields: Prisma.InvoiceOrderByRelevanceFieldEnum | Prisma.InvoiceOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type InvoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    remainingAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    quoteId?: Prisma.SortOrder;
};
export type InvoiceAvgOrderByAggregateInput = {
    subtotal?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    remainingAmount?: Prisma.SortOrder;
};
export type InvoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    remainingAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    quoteId?: Prisma.SortOrder;
};
export type InvoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    remainingAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    quoteId?: Prisma.SortOrder;
};
export type InvoiceSumOrderByAggregateInput = {
    subtotal?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    paidAmount?: Prisma.SortOrder;
    remainingAmount?: Prisma.SortOrder;
};
export type InvoiceNullableScalarRelationFilter = {
    is?: Prisma.InvoiceWhereInput | null;
    isNot?: Prisma.InvoiceWhereInput | null;
};
export type InvoiceScalarRelationFilter = {
    is?: Prisma.InvoiceWhereInput;
    isNot?: Prisma.InvoiceWhereInput;
};
export type InvoiceCreateNestedManyWithoutAutoEntrepreneurInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutAutoEntrepreneurInput, Prisma.InvoiceUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.InvoiceCreateWithoutAutoEntrepreneurInput[] | Prisma.InvoiceUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.InvoiceCreateOrConnectWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.InvoiceCreateManyAutoEntrepreneurInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutAutoEntrepreneurInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutAutoEntrepreneurInput, Prisma.InvoiceUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.InvoiceCreateWithoutAutoEntrepreneurInput[] | Prisma.InvoiceUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.InvoiceCreateOrConnectWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.InvoiceCreateManyAutoEntrepreneurInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutAutoEntrepreneurNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutAutoEntrepreneurInput, Prisma.InvoiceUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.InvoiceCreateWithoutAutoEntrepreneurInput[] | Prisma.InvoiceUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.InvoiceCreateOrConnectWithoutAutoEntrepreneurInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.InvoiceCreateManyAutoEntrepreneurInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutAutoEntrepreneurInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutAutoEntrepreneurInput | Prisma.InvoiceUpdateManyWithWhereWithoutAutoEntrepreneurInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutAutoEntrepreneurInput, Prisma.InvoiceUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.InvoiceCreateWithoutAutoEntrepreneurInput[] | Prisma.InvoiceUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.InvoiceCreateOrConnectWithoutAutoEntrepreneurInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.InvoiceCreateManyAutoEntrepreneurInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutAutoEntrepreneurInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutAutoEntrepreneurInput | Prisma.InvoiceUpdateManyWithWhereWithoutAutoEntrepreneurInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutCustomerInput, Prisma.InvoiceUncheckedCreateWithoutCustomerInput> | Prisma.InvoiceCreateWithoutCustomerInput[] | Prisma.InvoiceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutCustomerInput | Prisma.InvoiceCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.InvoiceCreateManyCustomerInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutCustomerInput, Prisma.InvoiceUncheckedCreateWithoutCustomerInput> | Prisma.InvoiceCreateWithoutCustomerInput[] | Prisma.InvoiceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutCustomerInput | Prisma.InvoiceCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.InvoiceCreateManyCustomerInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutCustomerInput, Prisma.InvoiceUncheckedCreateWithoutCustomerInput> | Prisma.InvoiceCreateWithoutCustomerInput[] | Prisma.InvoiceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutCustomerInput | Prisma.InvoiceCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutCustomerInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.InvoiceCreateManyCustomerInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutCustomerInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutCustomerInput | Prisma.InvoiceUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutCustomerInput, Prisma.InvoiceUncheckedCreateWithoutCustomerInput> | Prisma.InvoiceCreateWithoutCustomerInput[] | Prisma.InvoiceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutCustomerInput | Prisma.InvoiceCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutCustomerInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.InvoiceCreateManyCustomerInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutCustomerInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutCustomerInput | Prisma.InvoiceUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus;
};
export type InvoiceCreateNestedOneWithoutQuoteInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutQuoteInput, Prisma.InvoiceUncheckedCreateWithoutQuoteInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutQuoteInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUncheckedCreateNestedOneWithoutQuoteInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutQuoteInput, Prisma.InvoiceUncheckedCreateWithoutQuoteInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutQuoteInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUpdateOneWithoutQuoteNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutQuoteInput, Prisma.InvoiceUncheckedCreateWithoutQuoteInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutQuoteInput;
    upsert?: Prisma.InvoiceUpsertWithoutQuoteInput;
    disconnect?: Prisma.InvoiceWhereInput | boolean;
    delete?: Prisma.InvoiceWhereInput | boolean;
    connect?: Prisma.InvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvoiceUpdateToOneWithWhereWithoutQuoteInput, Prisma.InvoiceUpdateWithoutQuoteInput>, Prisma.InvoiceUncheckedUpdateWithoutQuoteInput>;
};
export type InvoiceUncheckedUpdateOneWithoutQuoteNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutQuoteInput, Prisma.InvoiceUncheckedCreateWithoutQuoteInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutQuoteInput;
    upsert?: Prisma.InvoiceUpsertWithoutQuoteInput;
    disconnect?: Prisma.InvoiceWhereInput | boolean;
    delete?: Prisma.InvoiceWhereInput | boolean;
    connect?: Prisma.InvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvoiceUpdateToOneWithWhereWithoutQuoteInput, Prisma.InvoiceUpdateWithoutQuoteInput>, Prisma.InvoiceUncheckedUpdateWithoutQuoteInput>;
};
export type InvoiceCreateNestedOneWithoutInvoiceLinesInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutInvoiceLinesInput, Prisma.InvoiceUncheckedCreateWithoutInvoiceLinesInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutInvoiceLinesInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUpdateOneRequiredWithoutInvoiceLinesNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutInvoiceLinesInput, Prisma.InvoiceUncheckedCreateWithoutInvoiceLinesInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutInvoiceLinesInput;
    upsert?: Prisma.InvoiceUpsertWithoutInvoiceLinesInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvoiceUpdateToOneWithWhereWithoutInvoiceLinesInput, Prisma.InvoiceUpdateWithoutInvoiceLinesInput>, Prisma.InvoiceUncheckedUpdateWithoutInvoiceLinesInput>;
};
export type InvoiceCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutPaymentsInput, Prisma.InvoiceUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutPaymentsInput, Prisma.InvoiceUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.InvoiceUpsertWithoutPaymentsInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvoiceUpdateToOneWithWhereWithoutPaymentsInput, Prisma.InvoiceUpdateWithoutPaymentsInput>, Prisma.InvoiceUncheckedUpdateWithoutPaymentsInput>;
};
export type InvoiceCreateWithoutAutoEntrepreneurInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutInvoicesInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutInvoiceInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutInvoiceInput;
    quote?: Prisma.QuoteCreateNestedOneWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateWithoutAutoEntrepreneurInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    quoteId?: string | null;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceCreateOrConnectWithoutAutoEntrepreneurInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutAutoEntrepreneurInput, Prisma.InvoiceUncheckedCreateWithoutAutoEntrepreneurInput>;
};
export type InvoiceCreateManyAutoEntrepreneurInputEnvelope = {
    data: Prisma.InvoiceCreateManyAutoEntrepreneurInput | Prisma.InvoiceCreateManyAutoEntrepreneurInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutAutoEntrepreneurInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutAutoEntrepreneurInput, Prisma.InvoiceUncheckedUpdateWithoutAutoEntrepreneurInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutAutoEntrepreneurInput, Prisma.InvoiceUncheckedCreateWithoutAutoEntrepreneurInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutAutoEntrepreneurInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutAutoEntrepreneurInput, Prisma.InvoiceUncheckedUpdateWithoutAutoEntrepreneurInput>;
};
export type InvoiceUpdateManyWithWhereWithoutAutoEntrepreneurInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurInput>;
};
export type InvoiceScalarWhereInput = {
    AND?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    OR?: Prisma.InvoiceScalarWhereInput[];
    NOT?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    id?: Prisma.StringFilter<"Invoice"> | string;
    invoiceNumber?: Prisma.StringFilter<"Invoice"> | string;
    issueDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    dueDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    status?: Prisma.EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.DecimalNullableFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    AutoEntrepreneurId?: Prisma.StringFilter<"Invoice"> | string;
    customerId?: Prisma.StringFilter<"Invoice"> | string;
    creationDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updateDate?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    quoteId?: Prisma.StringNullableFilter<"Invoice"> | string | null;
};
export type InvoiceCreateWithoutCustomerInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutInvoicesInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutInvoiceInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutInvoiceInput;
    quote?: Prisma.QuoteCreateNestedOneWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateWithoutCustomerInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    quoteId?: string | null;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceCreateOrConnectWithoutCustomerInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutCustomerInput, Prisma.InvoiceUncheckedCreateWithoutCustomerInput>;
};
export type InvoiceCreateManyCustomerInputEnvelope = {
    data: Prisma.InvoiceCreateManyCustomerInput | Prisma.InvoiceCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutCustomerInput, Prisma.InvoiceUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutCustomerInput, Prisma.InvoiceUncheckedCreateWithoutCustomerInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutCustomerInput, Prisma.InvoiceUncheckedUpdateWithoutCustomerInput>;
};
export type InvoiceUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutCustomerInput>;
};
export type InvoiceCreateWithoutQuoteInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutInvoicesInput;
    customer: Prisma.CustomerCreateNestedOneWithoutInvoicesInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutInvoiceInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateWithoutQuoteInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceCreateOrConnectWithoutQuoteInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutQuoteInput, Prisma.InvoiceUncheckedCreateWithoutQuoteInput>;
};
export type InvoiceUpsertWithoutQuoteInput = {
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutQuoteInput, Prisma.InvoiceUncheckedUpdateWithoutQuoteInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutQuoteInput, Prisma.InvoiceUncheckedCreateWithoutQuoteInput>;
    where?: Prisma.InvoiceWhereInput;
};
export type InvoiceUpdateToOneWithWhereWithoutQuoteInput = {
    where?: Prisma.InvoiceWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutQuoteInput, Prisma.InvoiceUncheckedUpdateWithoutQuoteInput>;
};
export type InvoiceUpdateWithoutQuoteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutInvoicesNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutInvoicesNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutInvoiceNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateWithoutQuoteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceCreateWithoutInvoiceLinesInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutInvoicesInput;
    customer: Prisma.CustomerCreateNestedOneWithoutInvoicesInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutInvoiceInput;
    quote?: Prisma.QuoteCreateNestedOneWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateWithoutInvoiceLinesInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    quoteId?: string | null;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceCreateOrConnectWithoutInvoiceLinesInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutInvoiceLinesInput, Prisma.InvoiceUncheckedCreateWithoutInvoiceLinesInput>;
};
export type InvoiceUpsertWithoutInvoiceLinesInput = {
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutInvoiceLinesInput, Prisma.InvoiceUncheckedUpdateWithoutInvoiceLinesInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutInvoiceLinesInput, Prisma.InvoiceUncheckedCreateWithoutInvoiceLinesInput>;
    where?: Prisma.InvoiceWhereInput;
};
export type InvoiceUpdateToOneWithWhereWithoutInvoiceLinesInput = {
    where?: Prisma.InvoiceWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutInvoiceLinesInput, Prisma.InvoiceUncheckedUpdateWithoutInvoiceLinesInput>;
};
export type InvoiceUpdateWithoutInvoiceLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutInvoicesNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutInvoicesNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutInvoiceNestedInput;
    quote?: Prisma.QuoteUpdateOneWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateWithoutInvoiceLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quoteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceCreateWithoutPaymentsInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutInvoicesInput;
    customer: Prisma.CustomerCreateNestedOneWithoutInvoicesInput;
    invoiceLines?: Prisma.InvoiceLineCreateNestedManyWithoutInvoiceInput;
    quote?: Prisma.QuoteCreateNestedOneWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    quoteId?: string | null;
    invoiceLines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutPaymentsInput, Prisma.InvoiceUncheckedCreateWithoutPaymentsInput>;
};
export type InvoiceUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutPaymentsInput, Prisma.InvoiceUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutPaymentsInput, Prisma.InvoiceUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.InvoiceWhereInput;
};
export type InvoiceUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.InvoiceWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutPaymentsInput, Prisma.InvoiceUncheckedUpdateWithoutPaymentsInput>;
};
export type InvoiceUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutInvoicesNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutInvoicesNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutInvoiceNestedInput;
    quote?: Prisma.QuoteUpdateOneWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quoteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceCreateManyAutoEntrepreneurInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    quoteId?: string | null;
};
export type InvoiceUpdateWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutInvoicesNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutInvoiceNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutInvoiceNestedInput;
    quote?: Prisma.QuoteUpdateOneWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quoteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateManyWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quoteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvoiceCreateManyCustomerInput = {
    id?: string;
    invoiceNumber: string;
    issueDate: Date | string;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    quoteId?: string | null;
};
export type InvoiceUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutInvoicesNestedInput;
    invoiceLines?: Prisma.InvoiceLineUpdateManyWithoutInvoiceNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutInvoiceNestedInput;
    quote?: Prisma.QuoteUpdateOneWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quoteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceLines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paidAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    remainingAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quoteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type InvoiceCountOutputType
 */
export type InvoiceCountOutputType = {
    invoiceLines: number;
    payments: number;
};
export type InvoiceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoiceLines?: boolean | InvoiceCountOutputTypeCountInvoiceLinesArgs;
    payments?: boolean | InvoiceCountOutputTypeCountPaymentsArgs;
};
/**
 * InvoiceCountOutputType without action
 */
export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: Prisma.InvoiceCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * InvoiceCountOutputType without action
 */
export type InvoiceCountOutputTypeCountInvoiceLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceLineWhereInput;
};
/**
 * InvoiceCountOutputType without action
 */
export type InvoiceCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type InvoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invoiceNumber?: boolean;
    issueDate?: boolean;
    dueDate?: boolean;
    status?: boolean;
    subtotal?: boolean;
    discount?: boolean;
    totalAmount?: boolean;
    paidAmount?: boolean;
    remainingAmount?: boolean;
    notes?: boolean;
    pdfUrl?: boolean;
    AutoEntrepreneurId?: boolean;
    customerId?: boolean;
    creationDate?: boolean;
    updateDate?: boolean;
    quoteId?: boolean;
    AutoEntrepreneur?: boolean | Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    invoiceLines?: boolean | Prisma.Invoice$invoiceLinesArgs<ExtArgs>;
    payments?: boolean | Prisma.Invoice$paymentsArgs<ExtArgs>;
    quote?: boolean | Prisma.Invoice$quoteArgs<ExtArgs>;
    _count?: boolean | Prisma.InvoiceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectScalar = {
    id?: boolean;
    invoiceNumber?: boolean;
    issueDate?: boolean;
    dueDate?: boolean;
    status?: boolean;
    subtotal?: boolean;
    discount?: boolean;
    totalAmount?: boolean;
    paidAmount?: boolean;
    remainingAmount?: boolean;
    notes?: boolean;
    pdfUrl?: boolean;
    AutoEntrepreneurId?: boolean;
    customerId?: boolean;
    creationDate?: boolean;
    updateDate?: boolean;
    quoteId?: boolean;
};
export type InvoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "invoiceNumber" | "issueDate" | "dueDate" | "status" | "subtotal" | "discount" | "totalAmount" | "paidAmount" | "remainingAmount" | "notes" | "pdfUrl" | "AutoEntrepreneurId" | "customerId" | "creationDate" | "updateDate" | "quoteId", ExtArgs["result"]["invoice"]>;
export type InvoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AutoEntrepreneur?: boolean | Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    invoiceLines?: boolean | Prisma.Invoice$invoiceLinesArgs<ExtArgs>;
    payments?: boolean | Prisma.Invoice$paymentsArgs<ExtArgs>;
    quote?: boolean | Prisma.Invoice$quoteArgs<ExtArgs>;
    _count?: boolean | Prisma.InvoiceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $InvoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Invoice";
    objects: {
        AutoEntrepreneur: Prisma.$AutoEntrepreneurPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs>;
        invoiceLines: Prisma.$InvoiceLinePayload<ExtArgs>[];
        payments: Prisma.$PaymentPayload<ExtArgs>[];
        quote: Prisma.$QuotePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        invoiceNumber: string;
        issueDate: Date;
        dueDate: Date;
        status: $Enums.InvoiceStatus;
        subtotal: runtime.Decimal;
        discount: runtime.Decimal | null;
        totalAmount: runtime.Decimal;
        paidAmount: runtime.Decimal;
        remainingAmount: runtime.Decimal;
        notes: string | null;
        pdfUrl: string | null;
        AutoEntrepreneurId: string;
        customerId: string;
        creationDate: Date;
        updateDate: Date;
        quoteId: string | null;
    }, ExtArgs["result"]["invoice"]>;
    composites: {};
};
export type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvoicePayload, S>;
export type InvoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvoiceCountAggregateInputType | true;
};
export interface InvoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Invoice'];
        meta: {
            name: 'Invoice';
        };
    };
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     *
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InvoiceFindManyArgs>(args?: Prisma.SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     *
     */
    create<T extends InvoiceCreateArgs>(args: Prisma.SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     *
     */
    delete<T extends InvoiceDeleteArgs>(args: Prisma.SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InvoiceUpdateArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: Prisma.SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(args?: Prisma.Subset<T, InvoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvoiceCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Prisma.Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>;
    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends InvoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: InvoiceGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Invoice model
     */
    readonly fields: InvoiceFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Invoice.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    AutoEntrepreneur<T extends Prisma.AutoEntrepreneurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invoiceLines<T extends Prisma.Invoice$invoiceLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invoice$invoiceLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payments<T extends Prisma.Invoice$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invoice$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    quote<T extends Prisma.Invoice$quoteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invoice$quoteArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Invoice model
 */
export interface InvoiceFieldRefs {
    readonly id: Prisma.FieldRef<"Invoice", 'String'>;
    readonly invoiceNumber: Prisma.FieldRef<"Invoice", 'String'>;
    readonly issueDate: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly dueDate: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Invoice", 'InvoiceStatus'>;
    readonly subtotal: Prisma.FieldRef<"Invoice", 'Decimal'>;
    readonly discount: Prisma.FieldRef<"Invoice", 'Decimal'>;
    readonly totalAmount: Prisma.FieldRef<"Invoice", 'Decimal'>;
    readonly paidAmount: Prisma.FieldRef<"Invoice", 'Decimal'>;
    readonly remainingAmount: Prisma.FieldRef<"Invoice", 'Decimal'>;
    readonly notes: Prisma.FieldRef<"Invoice", 'String'>;
    readonly pdfUrl: Prisma.FieldRef<"Invoice", 'String'>;
    readonly AutoEntrepreneurId: Prisma.FieldRef<"Invoice", 'String'>;
    readonly customerId: Prisma.FieldRef<"Invoice", 'String'>;
    readonly creationDate: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly updateDate: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly quoteId: Prisma.FieldRef<"Invoice", 'String'>;
}
/**
 * Invoice findUnique
 */
export type InvoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoice to fetch.
     */
    where: Prisma.InvoiceWhereUniqueInput;
};
/**
 * Invoice findUniqueOrThrow
 */
export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoice to fetch.
     */
    where: Prisma.InvoiceWhereUniqueInput;
};
/**
 * Invoice findFirst
 */
export type InvoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoice to fetch.
     */
    where?: Prisma.InvoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invoices.
     */
    cursor?: Prisma.InvoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invoices.
     */
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
/**
 * Invoice findFirstOrThrow
 */
export type InvoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoice to fetch.
     */
    where?: Prisma.InvoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invoices.
     */
    cursor?: Prisma.InvoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invoices.
     */
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
/**
 * Invoice findMany
 */
export type InvoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoices to fetch.
     */
    where?: Prisma.InvoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Invoices.
     */
    cursor?: Prisma.InvoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
/**
 * Invoice create
 */
export type InvoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Invoice.
     */
    data: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
};
/**
 * Invoice createMany
 */
export type InvoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Invoice update
 */
export type InvoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Invoice.
     */
    data: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
    /**
     * Choose, which Invoice to update.
     */
    where: Prisma.InvoiceWhereUniqueInput;
};
/**
 * Invoice updateMany
 */
export type InvoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>;
    /**
     * Filter which Invoices to update
     */
    where?: Prisma.InvoiceWhereInput;
    /**
     * Limit how many Invoices to update.
     */
    limit?: number;
};
/**
 * Invoice upsert
 */
export type InvoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: Prisma.InvoiceWhereUniqueInput;
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
};
/**
 * Invoice delete
 */
export type InvoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * Filter which Invoice to delete.
     */
    where: Prisma.InvoiceWhereUniqueInput;
};
/**
 * Invoice deleteMany
 */
export type InvoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: Prisma.InvoiceWhereInput;
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number;
};
/**
 * Invoice.invoiceLines
 */
export type Invoice$invoiceLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceLine
     */
    select?: Prisma.InvoiceLineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceLine
     */
    omit?: Prisma.InvoiceLineOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceLineInclude<ExtArgs> | null;
    where?: Prisma.InvoiceLineWhereInput;
    orderBy?: Prisma.InvoiceLineOrderByWithRelationInput | Prisma.InvoiceLineOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceLineScalarFieldEnum | Prisma.InvoiceLineScalarFieldEnum[];
};
/**
 * Invoice.payments
 */
export type Invoice$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
/**
 * Invoice.quote
 */
export type Invoice$quoteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: Prisma.QuoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Quote
     */
    omit?: Prisma.QuoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuoteInclude<ExtArgs> | null;
    where?: Prisma.QuoteWhereInput;
};
/**
 * Invoice without action
 */
export type InvoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Invoice.d.ts.map