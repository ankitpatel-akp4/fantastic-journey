"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectA = void 0;
///<reference path="../contracts/ProductContract.ts"/>
var ProjectA;
(function (ProjectA) {
    var Templates;
    (function (Templates) {
        var ProductTemplate = /** @class */ (function () {
            function ProductTemplate() {
                this.Name = "";
            }
            return ProductTemplate;
        }());
        Templates.ProductTemplate = ProductTemplate;
    })(Templates = ProjectA.Templates || (ProjectA.Templates = {}));
})(ProjectA = exports.ProjectA || (exports.ProjectA = {}));
