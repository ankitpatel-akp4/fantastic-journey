///<reference path="../templates/ProductTemplate.ts" />
export namespace ProjectA
{
    export namespace Components
    {
        export class ProductComponent extends ProjectA.Templates.ProductTemplate
        {
            Name:string="Apple"
            Print(){
                console.log(this.Name)
            }
        }
    }
}