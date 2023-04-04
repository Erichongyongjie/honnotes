
---
title: MD语法示例
icon: markdown
order: 5
category:
  - MD语法
tag:
  - MD语法
---


# md语法示例

## MdEditor的功能列表演示

### 字符效果和横线等

~~删除线~~ <s>删除线（开启识别HTML标签时）</s>
*斜体字*      _斜体字_
**粗体**  __粗体__
***粗斜体*** ___粗斜体___

上标：X<sub>2</sub>，下标：O<sup>2</sup>

**缩写(同HTML的abbr标签)**

> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

### 引用 Blockquotes

> 引用文本 Blockquotes

引用的行内混合 Blockquotes
                    

> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可，[普通链接](http://localhost/)。

### 锚点与链接 Links

[普通链接](http://localhost/)

[普通链接带标题](http://localhost/ "普通链接带标题")

直接链接：<https://github.com>

[锚点链接][anchor-id] 

[anchor-id]: http://www.this-anchor-link.com/

GFM a-tail link @pandao

> @pandao

### 多语言代码高亮 Codes

#### 行内代码 Inline code

执行命令：`npm install marked`

#### 缩进风格

即缩进四个空格，也做为实现类似`<pre>`预格式化文本(Preformatted Text)的功能。

    <?php
        echo "Hello world!";
    ?>
#### JS代码　

```javascript
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str){
			alert("add", str);

			return this;
		},

		remove : function(str){
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

#### HTML代码 HTML codes

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```

### 图片 Images

Image:

![](https://www.mdeditor.cn/examples/images/4.jpg)

> Follow your heart.

![](https://www.mdeditor.cn/examples/images/8.jpg)

> 图为：厦门白城沙滩

图片加链接 (Image + Link)：

[![](https://www.mdeditor.cn/examples/images/7.jpg)](https://www.mdeditor.cn/examples/images/7.jpg "李健首张专辑《似水流年》封面")

> 图为：李健首张专辑《似水流年》封面

----

### 列表 Lists

#### 无序列表（加号和嵌套）Unordered Lists (+)

+ 列表一
+ 列表二
    + 列表二-1
    + 列表二-2
    + 列表二-3
+ 列表三
    * 列表一
    * 列表二
    * 列表三

#### GFM task list

- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2
                
----
#### 特殊符号 HTML Entities Codes

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; 

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;

### 科学公式 TeX(KaTeX)

1.
$$
\log_2 x
$$
2.
$$
E=mc^2
$$
3.
$$
\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}
$$

4.

$$
\sqrt{x^3}
$$
5.
$$
\sqrt[4]{\frac xy}
$$
6.



$$
{a+1\over b+1}
$$
7.
$$
\frac ab
$$
8.
$$
10^{10}
$$
9.
$$
x^{5^6}
$$


10.
$$
x_{i_2}
$$

$$
x_i^2
$$

11.
$$
\sideset{^1_2}{^3_4}\bigotimes
$$
12.
$$
(2+3)[4+4]
$$
13.
$$
\lbrace a*b \rbrace
$$
14.
$$
\langle x \rangle
$$
15.
$$
(\frac12)
$$
16.求和
$$
\sum_1^n
$$
17.积分
$$
\int_1^\infty
$$

18. LaTeX公式+颜色

$$
\color{Green}{y = ax^2 + bx + c}
$$

$$
\color{Orange}{y} = \color{Red}{kx} + \color{Blue}{b}
$$

$$
{\color{Emerald}z^2} = {\color{Yellow}x^2} + {\color{Cyan}y^2}
$$

19.修改背景颜色使用LaTeX公式`$\colorbox{options}{text}$`。`options`选择颜色，`text`选择文本内容。
$$
\colorbox{Green}{y = ax + bx + c}
$$

$$
\colorbox{Orange}{y} = \colorbox{Red}{kx} + \colorbox{Blue}{b}
$$

$$
{\colorbox{Emerald}z^2} = {\colorbox{Yellow}x^2} + {\colorbox{Cyan}y^2}
$$

$$
\color{Blue}你好杜绝后患或或或或或或或
$$
<font color=#0000FF>Test</font>



<font style=background:red>Test</font>

### 绘制流程图 Flowchart

```flow
st=>start: 用户登陆
op=>operation: 登陆操作
cond=>condition: 登陆成功 Yes or No?
e=>end: 进入后台

st->op->cond
cond(yes)->e
cond(no)->op
```

### 绘制序列图 Sequence Diagram

### 绘制序列图 Sequence Diagram

```seq
Andrew->China: Says Hello 
Note right of China: China thinks\nabout it 
China-->Andrew: How are you? 
Andrew->>China: I am good thanks!
```

### End