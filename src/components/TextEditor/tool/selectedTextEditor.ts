import imgFileDefault from "../../../images/fileDefault.png"
import { API } from '@editorjs/editorjs';

class SelectedTextEditor {

    data   :any;
    wrapper:any;
    readOnly:any;
    api:API
  
    static get toolbox() {
      return {
        title: 'Выделенный текст',
        icon: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 7.09091V0H18.9091V2.36364H7.09091V0H0V7.09091H2.36364V18.9091H0V26H7.09091V23.6364H18.9091V26H26V18.9091H23.6364V7.09091H26ZM2.36364 2.36364H4.72727V4.72727H2.36364V2.36364ZM4.72727 23.6364H2.36364V21.2727H4.72727V23.6364ZM18.9091 21.2727H7.09091V18.9091H4.72727V7.09091H7.09091V4.72727H18.9091V7.09091H21.2727V18.9091H18.9091V21.2727ZM23.6364 23.6364H21.2727V21.2727H23.6364V23.6364ZM21.2727 4.72727V2.36364H23.6364V4.72727H21.2727ZM15.0445 15.3636H10.92L10.0573 17.7273H8.14273L12.1609 7.09091H13.8155L17.8455 17.7273H15.9191L15.0445 15.3636ZM11.4518 13.8745H14.5364L13 9.34818L11.4518 13.8745Z" fill="black"/>
        </svg>
        `
      };
    }
    static get isReadOnlySupported() {
      return true;
    }

    constructor({data,readOnly,api}:any){
      this.data = data;
      this.wrapper = undefined;
      this.api = api
    }
    render(){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapperEpigraph') 
        this._createText()
        return this.wrapper;
    }
     
    isFirstBlock() {
      return this.api.blocks.getCurrentBlockIndex();
    }

    _createText()
    {
      if(this.data.text)
      {

        const block = document.createElement("div")
        
        block.innerHTML = this.data.text
        block.classList.add("blockTextAreaSelectedText")

        this.wrapper.appendChild(block)

      } else {
        const button = document.createElement("button")
    
        button.addEventListener("click",()=>{
          this.api.blocks.delete(this.isFirstBlock())
        })
    
        button.classList.add("deleteBlockT")

        const block = document.createElement("div")

        block.contentEditable = "true";
        block.classList.add("blockTextAreaSelectedText")

        this.wrapper.appendChild(block)
        this.wrapper.appendChild(button)
        
      };
    }

    save(blockContent:any)
    {
      const text = blockContent.querySelectorAll('[contenteditable]');
      
      return {
        text: text[0].innerHTML
      } 
    }
}
export default SelectedTextEditor