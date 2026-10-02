export const ContentData = `
    <h1>set line () [] to ()</h1>
    <vizzy-div>
        <vizzy-mfd>
            <vizzy-text>set line</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>name</vizzy-text>
            </vizzy-elliptical>
            <vizzy-method type="vec">
                <vizzy-text>Thickness</vizzy-text>
            </vizzy-method>
            <vizzy-text>to</vizzy-text>
            <vizzy-elliptical> </vizzy-elliptical>
        </vizzy-mfd>
    </vizzy-div>  
    <p>设置之前创造的线小部件的一些特性</p>


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
                        <vizzy-method-blue type="vec">
                            <vizzy-text>thickness</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>向量</td>
                <td>厚度（宽度）0-1，1表示100%</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="num">
                            <vizzy-text>length</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>数值</td>
                <td>长度</td>
            </tr>
        </tbody>
    </table>
`;