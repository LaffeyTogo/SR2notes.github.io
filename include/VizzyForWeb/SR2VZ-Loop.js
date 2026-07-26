class vizzyLoopheader extends HTMLElement
{            
    constructor()
    {
        super();       
    }

    connectedCallback()
    {
        // 修改自己的风格
        this.style.minHeight        = '45px';
        this.style.minWidth         = '45px';
        this.style.width            = 'fit-content';
        this.style.position         = "relative";

        this.style.display          = 'inline-flex';
        this.style.alignItems       = 'center';

        this.style.paddingLeft      = '5px';
        this.style.paddingRight     = '5px';
        this.style.paddingTop       = '0px';
        this.style.paddingBottom    = '5px';


        if (this.parentNode.firstElementChild === this) 
        {
            this.style.marginTop    ='5px';
        } 
        else 
        {
            this.style.marginTop    = '-5px';
        }

        //画背景 创建 SVG 和图像  
        const SVG_ = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        SVG_.style.position = "absolute";
        SVG_.style.left = "-1";
        SVG_.style.top = "-1";
        SVG_.style.zIndex = "-1";
        SVG_.setAttribute("width", "100%");
        SVG_.setAttribute("height", "100%");

        // 在 SVG 中创建图像
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("fill", "#2E80B7 ");
        polygon.setAttribute("stroke", "#305982");
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
                [5, 0],
                [13, 5],
                [21, 0],
                [width, 0],
                [width, height - 5],
                [29, height - 5],
                [21, height],
                [13, height - 5],
                [0, height - 5]
            ].map(p => p.join(',')).join(' ');

            polygon.setAttribute("points", points);
        });

        // 监听当前元素的尺寸变化
        resizeObserver.observe(this);
    }
}

class vizzyLoopbody extends HTMLElement
{
    constructor()
    {
        super();       
    }

    connectedCallback()
    {
        // 修改自己的风格
        this.style.minHeight        = '35px';
        this.style.minWidth         = '64px';
        this.style.position         = "relative";

        this.style.display          = 'flex';
        this.style.flexDirection    = 'column';

        this.style.alignItems       = 'flex-start';
        this.style.justifyContent   = 'flex-start';
        this.style.width            = 'fit-content';
        this.style.paddingLeft      = '8px';
        this.style.paddingTop       = '0px';
        this.style.paddingBottom    = '13px';
        if (this.parentNode.firstElementChild === this) 
        {
            this.style.marginTop    ='5px';
        } 
        else 
        {
            this.style.marginTop    = '-5px';
        }

        //画背景 创建 SVG 和图像  
        const SVG_ = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        SVG_.style.position = "absolute";
        SVG_.style.left = "-1";
        SVG_.style.top = "-1";
        SVG_.style.zIndex = "999";
        SVG_.setAttribute("width", "100%");
        SVG_.setAttribute("height", "100%");

        // 在 SVG 中创建图像
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("fill", "#2E80B7 ");
        polygon.setAttribute("stroke", "#305982");
        polygon.setAttribute("stroke-width", 1);
        SVG_.appendChild(polygon);

        // 使用 prepend 将其插入到元素的第一个子节点位置
        this.prepend(SVG_); 

        // 创建 ResizeObserver 大小变化的时候同步更新SVG
        const resizeObserver = new ResizeObserver(() => {
            const rect = this.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            SVG_.setAttribute("width", `${this.previousElementSibling.offsetWidth + 1}px`);
            SVG_.setAttribute("height", `${height + 1}px`);

            const points = 
            [
                [0, 0],
                [8, 0],
                [8, height - 13 ],
                [this.previousElementSibling.offsetWidth, height - 13],
                [this.previousElementSibling.offsetWidth, height - 5],
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

customElements.define('vizzy-loopheader', vizzyLoopheader);            
customElements.define('vizzy-loopbody', vizzyLoopbody);