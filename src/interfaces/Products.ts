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
    specifications: Specifications[];
    prices: {
        cost: number;
        web: number;
        cash: number;
        list: number;
    };
    internalId: number; // 0
    imageURL: string[];
    createdAt: Date;
    updatedAt: Date;
    stars: number;
    votes: number;
    delivery: string;
    moreSold: string;
    onSale: string;
    discountPrice: number;
    variants: Variants[];
}

export interface Variants {
    color: string;
    barCode: string;
    stock: number;
}

export interface Specifications {
    title: string;
    description: string;
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
