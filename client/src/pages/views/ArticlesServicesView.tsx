import { Package, Plus, Search, Edit, Trash2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Modal } from "../../components/ui/modal";
import { useState } from "react";

export function ArticlesServicesView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "Article",
    price: "",
    stock: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form data:", formData);
    setIsModalOpen(false);
    // Reset form
    setFormData({
      name: "",
      type: "Article",
      price: "",
      stock: "",
      description: "",
    });
  };

  const items = [
    { id: 1, name: "Transport Express", type: "Service", price: "250.00", stock: "-", status: "Active" },
    { id: 2, name: "Carton Standard", type: "Article", price: "5.00", stock: "1,250", status: "Active" },
    { id: 3, name: "Palette Bois", type: "Article", price: "15.00", stock: "480", status: "Active" },
    { id: 4, name: "Entreposage Mensuel", type: "Service", price: "120.00", stock: "-", status: "Active" },
    { id: 5, name: "Film Étirable", type: "Article", price: "8.50", stock: "320", status: "Low Stock" },
    { id: 6, name: "Manutention", type: "Service", price: "45.00", stock: "-", status: "Active" },
  ];

  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <Package className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">Articles & Services</h1>
            <p className="text-gray-600">Gérez votre catalogue de produits et services</p>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Rechercher un article ou service..."
            className="pl-10 h-12 border-gray-200 rounded-xl"
          />
        </div>
        <Button className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 px-6 rounded-xl" onClick={() => setIsModalOpen(true)}>
          <Plus className="w-5 h-5 mr-2" />
          Ajouter
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Total Articles</p>
          <p className="text-3xl font-bold text-[#2D3194]">245</p>
          <p className="text-green-600 text-sm mt-2">+12 ce mois</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Total Services</p>
          <p className="text-3xl font-bold text-[#2D3194]">38</p>
          <p className="text-green-600 text-sm mt-2">+3 ce mois</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Stock Faible</p>
          <p className="text-3xl font-bold text-orange-600">8</p>
          <p className="text-gray-600 text-sm mt-2">Nécessite réappro</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Valeur Stock</p>
          <p className="text-3xl font-bold text-[#2D3194]">45K€</p>
          <p className="text-green-600 text-sm mt-2">+5.2%</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Nom</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Type</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Prix (€)</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Stock</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Statut</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
                        <Package className="w-5 h-5 text-[#2D3194]" />
                      </div>
                      <span className="font-medium text-gray-900">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === "Service" 
                        ? "bg-blue-100 text-blue-700" 
                        : "bg-purple-100 text-purple-700"
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{item.price}</td>
                  <td className="px-6 py-4 text-gray-600">{item.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Active" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-orange-100 text-orange-700"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Ajouter un Article ou Service">
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                Nom <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Transport Express, Palette Bois..."
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>

            <div>
              <Label htmlFor="type" className="text-gray-700 font-medium mb-2 block">
                Type <span className="text-red-500">*</span>
              </Label>
              <select
                id="type"
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D3194] focus:border-transparent"
              >
                <option value="Article">Article</option>
                <option value="Service">Service</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price" className="text-gray-700 font-medium mb-2 block">
                  Prix (€) <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="number"
                  id="price"
                  required
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="0.00"
                  className="w-full h-12 border-gray-200 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="stock" className="text-gray-700 font-medium mb-2 block">
                  Stock {formData.type === "Service" && "(optionnel)"}
                </Label>
                <Input
                  type="number"
                  id="stock"
                  min="0"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  placeholder={formData.type === "Service" ? "-" : "0"}
                  disabled={formData.type === "Service"}
                  className="w-full h-12 border-gray-200 rounded-xl disabled:bg-gray-50"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description" className="text-gray-700 font-medium mb-2 block">
                Description
              </Label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Description détaillée de l'article ou service..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D3194] focus:border-transparent resize-none"
              />
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <Button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 h-12 rounded-xl font-medium"
              >
                Annuler
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 rounded-xl font-medium"
              >
                <Plus className="w-5 h-5 mr-2" />
                Ajouter
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}