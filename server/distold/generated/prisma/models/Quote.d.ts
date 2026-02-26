import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Quote
 *
 */
export type QuoteModel = runtime.Types.Result.DefaultSelection<Prisma.$QuotePayload>;
export type AggregateQuote = {
    _count: QuoteCountAggregateOutputType | null;
    _avg: QuoteAvgAggregateOutputType | null;
    _sum: QuoteSumAggregateOutputType | null;
    _min: QuoteMinAggregateOutputType | null;
    _max: QuoteMaxAggregateOutputType | null;
};
export type QuoteAvgAggregateOutputType = {
    subtotal: runtime.Decimal | null;
    taxAmount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
};
export type QuoteSumAggregateOutputType = {
    subtotal: runtime.Decimal | null;
    taxAmount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
};
export type QuoteMinAggregateOutputType = {
    id: string | null;
    quoteNumber: string | null;
    issueDate: Date | null;
    validityDate: Date | null;
    status: $Enums.QuoteStatus | null;
    subtotal: runtime.Decimal | null;
    taxAmount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    notes: string | null;
    pdfUrl: string | null;
    AutoEntrepreneurId: string | null;
    customerId: string | null;
    creationDate: Date | null;
    updateDate: Date | null;
    invoiceId: string | null;
};
export type QuoteMaxAggregateOutputType = {
    id: string | null;
    quoteNumber: string | null;
    issueDate: Date | null;
    validityDate: Date | null;
    status: $Enums.QuoteStatus | null;
    subtotal: runtime.Decimal | null;
    taxAmount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    notes: string | null;
    pdfUrl: string | null;
    AutoEntrepreneurId: string | null;
    customerId: string | null;
    creationDate: Date | null;
    updateDate: Date | null;
    invoiceId: string | null;
};
export type QuoteCountAggregateOutputType = {
    id: number;
    quoteNumber: number;
    issueDate: number;
    validityDate: number;
    status: number;
    subtotal: number;
    taxAmount: number;
    totalAmount: number;
    notes: number;
    pdfUrl: number;
    AutoEntrepreneurId: number;
    customerId: number;
    creationDate: number;
    updateDate: number;
    invoiceId: number;
    _all: number;
};
export type QuoteAvgAggregateInputType = {
    subtotal?: true;
    taxAmount?: true;
    totalAmount?: true;
};
export type QuoteSumAggregateInputType = {
    subtotal?: true;
    taxAmount?: true;
    totalAmount?: true;
};
export type QuoteMinAggregateInputType = {
    id?: true;
    quoteNumber?: true;
    issueDate?: true;
    validityDate?: true;
    status?: true;
    subtotal?: true;
    taxAmount?: true;
    totalAmount?: true;
    notes?: true;
    pdfUrl?: true;
    AutoEntrepreneurId?: true;
    customerId?: true;
    creationDate?: true;
    updateDate?: true;
    invoiceId?: true;
};
export type QuoteMaxAggregateInputType = {
    id?: true;
    quoteNumber?: true;
    issueDate?: true;
    validityDate?: true;
    status?: true;
    subtotal?: true;
    taxAmount?: true;
    totalAmount?: true;
    notes?: true;
    pdfUrl?: true;
    AutoEntrepreneurId?: true;
    customerId?: true;
    creationDate?: true;
    updateDate?: true;
    invoiceId?: true;
};
export type QuoteCountAggregateInputType = {
    id?: true;
    quoteNumber?: true;
    issueDate?: true;
    validityDate?: true;
    status?: true;
    subtotal?: true;
    taxAmount?: true;
    totalAmount?: true;
    notes?: true;
    pdfUrl?: true;
    AutoEntrepreneurId?: true;
    customerId?: true;
    creationDate?: true;
    updateDate?: true;
    invoiceId?: true;
    _all?: true;
};
export type QuoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Quote to aggregate.
     */
    where?: Prisma.QuoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Quotes to fetch.
     */
    orderBy?: Prisma.QuoteOrderByWithRelationInput | Prisma.QuoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.QuoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Quotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Quotes
    **/
    _count?: true | QuoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: QuoteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: QuoteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: QuoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: QuoteMaxAggregateInputType;
};
export type GetQuoteAggregateType<T extends QuoteAggregateArgs> = {
    [P in keyof T & keyof AggregateQuote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuote[P]> : Prisma.GetScalarType<T[P], AggregateQuote[P]>;
};
export type QuoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuoteWhereInput;
    orderBy?: Prisma.QuoteOrderByWithAggregationInput | Prisma.QuoteOrderByWithAggregationInput[];
    by: Prisma.QuoteScalarFieldEnum[] | Prisma.QuoteScalarFieldEnum;
    having?: Prisma.QuoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuoteCountAggregateInputType | true;
    _avg?: QuoteAvgAggregateInputType;
    _sum?: QuoteSumAggregateInputType;
    _min?: QuoteMinAggregateInputType;
    _max?: QuoteMaxAggregateInputType;
};
export type QuoteGroupByOutputType = {
    id: string;
    quoteNumber: string;
    issueDate: Date;
    validityDate: Date;
    status: $Enums.QuoteStatus;
    subtotal: runtime.Decimal;
    taxAmount: runtime.Decimal;
    totalAmount: runtime.Decimal;
    notes: string | null;
    pdfUrl: string | null;
    AutoEntrepreneurId: string;
    customerId: string;
    creationDate: Date;
    updateDate: Date;
    invoiceId: string | null;
    _count: QuoteCountAggregateOutputType | null;
    _avg: QuoteAvgAggregateOutputType | null;
    _sum: QuoteSumAggregateOutputType | null;
    _min: QuoteMinAggregateOutputType | null;
    _max: QuoteMaxAggregateOutputType | null;
};
type GetQuoteGroupByPayload<T extends QuoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuoteGroupByOutputType[P]>;
}>>;
export type QuoteWhereInput = {
    AND?: Prisma.QuoteWhereInput | Prisma.QuoteWhereInput[];
    OR?: Prisma.QuoteWhereInput[];
    NOT?: Prisma.QuoteWhereInput | Prisma.QuoteWhereInput[];
    id?: Prisma.StringFilter<"Quote"> | string;
    quoteNumber?: Prisma.StringFilter<"Quote"> | string;
    issueDate?: Prisma.DateTimeFilter<"Quote"> | Date | string;
    validityDate?: Prisma.DateTimeFilter<"Quote"> | Date | string;
    status?: Prisma.EnumQuoteStatusFilter<"Quote"> | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFilter<"Quote"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFilter<"Quote"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFilter<"Quote"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"Quote"> | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"Quote"> | string | null;
    AutoEntrepreneurId?: Prisma.StringFilter<"Quote"> | string;
    customerId?: Prisma.StringFilter<"Quote"> | string;
    creationDate?: Prisma.DateTimeFilter<"Quote"> | Date | string;
    updateDate?: Prisma.DateTimeFilter<"Quote"> | Date | string;
    invoiceId?: Prisma.StringNullableFilter<"Quote"> | string | null;
    AutoEntrepreneur?: Prisma.XOR<Prisma.AutoEntrepreneurScalarRelationFilter, Prisma.AutoEntrepreneurWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    quoteLines?: Prisma.QuoteLineListRelationFilter;
    invoice?: Prisma.XOR<Prisma.InvoiceNullableScalarRelationFilter, Prisma.InvoiceWhereInput> | null;
};
export type QuoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    quoteNumber?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    validityDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    quoteLines?: Prisma.QuoteLineOrderByRelationAggregateInput;
    invoice?: Prisma.InvoiceOrderByWithRelationInput;
    _relevance?: Prisma.QuoteOrderByRelevanceInput;
};
export type QuoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    quoteNumber?: string;
    invoiceId?: string;
    AND?: Prisma.QuoteWhereInput | Prisma.QuoteWhereInput[];
    OR?: Prisma.QuoteWhereInput[];
    NOT?: Prisma.QuoteWhereInput | Prisma.QuoteWhereInput[];
    issueDate?: Prisma.DateTimeFilter<"Quote"> | Date | string;
    validityDate?: Prisma.DateTimeFilter<"Quote"> | Date | string;
    status?: Prisma.EnumQuoteStatusFilter<"Quote"> | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFilter<"Quote"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFilter<"Quote"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFilter<"Quote"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"Quote"> | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"Quote"> | string | null;
    AutoEntrepreneurId?: Prisma.StringFilter<"Quote"> | string;
    customerId?: Prisma.StringFilter<"Quote"> | string;
    creationDate?: Prisma.DateTimeFilter<"Quote"> | Date | string;
    updateDate?: Prisma.DateTimeFilter<"Quote"> | Date | string;
    AutoEntrepreneur?: Prisma.XOR<Prisma.AutoEntrepreneurScalarRelationFilter, Prisma.AutoEntrepreneurWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    quoteLines?: Prisma.QuoteLineListRelationFilter;
    invoice?: Prisma.XOR<Prisma.InvoiceNullableScalarRelationFilter, Prisma.InvoiceWhereInput> | null;
}, "id" | "quoteNumber" | "invoiceId">;
export type QuoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    quoteNumber?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    validityDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.QuoteCountOrderByAggregateInput;
    _avg?: Prisma.QuoteAvgOrderByAggregateInput;
    _max?: Prisma.QuoteMaxOrderByAggregateInput;
    _min?: Prisma.QuoteMinOrderByAggregateInput;
    _sum?: Prisma.QuoteSumOrderByAggregateInput;
};
export type QuoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuoteScalarWhereWithAggregatesInput | Prisma.QuoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuoteScalarWhereWithAggregatesInput | Prisma.QuoteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Quote"> | string;
    quoteNumber?: Prisma.StringWithAggregatesFilter<"Quote"> | string;
    issueDate?: Prisma.DateTimeWithAggregatesFilter<"Quote"> | Date | string;
    validityDate?: Prisma.DateTimeWithAggregatesFilter<"Quote"> | Date | string;
    status?: Prisma.EnumQuoteStatusWithAggregatesFilter<"Quote"> | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"Quote"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalWithAggregatesFilter<"Quote"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalWithAggregatesFilter<"Quote"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Quote"> | string | null;
    pdfUrl?: Prisma.StringNullableWithAggregatesFilter<"Quote"> | string | null;
    AutoEntrepreneurId?: Prisma.StringWithAggregatesFilter<"Quote"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"Quote"> | string;
    creationDate?: Prisma.DateTimeWithAggregatesFilter<"Quote"> | Date | string;
    updateDate?: Prisma.DateTimeWithAggregatesFilter<"Quote"> | Date | string;
    invoiceId?: Prisma.StringNullableWithAggregatesFilter<"Quote"> | string | null;
};
export type QuoteCreateInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutQuotesInput;
    customer: Prisma.CustomerCreateNestedOneWithoutQuotesInput;
    quoteLines?: Prisma.QuoteLineCreateNestedManyWithoutQuoteInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutQuoteInput;
};
export type QuoteUncheckedCreateInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
    quoteLines?: Prisma.QuoteLineUncheckedCreateNestedManyWithoutQuoteInput;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutQuoteInput;
};
export type QuoteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutQuotesNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutQuotesNestedInput;
    quoteLines?: Prisma.QuoteLineUpdateManyWithoutQuoteNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutQuoteNestedInput;
};
export type QuoteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quoteLines?: Prisma.QuoteLineUncheckedUpdateManyWithoutQuoteNestedInput;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutQuoteNestedInput;
};
export type QuoteCreateManyInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
};
export type QuoteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuoteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuoteListRelationFilter = {
    every?: Prisma.QuoteWhereInput;
    some?: Prisma.QuoteWhereInput;
    none?: Prisma.QuoteWhereInput;
};
export type QuoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuoteNullableScalarRelationFilter = {
    is?: Prisma.QuoteWhereInput | null;
    isNot?: Prisma.QuoteWhereInput | null;
};
export type QuoteOrderByRelevanceInput = {
    fields: Prisma.QuoteOrderByRelevanceFieldEnum | Prisma.QuoteOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type QuoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quoteNumber?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    validityDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
};
export type QuoteAvgOrderByAggregateInput = {
    subtotal?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
};
export type QuoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quoteNumber?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    validityDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
};
export type QuoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quoteNumber?: Prisma.SortOrder;
    issueDate?: Prisma.SortOrder;
    validityDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    updateDate?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
};
export type QuoteSumOrderByAggregateInput = {
    subtotal?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
};
export type QuoteScalarRelationFilter = {
    is?: Prisma.QuoteWhereInput;
    isNot?: Prisma.QuoteWhereInput;
};
export type QuoteCreateNestedManyWithoutAutoEntrepreneurInput = {
    create?: Prisma.XOR<Prisma.QuoteCreateWithoutAutoEntrepreneurInput, Prisma.QuoteUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.QuoteCreateWithoutAutoEntrepreneurInput[] | Prisma.QuoteUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.QuoteCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.QuoteCreateOrConnectWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.QuoteCreateManyAutoEntrepreneurInputEnvelope;
    connect?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
};
export type QuoteUncheckedCreateNestedManyWithoutAutoEntrepreneurInput = {
    create?: Prisma.XOR<Prisma.QuoteCreateWithoutAutoEntrepreneurInput, Prisma.QuoteUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.QuoteCreateWithoutAutoEntrepreneurInput[] | Prisma.QuoteUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.QuoteCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.QuoteCreateOrConnectWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.QuoteCreateManyAutoEntrepreneurInputEnvelope;
    connect?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
};
export type QuoteUpdateManyWithoutAutoEntrepreneurNestedInput = {
    create?: Prisma.XOR<Prisma.QuoteCreateWithoutAutoEntrepreneurInput, Prisma.QuoteUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.QuoteCreateWithoutAutoEntrepreneurInput[] | Prisma.QuoteUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.QuoteCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.QuoteCreateOrConnectWithoutAutoEntrepreneurInput[];
    upsert?: Prisma.QuoteUpsertWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.QuoteUpsertWithWhereUniqueWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.QuoteCreateManyAutoEntrepreneurInputEnvelope;
    set?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    disconnect?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    delete?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    connect?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    update?: Prisma.QuoteUpdateWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.QuoteUpdateWithWhereUniqueWithoutAutoEntrepreneurInput[];
    updateMany?: Prisma.QuoteUpdateManyWithWhereWithoutAutoEntrepreneurInput | Prisma.QuoteUpdateManyWithWhereWithoutAutoEntrepreneurInput[];
    deleteMany?: Prisma.QuoteScalarWhereInput | Prisma.QuoteScalarWhereInput[];
};
export type QuoteUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput = {
    create?: Prisma.XOR<Prisma.QuoteCreateWithoutAutoEntrepreneurInput, Prisma.QuoteUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.QuoteCreateWithoutAutoEntrepreneurInput[] | Prisma.QuoteUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.QuoteCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.QuoteCreateOrConnectWithoutAutoEntrepreneurInput[];
    upsert?: Prisma.QuoteUpsertWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.QuoteUpsertWithWhereUniqueWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.QuoteCreateManyAutoEntrepreneurInputEnvelope;
    set?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    disconnect?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    delete?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    connect?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    update?: Prisma.QuoteUpdateWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.QuoteUpdateWithWhereUniqueWithoutAutoEntrepreneurInput[];
    updateMany?: Prisma.QuoteUpdateManyWithWhereWithoutAutoEntrepreneurInput | Prisma.QuoteUpdateManyWithWhereWithoutAutoEntrepreneurInput[];
    deleteMany?: Prisma.QuoteScalarWhereInput | Prisma.QuoteScalarWhereInput[];
};
export type QuoteCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.QuoteCreateWithoutCustomerInput, Prisma.QuoteUncheckedCreateWithoutCustomerInput> | Prisma.QuoteCreateWithoutCustomerInput[] | Prisma.QuoteUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.QuoteCreateOrConnectWithoutCustomerInput | Prisma.QuoteCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.QuoteCreateManyCustomerInputEnvelope;
    connect?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
};
export type QuoteUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.QuoteCreateWithoutCustomerInput, Prisma.QuoteUncheckedCreateWithoutCustomerInput> | Prisma.QuoteCreateWithoutCustomerInput[] | Prisma.QuoteUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.QuoteCreateOrConnectWithoutCustomerInput | Prisma.QuoteCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.QuoteCreateManyCustomerInputEnvelope;
    connect?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
};
export type QuoteUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.QuoteCreateWithoutCustomerInput, Prisma.QuoteUncheckedCreateWithoutCustomerInput> | Prisma.QuoteCreateWithoutCustomerInput[] | Prisma.QuoteUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.QuoteCreateOrConnectWithoutCustomerInput | Prisma.QuoteCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.QuoteUpsertWithWhereUniqueWithoutCustomerInput | Prisma.QuoteUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.QuoteCreateManyCustomerInputEnvelope;
    set?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    disconnect?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    delete?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    connect?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    update?: Prisma.QuoteUpdateWithWhereUniqueWithoutCustomerInput | Prisma.QuoteUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.QuoteUpdateManyWithWhereWithoutCustomerInput | Prisma.QuoteUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.QuoteScalarWhereInput | Prisma.QuoteScalarWhereInput[];
};
export type QuoteUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.QuoteCreateWithoutCustomerInput, Prisma.QuoteUncheckedCreateWithoutCustomerInput> | Prisma.QuoteCreateWithoutCustomerInput[] | Prisma.QuoteUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.QuoteCreateOrConnectWithoutCustomerInput | Prisma.QuoteCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.QuoteUpsertWithWhereUniqueWithoutCustomerInput | Prisma.QuoteUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.QuoteCreateManyCustomerInputEnvelope;
    set?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    disconnect?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    delete?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    connect?: Prisma.QuoteWhereUniqueInput | Prisma.QuoteWhereUniqueInput[];
    update?: Prisma.QuoteUpdateWithWhereUniqueWithoutCustomerInput | Prisma.QuoteUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.QuoteUpdateManyWithWhereWithoutCustomerInput | Prisma.QuoteUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.QuoteScalarWhereInput | Prisma.QuoteScalarWhereInput[];
};
export type QuoteCreateNestedOneWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.QuoteCreateWithoutInvoiceInput, Prisma.QuoteUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.QuoteCreateOrConnectWithoutInvoiceInput;
    connect?: Prisma.QuoteWhereUniqueInput;
};
export type QuoteUpdateOneWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.QuoteCreateWithoutInvoiceInput, Prisma.QuoteUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.QuoteCreateOrConnectWithoutInvoiceInput;
    upsert?: Prisma.QuoteUpsertWithoutInvoiceInput;
    disconnect?: Prisma.QuoteWhereInput | boolean;
    delete?: Prisma.QuoteWhereInput | boolean;
    connect?: Prisma.QuoteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuoteUpdateToOneWithWhereWithoutInvoiceInput, Prisma.QuoteUpdateWithoutInvoiceInput>, Prisma.QuoteUncheckedUpdateWithoutInvoiceInput>;
};
export type EnumQuoteStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuoteStatus;
};
export type QuoteCreateNestedOneWithoutQuoteLinesInput = {
    create?: Prisma.XOR<Prisma.QuoteCreateWithoutQuoteLinesInput, Prisma.QuoteUncheckedCreateWithoutQuoteLinesInput>;
    connectOrCreate?: Prisma.QuoteCreateOrConnectWithoutQuoteLinesInput;
    connect?: Prisma.QuoteWhereUniqueInput;
};
export type QuoteUpdateOneRequiredWithoutQuoteLinesNestedInput = {
    create?: Prisma.XOR<Prisma.QuoteCreateWithoutQuoteLinesInput, Prisma.QuoteUncheckedCreateWithoutQuoteLinesInput>;
    connectOrCreate?: Prisma.QuoteCreateOrConnectWithoutQuoteLinesInput;
    upsert?: Prisma.QuoteUpsertWithoutQuoteLinesInput;
    connect?: Prisma.QuoteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuoteUpdateToOneWithWhereWithoutQuoteLinesInput, Prisma.QuoteUpdateWithoutQuoteLinesInput>, Prisma.QuoteUncheckedUpdateWithoutQuoteLinesInput>;
};
export type QuoteCreateWithoutAutoEntrepreneurInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
    customer: Prisma.CustomerCreateNestedOneWithoutQuotesInput;
    quoteLines?: Prisma.QuoteLineCreateNestedManyWithoutQuoteInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutQuoteInput;
};
export type QuoteUncheckedCreateWithoutAutoEntrepreneurInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
    quoteLines?: Prisma.QuoteLineUncheckedCreateNestedManyWithoutQuoteInput;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutQuoteInput;
};
export type QuoteCreateOrConnectWithoutAutoEntrepreneurInput = {
    where: Prisma.QuoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuoteCreateWithoutAutoEntrepreneurInput, Prisma.QuoteUncheckedCreateWithoutAutoEntrepreneurInput>;
};
export type QuoteCreateManyAutoEntrepreneurInputEnvelope = {
    data: Prisma.QuoteCreateManyAutoEntrepreneurInput | Prisma.QuoteCreateManyAutoEntrepreneurInput[];
    skipDuplicates?: boolean;
};
export type QuoteUpsertWithWhereUniqueWithoutAutoEntrepreneurInput = {
    where: Prisma.QuoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuoteUpdateWithoutAutoEntrepreneurInput, Prisma.QuoteUncheckedUpdateWithoutAutoEntrepreneurInput>;
    create: Prisma.XOR<Prisma.QuoteCreateWithoutAutoEntrepreneurInput, Prisma.QuoteUncheckedCreateWithoutAutoEntrepreneurInput>;
};
export type QuoteUpdateWithWhereUniqueWithoutAutoEntrepreneurInput = {
    where: Prisma.QuoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuoteUpdateWithoutAutoEntrepreneurInput, Prisma.QuoteUncheckedUpdateWithoutAutoEntrepreneurInput>;
};
export type QuoteUpdateManyWithWhereWithoutAutoEntrepreneurInput = {
    where: Prisma.QuoteScalarWhereInput;
    data: Prisma.XOR<Prisma.QuoteUpdateManyMutationInput, Prisma.QuoteUncheckedUpdateManyWithoutAutoEntrepreneurInput>;
};
export type QuoteScalarWhereInput = {
    AND?: Prisma.QuoteScalarWhereInput | Prisma.QuoteScalarWhereInput[];
    OR?: Prisma.QuoteScalarWhereInput[];
    NOT?: Prisma.QuoteScalarWhereInput | Prisma.QuoteScalarWhereInput[];
    id?: Prisma.StringFilter<"Quote"> | string;
    quoteNumber?: Prisma.StringFilter<"Quote"> | string;
    issueDate?: Prisma.DateTimeFilter<"Quote"> | Date | string;
    validityDate?: Prisma.DateTimeFilter<"Quote"> | Date | string;
    status?: Prisma.EnumQuoteStatusFilter<"Quote"> | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFilter<"Quote"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFilter<"Quote"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFilter<"Quote"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"Quote"> | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"Quote"> | string | null;
    AutoEntrepreneurId?: Prisma.StringFilter<"Quote"> | string;
    customerId?: Prisma.StringFilter<"Quote"> | string;
    creationDate?: Prisma.DateTimeFilter<"Quote"> | Date | string;
    updateDate?: Prisma.DateTimeFilter<"Quote"> | Date | string;
    invoiceId?: Prisma.StringNullableFilter<"Quote"> | string | null;
};
export type QuoteCreateWithoutCustomerInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutQuotesInput;
    quoteLines?: Prisma.QuoteLineCreateNestedManyWithoutQuoteInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutQuoteInput;
};
export type QuoteUncheckedCreateWithoutCustomerInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
    quoteLines?: Prisma.QuoteLineUncheckedCreateNestedManyWithoutQuoteInput;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutQuoteInput;
};
export type QuoteCreateOrConnectWithoutCustomerInput = {
    where: Prisma.QuoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuoteCreateWithoutCustomerInput, Prisma.QuoteUncheckedCreateWithoutCustomerInput>;
};
export type QuoteCreateManyCustomerInputEnvelope = {
    data: Prisma.QuoteCreateManyCustomerInput | Prisma.QuoteCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type QuoteUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.QuoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuoteUpdateWithoutCustomerInput, Prisma.QuoteUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.QuoteCreateWithoutCustomerInput, Prisma.QuoteUncheckedCreateWithoutCustomerInput>;
};
export type QuoteUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.QuoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuoteUpdateWithoutCustomerInput, Prisma.QuoteUncheckedUpdateWithoutCustomerInput>;
};
export type QuoteUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.QuoteScalarWhereInput;
    data: Prisma.XOR<Prisma.QuoteUpdateManyMutationInput, Prisma.QuoteUncheckedUpdateManyWithoutCustomerInput>;
};
export type QuoteCreateWithoutInvoiceInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutQuotesInput;
    customer: Prisma.CustomerCreateNestedOneWithoutQuotesInput;
    quoteLines?: Prisma.QuoteLineCreateNestedManyWithoutQuoteInput;
};
export type QuoteUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
    quoteLines?: Prisma.QuoteLineUncheckedCreateNestedManyWithoutQuoteInput;
};
export type QuoteCreateOrConnectWithoutInvoiceInput = {
    where: Prisma.QuoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuoteCreateWithoutInvoiceInput, Prisma.QuoteUncheckedCreateWithoutInvoiceInput>;
};
export type QuoteUpsertWithoutInvoiceInput = {
    update: Prisma.XOR<Prisma.QuoteUpdateWithoutInvoiceInput, Prisma.QuoteUncheckedUpdateWithoutInvoiceInput>;
    create: Prisma.XOR<Prisma.QuoteCreateWithoutInvoiceInput, Prisma.QuoteUncheckedCreateWithoutInvoiceInput>;
    where?: Prisma.QuoteWhereInput;
};
export type QuoteUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: Prisma.QuoteWhereInput;
    data: Prisma.XOR<Prisma.QuoteUpdateWithoutInvoiceInput, Prisma.QuoteUncheckedUpdateWithoutInvoiceInput>;
};
export type QuoteUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutQuotesNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutQuotesNestedInput;
    quoteLines?: Prisma.QuoteLineUpdateManyWithoutQuoteNestedInput;
};
export type QuoteUncheckedUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quoteLines?: Prisma.QuoteLineUncheckedUpdateManyWithoutQuoteNestedInput;
};
export type QuoteCreateWithoutQuoteLinesInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutQuotesInput;
    customer: Prisma.CustomerCreateNestedOneWithoutQuotesInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutQuoteInput;
};
export type QuoteUncheckedCreateWithoutQuoteLinesInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutQuoteInput;
};
export type QuoteCreateOrConnectWithoutQuoteLinesInput = {
    where: Prisma.QuoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuoteCreateWithoutQuoteLinesInput, Prisma.QuoteUncheckedCreateWithoutQuoteLinesInput>;
};
export type QuoteUpsertWithoutQuoteLinesInput = {
    update: Prisma.XOR<Prisma.QuoteUpdateWithoutQuoteLinesInput, Prisma.QuoteUncheckedUpdateWithoutQuoteLinesInput>;
    create: Prisma.XOR<Prisma.QuoteCreateWithoutQuoteLinesInput, Prisma.QuoteUncheckedCreateWithoutQuoteLinesInput>;
    where?: Prisma.QuoteWhereInput;
};
export type QuoteUpdateToOneWithWhereWithoutQuoteLinesInput = {
    where?: Prisma.QuoteWhereInput;
    data: Prisma.XOR<Prisma.QuoteUpdateWithoutQuoteLinesInput, Prisma.QuoteUncheckedUpdateWithoutQuoteLinesInput>;
};
export type QuoteUpdateWithoutQuoteLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutQuotesNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutQuotesNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutQuoteNestedInput;
};
export type QuoteUncheckedUpdateWithoutQuoteLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutQuoteNestedInput;
};
export type QuoteCreateManyAutoEntrepreneurInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    customerId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
};
export type QuoteUpdateWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutQuotesNestedInput;
    quoteLines?: Prisma.QuoteLineUpdateManyWithoutQuoteNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutQuoteNestedInput;
};
export type QuoteUncheckedUpdateWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quoteLines?: Prisma.QuoteLineUncheckedUpdateManyWithoutQuoteNestedInput;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutQuoteNestedInput;
};
export type QuoteUncheckedUpdateManyWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuoteCreateManyCustomerInput = {
    id?: string;
    quoteNumber: string;
    issueDate: Date | string;
    validityDate: Date | string;
    status?: $Enums.QuoteStatus;
    subtotal?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    creationDate?: Date | string;
    updateDate?: Date | string;
    invoiceId?: string | null;
};
export type QuoteUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutQuotesNestedInput;
    quoteLines?: Prisma.QuoteLineUpdateManyWithoutQuoteNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutQuoteNestedInput;
};
export type QuoteUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quoteLines?: Prisma.QuoteLineUncheckedUpdateManyWithoutQuoteNestedInput;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutQuoteNestedInput;
};
export type QuoteUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quoteNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    issueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validityDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumQuoteStatusFieldUpdateOperationsInput | $Enums.QuoteStatus;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    taxAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type QuoteCountOutputType
 */
