
export const ContentData = `

        <h1>用前馈补偿PD实现火箭悬停</h1>
   

        <p>pd是一种常见的控制方式，有适应性强，响应快能通过当前状况实时调整等特点，适用范围非常广泛，但并非万能。这里以初始火箭悬的停为例来介绍pd</p>
        <h2>PD控制的原理</h2>
        

        <h3>proportional 比例</h3>
        <p>比例的目的是使趋近于目标，比如目标在左边那么给出一个向左的力，目标温度是100当前已经110那么降低加热功耗等</p>
        <p>这里的比例指的是“控制输出与误差成比例”，例如统 PD 的 P 项定义为 “ P​=K​e ” e指误差量，这里满足 输入扩大 2 倍 输出扩大 2 倍，这是一个严格的比例关系，所以叫 Proportional。</p>
        <p>现代控制器几乎没人拘泥于 “ P​=K​e ” 有的 ” p=ke^3 “ 甚至 “ p = K ​tanh(e) ”</p>
        <p>这是控制工程里的一个约定，实际上大家已经把 p 当作根据当前误差直接计算控制量，而并非严格规定一定是关于误差的比值</p>

        
        <h3>derivative 微分</h3>
        <p>根据误差变化趋势修正控制量，微分项的目的，是抑制系统变化过快，不要冲过预设点</p>
        <P>误差变化对时间的微分，换句话说就是误差的变化率，举例来讲，距离的变化率就是速度。按照数学的角度来说速度的微分就是加速度</p>


        <h3>前馈补偿 Feedforward</h3>
        <p>补偿通常来讲是固定的误差，生活中常见的有比如摩擦力，空气阻力等等，。在本例中补偿将会是火箭的重力，我们待会将讨论没有补偿会发生什么</p>


        <h2>vizzy实现</h2>
        <p>在开始之前我们先讨论我们的输出，因为是控制火箭垂直高度悬停，我们选用火箭的发动机节流阀作为输出。当火箭低于预定高度时增加增加节流阀，火箭高于预定高度时减小节流阀</p>
        

        <h3>计算误差控制量 proportional</h3>
        <p>在这里我们将使用传统的等比例函数实现对误差的控制</p>

        
        <h4>计算误差量</h4>
        <p>火箭的高度和实际的高度的差就是误差量，我们按照末减初的定则实现</p>
        <vizzy-div>
            <vizzy-operators>
                <vizzy-varbles>
                    <vizzy-text>target</vizzy-text>
                </vizzy-varbles>
                <vizzy-text>-</vizzy-text>
                <vizzy-information>
                    <vizzy-text>altitude</vizzy-text>
                    <vizzy-method type="mun">
                        <vizzy-text>AGL</vizzy-text>
                    </vizzy-method>
                </vizzy-information>
            </vizzy-operators>
        </vizzy-div>
        <h4>系数K</h4>
        <p>这里我们将系数设置为了0.05，那么火箭低于预定高度1m的时候p将输出0.05的值。对应到节流阀就是5%，高于预定高度2m就是-10%，这个p就是误差控制量</p>
        <vizzy-div>
            <vizzy-instruction>
                <vizzy-text>set variable</vizzy-text>
                <vizzy-varbles>
                    <vizzy-text>p</vizzy-text>
                </vizzy-varbles>
                <vizzy-text>to</vizzy-text>
                <vizzy-operators>
                    <vizzy-operators>
                        <vizzy-varbles>
                            <vizzy-text>target</vizzy-text>
                        </vizzy-varbles>
                        <vizzy-text>-</vizzy-text>
                        <vizzy-information>
                            <vizzy-text>altitude</vizzy-text>
                            <vizzy-method type="mun">
                                <vizzy-text>AGL</vizzy-text>
                            </vizzy-method>
                        </vizzy-information>
                    </vizzy-operators>
                    <vizzy-text>*</vizzy-text>
                    <vizzy-elliptical>
                        <vizzy-text>0.05</vizzy-text>
                    </vizzy-elliptical>
                </vizzy-operators>
            </vizzy-instruction>
        </vizzy-div>
        <p>这里的0.05不是绝对的，可以修改试试看会发生什么</p>

        <h3>微分量 derivative</h3>
        <p>我们的目标是火箭的悬停换句话说就是控制火箭的位置，已知位置的变化率是速度，那么位置的微分就是速度</p>
        <p>在本例中我们将速度的负数作为微分项，意义是速度越快，抑制速度的输出也越大，为了简单考虑我们取一个简单的一次函数作为示例，其中k取-0.05</p>
        <vizzy-div>
            <vizzy-instruction>
                <vizzy-text>set variable</vizzy-text>
                <vizzy-varbles>
                    <vizzy-text>d</vizzy-text>
                </vizzy-varbles>
                <vizzy-text>to</vizzy-text>
                <vizzy-operators>
                    <vizzy-information>
                        <vizzy-text>velocity</vizzy-text>
                        <vizzy-method type="mun">
                            <vizzy-text>Vertical</vizzy-text>
                        </vizzy-method>
                    </vizzy-information>
                    <vizzy-text>*</vizzy-text>
                    <vizzy-elliptical>
                        <vizzy-text>-0.05</vizzy-text>
                    </vizzy-elliptical>
                </vizzy-operators>
            </vizzy-instruction>
        </vizzy-div>
        
        <h3>固定误差</h3>
        <p>在本例中我们要将火箭悬停到10m高度，但火箭是有质量的，在p和d中没有被讨论到。</p>
        <p>我们假设火箭固定为5吨，发动机功率为20吨，我们不难注意到火箭在-5m的情况下达到稳态，这时p输出为+0.25%发动机的推力正好等于火箭的重力。我们称固定误差为5m</p>
        <p>理论上来讲我们已经得到了固定误差，但是我们能直接得知固定误差来源于火箭的重力，好消息是这个数值我们能直接算出来</p>
        <vizzy-div>
            <vizzy-instruction>
                <vizzy-text>set variable</vizzy-text>
                <vizzy-varbles>
                    <vizzy-text>error</vizzy-text>
                </vizzy-varbles>
                <vizzy-text>to</vizzy-text>
                <vizzy-operators>
                    <vizzy-operators>
                        <vizzy-operators>
                            <vizzy-information>
                                <vizzy-text>velocity</vizzy-text>
                                <vizzy-method type="vec">
                                    <vizzy-text>Gravity</vizzy-text>
                                </vizzy-method>
                            </vizzy-information>
                            <vizzy-method type="mun">
                                <vizzy-text>lenght</vizzy-text>
                            </vizzy-method>
                        </vizzy-operators>
                        <vizzy-text>*</vizzy-text>
                        <vizzy-information>
                            <vizzy-text>performance</vizzy-text>
                            <vizzy-method type="mun">
                                <vizzy-text>Mass</vizzy-text>
                            </vizzy-method>
                        </vizzy-information>
                    </vizzy-operators>
                    <vizzy-text>/</vizzy-text>
                    <vizzy-information>
                        <vizzy-text>performance</vizzy-text>
                        <vizzy-method type="mun">
                            <vizzy-text>Max Engine Thrust</vizzy-text>
                        </vizzy-method>
                    </vizzy-information>
                </vizzy-operators>
            </vizzy-instruction>
        </vizzy-div>
        <p>上面的意思是火箭质量乘重力加速度 然后除以发动机的最大推力，假设g = 10 质量5吨推力20吨，那么error的输出就是0.25这正好抵消了火箭的重力</p>

        <h3>最终实现</h3>
        <p>接下来只需要把p d e 都加起来输出到火箭节流阀轴就好了</p>
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
                    <vizzy-text>set variable</vizzy-text>
                    <vizzy-varbles>
                        <vizzy-text>p</vizzy-text>
                    </vizzy-varbles>
                    <vizzy-text>to</vizzy-text>
                    <vizzy-operators>
                        <vizzy-operators>
                            <vizzy-varbles>
                                <vizzy-text>target</vizzy-text>
                            </vizzy-varbles>
                            <vizzy-text>-</vizzy-text>
                            <vizzy-information>
                                <vizzy-text>altitude</vizzy-text>
                                <vizzy-method type="mun">
                                    <vizzy-text>AGL</vizzy-text>
                                </vizzy-method>
                            </vizzy-information>
                        </vizzy-operators>
                        <vizzy-text>*</vizzy-text>
                        <vizzy-elliptical>
                            <vizzy-text>0.05</vizzy-text>
                        </vizzy-elliptical>
                    </vizzy-operators>
                </vizzy-instruction>
                <vizzy-instruction>
                    <vizzy-text>set variable</vizzy-text>
                    <vizzy-varbles>
                        <vizzy-text>d</vizzy-text>
                    </vizzy-varbles>
                    <vizzy-text>to</vizzy-text>
                    <vizzy-operators>
                        <vizzy-information>
                            <vizzy-text>velocity</vizzy-text>
                            <vizzy-method type="mun">
                                <vizzy-text>Vertical</vizzy-text>
                            </vizzy-method>
                        </vizzy-information>
                        <vizzy-text>*</vizzy-text>
                        <vizzy-elliptical>
                            <vizzy-text>-0.05</vizzy-text>
                        </vizzy-elliptical>
                    </vizzy-operators>
                </vizzy-instruction>
                <vizzy-instruction>
                    <vizzy-text>set variable</vizzy-text>
                    <vizzy-varbles>
                        <vizzy-text>error</vizzy-text>
                    </vizzy-varbles>
                    <vizzy-text>to</vizzy-text>
                    <vizzy-operators>
                        <vizzy-operators>
                            <vizzy-operators>
                                <vizzy-information>
                                    <vizzy-text>velocity</vizzy-text>
                                    <vizzy-method type="vec">
                                        <vizzy-text>Gravity</vizzy-text>
                                    </vizzy-method>
                                </vizzy-information>
                                <vizzy-method type="mun">
                                    <vizzy-text>lenght</vizzy-text>
                                </vizzy-method>
                            </vizzy-operators>
                            <vizzy-text>*</vizzy-text>
                            <vizzy-information>
                                <vizzy-text>performance</vizzy-text>
                                <vizzy-method type="mun">
                                    <vizzy-text>Mass</vizzy-text>
                                </vizzy-method>
                            </vizzy-information>
                        </vizzy-operators>
                        <vizzy-text>/</vizzy-text>
                        <vizzy-information>
                            <vizzy-text>performance</vizzy-text>
                            <vizzy-method type="mun">
                                <vizzy-text>Max Engine Thrust</vizzy-text>
                            </vizzy-method>
                        </vizzy-information>
                    </vizzy-operators>
                </vizzy-instruction>
                <vizzy-instruction>
                    <vizzy-text>set</vizzy-text>
                    <vizzy-method type="mun">
                        <vizzy-text>Throttle</vizzy-text>
                    </vizzy-method>
                    <vizzy-text>to</vizzy-text>
                    <vizzy-operators>
                        <vizzy-operators>
                            <vizzy-varbles>
                                <vizzy-text>p</vizzy-text>
                            </vizzy-varbles>
                            <vizzy-text>+</vizzy-text>
                            <vizzy-varbles>
                                <vizzy-text>d</vizzy-text>
                            </vizzy-varbles>
                        </vizzy-operators>
                        <vizzy-text>+</vizzy-text>
                        <vizzy-varbles>
                            <vizzy-text>error</vizzy-text>
                        </vizzy-varbles>
                    </vizzy-operators>
                </vizzy-instruction>
            </vizzy-loopbody>
        </vizzy-div>

        <h2>延申</h2>
        <h3>固定误差局限性</h3>
        <p>这个示例中之所以采用前馈误差pd控制是因为误差的来源极度明确火箭的重力，甚至可以直接表达出来，所以我们采用的前馈误差，即在“事前就反馈误差”</p>
        <p>比如控制飞机的俯仰角，这时飞机的静态俯冲力矩不是一个好求到的东西，而且根飞机的剩余油料，飞行速度都有关系，这时我们需要用到的是”PID“控制</p>
`;