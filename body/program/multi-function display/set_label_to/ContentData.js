export const ContentData = `
    <h1>set lable () [] to ()</h1>
    <vizzy-mfd>
        <vizzy-text>set lable</vizzy-text>
        <vizzy-elliptical>
            <vizzy-text>name</vizzy-text>
        </vizzy-elliptical>
        <vizzy-method type="tex">
            <vizzy-text>Text</vizzy-text>
        </vizzy-method>
        <vizzy-text>to</vizzy-text>
        <vizzy-elliptical> </vizzy-elliptical>
    </vizzy-mfd>
    <p>设置文本框文字信息，大小</p> 


    <h2>使用方法</h2>
    <P>创建一个占满屏幕的Hello word</P>
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
            <vizzy-text>set lable</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>TextBox1</vizzy-text>
            </vizzy-elliptical>
            <vizzy-method type="tex">
                <vizzy-text>Auto size</vizzy-text>
            </vizzy-method>
            <vizzy-text>to</vizzy-text>
            <vizzy-discriminant>
                <vizzy-text>ture</vizzy-text>
            </vizzy-discriminant>
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
                            <vizzy-text>Text</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>字符</td>
                <td>要显示的文字，现在依旧不能显示除英文以外的，支持富文本</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="num">
                            <vizzy-text>Size</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>数值</td>
                <td>文字的大小</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="vec">
                            <vizzy-text>Auto size</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>布尔</td>
                <td>是否启用自动大小，以填充标签小部件的全部区域，不知道详细工作原理，反正不聪明</td>
            </tr>
        </tbody>
    </table>
`;