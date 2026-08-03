#简介#
这是关于《朱诺：新起源》（简单火箭2）中可视化编程系统的笔记库，包含每个代码块的翻译，游戏特性，和简单的使用示例，适合用于入门
页面入口： https://laffeytogo.github.io/SR2notes.github.io/
#实现原理#
以index.html作为入口，并引入入口函数，通过page类实例化托管页面。
页面内的目录页头页尾均通过page类生成，意在不修改主要内容的情况下修改页面布局。
主要内容通过菜单返回路径，再由page类生成。
#文件目录#
```
/index.html              这是项目的入口
/include                 项目的主要js代码
  /VizzyForWeb
    /SR2IZZY.js          通过SVG将游戏中Vizzy代码块绘制到web的主要逻辑
    /SR2VZ-Calculate.js
    /SR2VZ-Loop.js
    /SR2VZ-Process.js
    /SR2VZ-Slot.js
  /LfCatalogue.js         Web页面中大纲目录的逻辑
  /LfContent.js           Web词条主要内容
  /LfEntryTemplate.js     page类
  /SR2VZnote.css
  /SR2VZnote.js           主要布局逻辑，page类的调用者
/body                     正文部分，分类逻辑依游戏内而定
  /example Template       实例正文，创建新词条时直接复制
  /program/event/on_and_docked/ContentData.js  实际正文
  /.....                      

```
