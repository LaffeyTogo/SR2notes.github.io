import "./SR2VZ-Loop.js"
import "./SR2VZ-Slot.js"
import "./SR2VZ-Calculate.js"
import "./SR2VZ-Process.js"



class Vizzy extends HTMLElement
{
    constructor()
    {
        super();       
    }

    connectedCallback()
    {
        this.style.paddingTop       = "10px"
        this.style.paddingBottom    = "10px"
        this.style.display          = 'inline-flex'
        this.style.flexDirection    ="column"
        this.style.overflowX        = 'auto'
        this.style.maxWidth         = '100%'
        this.style.paddingLeft      = '2em'
    }
}





class VizzyText extends HTMLElement
{
    constructor()
    {
        super();    
    }

    connectedCallback()
    {
        this.style.marginLeft           = '5px';       
        this.style.marginRight          = '5px';     
        this.style.display              = 'inline-flex';      
        this.style.alignItems           = 'center';
        this.style.textalign            = "center";
        this.style.color                = 'white'; 
        this.style.whiteSpace           = 'nowrap';

        if (this.parentNode.tagName === "VIZZY-VARBLES" ) 
        {
            this.style.marginTop        = '0px';
            this.style.marginBottom     = '0px';
            this.style.marginLeft       = '10px';
            this.style.marginRight      = '10px';
        } 
        else if (this.parentNode.tagName === "VIZZY-PARAMETER" ) 
        {
            this.style.marginTop        = '0px';
            this.style.marginBottom     = '0px';
            this.style.marginLeft       = '11px';
            this.style.marginRight      = '10px';
        } 
        else if (this.parentNode.tagName === "VIZZY-OPERATORS" ) 
        {
            this.style.marginTop        = '0px';
            this.style.marginBottom     = '0px';
            this.style.marginLeft       = '5px';
            this.style.marginRight      = '5px';
        } 
        else if (this.parentNode.tagName === "VIZZY-DISCRIMINANT" ) 
        {
            this.style.marginTop        = '0px';
            this.style.marginBottom     = '0px';
            this.style.marginLeft       = '5px';
            this.style.marginRight      = '5px';
        } 
        else if (this.parentNode.tagName === "VIZZY-INFORMATION" )
        {
            this.style.marginTop        = '0px';
            this.style.marginBottom     = '0px';
            this.style.marginLeft       = '10px';
            this.style.marginRight      = '5px';
        } 
        else if(
            this.parentNode.tagName === "VIZZY-METHOD" || 
            this.parentNode.tagName === "VIZZY-METHOD-BLUE" || 
            this.parentNode.tagName === "VIZZY-INFORMATION")
        {
            this.style.marginTop        = '0px';
            this.style.marginBottom     = '0px';
            this.style.marginLeft       = '5px';
            this.style.marginRight      = '24px';
        }
        else if(this.parentNode.tagName === "VIZZY-ELLIPTICAL")
        {
            this.style.marginTop        = '0px';
            this.style.marginBottom     = '0px';
            this.style.marginLeft       = '15px';
            this.style.marginRight      = '15px';
        }
        
        

    }
}


customElements.define('vizzy-div', Vizzy);







customElements.define('vizzy-text', VizzyText);
