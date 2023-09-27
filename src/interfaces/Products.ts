export interface Product {
    price: number;
    stock?: number;
    category?: number;
    id?: string;
    name?: string;
    description: string;
    image: string;
    stars?: number;
    votes?: number;
    delivery?: string;
    moreSold?: string;
    onSale?: string;
    discountPrice?: number;
}
