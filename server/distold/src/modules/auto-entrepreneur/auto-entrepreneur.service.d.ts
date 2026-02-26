import type { AutoEntrepreneur, AutoEntrepreneurUpdateInput } from "./auto-entrepreneur.types.js";
export declare const autoEntrepreneurService: {
    profileAutoEntrepreneur: (id: string) => Promise<AutoEntrepreneur>;
    updateAutoEntrepreneur: (id: string, data: AutoEntrepreneurUpdateInput) => Promise<AutoEntrepreneur>;
};
//# sourceMappingURL=auto-entrepreneur.service.d.ts.map