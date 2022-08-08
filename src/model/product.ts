class Product {
    name: string;
    originalPrice: number;
    image: string;
    saleOffPrice?: number;
    categoryId?: number;
    feature?: string;
    description?: string;
    shortDescription?: string;
    constructor(
        name: string,
        originalPrice: number,
        image: string,
        categoryId?: number,
        feature?: string,
        description?: string,
        saleOffPrice?:number,
        shortDescription?: string
    ) {
        this.name = name;
        this.originalPrice = originalPrice;
        this.image = image;
        this.saleOffPrice = saleOffPrice;
        this.categoryId = categoryId;
        this.feature = feature;
        this.description = description;
        this.shortDescription = shortDescription;
    }
}

export default Product