export type QuoteCountOutputType = {
    quoteLines: number;
};
export type QuoteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quoteLines?: boolean | QuoteCountOutputTypeCountQuoteLinesArgs;
};
/**
 * QuoteCountOutputType without action
 */
export type QuoteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteCountOutputType
     */
    select?: Prisma.QuoteCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * QuoteCountOutputType without action
 */
export type QuoteCountOutputTypeCountQuoteLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuoteLineWhereInput;
};
export type QuoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quoteNumber?: boolean;
    issueDate?: boolean;
    validityDate?: boolean;
    status?: boolean;
    subtotal?: boolean;
    taxAmount?: boolean;
    totalAmount?: boolean;
    notes?: boolean;
    pdfUrl?: boolean;
    AutoEntrepreneurId?: boolean;
    customerId?: boolean;
    creationDate?: boolean;
    updateDate?: boolean;
    invoiceId?: boolean;
    AutoEntrepreneur?: boolean | Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    quoteLines?: boolean | Prisma.Quote$quoteLinesArgs<ExtArgs>;
    invoice?: boolean | Prisma.Quote$invoiceArgs<ExtArgs>;
    _count?: boolean | Prisma.QuoteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quote"]>;
export type QuoteSelectScalar = {
    id?: boolean;
    quoteNumber?: boolean;
    issueDate?: boolean;
    validityDate?: boolean;
    status?: boolean;
    subtotal?: boolean;
    taxAmount?: boolean;
    totalAmount?: boolean;
    notes?: boolean;
    pdfUrl?: boolean;
    AutoEntrepreneurId?: boolean;
    customerId?: boolean;
    creationDate?: boolean;
    updateDate?: boolean;
    invoiceId?: boolean;
};
export type QuoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "quoteNumber" | "issueDate" | "validityDate" | "status" | "subtotal" | "taxAmount" | "totalAmount" | "notes" | "pdfUrl" | "AutoEntrepreneurId" | "customerId" | "creationDate" | "updateDate" | "invoiceId", ExtArgs["result"]["quote"]>;
export type QuoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AutoEntrepreneur?: boolean | Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    quoteLines?: boolean | Prisma.Quote$quoteLinesArgs<ExtArgs>;
    invoice?: boolean | Prisma.Quote$invoiceArgs<ExtArgs>;
    _count?: boolean | Prisma.QuoteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $QuotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Quote";
    objects: {
        AutoEntrepreneur: Prisma.$AutoEntrepreneurPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs>;
        quoteLines: Prisma.$QuoteLinePayload<ExtArgs>[];
        invoice: Prisma.$InvoicePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        quoteNumber: string;
        issueDate: Date;
        validityDate: Date;
        status: $Enums.QuoteStatus;
        subtotal: runtime.Decimal;
        taxAmount: runtime.Decimal;
        totalAmount: runtime.Decimal;
        notes: string | null;
        pdfUrl: string | null;
        AutoEntrepreneurId: string;
        customerId: string;
        creationDate: Date;
        updateDate: Date;
        invoiceId: string | null;
    }, ExtArgs["result"]["quote"]>;
    composites: {};
};
export type QuoteGetPayload<S extends boolean | null | undefined | QuoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuotePayload, S>;
export type QuoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuoteCountAggregateInputType | true;
};
export interface QuoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Quote'];
        meta: {
            name: 'Quote';
        };
    };
    /**
     * Find zero or one Quote that matches the filter.
     * @param {QuoteFindUniqueArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteFindUniqueArgs>(args: Prisma.SelectSubset<T, QuoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Quote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteFindUniqueOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Quote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindFirstArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteFindFirstArgs>(args?: Prisma.SelectSubset<T, QuoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Quote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindFirstOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Quotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotes
     * const quotes = await prisma.quote.findMany()
     *
     * // Get first 10 Quotes
     * const quotes = await prisma.quote.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const quoteWithIdOnly = await prisma.quote.findMany({ select: { id: true } })
     *
     */
    findMany<T extends QuoteFindManyArgs>(args?: Prisma.SelectSubset<T, QuoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Quote.
     * @param {QuoteCreateArgs} args - Arguments to create a Quote.
     * @example
     * // Create one Quote
     * const Quote = await prisma.quote.create({
     *   data: {
     *     // ... data to create a Quote
     *   }
     * })
     *
     */
    create<T extends QuoteCreateArgs>(args: Prisma.SelectSubset<T, QuoteCreateArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Quotes.
     * @param {QuoteCreateManyArgs} args - Arguments to create many Quotes.
     * @example
     * // Create many Quotes
     * const quote = await prisma.quote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends QuoteCreateManyArgs>(args?: Prisma.SelectSubset<T, QuoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Quote.
     * @param {QuoteDeleteArgs} args - Arguments to delete one Quote.
     * @example
     * // Delete one Quote
     * const Quote = await prisma.quote.delete({
     *   where: {
     *     // ... filter to delete one Quote
     *   }
     * })
     *
     */
    delete<T extends QuoteDeleteArgs>(args: Prisma.SelectSubset<T, QuoteDeleteArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Quote.
     * @param {QuoteUpdateArgs} args - Arguments to update one Quote.
     * @example
     * // Update one Quote
     * const quote = await prisma.quote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends QuoteUpdateArgs>(args: Prisma.SelectSubset<T, QuoteUpdateArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Quotes.
     * @param {QuoteDeleteManyArgs} args - Arguments to filter Quotes to delete.
     * @example
     * // Delete a few Quotes
     * const { count } = await prisma.quote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends QuoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotes
     * const quote = await prisma.quote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends QuoteUpdateManyArgs>(args: Prisma.SelectSubset<T, QuoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Quote.
     * @param {QuoteUpsertArgs} args - Arguments to update or create a Quote.
     * @example
     * // Update or create a Quote
     * const quote = await prisma.quote.upsert({
     *   create: {
     *     // ... data to create a Quote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quote we want to update
     *   }
     * })
     */
    upsert<T extends QuoteUpsertArgs>(args: Prisma.SelectSubset<T, QuoteUpsertArgs<ExtArgs>>): Prisma.Prisma__QuoteClient<runtime.Types.Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteCountArgs} args - Arguments to filter Quotes to count.
     * @example
     * // Count the number of Quotes
     * const count = await prisma.quote.count({
     *   where: {
     *     // ... the filter for the Quotes we want to count
     *   }
     * })
    **/
    count<T extends QuoteCountArgs>(args?: Prisma.Subset<T, QuoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuoteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuoteAggregateArgs>(args: Prisma.Subset<T, QuoteAggregateArgs>): Prisma.PrismaPromise<GetQuoteAggregateType<T>>;
    /**
     * Group by Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends QuoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuoteGroupByArgs['orderBy'];
    } : {
        orderBy?: QuoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Quote model
     */
    readonly fields: QuoteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Quote.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__QuoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    AutoEntrepreneur<T extends Prisma.AutoEntrepreneurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    quoteLines<T extends Prisma.Quote$quoteLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Quote$quoteLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuoteLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoice<T extends Prisma.Quote$invoiceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Quote$invoiceArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Quote model
 */
export interface QuoteFieldRefs {
    readonly id: Prisma.FieldRef<"Quote", 'String'>;
    readonly quoteNumber: Prisma.FieldRef<"Quote", 'String'>;
    readonly issueDate: Prisma.FieldRef<"Quote", 'DateTime'>;
    readonly validityDate: Prisma.FieldRef<"Quote", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Quote", 'QuoteStatus'>;
    readonly subtotal: Prisma.FieldRef<"Quote", 'Decimal'>;
    readonly taxAmount: Prisma.FieldRef<"Quote", 'Decimal'>;
    readonly totalAmount: Prisma.FieldRef<"Quote", 'Decimal'>;
    readonly notes: Prisma.FieldRef<"Quote", 'String'>;
    readonly pdfUrl: Prisma.FieldRef<"Quote", 'String'>;
    readonly AutoEntrepreneurId: Prisma.FieldRef<"Quote", 'String'>;
    readonly customerId: Prisma.FieldRef<"Quote", 'String'>;
    readonly creationDate: Prisma.FieldRef<"Quote", 'DateTime'>;
    readonly updateDate: Prisma.FieldRef<"Quote", 'DateTime'>;
    readonly invoiceId: Prisma.FieldRef<"Quote", 'String'>;
}
/**
 * Quote findUnique
 */
export type QuoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Quote to fetch.
     */
    where: Prisma.QuoteWhereUniqueInput;
};
/**
 * Quote findUniqueOrThrow
 */
export type QuoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Quote to fetch.
     */
    where: Prisma.QuoteWhereUniqueInput;
};
/**
 * Quote findFirst
 */
export type QuoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Quote to fetch.
     */
    where?: Prisma.QuoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Quotes to fetch.
     */
    orderBy?: Prisma.QuoteOrderByWithRelationInput | Prisma.QuoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Quotes.
     */
    cursor?: Prisma.QuoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Quotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Quotes.
     */
    distinct?: Prisma.QuoteScalarFieldEnum | Prisma.QuoteScalarFieldEnum[];
};
/**
 * Quote findFirstOrThrow
 */
export type QuoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Quote to fetch.
     */
    where?: Prisma.QuoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Quotes to fetch.
     */
    orderBy?: Prisma.QuoteOrderByWithRelationInput | Prisma.QuoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Quotes.
     */
    cursor?: Prisma.QuoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Quotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Quotes.
     */
    distinct?: Prisma.QuoteScalarFieldEnum | Prisma.QuoteScalarFieldEnum[];
};
/**
 * Quote findMany
 */
export type QuoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Quotes to fetch.
     */
    where?: Prisma.QuoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Quotes to fetch.
     */
    orderBy?: Prisma.QuoteOrderByWithRelationInput | Prisma.QuoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Quotes.
     */
    cursor?: Prisma.QuoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Quotes.
     */
    skip?: number;
    distinct?: Prisma.QuoteScalarFieldEnum | Prisma.QuoteScalarFieldEnum[];
};
/**
 * Quote create
 */
export type QuoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Quote.
     */
    data: Prisma.XOR<Prisma.QuoteCreateInput, Prisma.QuoteUncheckedCreateInput>;
};
/**
 * Quote createMany
 */
