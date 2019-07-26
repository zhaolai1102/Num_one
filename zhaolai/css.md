## 伪类选择器

### 用法

```
selector:pseudo-class {
  property: value;
}
```

1. L-V-H-A序列  :link  :visited  :hover  :active



### :active

鼠标点击激活 <a> ;<button>

### :any-link

超链接<a>;<area>;<link>

### :checked

切换或者选中状态<input type="radio">;<input type="checkbox">;<option> in a <select>

### :default

默认的节点

1. <button>默认提交按钮;
2. <input type="checkbox">;<input type="radio">如果设定了checked属性
3. <option>默认值,selected或者第一个

### :defined

已定义的元素

### :disabled

禁用了的元素

### :empty

没有任何子节点,包括元素属性和文本

### :enabled

启动元素,有焦点的元素

### :first

@page :first表示打印文档的第一页	

### :firstchild

一组同级元素中的第一个元素

### first-of-type

一组同级元素中所有种类的第一个元素

### :fullscreen

被应用到全屏模式

### :focus

收到焦点输入

### :focus-within

自己或子元素收到焦点输入

### :hover

鼠标悬停,

### :indeterminate

状态不确定的元素

1. <input type="checkbox">indeterminate属性由JavaScript设置值为true的值
2. <input type="radio">表单中所有有相同名字的按钮但未选中的
3. <progress> 处于不确定状态的元素

### :in-range

表示<input>当前值在最小和最大范围内

### :invalid

表示<input>;其他<form>元素的当前值验证失败

### :lang()

语言设定相同的元素

### :last-child

一组同级元素中的第一个元素

### :last-of-type

一组同级元素中所有种类的最后元素

### :left

打印文档左侧页面`@page : left`

### :link

表示尚未访问的元素<a>;<area>;<link>含有`href`属性的

### :not()

否

### :nth-child()

根据一组同级元素的位置匹配元素

1. odd奇数
2. even偶数
3. An+B  A,B都时整数

### nth-last-child()

从后面开始数,其他和:nth-child()一样

### nth-of-type()

根据相同类型的元素的位置匹配元素

1. odd奇数
2. even偶数
3. An+B  A,B都时整数

### :nth-last-of-type()

c从后面开始数,其他和:nth-of-type()一样

### :only-child

唯一的子元素

### :only-of-type

唯一类型的子元素

### :optional

可选的,表示它没有必须要设置的属性<input>;<select>;<textarea>

### :out-of-range

<input>的值不在最小和最大值的区间内.

### :read-only

不可以被用户更改的元素,<input><textrea>

### :read-write

可以被用户进行读写的元素

### :required

不为空的<input><select><textarea>

### :right

`@page :right`打印右侧文档

### :root

文档树的根目录,<html>,用于声明全局样式

### :scope

== :root

### :targ

url片段与id匹配的目标元素

### :valid

内容验证成功的元素<input><form>

### :visited

访问过的链接









## 背景

### background-color

背景颜色

### background-img

背景图片,	url(具体的网址)

### background-position

背景位置

### padding内边距









host host()