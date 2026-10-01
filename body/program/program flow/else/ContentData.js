export const ContentData = `
    <h1>else</h1>
    <vizzy-div>
        <vizzy-loopheader>
            <vizzy-text>else</vizzy-text>
        </vizzy-loopheader>
        <vizzy-loopbody>
        </vizzy-loopbody>
    </vizzy-div>        
    <p>和if类似在上面的if，或else if等所有条件不满足的的时候运行这个分支</p> 


    <h2>使用方法</h2>
    <P>只能在if或者else模块下使用，表述”如果那么...否则，可用单独和if配合”</P>
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
                <vizzy-loopheader>
            <vizzy-text>else</vizzy-text>
        </vizzy-loopheader>
        <vizzy-loopbody>
        </vizzy-loopbody>
    </vizzy-div>
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
            <vizzy-text>else</vizzy-text>
        </vizzy-loopheader>
        <vizzy-loopbody>
        </vizzy-loopbody>
    </vizzy-div>



    <h2>提示</h2>
    <p>这个组件只能接在if ( ) then下面，和else if ( ) then下面</p>

    <h2>注意</h2>
    <p>和else if类似上面分支的条件被满足时，下面的全部分支将会被跳过</P>
`;