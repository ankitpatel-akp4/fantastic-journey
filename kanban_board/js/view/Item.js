import KanbanAPI from "../api/kanbanAPI.js";
import DropZone from "./DropZone.js";

export default class Item {
    constructor(id, content){
        const bottomDropZone = DropZone.createDropZone();
        this.elements = {};
        this.elements.root = Item.createRoot();
        this.elements.input = this.elements.root.querySelector(".kanban__item-input");
        this.elements.trash = this.elements.root.querySelector(".fa-trash");

        this.elements.root.dataset.id = id;
       
        
        this.elements.input.textContent = content;
             
        this.content = content;
        this.elements.root.appendChild(bottomDropZone);

        const onBlur = ()=>{
            const newcontent = this.elements.input.textContent.trim();
            if( newcontent != this.content){
                this.content = newcontent;
                KanbanAPI.updateItem(id,{
                    content:this.content
                })
            }
        };
        this.elements.input.addEventListener("blur", onBlur);

        this.elements.trash.addEventListener("click", ()=>{
            const check = confirm("Are you sure you want to delete this item?")
            if(check){
                
                KanbanAPI.deleteItem(id)
                this.elements.input.removeEventListener("blur", onBlur);
                this.elements.root.parentElement.removeChild(this.elements.root);
            }
        })

        this.elements.root.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", id)
        })
        this.elements.input.addEventListener("drop", e => {
            e.preventDefault()
        })
    }
    static createRoot(){
        const range = document.createRange();
        range.selectNode(document.body)
        return range.createContextualFragment(
            `<div class="kanban__item" draggable="true">
                <div class="input-wrapper">
                <div class="kanban__item-input" contenteditable="true" placeholder="Enter text here..."></div>
                <i class="fa fa-trash w3-large"></i>
                </div>
             </div>
            `
        ).children[0]
        // <div class="kanban__dropzone"></div>
    }
}