import "./SR2VZ-Loop.js"
import "./SR2VZ-Slot.js"
import "./SR2VZ-Calculate.js"



class Vizzy extends HTMLElement
{
    constructor()
    {
        super();       
    }

    connectedCallback()
    {
        this.style.all='unset'
    }
}


class VizzyInstruction extends HTMLElement
{            
    constructor()
    {
        super();       
    }

    connectedCallback()
    {
        // 修改自己的风格
        this.style.minHeight        = '45px';
        this.style.minWidth         = '60px';
        this.style.display          = 'flex';
        this.style.flexDirection    = 'row';
        this.style.width            = 'fit-content';
        this.style.alignItems       = 'center';
        this.style.paddingLeft      = '5px';
        this.style.paddingRight     = '5px';
        this.style.paddingTop       = '0px';
        this.style.paddingBottom    = '0px';
        if (this.parentNode.firstElementChild === this) 
        {
            this.style.marginTop    ='5px';
        } 
        else 
        {
            if (this.parentElement.tagName === 'VIZZY-LOOPBODY' && this.previousElementSibling.tagName === 'svg')
            {
                this.style.marginTop    ='0px';
            } 
            else
            {
                this.style.marginTop    = '-5px';
            }
        }




        //画背景 创建 SVG 和图像  
        const SVG_ = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        SVG_.style.position = "absolute";
        SVG_.style.zIndex = "-1";
        SVG_.style.marginLeft = '-5px';
        SVG_.style.marginBottom = "0px";
        SVG_.setAttribute("width", "100%");
        SVG_.setAttribute("height", "100%");

        // 在 SVG 中创建图像
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("fill", "#404040");
        polygon.setAttribute("stroke", "#303030");
        polygon.setAttribute("stroke-width", 2);
        SVG_.appendChild(polygon);

        // 使用 prepend 将其插入到元素的第一个子节点位置
        this.prepend(SVG_); 

        // 创建 ResizeObserver 大小变化的时候同步更新SVG
        const resizeObserver = new ResizeObserver(() => {
            const rect = this.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            SVG_.setAttribute("width", `${width + 1}px`);
            SVG_.setAttribute("height", `${height + 1}px`);

            const points = [
                [0, 0],
                [5, 0],
                [13, 5],
                [21, 0],
                [width, 0],
                [width, height - 5],
                [21, height - 5],
                [13, height],
                [5, height - 5],
                [0, height - 5]
            ].map(p => p.join(',')).join(' ');

            polygon.setAttribute("points", points);
        });

        // 监听当前元素的尺寸变化
        resizeObserver.observe(this);
    }
}

class VizzyOperators extends HTMLElement
{
    constructor()
    {
        super();    
    }

    connectedCallback()
    {
        // 修改自己的风格
        this.style.minHeight        = '35px';
        this.style.minWidth         = '70px';
        this.style.marginLeft       = '5px';
        this.style.marginRight      = '5px';
        this.style.paddingLeft      = '5px';
        this.style.paddingRight     = '5px';
        this.style.display          = 'flex';
        this.style.flexDirection    = 'row';
        this.style.width            = 'fit-content';
        this.style.alignItems       = 'center';
        
        if (this.parentNode.tagName === "VIZZY-INSTRUCTION") 
        {
            this.style.marginTop     = '6px';
            this.style.marginBottom  = '6px';
            this.style.transform     = "translateY(-2.5px)";
        } 
        else 
        {
            this.style.marginTop    = '2px';
            this.style.marginBottom = '2px';
        }

        //画背景 创建 SVG 和图像  
        const SVG_ = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        SVG_.style.position = "absolute";
        SVG_.setAttribute("width", "100%");
        SVG_.setAttribute("height", "100%");
        SVG_.style.marginLeft       = '-5px';
        SVG_.style.zIndex = "-1";

        // 在 SVG 中创建图像
        const rect_ = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect_.setAttribute("rx", "14");
        rect_.setAttribute("ry", "14");
        rect_.setAttribute("fill", "#2E80B7 ");
        rect_.setAttribute("stroke", "#305982");
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

        
        if (this.parentNode.tagName === "VIZZY-INSTRUCTION") 
        {
            this.style.transform    = "translateY(-2.5px)";
        } 
        else 
        {
            this.style.marginTop         = '3px';
            this.style.marginBottom      = '3px';
            this.style.height            = 'fit-content';
        }

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

class VizzyEvent extends HTMLElement
{            
    constructor()
    {
        super();       
    }

    connectedCallback()
    {
        // 修改自己的风格
        this.style.minHeight        = '45px';
        this.style.minWidth         = '60px';
        this.style.display          = 'flex';
        this.style.flexDirection    = 'row';
        this.style.width            = 'fit-content';
        this.style.alignItems       = 'center';
        this.style.paddingLeft      = '5px';
        this.style.paddingRight     = '5px';
        this.style.paddingTop       = '0px';
        this.style.paddingBottom    = '0px';
        if (this.parentNode.firstElementChild === this) 
        {
            this.style.marginTop    ='5px';
        } 
        else 
        {
            if (this.parentElement.tagName === 'VIZZY-LOOPBODY' && this.previousElementSibling.tagName === 'svg')
            {
                this.style.marginTop    ='0px';
            } 
            else
            {
                this.style.marginTop    = '-5px';
            }
        }




        //画背景 创建 SVG 和图像  
        const SVG_ = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        SVG_.style.position = "absolute";
        SVG_.style.zIndex = "-1";
        SVG_.style.marginLeft = '-5px';
        SVG_.setAttribute("width", "100%");
        SVG_.setAttribute("height", "100%");

        // 在 SVG 中创建图像
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("fill", "#DE9230");
        polygon.setAttribute("stroke", "#9D763D");
        polygon.setAttribute("stroke-width", 1);
        SVG_.appendChild(polygon);

        // 使用 prepend 将其插入到元素的第一个子节点位置
        this.prepend(SVG_); 

        // 创建 ResizeObserver 大小变化的时候同步更新SVG
        const resizeObserver = new ResizeObserver(() => {
            const rect = this.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            SVG_.setAttribute("width", `${width + 1}px`);
            SVG_.setAttribute("height", `${height + 1}px`);

            const points = [
                [0, 0],
                [width, 0],
                [width, height - 5],
                [21, height - 5],
                [13, height],
                [5, height - 5],
                [0, height - 5]
            ].map(p => p.join(',')).join(' ');

            polygon.setAttribute("points", points);
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
        this.style.display              = 'flex';     
        this.style.alignItems           = 'center';
        this.style.color                = 'white'; 
        this.style.whiteSpace           = 'nowrap';

        if (this.parentNode.tagName === "VIZZY-VARBLES" ) 
        {
            this.style.marginTop        = '0px';
            this.style.marginBottom     = '0px';
            this.style.marginLeft       = '10px';
            this.style.marginRight      = '10px';
        } 
        else if(this.parentNode.tagName === "VIZZY-LOOPHEADER")
        {
            this.style.transform = "translateY(-2.5px)";
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
        else 
        {
            this.style.transform = "translateY(-2.5px)";
        }
        

    }
}


customElements.define('vizzy-div', Vizzy);

customElements.define('vizzy-instruction', VizzyInstruction);
customElements.define('vizzy-operators', VizzyOperators);

customElements.define('vizzy-information', VizzyInformation);
customElements.define('vizzy-event', VizzyEvent);




customElements.define('vizzy-text', VizzyText);
