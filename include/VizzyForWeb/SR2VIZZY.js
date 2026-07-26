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
        this.style.paddingTop = "10px"
        this.style.paddingBottom = "10px"
        this.style.display = 'inline-flex'
        this.style.flexDirection ="column"
    }
}


class VizzyInformation extends HTMLElement
{
    constructor()
    {
        super();    
    }

    connectedCallback()
    {
        // 修改自己的风格
        this.style.minHeight        = '30px';
        this.style.minWidth         = '30px';
        this.style.marginLeft       = '5px';
        this.style.marginRight      = '5px';
        this.style.paddingLeft      = '5px';
        this.style.paddingRight     = '5px';
        this.style.display          = 'flex';
        this.style.flexDirection    = 'row';
        this.style.width            = 'fit-content';
        this.style.alignItems       = 'center';
        this.style.height           = 'fit-content';

        //画背景 创建 SVG 和图像  
        const SVG_ = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        SVG_.style.position = "absolute";
        SVG_.setAttribute("width", "100%");
        SVG_.setAttribute("height", "100%");
        SVG_.style.zIndex = "-1";
        SVG_.style.marginLeft       = '-5px';

        // 在 SVG 中创建图像
        const rect_ = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect_.setAttribute("rx", "14");
        rect_.setAttribute("ry", "14");
        rect_.setAttribute("fill", "#404040");
        rect_.setAttribute("stroke", "#303030");
        rect_.setAttribute("stroke-width", 1);
        SVG_.appendChild(rect_);

        // 使用 prepend 将其插入到元素的第一个子节点位置
        this.prepend(SVG_); 
        
        // 创建 ResizeObserver 大小变化的时候同步更新RECT
        const resizeObserver = new ResizeObserver(() => 
        {
            const rect = this.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            rect_.setAttribute("width", `${width}px`);
            rect_.setAttribute("height", `${height}px`);
            SVG_.setAttribute("width", `${width + 1}px`);
            SVG_.setAttribute("height", `${height + 1}px`);
        });

        // 监听当前元素的尺寸变化
        resizeObserver.observe(this);
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
        else if(this.parentNode.tagName === "VIZZY-METHOD")
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




customElements.define('vizzy-information', VizzyInformation);





customElements.define('vizzy-text', VizzyText);
