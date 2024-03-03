# Layout 布局

**_基础布局_**

使用单一分栏创建栅格布局。
<code src="../../example/Layout/baise.tsx"></code>

**分栏间隔**

分栏之间存在间隔
<code src="../../example/Layout/gutter.tsx"></code>

**混合布局**

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
<code src="../../example/Layout/mixin.tsx"></code>

**分栏偏移**

支持偏移指定的栏数。
<code src="../../example/Layout/offset.tsx"></code>

**对齐方式**

通过 flex 布局来对分栏进行灵活的对齐。
<code src="../../example/Layout/flex.tsx"></code>

**Row Attributes**

| 参数    | 说明                                  | 类型   | 可选值                                      | 默认值 |
| ------- | ------------------------------------- | ------ | ------------------------------------------- | ------ |
| gutter  | 栅格间隔                              | number | ——                                          | 0      |
| type    | 布局模式，可选 flex，现代浏览器下有效 | string | ——                                          | ——     |
| justify | flex 布局下的水平排列方式             | string | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式             | string | top/middle/bottom                           | ——     |

**Col Attributes**

| 参数   | 说明               | 类型   | 可选值 | 默认值 |
| ------ | ------------------ | ------ | ------ | ------ |
| span   | 栅格占据的列数     | number | ——     | 24     |
| offset | 栅格左侧的间隔格数 | number | ——     | 0      |
| push   | 栅格向右移动格数   | number | ——     | 0      |
| pull   | 栅格向左移动格数   | number | ——     | 0      |
