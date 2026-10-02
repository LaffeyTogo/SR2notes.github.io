export const ContentData = `
    <h1>set widget () anchor to []</h1>
    <vizzy-div>
        <vizzy-mfd>
            <vizzy-text>set widget</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>name</vizzy-text>
            </vizzy-elliptical>
            <vizzy-text>anchor to</vizzy-text>
            <vizzy-method type="tex">
                <vizzy-text>Center</vizzy-text>
            </vizzy-method>
        </vizzy-mfd>
    </vizzy-div>        
    <p>将组件铆定到父级组件的预定位置</p> 


    <h2>使用方法</h2>
    <P>创建一个名为TextBox1的组件并移动他到多功能显示器的左上角</P>
    <vizzy-div>
        <vizzy-event>
            <vizzy-text>on start</vizzy-text>
        </vizzy-event>
        <vizzy-mfd>
            <vizzy-text>create</vizzy-text>
            <vizzy-method type="tex">
                <vizzy-text>Label</vizzy-text>
            </vizzy-method>
            <vizzy-text>widget named</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>TextBox1</vizzy-text>
            </vizzy-elliptical>
        </vizzy-mfd>
        <vizzy-mfd>
            <vizzy-text>set lable</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>TextBox1</vizzy-text>
            </vizzy-elliptical>
            <vizzy-method type="tex">
                <vizzy-text>Text</vizzy-text>
            </vizzy-method>
            <vizzy-text>to</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>Hello word</vizzy-text>
            </vizzy-elliptical>
        </vizzy-mfd>
        <vizzy-mfd>
            <vizzy-text>set widget</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>TextBox1</vizzy-text>
            </vizzy-elliptical>
            <vizzy-method type="vec">
                <vizzy-text>Position</vizzy-text>
            </vizzy-method>
            <vizzy-text>to</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>-1,1</vizzy-text>
            </vizzy-elliptical>
        </vizzy-mfd>
    </vizzy-div>


    <h2>参数列表</h2>
    <table  style="width: 100%;">
        <thead>
            <tr>
                <th>参数</th>
                <th>类型</th>
                <th>定义</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Left</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>靠左</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Topletf</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>左上</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Topcenter</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>中上</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Topright</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>右上</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Bottomleft</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>左下</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Bottomcenter</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>中下</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Bottomright</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>右下</td>
            </tr>
        </tbody>
    </table>
`;