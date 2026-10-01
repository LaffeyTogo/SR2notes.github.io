export const ContentData = `
    <h1>if ( ) then</h1>
    <vizzy-div>
        <vizzy-loopheader>
            <vizzy-text>if</vizzy-text>
            <vizzy-octagon></vizzy-octagon>
            <vizzy-text>then</vizzy-text>
        </vizzy-loopheader>
        <vizzy-loopbody>
        </vizzy-loopbody>
    </vizzy-div>        
    <p>与while类似，只有〈〉为真命题时才运行被包涵的模块，若为假命题则直接跳过</p> 
    <p>和while不同的是此模块只会运行一次，判断〈〉条件达成后运行包涵的模块，完成后自动跳出循环运行以下模块，不会再次判断〈〉</p>  



    <h2>注意</h2>
    <P>游戏的物理计算是跟随帧率的，在某些时候比如火箭降落时打降落伞</P>
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
            <vizzy-text>=</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>1000</vizzy-text>
            </vizzy-elliptical>
            </vizzy-operators>
            <vizzy-text>then</vizzy-text>
        </vizzy-loopheader>
        <vizzy-loopbody>
        </vizzy-loopbody>
    </vizzy-div>
    <p>这样是不行的，因为上一帧1001米下一帧999米是正常的，再加上游戏里浮点运算，所以这个样的设计几乎是不可能实现的，以下是正确示范</P>
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
    </vizzy-div>

`;