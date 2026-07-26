class VizzyOctagon extends HTMLElement
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
            this.style.marginTop    = '3px';
            this.style.marginBottom = '3px';
        }



        //画背景 创建 SVG 和图像  
        const SVG_ = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        SVG_.style.position = "absolute";
        SVG_.setAttribute("width", "100%");
        SVG_.setAttribute("height", "100%");

        // 在 SVG 中创建图像
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("fill", "#303030");
        polygon.setAttribute("stroke", "#202020");
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
        });

        // 监听当前元素的尺寸变化
        resizeObserver.observe(this);
    }
}


class VizzyElliptical extends HTMLElement
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

        // 在 SVG 中创建图像
        const rect_ = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect_.setAttribute("rx", "14");
        rect_.setAttribute("ry", "14");
        rect_.setAttribute("fill", "#303030");
        rect_.setAttribute("stroke", "#202020");
        rect_.setAttribute("stroke-width", 2);
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

class VizzyMethod extends HTMLElement
{
    constructor()
    {
        super();    
    }

    connectedCallback()
    {
        // 用div定高度和大小
        // VizzyMethod (上5 下11 自由大小)(居中)
        // |-- SVG
        // |   |-- rect
        // |   |-- polyline
        // |-- TypeTag.png
        // |-- text


        // 修改自己的风格
        this.style.minHeight        = '28px';
        this.style.minWidth         = '28px';
        this.style.marginLeft       = '5px';
        this.style.marginRight      = '5px';
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

        }

        //画背景 创建 SVG 和图像  
        const SVG_ = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        SVG_.style.position = "absolute";
        SVG_.style.zIndex = "-1";
        SVG_.setAttribute("width", "100%");
        SVG_.setAttribute("height", "100%");

        // 在 SVG 中创建图像
        const rect_ = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        if (this.parentNode.tagName === "VIZZY-OPERATORS") 
        {
            rect_.setAttribute("fill", "#1F5C85");
        } 
        else 
        {
            rect_.setAttribute("fill", "#303030");
            rect_.setAttribute("stroke", "#202020");
            rect_.setAttribute("stroke-width", 1);
        }
        SVG_.appendChild(rect_);

        // 在 SVG 中创建>
        const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        polyline.setAttribute("stroke", "#FFFFFF");
        polyline.setAttribute("stroke-width", 2);
        SVG_.appendChild(polyline);

        // 使用 prepend 将其插入到元素的第一个子节点位置
        this.prepend(SVG_); 
        
        // 查询所有自定义标签 <vizzy-method>
        const type = this.getAttribute('type');
        const img_ = document.createElement("img");
        switch (type) 
        {
            case 'mun':
                img_.src = "../../include/VizzyForWeb/TypeTag_num.png";
                img_.style.width = "20px";
                img_.style.height = "20px";
                img_.style.marginLeft       = '5px';
                break;
            case 'tex':
                break;
            case 'vec':
                img_.src = "../../include/VizzyForWeb/TypeTag_vec.png";
                img_.style.width = "20px";
                img_.style.height = "20px";
                img_.style.marginLeft       = '5px';
                
                break;
            default:
        }
        this.appendChild(img_);

        // 创建 ResizeObserver 大小变化的时候同步更新RECT
        const resizeObserver = new ResizeObserver(() => 
        {
            const rect = this.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            const points = 
            [
                [width - 16 , 10],
                [width - 12 , 14],
                [width - 8 , 10],
            ].map(p => p.join(',')).join(' ');

            polyline.setAttribute("points", points);

            rect_.setAttribute("width", `${width}px`);
            rect_.setAttribute("height", `24px`);
            SVG_.setAttribute("width", `${width + 1}px`);
            SVG_.setAttribute("height", `${24}px`);
        });

        // 监听当前元素的尺寸变化
        resizeObserver.observe(this);
    }
}


customElements.define('vizzy-octagon', VizzyOctagon);
customElements.define('vizzy-elliptical', VizzyElliptical);
customElements.define('vizzy-method', VizzyMethod);