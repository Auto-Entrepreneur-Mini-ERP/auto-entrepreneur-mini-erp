import { z } from "zod";
export declare const createProductSchema: {
    body: {
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        unit: z.ZodString;
        category: z.ZodOptional<z.ZodString>;
        unitPrice: z.ZodNumber;
        reference: z.ZodString;
        stockQuantity: z.ZodNumber;
        alertThreshold: z.ZodNumber;
    };
};
export declare const updateProductSchema: {
    body: {
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        unit: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        unitPrice: z.ZodOptional<z.ZodNumber>;
        reference: z.ZodOptional<z.ZodString>;
        stockQuantity: z.ZodOptional<z.ZodNumber>;
        alertThreshold: z.ZodOptional<z.ZodNumber>;
    };
};
export declare const updateStockSchema: {
    body: {
        quantity: z.ZodNumber;
    };
};
export declare const productFiltersSchema: {
    body: {
        category: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        minPrice: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        maxPrice: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        lowStock: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<boolean, string>>, z.ZodBoolean>>;
        page: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        limit: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    };
};
export declare const getProductByIdSchema: {
    params: {
        id: z.ZodString;
    };
};
export declare const deleteProductSchema: {
    params: {
        id: z.ZodString;
    };
};
//# sourceMappingURL=product.schema.d.ts.map