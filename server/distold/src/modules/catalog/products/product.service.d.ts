import type { CreateProductInput, UpdateProductInput, ProductFilters, ProductWithItem } from "./product.types.js";
export declare class ProductService {
    createProduct(data: CreateProductInput & {
        autoEntrepreneurId: string;
    }): Promise<ProductWithItem>;
    getProducts(autoEntrepreneurId: string, filters?: ProductFilters): Promise<ProductWithItem[]>;
    /**
     * GET /products/alertes
     * Returns products whose stockQuantity <= alertThreshold (low stock or empty)
     */
    getProductAlerts(autoEntrepreneurId: string): Promise<ProductWithItem[]>;
    getProductById(id: string, autoEntrepreneurId: string): Promise<ProductWithItem | null>;
    getProductByName(articleName: string, autoEntrepreneurId: string): Promise<ProductWithItem | null>;
    updateProduct(id: string, autoEntrepreneurId: string, data: UpdateProductInput): Promise<ProductWithItem | null>;
    updateStock(id: string, autoEntrepreneurId: string, quantity: number): Promise<ProductWithItem | null>;
    deleteProduct(id: string, autoEntrepreneurId: string): Promise<void>;
    checkProductUsage(itemId: string): Promise<boolean>;
}
export declare const productService: ProductService;
//# sourceMappingURL=product.service.d.ts.map