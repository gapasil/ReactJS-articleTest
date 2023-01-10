import { createElement } from "react";
import imgFileDefault from "../../../images/fileDefault.png"
import { API } from '@editorjs/editorjs';

class SeparatorEditor {

    data   :any;
    wrapper:any;
    readOnly:any;
    api : API
  
    static get toolbox() {
      return {
        title: 'Разделитель',
        icon: `<svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.53906 9.80859L4 6.58594L0.367188 5.53125L0.988281 3.60938L4.59766 4.99219L4.43359 0.925781H6.47266L6.28516 5.07422L9.83594 3.69141L10.457 5.64844L6.75391 6.71484L9.15625 9.86719L7.50391 11.0625L5.33594 7.66406L3.20312 10.9688L1.53906 9.80859ZM12.1797 9.80859L14.6406 6.58594L11.0078 5.53125L11.6289 3.60938L15.2383 4.99219L15.0742 0.925781H17.1133L16.9258 5.07422L20.4766 3.69141L21.0977 5.64844L17.3945 6.71484L19.7969 9.86719L18.1445 11.0625L15.9766 7.66406L13.8438 10.9688L12.1797 9.80859ZM22.8203 9.80859L25.2812 6.58594L21.6484 5.53125L22.2695 3.60938L25.8789 4.99219L25.7148 0.925781H27.7539L27.5664 5.07422L31.1172 3.69141L31.7383 5.64844L28.0352 6.71484L30.4375 9.86719L28.7852 11.0625L26.6172 7.66406L24.4844 10.9688L22.8203 9.80859Z" fill="black"/>
        </svg>
        `
      };
    }
    static get isReadOnlySupported() {
      return true;
    }

    constructor({data,readOnly, api}:any){
      this.data = data;
      this.wrapper = undefined;
      this.api  =  api
    }
    render(){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapperSeparator') 
        this._createEpigraph()
        return this.wrapper;
    }

    isFirstBlock() {
      return this.api.blocks.getCurrentBlockIndex();
    }

    _createEpigraph()
    {
        if(this.data.separator)
        {
          const separator = document.createElement('div')

          separator.classList.add("separatorEditor")

          this.wrapper.appendChild(separator)

        } else {
          const button = document.createElement("button")
    
          button.addEventListener("click",()=>{
            this.api.blocks.delete(this.isFirstBlock())
          })
      
          button.classList.add("deleteBlockT")

          const separator = document.createElement('div')

          separator.classList.add("separatorEditor")

          this.wrapper.appendChild(separator)
          this.wrapper.appendChild(button)
        }
    }

    save(blockContent:any)
    {
      return {
        separator: true,
      } 
    }
}
export default SeparatorEditor