export const ContentData = `
    <h1>display ( ) </h1>
    <vizzy-div>
        <vizzy-instruction>
            <vizzy-text>display</vizzy-text>
            <vizzy-elliptical></vizzy-elliptical>
        </vizzy-instruction>
    </vizzy-div>        
    <p>在屏幕中上部显示内容，主要是文字，调用一次display只会持续显示几秒。工作方式是覆盖原屏幕显示的文字内容</p> 


    <h2>使用方法</h2>
    <P>这样便可在屏幕上实时显示高度</P>
    <vizzy-div>
        <vizzy-event>
            <vizzy-text>on start</vizzy-text>
        </vizzy-event>
        <vizzy-loopheader>
            <vizzy-text>while</vizzy-text>
            <vizzy-discriminant>
                <vizzy-text>ture</vizzy-text>
            </vizzy-discriminant>
        </vizzy-loopheader>
        <vizzy-loopbody>
            <vizzy-instruction>
                <vizzy-text>display</vizzy-text>
                <vizzy-information>
                    <vizzy-text>altitude</vizzy-text>
                    <vizzy-method type="mun">
                        <vizzy-text>AGL</vizzy-text>
                    </vizzy-method>
                </vizzy-information>
            </vizzy-instruction>
        </vizzy-loopbody>
    </vizzy-div>


    <h2>注意</h2>
    <p>display会覆盖屏幕上原本打印的内容，若有两个dispaly在同一时间被调用只会显示其中一个。对不同的飞船也同样生效，只要是在加载范围内，别的飞船也在不停的调用display的话当前控制的飞船的display可能被覆盖</P>
`;