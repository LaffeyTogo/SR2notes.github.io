class VizzyVarbles extends HTMLElement
{
    constructor()
    {
        super();    
    }

    connectedCallback()
    {
        // 修改自己的风格
        this.style.minHeight        = '28px';
        this.style.minWidth         = '28px';
        this.style.marginLeft       = '5px';
        this.style.marginRight      = '5px';
        this.style.width            = 'fit-content';
        this.style.position         = "relative";

        this.style.display          = 'inline-flex';
        this.style.alignItems       = 'center';

        this.style.flexDirection    = 'row';
        this.style.width            = 'fit-content';
        this.style.marginTop        = '3px';
        this.style.marginBottom     = '3px';

        // 画背景 创建 SVG 和图像  
        const SVG_ = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        SVG_.style.position = "absolute";
        SVG_.setAttribute("width", "100%");
        SVG_.setAttribute("height", "100%");
        SVG_.style.zIndex = "-1";
        this.appendChild(SVG_);

        // 在 SVG 中创建图像
        const rect_ = this.CreateRect();
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

        resizeObserver.observe(this);
    }


    CreateRect()
    {
        const rect_ = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect_.setAttribute("rx", "14");
        rect_.setAttribute("ry", "14");
        rect_.setAttribute("fill", "#00B200");
        rect_.setAttribute("stroke", "#00A100");

        return rect_;
    }
}




class VizzyParameter extends VizzyVarbles
{
    CreateRect()
    {
        const rect_ = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect_.setAttribute("rx", "14");
        rect_.setAttribute("ry", "14");
        rect_.setAttribute("fill", "#F2A90D");
        rect_.setAttribute("stroke", "#CC8A00");

        return rect_;
    }
}





class VizzyDiscriminant extends HTMLElement
{
    constructor()
    {
        super();    
    }

    connectedCallback()
    {
        // 修改自己的风格
        this.style.minHeight        = '35px';
        this.style.minWidth         = '35px';
        this.style.width            = 'fit-content';
        this.style.position         = "relative";

        this.style.display          = 'inline-flex';
        this.style.alignItems       = 'center';

        this.style.marginLeft       = '5px';
        this.style.marginRight      = '5px';
        this.style.paddingLeft      = '5px';
        this.style.paddingRight     = '5px';


        
        if (this.parentNode.tagName === "VIZZY-INSTRUCTION") 
        {
            this.style.marginTop     = '6px';
            this.style.marginBottom  = '6px';
        } 
        else if (this.parentNode.tagName === "VIZZY-LOOPHEADER") 
        {
            this.style.marginTop     = '2px';
            this.style.marginBottom  = '2px';
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
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("fill", "#2E80B7");
        polygon.setAttribute("stroke", "#305982");
        polygon.setAttribute("stroke-width", 1);
        SVG_.appendChild(polygon);

        // 使用 prepend 将其插入到元素的第一个子节点位置
        this.prepend(SVG_); 
        
        // 创建 ResizeObserver 大小变化的时候同步更新RECT
        const resizeObserver = new ResizeObserver(() => 
        {
            const rect = this.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            const points = [
                [12, 0],
                [width - 12, 0],
                [width , 12],
                [width, height - 12],
                [width - 12 , height],
                [12, height],
                [0 , height - 12],
                [0, 12]
            ].map(p => p.join(',')).join(' ');
            polygon.setAttribute("points", points);

            SVG_.setAttribute("width", `${width + 1}px`);
            SVG_.setAttribute("height", `${height + 1}px`);
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
        this.style.width            = 'fit-content';
        this.style.position         = "relative";

        this.style.display          = 'inline-flex';
        this.style.alignItems       = 'center';

        this.style.marginLeft       = '5px';
        this.style.marginRight      = '5px';
        this.style.paddingLeft      = '5px';
        this.style.paddingRight     = '5px';
        
        
        if (this.parentNode.tagName === "VIZZY-INSTRUCTION") 
        {
            this.style.marginTop     = '6px';
            this.style.marginBottom  = '6px';
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

customElements.define('vizzy-discriminant', VizzyDiscriminant);
customElements.define('vizzy-operators', VizzyOperators);
customElements.define('vizzy-varbles', VizzyVarbles);
customElements.define('vizzy-parameter', VizzyParameter);