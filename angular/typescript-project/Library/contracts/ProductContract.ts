// this is a module
// every module can have a default export

export default interface ProductContract{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print():void;
}

export interface CategoryContract{
    CategoryName:string;
    
}