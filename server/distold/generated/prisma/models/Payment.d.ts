import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Payment
 *
 */
export type PaymentModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentPayload>;
export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
export type PaymentAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentMinAggregateOutputType = {
    id: string | null;
    reference: string | null;
    amount: runtime.Decimal | null;
    paymentDate: Date | null;
    paymentMethod: $Enums.PaymentMethod | null;
    notes: string | null;
    transactionNumber: string | null;
    isReconciled: boolean | null;
    AutoEntrepreneurId: string | null;
    invoiceId: string | null;
    creationDate: Date | null;
};
export type PaymentMaxAggregateOutputType = {
    id: string | null;
    reference: string | null;
    amount: runtime.Decimal | null;
    paymentDate: Date | null;
    paymentMethod: $Enums.PaymentMethod | null;
    notes: string | null;
    transactionNumber: string | null;
    isReconciled: boolean | null;
    AutoEntrepreneurId: string | null;
    invoiceId: string | null;
    creationDate: Date | null;
};
export type PaymentCountAggregateOutputType = {
    id: number;
    reference: number;
    amount: number;
    paymentDate: number;
    paymentMethod: number;
    notes: number;
    transactionNumber: number;
    isReconciled: number;
    AutoEntrepreneurId: number;
    invoiceId: number;
    creationDate: number;
    _all: number;
};
export type PaymentAvgAggregateInputType = {
    amount?: true;
};
export type PaymentSumAggregateInputType = {
    amount?: true;
};
export type PaymentMinAggregateInputType = {
    id?: true;
    reference?: true;
    amount?: true;
    paymentDate?: true;
    paymentMethod?: true;
    notes?: true;
    transactionNumber?: true;
    isReconciled?: true;
    AutoEntrepreneurId?: true;
    invoiceId?: true;
    creationDate?: true;
};
export type PaymentMaxAggregateInputType = {
    id?: true;
    reference?: true;
    amount?: true;
    paymentDate?: true;
    paymentMethod?: true;
    notes?: true;
    transactionNumber?: true;
    isReconciled?: true;
    AutoEntrepreneurId?: true;
    invoiceId?: true;
    creationDate?: true;
};
export type PaymentCountAggregateInputType = {
    id?: true;
    reference?: true;
    amount?: true;
    paymentDate?: true;
    paymentMethod?: true;
    notes?: true;
    transactionNumber?: true;
    isReconciled?: true;
    AutoEntrepreneurId?: true;
    invoiceId?: true;
    creationDate?: true;
    _all?: true;
};
export type PaymentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: Prisma.PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType;
};
export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayment[P]> : Prisma.GetScalarType<T[P], AggregatePayment[P]>;
};
export type PaymentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithAggregationInput | Prisma.PaymentOrderByWithAggregationInput[];
    by: Prisma.PaymentScalarFieldEnum[] | Prisma.PaymentScalarFieldEnum;
    having?: Prisma.PaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
};
export type PaymentGroupByOutputType = {
    id: string;
    reference: string;
    amount: runtime.Decimal;
    paymentDate: Date;
    paymentMethod: $Enums.PaymentMethod;
    notes: string | null;
    transactionNumber: string | null;
    isReconciled: boolean;
    AutoEntrepreneurId: string;
    invoiceId: string;
    creationDate: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
};
type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentGroupByOutputType[P]>;
}>>;
export type PaymentWhereInput = {
    AND?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    OR?: Prisma.PaymentWhereInput[];
    NOT?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    id?: Prisma.StringFilter<"Payment"> | string;
    reference?: Prisma.StringFilter<"Payment"> | string;
    amount?: Prisma.DecimalFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod;
    notes?: Prisma.StringNullableFilter<"Payment"> | string | null;
    transactionNumber?: Prisma.StringNullableFilter<"Payment"> | string | null;
    isReconciled?: Prisma.BoolFilter<"Payment"> | boolean;
    AutoEntrepreneurId?: Prisma.StringFilter<"Payment"> | string;
    invoiceId?: Prisma.StringFilter<"Payment"> | string;
    creationDate?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    AutoEntrepreneur?: Prisma.XOR<Prisma.AutoEntrepreneurScalarRelationFilter, Prisma.AutoEntrepreneurWhereInput>;
    Invoice?: Prisma.XOR<Prisma.InvoiceScalarRelationFilter, Prisma.InvoiceWhereInput>;
};
export type PaymentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    transactionNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    isReconciled?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurOrderByWithRelationInput;
    Invoice?: Prisma.InvoiceOrderByWithRelationInput;
    _relevance?: Prisma.PaymentOrderByRelevanceInput;
};
export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    reference?: string;
    AND?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    OR?: Prisma.PaymentWhereInput[];
    NOT?: Prisma.PaymentWhereInput | Prisma.PaymentWhereInput[];
    amount?: Prisma.DecimalFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod;
    notes?: Prisma.StringNullableFilter<"Payment"> | string | null;
    transactionNumber?: Prisma.StringNullableFilter<"Payment"> | string | null;
    isReconciled?: Prisma.BoolFilter<"Payment"> | boolean;
    AutoEntrepreneurId?: Prisma.StringFilter<"Payment"> | string;
    invoiceId?: Prisma.StringFilter<"Payment"> | string;
    creationDate?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    AutoEntrepreneur?: Prisma.XOR<Prisma.AutoEntrepreneurScalarRelationFilter, Prisma.AutoEntrepreneurWhereInput>;
    Invoice?: Prisma.XOR<Prisma.InvoiceScalarRelationFilter, Prisma.InvoiceWhereInput>;
}, "id" | "reference">;
export type PaymentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    transactionNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    isReconciled?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
    _count?: Prisma.PaymentCountOrderByAggregateInput;
    _avg?: Prisma.PaymentAvgOrderByAggregateInput;
    _max?: Prisma.PaymentMaxOrderByAggregateInput;
    _min?: Prisma.PaymentMinOrderByAggregateInput;
    _sum?: Prisma.PaymentSumOrderByAggregateInput;
};
export type PaymentScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentScalarWhereWithAggregatesInput | Prisma.PaymentScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentScalarWhereWithAggregatesInput | Prisma.PaymentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    reference?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeWithAggregatesFilter<"Payment"> | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Payment"> | string | null;
    transactionNumber?: Prisma.StringNullableWithAggregatesFilter<"Payment"> | string | null;
    isReconciled?: Prisma.BoolWithAggregatesFilter<"Payment"> | boolean;
    AutoEntrepreneurId?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    invoiceId?: Prisma.StringWithAggregatesFilter<"Payment"> | string;
    creationDate?: Prisma.DateTimeWithAggregatesFilter<"Payment"> | Date | string;
};
export type PaymentCreateInput = {
    id?: string;
    reference: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate: Date | string;
    paymentMethod: $Enums.PaymentMethod;
    notes?: string | null;
    transactionNumber?: string | null;
    isReconciled?: boolean;
    creationDate?: Date | string;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutPaymentsInput;
    Invoice: Prisma.InvoiceCreateNestedOneWithoutPaymentsInput;
};
export type PaymentUncheckedCreateInput = {
    id?: string;
    reference: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate: Date | string;
    paymentMethod: $Enums.PaymentMethod;
    notes?: string | null;
    transactionNumber?: string | null;
    isReconciled?: boolean;
    AutoEntrepreneurId: string;
    invoiceId: string;
    creationDate?: Date | string;
};
export type PaymentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transactionNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isReconciled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutPaymentsNestedInput;
    Invoice?: Prisma.InvoiceUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type PaymentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transactionNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isReconciled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentCreateManyInput = {
    id?: string;
    reference: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate: Date | string;
    paymentMethod: $Enums.PaymentMethod;
    notes?: string | null;
    transactionNumber?: string | null;
    isReconciled?: boolean;
    AutoEntrepreneurId: string;
    invoiceId: string;
    creationDate?: Date | string;
};
export type PaymentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transactionNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isReconciled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transactionNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isReconciled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentListRelationFilter = {
    every?: Prisma.PaymentWhereInput;
    some?: Prisma.PaymentWhereInput;
    none?: Prisma.PaymentWhereInput;
};
export type PaymentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentOrderByRelevanceInput = {
    fields: Prisma.PaymentOrderByRelevanceFieldEnum | Prisma.PaymentOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type PaymentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    transactionNumber?: Prisma.SortOrder;
    isReconciled?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
};
export type PaymentAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    transactionNumber?: Prisma.SortOrder;
    isReconciled?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
};
export type PaymentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    paymentDate?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    transactionNumber?: Prisma.SortOrder;
    isReconciled?: Prisma.SortOrder;
    AutoEntrepreneurId?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    creationDate?: Prisma.SortOrder;
};
export type PaymentSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentCreateNestedManyWithoutAutoEntrepreneurInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAutoEntrepreneurInput, Prisma.PaymentUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.PaymentCreateWithoutAutoEntrepreneurInput[] | Prisma.PaymentUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.PaymentCreateOrConnectWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.PaymentCreateManyAutoEntrepreneurInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUncheckedCreateNestedManyWithoutAutoEntrepreneurInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAutoEntrepreneurInput, Prisma.PaymentUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.PaymentCreateWithoutAutoEntrepreneurInput[] | Prisma.PaymentUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.PaymentCreateOrConnectWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.PaymentCreateManyAutoEntrepreneurInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUpdateManyWithoutAutoEntrepreneurNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAutoEntrepreneurInput, Prisma.PaymentUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.PaymentCreateWithoutAutoEntrepreneurInput[] | Prisma.PaymentUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.PaymentCreateOrConnectWithoutAutoEntrepreneurInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.PaymentUpsertWithWhereUniqueWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.PaymentCreateManyAutoEntrepreneurInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.PaymentUpdateWithWhereUniqueWithoutAutoEntrepreneurInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutAutoEntrepreneurInput | Prisma.PaymentUpdateManyWithWhereWithoutAutoEntrepreneurInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentUncheckedUpdateManyWithoutAutoEntrepreneurNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutAutoEntrepreneurInput, Prisma.PaymentUncheckedCreateWithoutAutoEntrepreneurInput> | Prisma.PaymentCreateWithoutAutoEntrepreneurInput[] | Prisma.PaymentUncheckedCreateWithoutAutoEntrepreneurInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutAutoEntrepreneurInput | Prisma.PaymentCreateOrConnectWithoutAutoEntrepreneurInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.PaymentUpsertWithWhereUniqueWithoutAutoEntrepreneurInput[];
    createMany?: Prisma.PaymentCreateManyAutoEntrepreneurInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutAutoEntrepreneurInput | Prisma.PaymentUpdateWithWhereUniqueWithoutAutoEntrepreneurInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutAutoEntrepreneurInput | Prisma.PaymentUpdateManyWithWhereWithoutAutoEntrepreneurInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentCreateNestedManyWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput> | Prisma.PaymentCreateWithoutInvoiceInput[] | Prisma.PaymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutInvoiceInput | Prisma.PaymentCreateOrConnectWithoutInvoiceInput[];
    createMany?: Prisma.PaymentCreateManyInvoiceInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput> | Prisma.PaymentCreateWithoutInvoiceInput[] | Prisma.PaymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutInvoiceInput | Prisma.PaymentCreateOrConnectWithoutInvoiceInput[];
    createMany?: Prisma.PaymentCreateManyInvoiceInputEnvelope;
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
};
export type PaymentUpdateManyWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput> | Prisma.PaymentCreateWithoutInvoiceInput[] | Prisma.PaymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutInvoiceInput | Prisma.PaymentCreateOrConnectWithoutInvoiceInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutInvoiceInput | Prisma.PaymentUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: Prisma.PaymentCreateManyInvoiceInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutInvoiceInput | Prisma.PaymentUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutInvoiceInput | Prisma.PaymentUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type PaymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput> | Prisma.PaymentCreateWithoutInvoiceInput[] | Prisma.PaymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.PaymentCreateOrConnectWithoutInvoiceInput | Prisma.PaymentCreateOrConnectWithoutInvoiceInput[];
    upsert?: Prisma.PaymentUpsertWithWhereUniqueWithoutInvoiceInput | Prisma.PaymentUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: Prisma.PaymentCreateManyInvoiceInputEnvelope;
    set?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    disconnect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    delete?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    connect?: Prisma.PaymentWhereUniqueInput | Prisma.PaymentWhereUniqueInput[];
    update?: Prisma.PaymentUpdateWithWhereUniqueWithoutInvoiceInput | Prisma.PaymentUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?: Prisma.PaymentUpdateManyWithWhereWithoutInvoiceInput | Prisma.PaymentUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
};
export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod;
};
export type PaymentCreateWithoutAutoEntrepreneurInput = {
    id?: string;
    reference: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate: Date | string;
    paymentMethod: $Enums.PaymentMethod;
    notes?: string | null;
    transactionNumber?: string | null;
    isReconciled?: boolean;
    creationDate?: Date | string;
    Invoice: Prisma.InvoiceCreateNestedOneWithoutPaymentsInput;
};
export type PaymentUncheckedCreateWithoutAutoEntrepreneurInput = {
    id?: string;
    reference: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate: Date | string;
    paymentMethod: $Enums.PaymentMethod;
    notes?: string | null;
    transactionNumber?: string | null;
    isReconciled?: boolean;
    invoiceId: string;
    creationDate?: Date | string;
};
export type PaymentCreateOrConnectWithoutAutoEntrepreneurInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutAutoEntrepreneurInput, Prisma.PaymentUncheckedCreateWithoutAutoEntrepreneurInput>;
};
export type PaymentCreateManyAutoEntrepreneurInputEnvelope = {
    data: Prisma.PaymentCreateManyAutoEntrepreneurInput | Prisma.PaymentCreateManyAutoEntrepreneurInput[];
    skipDuplicates?: boolean;
};
export type PaymentUpsertWithWhereUniqueWithoutAutoEntrepreneurInput = {
    where: Prisma.PaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutAutoEntrepreneurInput, Prisma.PaymentUncheckedUpdateWithoutAutoEntrepreneurInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutAutoEntrepreneurInput, Prisma.PaymentUncheckedCreateWithoutAutoEntrepreneurInput>;
};
export type PaymentUpdateWithWhereUniqueWithoutAutoEntrepreneurInput = {
    where: Prisma.PaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutAutoEntrepreneurInput, Prisma.PaymentUncheckedUpdateWithoutAutoEntrepreneurInput>;
};
export type PaymentUpdateManyWithWhereWithoutAutoEntrepreneurInput = {
    where: Prisma.PaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyWithoutAutoEntrepreneurInput>;
};
export type PaymentScalarWhereInput = {
    AND?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
    OR?: Prisma.PaymentScalarWhereInput[];
    NOT?: Prisma.PaymentScalarWhereInput | Prisma.PaymentScalarWhereInput[];
    id?: Prisma.StringFilter<"Payment"> | string;
    reference?: Prisma.StringFilter<"Payment"> | string;
    amount?: Prisma.DecimalFilter<"Payment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFilter<"Payment"> | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod;
    notes?: Prisma.StringNullableFilter<"Payment"> | string | null;
    transactionNumber?: Prisma.StringNullableFilter<"Payment"> | string | null;
    isReconciled?: Prisma.BoolFilter<"Payment"> | boolean;
    AutoEntrepreneurId?: Prisma.StringFilter<"Payment"> | string;
    invoiceId?: Prisma.StringFilter<"Payment"> | string;
    creationDate?: Prisma.DateTimeFilter<"Payment"> | Date | string;
};
export type PaymentCreateWithoutInvoiceInput = {
    id?: string;
    reference: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate: Date | string;
    paymentMethod: $Enums.PaymentMethod;
    notes?: string | null;
    transactionNumber?: string | null;
    isReconciled?: boolean;
    creationDate?: Date | string;
    AutoEntrepreneur: Prisma.AutoEntrepreneurCreateNestedOneWithoutPaymentsInput;
};
export type PaymentUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    reference: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate: Date | string;
    paymentMethod: $Enums.PaymentMethod;
    notes?: string | null;
    transactionNumber?: string | null;
    isReconciled?: boolean;
    AutoEntrepreneurId: string;
    creationDate?: Date | string;
};
export type PaymentCreateOrConnectWithoutInvoiceInput = {
    where: Prisma.PaymentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput>;
};
export type PaymentCreateManyInvoiceInputEnvelope = {
    data: Prisma.PaymentCreateManyInvoiceInput | Prisma.PaymentCreateManyInvoiceInput[];
    skipDuplicates?: boolean;
};
export type PaymentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: Prisma.PaymentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentUpdateWithoutInvoiceInput, Prisma.PaymentUncheckedUpdateWithoutInvoiceInput>;
    create: Prisma.XOR<Prisma.PaymentCreateWithoutInvoiceInput, Prisma.PaymentUncheckedCreateWithoutInvoiceInput>;
};
export type PaymentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: Prisma.PaymentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentUpdateWithoutInvoiceInput, Prisma.PaymentUncheckedUpdateWithoutInvoiceInput>;
};
export type PaymentUpdateManyWithWhereWithoutInvoiceInput = {
    where: Prisma.PaymentScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyWithoutInvoiceInput>;
};
export type PaymentCreateManyAutoEntrepreneurInput = {
    id?: string;
    reference: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate: Date | string;
    paymentMethod: $Enums.PaymentMethod;
    notes?: string | null;
    transactionNumber?: string | null;
    isReconciled?: boolean;
    invoiceId: string;
    creationDate?: Date | string;
};
export type PaymentUpdateWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transactionNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isReconciled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Invoice?: Prisma.InvoiceUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type PaymentUncheckedUpdateWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transactionNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isReconciled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentUncheckedUpdateManyWithoutAutoEntrepreneurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transactionNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isReconciled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentCreateManyInvoiceInput = {
    id?: string;
    reference: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate: Date | string;
    paymentMethod: $Enums.PaymentMethod;
    notes?: string | null;
    transactionNumber?: string | null;
    isReconciled?: boolean;
    AutoEntrepreneurId: string;
    creationDate?: Date | string;
};
export type PaymentUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transactionNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isReconciled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    AutoEntrepreneur?: Prisma.AutoEntrepreneurUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type PaymentUncheckedUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transactionNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isReconciled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentUncheckedUpdateManyWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transactionNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isReconciled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AutoEntrepreneurId?: Prisma.StringFieldUpdateOperationsInput | string;
    creationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reference?: boolean;
    amount?: boolean;
    paymentDate?: boolean;
    paymentMethod?: boolean;
    notes?: boolean;
    transactionNumber?: boolean;
    isReconciled?: boolean;
    AutoEntrepreneurId?: boolean;
    invoiceId?: boolean;
    creationDate?: boolean;
    AutoEntrepreneur?: boolean | Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>;
    Invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payment"]>;
