/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef, useCallback } from "react";
import { Search, Package, Wrench, ChevronDown, X } from "lucide-react";
import { productApi, serviceApi, type Product, type Service } from "../../api/catalogApi";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ArticleType = "PRODUCT" | "SERVICE";

export interface SelectedArticle {
  id: string;
  name: string;
  description?: string | null;
  unit: string;
  typeLigne: ArticleType;
  unitPrice: number;
  /** Only for products */
  stockQuantity?: number;
  /** Only for services */
  hourlyRate?: number | null;
  fixedRate?: number | null;
  estimatedDuration?: number | null;
}

interface ArticleSelectorProps {
  value?: SelectedArticle | null;
  onChange: (article: SelectedArticle | null) => void;
  placeholder?: string;
  disabled?: boolean;
  /** Filter to only show products or services */
  filter?: "PRODUCT" | "SERVICE" | "ALL";
  className?: string;
  error?: string;
}

type CombinedItem =
  | (Product & { typeLigne: "PRODUCT" })
  | (Service & { typeLigne: "SERVICE" });

// ─── Helpers ─────────────────────────────────────────────────────────────────

const toSelectedArticle = (item: CombinedItem): SelectedArticle => {
  if (item.typeLigne === "PRODUCT") {
    const p = item as Product & { typeLigne: "PRODUCT" };
    return {
      id: p.id,
      name: p.name,
      description: p.description,
      unit: p.unit,
      typeLigne: "PRODUCT",
      unitPrice: p.product.unitPrice,
      stockQuantity: p.product.stockQuantity,
    };
  } else {
    const s = item as Service & { typeLigne: "SERVICE" };
    const hr = s.service?.hourlyRate ? Number(s.service.hourlyRate) : null;
    const fr = s.service?.fixedRate ? Number(s.service.fixedRate) : null;
    return {
      id: s.id,
      name: s.name,
      description: s.description,
      unit: s.unit,
      typeLigne: "SERVICE",
      unitPrice: hr ?? fr ?? 0,
      hourlyRate: hr,
      fixedRate: fr,
      estimatedDuration: s.service?.estimatedDuration ?? null,
    };
  }
};

const formatPrice = (n: number) =>
  n.toLocaleString("fr-MA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ─── Component ────────────────────────────────────────────────────────────────

export function ArticleSelector({
  value,
  onChange,
  placeholder = "Rechercher un produit ou service...",
  disabled = false,
  filter = "ALL",
  className = "",
  error,
}: ArticleSelectorProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState<CombinedItem[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch items when dropdown opens or search changes
  const fetchItems = useCallback(async (q: string) => {
    setLoading(true);
    try {
      const [products, services] = await Promise.all([
        filter !== "SERVICE"
          ? productApi.getAll(q ? { name: q } : undefined)
          : Promise.resolve([]),
        filter !== "PRODUCT"
          ? serviceApi.getAll(q ? { name: q } : undefined)
          : Promise.resolve([]),
      ]);
      setItems([
        ...products.map((p) => ({ ...p, typeLigne: "PRODUCT" as const })),
        ...services.map((s) => ({ ...s, typeLigne: "SERVICE" as const })),
      ]);
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => fetchItems(searchQuery), 250);
    return () => clearTimeout(t);
  }, [open, searchQuery, fetchItems]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleOpen = () => {
    if (disabled) return;
    setOpen(true);
    setSearchQuery("");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleSelect = (item: CombinedItem) => {
    onChange(toSelectedArticle(item));
    setOpen(false);
    setSearchQuery("");
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Trigger */}
      <button
        type="button"
        onClick={handleOpen}
        disabled={disabled}
        className={`
          w-full flex items-center gap-2 px-3 h-12 rounded-xl border text-left transition-all
          ${disabled ? "opacity-50 cursor-not-allowed bg-gray-50" : "cursor-pointer hover:border-[#2D3194] bg-white"}
          ${error ? "border-red-400 bg-red-50" : "border-gray-200"}
          ${open ? "border-[#2D3194] ring-2 ring-[#2D3194]/10" : ""}
        `}
      >
        {value ? (
          <>
            <span className={`shrink-0 w-6 h-6 rounded-lg flex items-center justify-center
              ${value.typeLigne === "PRODUCT" ? "bg-blue-100" : "bg-purple-100"}`}>
              {value.typeLigne === "PRODUCT"
                ? <Package className="w-3.5 h-3.5 text-blue-600" />
                : <Wrench className="w-3.5 h-3.5 text-purple-600" />}
            </span>
            <span className="flex-1 text-sm font-medium text-gray-900 truncate">{value.name}</span>
            <span className="text-xs text-gray-400 shrink-0">{formatPrice(value.unitPrice)} MAD</span>
            <button
              type="button"
              onClick={handleClear}
              className="shrink-0 w-5 h-5 rounded-full hover:bg-gray-100 flex items-center justify-center"
            >
              <X className="w-3 h-3 text-gray-400" />
            </button>
          </>
        ) : (
          <>
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <span className="flex-1 text-sm text-gray-400">{placeholder}</span>
            <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
          </>
        )}
      </button>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 top-[calc(100%+4px)] left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          {/* Search input */}
          <div className="p-2 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher..."
                className="w-full pl-9 pr-3 h-9 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2D3194] focus:ring-1 focus:ring-[#2D3194]/20"
              />
            </div>
          </div>

          {/* Items */}
          <div className="max-h-64 overflow-y-auto py-1">
            {loading ? (
              <div className="py-8 text-center text-sm text-gray-400">Chargement...</div>
            ) : items.length === 0 ? (
              <div className="py-8 text-center text-sm text-gray-400">
                {searchQuery ? "Aucun résultat trouvé" : "Aucun article disponible"}
              </div>
            ) : (
              items.map((item) => {
                const isProduct = item.typeLigne === "PRODUCT";
                const p = isProduct ? (item as Product & { typeLigne: "PRODUCT" }) : null;
                const s = !isProduct ? (item as Service & { typeLigne: "SERVICE" }) : null;
                const price = p
                  ? p.product.unitPrice
                  : s?.service?.hourlyRate ?? s?.service?.fixedRate ?? 0;

                return (
                  <button
                    key={`${item.typeLigne}-${item.id}`}
                    type="button"
                    onClick={() => handleSelect(item)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 transition-colors text-left"
                  >
                    {/* Icon */}
                    <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                      ${isProduct ? "bg-blue-50" : "bg-purple-50"}`}>
                      {isProduct
                        ? <Package className="w-4 h-4 text-blue-600" />
                        : <Wrench className="w-4 h-4 text-purple-600" />}
                    </span>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-xs text-gray-400 truncate">
                        {item.category ?? (isProduct ? "Produit" : "Service")}
                        {p && (
                          <span className={`ml-2 ${p.product.stockQuantity <= p.product.alertThreshold ? "text-orange-500" : "text-gray-400"}`}>
                            · Stock: {p.product.stockQuantity}
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-right shrink-0">
                      <p className="text-sm font-semibold text-gray-900">{formatPrice(Number(price))} MAD</p>
                      <p className="text-xs text-gray-400">
                        {isProduct ? "/ unité" : (s?.service?.hourlyRate ? "/ heure" : "fixe")}
                      </p>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleSelector;