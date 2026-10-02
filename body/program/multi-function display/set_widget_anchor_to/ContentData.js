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
    <p> 将组件铆定到父级组件的预定位置</p> 


    <h2>使用方法</h2>
    <P>在地图的下中部显示当前海拔高度</P>
    <vizzy-div>
        <vizzy-event>
            <vizzy-text>on start</vizzy-text>
        </vizzy-event>
        <vizzy-mfd>
            <vizzy-text>create</vizzy-text>
            <vizzy-method type="tex">
                <vizzy-text>Map</vizzy-text>
            </vizzy-method>
            <vizzy-text>widget named</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>Map1</vizzy-text>
            </vizzy-elliptical>
        </vizzy-mfd>
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
            <vizzy-text>set widget</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>TextBox1</vizzy-text>
            </vizzy-elliptical>
            <vizzy-method type="tex">
                <vizzy-text>parent</vizzy-text>
            </vizzy-method>
            <vizzy-text>to</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>Map1</vizzy-text>
            </vizzy-elliptical>
        </vizzy-mfd>
        <vizzy-mfd>
            <vizzy-text>set widget</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>TextBox1</vizzy-text>
            </vizzy-elliptical>
            <vizzy-text>anchor to</vizzy-text>
            <vizzy-method type="tex">
                <vizzy-text>Bottom center</vizzy-text>
            </vizzy-method>
        </vizzy-mfd>
        <vizzy-loopheader>
            <vizzy-text>while</vizzy-text>
            <vizzy-discriminant>
                <vizzy-text>ture</vizzy-text>
            </vizzy-discriminant>
        </vizzy-loopheader>
        <vizzy-loopbody>
            <vizzy-mfd>
                <vizzy-text>set lable</vizzy-text>
                <vizzy-elliptical>
                    <vizzy-text>TextBox1</vizzy-text>
                </vizzy-elliptical>
                <vizzy-method type="tex">
                    <vizzy-text>Text</vizzy-text>
                </vizzy-method>
                <vizzy-text>to</vizzy-text>
                <vizzy-information>
                    <vizzy-text>altitude</vizzy-text>
                    <vizzy-method type="num">
                        <vizzy-text>ASL</vizzy-text>
                    </vizzy-method>
                </vizzy-information>
            </vizzy-mfd>
        </vizzy-loopbody>
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
                <td>左边</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Center</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>居中</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Right</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>右边</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Center</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>中间</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Right</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>右边</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Top letf</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>左上角</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Top center</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>上部居中</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Top right</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>右上角</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Bottom left</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>左下角</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Bottom center</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>中下部</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Bottom Right</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>右下角</td>
            </tr>
        </tbody>
    </table>
`;