export type PaymentSelectScalar = {
    id?: boolean;
    reference?: boolean;
    amount?: boolean;
    paymentDate?: boolean;
    paymentMethod?: boolean;
    notes?: boolean;
    transactionNumber?: boolean;
    isReconciled?: boolean;
    AutoEntrepreneurId?: boolean;
    invoiceId?: boolean;
    creationDate?: boolean;
};
export type PaymentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reference" | "amount" | "paymentDate" | "paymentMethod" | "notes" | "transactionNumber" | "isReconciled" | "AutoEntrepreneurId" | "invoiceId" | "creationDate", ExtArgs["result"]["payment"]>;
export type PaymentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AutoEntrepreneur?: boolean | Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>;
    Invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
};
export type $PaymentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Payment";
    objects: {
        AutoEntrepreneur: Prisma.$AutoEntrepreneurPayload<ExtArgs>;
        Invoice: Prisma.$InvoicePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reference: string;
        amount: runtime.Decimal;
        paymentDate: Date;
        paymentMethod: $Enums.PaymentMethod;
        notes: string | null;
        transactionNumber: string | null;
        isReconciled: boolean;
        AutoEntrepreneurId: string;
        invoiceId: string;
        creationDate: Date;
    }, ExtArgs["result"]["payment"]>;
    composites: {};
};
export type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentPayload, S>;
export type PaymentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentCountAggregateInputType | true;
};
export interface PaymentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Payment'];
        meta: {
            name: 'Payment';
        };
    };
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PaymentFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     */
    create<T extends PaymentCreateArgs>(args: Prisma.SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PaymentCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     */
    delete<T extends PaymentDeleteArgs>(args: Prisma.SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PaymentUpdateArgs>(args: Prisma.SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: Prisma.SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(args?: Prisma.Subset<T, PaymentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Prisma.Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;
    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PaymentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Payment model
     */
    readonly fields: PaymentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Payment.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    AutoEntrepreneur<T extends Prisma.AutoEntrepreneurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AutoEntrepreneurDefaultArgs<ExtArgs>>): Prisma.Prisma__AutoEntrepreneurClient<runtime.Types.Result.GetResult<Prisma.$AutoEntrepreneurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Invoice<T extends Prisma.InvoiceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvoiceDefaultArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Payment model
 */
export interface PaymentFieldRefs {
    readonly id: Prisma.FieldRef<"Payment", 'String'>;
    readonly reference: Prisma.FieldRef<"Payment", 'String'>;
    readonly amount: Prisma.FieldRef<"Payment", 'Decimal'>;
    readonly paymentDate: Prisma.FieldRef<"Payment", 'DateTime'>;
    readonly paymentMethod: Prisma.FieldRef<"Payment", 'PaymentMethod'>;
    readonly notes: Prisma.FieldRef<"Payment", 'String'>;
    readonly transactionNumber: Prisma.FieldRef<"Payment", 'String'>;
    readonly isReconciled: Prisma.FieldRef<"Payment", 'Boolean'>;
    readonly AutoEntrepreneurId: Prisma.FieldRef<"Payment", 'String'>;
    readonly invoiceId: Prisma.FieldRef<"Payment", 'String'>;
    readonly creationDate: Prisma.FieldRef<"Payment", 'DateTime'>;
}
/**
 * Payment findUnique
 */
export type PaymentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Payment to fetch.
     */
    where: Prisma.PaymentWhereUniqueInput;
};
/**
 * Payment findUniqueOrThrow
 */
export type PaymentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Payment to fetch.
     */
    where: Prisma.PaymentWhereUniqueInput;
};
/**
 * Payment findFirst
 */
export type PaymentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Payment to fetch.
     */
    where?: Prisma.PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: Prisma.PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
/**
 * Payment findFirstOrThrow
 */
export type PaymentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Payment to fetch.
     */
    where?: Prisma.PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: Prisma.PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
/**
 * Payment findMany
 */
export type PaymentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Payments to fetch.
     */
    where?: Prisma.PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Payments.
     */
    cursor?: Prisma.PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
/**
 * Payment create
 */
export type PaymentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Payment.
     */
    data: Prisma.XOR<Prisma.PaymentCreateInput, Prisma.PaymentUncheckedCreateInput>;
};
/**
 * Payment createMany
 */
