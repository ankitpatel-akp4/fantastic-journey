///<reference path="../NamespaceLibrary/components/ProductComponent.ts"/>

import { ProductComponent } from "../Library/components/ProductComponent";
let mobile = new ProductComponent();
mobile.Print()
/**
 * modules use DI mechanism
 * DI is a design pattern that specifies how an object get hold of its dependencies
 * DI uses 2 major component
 * a) Provider
 * b) Injector
 * Provider locates the dependencies and loads into the memory
 * Injector is responsible for injecting the dependencies.
 */

// let prod = new ProjectA.Components.ProductComponent();
// prod.Print()
// console.log("hello")
/**
 * 
 * tsc --outFile index.js index.ts
 */
