///<reference path="../contracts/ProductContract.ts"/>
export namespace ProjectA
{
    export namespace Templates
    {
        export abstract class ProductTemplate implements ProjectA.Contracts.ProductContract
        {
            public Name:string="";
            public abstract Print():void;
        }
    }
}