export type QuoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quotes.
     */
    data: Prisma.QuoteCreateManyInput | Prisma.QuoteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Quote update
 */
export type QuoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Quote.
     */
    data: Prisma.XOR<Prisma.QuoteUpdateInput, Prisma.QuoteUncheckedUpdateInput>;
    /**
     * Choose, which Quote to update.
     */
    where: Prisma.QuoteWhereUniqueInput;
};
/**
 * Quote updateMany
 */
export type QuoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Quotes.
     */
    data: Prisma.XOR<Prisma.QuoteUpdateManyMutationInput, Prisma.QuoteUncheckedUpdateManyInput>;
    /**
     * Filter which Quotes to update
     */
    where?: Prisma.QuoteWhereInput;
    /**
     * Limit how many Quotes to update.
     */
    limit?: number;
};
/**
 * Quote upsert
 */
export type QuoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Quote to update in case it exists.
     */
    where: Prisma.QuoteWhereUniqueInput;
    /**
     * In case the Quote found by the `where` argument doesn't exist, create a new Quote with this data.
     */
    create: Prisma.XOR<Prisma.QuoteCreateInput, Prisma.QuoteUncheckedCreateInput>;
    /**
     * In case the Quote was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.QuoteUpdateInput, Prisma.QuoteUncheckedUpdateInput>;
};
/**
 * Quote delete
 */
export type QuoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Quote to delete.
     */
    where: Prisma.QuoteWhereUniqueInput;
};
/**
 * Quote deleteMany
 */
export type QuoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Quotes to delete
     */
    where?: Prisma.QuoteWhereInput;
    /**
     * Limit how many Quotes to delete.
     */
    limit?: number;
};
/**
 * Quote.quoteLines
 */
export type Quote$quoteLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteLine
     */
    select?: Prisma.QuoteLineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuoteLine
     */
    omit?: Prisma.QuoteLineOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.QuoteLineInclude<ExtArgs> | null;
    where?: Prisma.QuoteLineWhereInput;
    orderBy?: Prisma.QuoteLineOrderByWithRelationInput | Prisma.QuoteLineOrderByWithRelationInput[];
    cursor?: Prisma.QuoteLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuoteLineScalarFieldEnum | Prisma.QuoteLineScalarFieldEnum[];
};
/**
 * Quote.invoice
 */
export type Quote$invoiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.InvoiceWhereInput;
};
/**
 * Quote without action
 */
export type QuoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Quote.d.ts.map