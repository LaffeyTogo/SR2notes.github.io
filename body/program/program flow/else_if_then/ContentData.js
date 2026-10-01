export const ContentData = `
    <h1>else if ( ) then</h1>
    <vizzy-div>
        <vizzy-loopheader>
            <vizzy-text>else if</vizzy-text>
            <vizzy-octagon></vizzy-octagon>
            <vizzy-text>then</vizzy-text>
        </vizzy-loopheader>
        <vizzy-loopbody>
        </vizzy-loopbody>
    </vizzy-div>        
    <p>和if类似在上面的if条件不满足的的时候进行这个条件判断，不满足职跳过</p> 


    <h2>使用方法</h2>
    <P>只能在if模块下使用，表述”如果那么...”</P>
    <vizzy-div>
        <vizzy-loopheader>
            <vizzy-text>if</vizzy-text>
            <vizzy-operators>
                <vizzy-varbles>
                    <vizzy-text>Mode</vizzy-text>
                </vizzy-varbles>
                <vizzy-text>=</vizzy-text>
                <vizzy-elliptical>
                    <vizzy-text>1</vizzy-text>
                </vizzy-elliptical>
            </vizzy-operators>
            <vizzy-text>then</vizzy-text>
        </vizzy-loopheader>
        <vizzy-loopbody>
        </vizzy-loopbody>
        <vizzy-loopheader>
            <vizzy-text>else if</vizzy-text>
            <vizzy-operators>
                <vizzy-varbles>
                    <vizzy-text>Mode</vizzy-text>
                </vizzy-varbles>
                <vizzy-text>=</vizzy-text>
                <vizzy-elliptical>
                    <vizzy-text>2</vizzy-text>
                </vizzy-elliptical>
            </vizzy-operators>
            <vizzy-text>then</vizzy-text>
        </vizzy-loopheader>
        <vizzy-loopbody>
        </vizzy-loopbody>
    </vizzy-div>



    <h2>提示</h2>
    <p>这个组件只能接在if ( ) then下面</p>

    <h2>注意</h2>
    <p>上面的条件被满足时后面的条件会被跳过，以下是一个错误示范，因为当高度低于500时高度低于1000的条件被满足，后面的分支被跳过了</P>
    <vizzy-div>
        <vizzy-loopheader>
            <vizzy-text>if</vizzy-text>
            <vizzy-operators>
                <vizzy-information>
                    <vizzy-text>altitude</vizzy-text>
                    <vizzy-method type="mun">
                        <vizzy-text>AGL</vizzy-text>
                    </vizzy-method>
                </vizzy-information>
                <vizzy-text><=</vizzy-text>
                <vizzy-elliptical>
                    <vizzy-text>1000</vizzy-text>
                </vizzy-elliptical>
            </vizzy-operators>
            <vizzy-text>then</vizzy-text>
        </vizzy-loopheader>
        <vizzy-loopbody>
        </vizzy-loopbody>
        <vizzy-loopheader>
            <vizzy-text>else if</vizzy-text>
            <vizzy-operators>
                <vizzy-information>
                    <vizzy-text>altitude</vizzy-text>
                    <vizzy-method type="mun">
                        <vizzy-text>AGL</vizzy-text>
                    </vizzy-method>
                </vizzy-information>
                <vizzy-text><=</vizzy-text>
                <vizzy-elliptical>
                    <vizzy-text>500</vizzy-text>
                </vizzy-elliptical>
            </vizzy-operators>
            <vizzy-text>then</vizzy-text>
        </vizzy-loopheader>
        <vizzy-loopbody>
        </vizzy-loopbody>
    </vizzy-div>
    <p>如果多个条件一定存在递进关系需要将更深的条件放在前面</P>
    <vizzy-div>
        <vizzy-loopheader>
            <vizzy-text>if</vizzy-text>
            <vizzy-operators>
                <vizzy-information>
                    <vizzy-text>altitude</vizzy-text>
                    <vizzy-method type="mun">
                        <vizzy-text>AGL</vizzy-text>
                    </vizzy-method>
                </vizzy-information>
                <vizzy-text><=</vizzy-text>
                <vizzy-elliptical>
                    <vizzy-text>500</vizzy-text>
                </vizzy-elliptical>
            </vizzy-operators>
            <vizzy-text>then</vizzy-text>
        </vizzy-loopheader>
        <vizzy-loopbody>
        </vizzy-loopbody>
        <vizzy-loopheader>
            <vizzy-text>else if</vizzy-text>
            <vizzy-operators>
                <vizzy-information>
                    <vizzy-text>altitude</vizzy-text>
                    <vizzy-method type="mun">
                        <vizzy-text>AGL</vizzy-text>
                    </vizzy-method>
                </vizzy-information>
                <vizzy-text><=</vizzy-text>
                <vizzy-elliptical>
                    <vizzy-text>1000</vizzy-text>
                </vizzy-elliptical>
            </vizzy-operators>
            <vizzy-text>then</vizzy-text>
        </vizzy-loopheader>
        <vizzy-loopbody>
        </vizzy-loopbody>
    </vizzy-div>
`;