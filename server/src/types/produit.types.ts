export interface CreateProduitInput {
  nom: string;
  description?: string;
  prixUnitaire: number;
  reference?: string;
  quantiteStock: number;
  seuilAlerte: number;
  unite: string;
  categorie: string;
}

export interface UpdateProduitInput {
  nom?: string;
  description?: string;
  prixUnitaire?: number;
  reference?: string;
  quantiteStock?: number;
  seuilAlerte?: number;
  unite?: string;
  categorie?: string;
}
