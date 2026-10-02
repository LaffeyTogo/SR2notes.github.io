export const ContentData = `
    <h1>set widget () [] to ()</h1>
    <vizzy-div>
        <vizzy-mfd>
            <vizzy-text>set widget</vizzy-text>
            <vizzy-elliptical>
                <vizzy-text>name</vizzy-text>
            </vizzy-elliptical>
            <vizzy-method type="vec">
                <vizzy-text>Position</vizzy-text>
            </vizzy-method>
            <vizzy-text>to</vizzy-text>
            <vizzy-elliptical></vizzy-elliptical>
        </vizzy-mfd>
    </vizzy-div>        
    <p>在前面创造了小部件以后，需要设置设置小部件的一些特性，当然如果不设置这些特性他们将会是默认值，这不是必要的东西</p> 


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
                        <vizzy-method-blue type="vec">
                            <vizzy-text>Anchored Position</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>向量</td>
                <td>锚定位置</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="vec">
                            <vizzy-text>Anchored Min</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>向量</td>
                <td>不知道</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="vec">
                            <vizzy-text>Anchored Msx</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>向量</td>
                <td>不知道</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="vec">
                            <vizzy-text>Color</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>向量</td>
                <td>颜色是十六进制色例如#FFFFFF将会是黑色，如果直接填写颜色将必须加上“#”，如套上（hex color （））在（hex color（））内可以不加</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="num">
                            <vizzy-text>Opacity</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>数值</td>
                <td>不透明度 在后面的的 填写0-1以表示不透明度，0表示完全透明，1则为完全不透明</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Parent</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>父级</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="num">
                            <vizzy-text>Pivot</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>旋转中心</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="tex">
                            <vizzy-text>Position</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>Text</td>
                <td>平面坐标，X,Y，可以不带括号，0,0是显示器的中心</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="num">
                            <vizzy-text>Rotation</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>角度</td>
                <td>旋转的角度</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="vec">
                            <vizzy-text>Scale</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>向量</td>
                <td>规模，这个值只能是0-1</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="vec">
                            <vizzy-text>Size</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>向量</td>
                <td>大小</td>
            </tr>
            <tr>
                <td>
                    <vizzy-div>
                        <vizzy-method-blue type="num">
                            <vizzy-text>visible</vizzy-text>
                        </vizzy-method-blue>
                    </vizzy-div>
                </td>
                <td>布尔</td>
                <td>可见性 Ture或false 1或0 真命题表示看得见，反之亦然</td>
            </tr>
        </tbody>
    </table>
`;