import { asyncHandler } from "../utils/asyncHandler.js";
import { ProductService } from "./product.service.js";
const productService = new ProductService();
const getParamId = (id) => {
    if (!id)
        throw new Error("ID parameter is required");
    if (Array.isArray(id)) {
        const firstId = id[0];
        if (!firstId)
            throw new Error("ID array is empty");
        return firstId;
    }
    return id;
};
const parseProductFilters = (query) => {
    const result = {};
    if (query.category !== undefined)
        result.category = query.category;
    if (query.name !== undefined)
        result.name = query.name;
    if (query.minPrice !== undefined)
        result.minPrice = query.minPrice;
    if (query.maxPrice !== undefined)
        result.maxPrice = query.maxPrice;
    if (query.lowStock !== undefined)
        result.lowStock = query.lowStock;
    return result;
};
const convertFiltersToService = (filters) => {
    const result = {};
    if (filters.category !== undefined)
        result.category = filters.category;
    if (filters.name !== undefined)
        result.name = filters.name;
    if (filters.minPrice !== undefined) {
        const num = Number(filters.minPrice);
        if (!isNaN(num))
            result.minPrice = num;
    }
    if (filters.maxPrice !== undefined) {
        const num = Number(filters.maxPrice);
        if (!isNaN(num))
            result.maxPrice = num;
    }
    if (filters.lowStock !== undefined) {
        result.lowStock = filters.lowStock === true || filters.lowStock === 'true';
    }
    return result;
};
// GET /products
const getProducts = asyncHandler(async (req, res) => {
    const filtersInput = parseProductFilters(req.query);
    const serviceFilters = convertFiltersToService(filtersInput);
    const products = await productService.getProducts(req.AutoEntrepreneurID, serviceFilters);
    res.status(200).json({ success: true, count: products.length, data: products });
});
// GET /products/alertes
const getAlerts = asyncHandler(async (req, res) => {
    try {
        const products = await productService.getProductAlerts(req.AutoEntrepreneurID);
        res.status(200).json({ success: true, count: products.length, data: products });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message || "Failed to get alerts" });
    }
});
// GET /products/search?articleName=...
const getProductByName = asyncHandler(async (req, res) => {
    if (!req.AutoEntrepreneurID) {
        return res.status(401).json({ success: false, error: "User not authenticated" });
    }
    try {
        const articleName = req.query.articleName;
        if (!articleName) {
            return res.status(400).json({ success: false, error: "articleName query param required" });
        }
        const product = await productService.getProductByName(articleName, req.AutoEntrepreneurID);
        if (!product) {
            return res.status(404).json({ success: false, error: "Product not found" });
        }
        res.status(200).json({ success: true, data: product });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
// GET /products/:id
const getProduct = asyncHandler(async (req, res) => {
    try {
        const id = getParamId(req.params.id);
        const product = await productService.getProductById(id, req.AutoEntrepreneurID);
        if (!product) {
            return res.status(404).json({ success: false, error: "Product not found" });
        }
        res.status(200).json({ success: true, data: product });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message || "Invalid ID parameter" });
    }
});
// POST /products
const createProduct = asyncHandler(async (req, res) => {
    try {
        const body = req.body;
        let unitPrice;
        if (typeof body.unitPrice === 'string') {
            unitPrice = parseFloat(body.unitPrice);
            if (isNaN(unitPrice))
                throw new Error("Invalid unitPrice value");
        }
        else {
            unitPrice = body.unitPrice;
        }
        const product = await productService.createProduct({
            ...body,
            unitPrice,
            autoEntrepreneurId: req.AutoEntrepreneurID
        });
        res.status(201).json({ success: true, data: product });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message || "Failed to create product" });
    }
});
// PUT /products/:id
const updateProduct = asyncHandler(async (req, res) => {
    try {
        const id = getParamId(req.params.id);
        const body = req.body;
        const parsedData = { ...body };
        if (body.unitPrice !== undefined && typeof body.unitPrice === 'string') {
            const unitPrice = parseFloat(body.unitPrice);
            if (isNaN(unitPrice))
                throw new Error("Invalid unitPrice value");
            parsedData.unitPrice = unitPrice;
        }
        const product = await productService.updateProduct(id, req.AutoEntrepreneurID, parsedData);
        if (!product) {
            return res.status(404).json({ success: false, error: "Product not found" });
        }
        res.status(200).json({ success: true, data: product });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message || "Failed to update product" });
    }
});
// PATCH /products/:id/stock
const updateStock = asyncHandler(async (req, res) => {
    try {
        const id = getParamId(req.params.id);
        const { quantity, reason } = req.body;
        const product = await productService.updateStock(id, req.AutoEntrepreneurID, quantity);
        if (!product) {
            return res.status(404).json({ success: false, error: "Product not found" });
        }
        res.status(200).json({ success: true, data: product });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message || "Failed to update stock" });
    }
});
// DELETE /products/:id
const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const id = getParamId(req.params.id);
        const existing = await productService.getProductById(id, req.AutoEntrepreneurID);
        if (!existing) {
            return res.status(404).json({ success: false, error: "Product not found" });
        }
        const isUsed = await productService.checkProductUsage(id);
        if (isUsed) {
            return res.status(400).json({ success: false, error: "Cannot delete this product as it is used in invoices or quotes" });
        }
        await productService.deleteProduct(id, req.AutoEntrepreneurID);
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message || "Failed to delete product" });
    }
});
export const productController = {
    getProducts,
    getAlerts,
    getProduct,
    getProductByName,
    createProduct,
    updateProduct,
    updateStock,
    deleteProduct
};
//# sourceMappingURL=product.controller.js.map