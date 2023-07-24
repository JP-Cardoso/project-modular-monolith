export interface AddProductFacadeInputDto {
    id?: string;
    name: string;
    description: string;
    purchasePrice: number;
    stock: number;
};

export interface CheckStockFacedeInputDto {
    productId: string;
};

export interface CheckStockFacedeOutputDto {
    productId: string;
    stock: number
};