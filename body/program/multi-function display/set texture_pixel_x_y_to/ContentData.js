export const ContentData = `
    <h1>set texture () pixel x= () y= () to () </h1>
    <vizzy-div>
        <vizzy-mfd>
            <vizzy-text>set texture</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>name</vizzy-text>
            </vizzy-elliptical>
            <vizzy-text>pixel x=</vizzy-text>
            <vizzy-elliptical> </vizzy-elliptical>
            <vizzy-text>y= </vizzy-text>
            <vizzy-elliptical> </vizzy-elliptical>
            <vizzy-text>to</vizzy-text>
            <vizzy-elliptical> </vizzy-elliptical>
        </vizzy-mfd>
    </vizzy-div>  
    <p>设置所创造的结构的像素，在后面的（0,0,0）中填入颜色向量(1,0,0)，大小为0-1分别表示RGB通道的强度，如果直接填写颜色将必须加上“#”，如套上（hex color （））在（hex color（））内可以不加#</p>


    <h2>注意</h2>
    <P>设置像素之前需要先初始化纹理，超过初始化的大小是无效的</P>
    <vizzy-div>
        <vizzy-mfd>
            <vizzy-text>create</vizzy-text>
            <vizzy-method type="tex">
                <vizzy-text>Texture</vizzy-text>
            </vizzy-method>
            <vizzy-text>widget named</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>texture2</vizzy-text>
            </vizzy-elliptical>
        </vizzy-mfd>
        <vizzy-mfd>
            <vizzy-text>initialize texture</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>texture2</vizzy-text>
            </vizzy-elliptical>
            <vizzy-text>width</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>100</vizzy-text>
            </vizzy-elliptical>
            <vizzy-text>and height</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>100</vizzy-text>
            </vizzy-elliptical>
        </vizzy-mfd>
        <vizzy-mfd>
            <vizzy-text>set texture</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>texture2</vizzy-text>
            </vizzy-elliptical>
            <vizzy-text>pixel x=</vizzy-text>
            <vizzy-elliptical> 
                <vizzy-text>85</vizzy-text>
            </vizzy-elliptical>
            <vizzy-text>y= </vizzy-text>
            <vizzy-elliptical> 
                <vizzy-text>60</vizzy-text>
            </vizzy-elliptical>
            <vizzy-text>to</vizzy-text>
            <vizzy-elliptical> 
                <vizzy-text>#FF0000</vizzy-text>
            </vizzy-elliptical>
        </vizzy-mfd>
    </vizzy-div>
`;