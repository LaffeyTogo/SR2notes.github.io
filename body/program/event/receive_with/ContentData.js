export const ContentData = `
    <h1>receive (message) with ()</h1>
    <vizzy-div>
        <vizzy-event>
            <vizzy-text>receive</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>message</vizzy-text>
            </vizzy-elliptical>
                <vizzy-text>with</vizzy-text>
            <vizzy-parameter>
                <vizzy-text>data</vizzy-text>
            </vizzy-parameter>
        </vizzy-event>
    </vizzy-div>        
    <p>当收到特定信息（message）时触发，刷新参数（data）为用户所设置的文本或数字</p> 

    <h2>用法</h2>
    <p>发消息和收消息需要配合使用</p>
    <vizzy-div>
        <vizzy-instruction>
            <vizzy-text>broadcast</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>hello</vizzy-text>
            </vizzy-elliptical>
            <vizzy-text>wuth data</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>0</vizzy-text>
            </vizzy-elliptical>
        </vizzy-instruction>
    </vizzy-div>        

    <vizzy-div>
        <vizzy-event>
            <vizzy-text>receive</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>hello</vizzy-text>
            </vizzy-elliptical>
                <vizzy-text>with</vizzy-text>
            <vizzy-parameter>
                <vizzy-text>data</vizzy-text>
            </vizzy-parameter>
        </vizzy-event>
        <vizzy-instruction>
            <vizzy-text>display</vizzy-text>
            <vizzy-parameter>
                <vizzy-text>data</vizzy-text>
            </vizzy-parameter>
        </vizzy-instruction>
    </vizzy-div>
`;