export type PaymentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: Prisma.PaymentCreateManyInput | Prisma.PaymentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Payment update
 */
export type PaymentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Payment.
     */
    data: Prisma.XOR<Prisma.PaymentUpdateInput, Prisma.PaymentUncheckedUpdateInput>;
    /**
     * Choose, which Payment to update.
     */
    where: Prisma.PaymentWhereUniqueInput;
};
/**
 * Payment updateMany
 */
export type PaymentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: Prisma.XOR<Prisma.PaymentUpdateManyMutationInput, Prisma.PaymentUncheckedUpdateManyInput>;
    /**
     * Filter which Payments to update
     */
    where?: Prisma.PaymentWhereInput;
    /**
     * Limit how many Payments to update.
     */
    limit?: number;
};
/**
 * Payment upsert
 */
export type PaymentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: Prisma.PaymentWhereUniqueInput;
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: Prisma.XOR<Prisma.PaymentCreateInput, Prisma.PaymentUncheckedCreateInput>;
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PaymentUpdateInput, Prisma.PaymentUncheckedUpdateInput>;
};
/**
 * Payment delete
 */
export type PaymentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Payment to delete.
     */
    where: Prisma.PaymentWhereUniqueInput;
};
/**
 * Payment deleteMany
 */
export type PaymentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: Prisma.PaymentWhereInput;
    /**
     * Limit how many Payments to delete.
     */
    limit?: number;
};
/**
 * Payment without action
 */
export type PaymentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Payment.d.ts.map