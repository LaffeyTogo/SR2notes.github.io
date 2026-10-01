export const ContentData = `
    <h1>local log  ( ) </h1>
    <vizzy-div>
        <vizzy-instruction>
            <vizzy-text>local log</vizzy-text>
            <vizzy-elliptical></vizzy-elliptical>
        </vizzy-instruction>
    </vizzy-div>        
    <p>在飞船日志中写记录</p> 


    <h2>使用方法</h2>
    <P>这是每个一秒在飞船日志中记录高度的代码</P>
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
                <vizzy-text>wait</vizzy-text>
                <vizzy-elliptical>
                    <vizzy-text>1</vizzy-text>
                </vizzy-elliptical>
                <vizzy-text>seconds</vizzy-text>
            </vizzy-instruction>
            <vizzy-instruction>
                <vizzy-text>local log</vizzy-text>
                <vizzy-information>
                    <vizzy-text>altitude</vizzy-text>
                    <vizzy-method type="mun">
                        <vizzy-text>AGL</vizzy-text>
                    </vizzy-method>
                </vizzy-information>
            </vizzy-instruction>
        </vizzy-loopbody>
    </vizzy-div>
`;