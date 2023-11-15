export interface Product {
    id: string;
    name: string;
    description: string;
    stock: number;
    category: string; // Reference to categories.id
    subCategory: string; // Reference to categories.subCategories[n].id
    barcode: string;
    brand: string;
    businessOwner: string;
    dimensions?: string;
    weight: number;
    specifications: string;
    variants: string;
    prices: number;
    internalId: number; // 0
    imageURL: string[];
    createdAt: Date;
    updatedAt: Date;
    stars: number;
    votes: number;
}

export interface Category {
    id?: string;
    internalId: string;
    name: string;
    subCategories?: {
        internalId: string;
        name: string;
    }[];
}
