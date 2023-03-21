import { ProductTemplate } from "../templates/ProductTemplate";

export class ProductComponent extends ProductTemplate
{
    Name = "Apple";
    Price = 4500;
    Qty = 10;
    Category = "electronics"
    Total(){
        return this.Qty * this.Price;
    }
    public Print(): void {
        console.log(`Name: ${this.Name}\nPrice: ${this.Price}\nQty:${this.Qty}`);
    }
}