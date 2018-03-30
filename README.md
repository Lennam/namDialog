# namDialog
一个弹出层的小插件

[在线演示][1]


----------


  [1]: https://lennam.github.io/namDialog/index
  
  >使用方法：
 >1. 下载namDialog.js和namDialog.css文件
 >2. 在项目里面引入namDialog.js和namDialog.css文件（注意：namDialog.js应该在最前引入）
 >3. 为`<button>`标签添加`showNamDialog-btn`类名，并添加自定义属性>`data-namHeader`、`data-namValue` 和`data-fn`（`data-namHeader`为弹出框的标题，`data-namValue`为弹出框的内容， `data-fn`为弹出框按钮标识，与`set`方法中的selector对应）
 >4. 实例化(例： const someName = namDialog() ）


----------


**API**
-------
目前只有一个可怜的方法/(ㄒoㄒ)/~~
```javascript
set(selector, confirmFunction, cancelFunction)
```
selector是<button>标签内的自定义属性data-fn，confirmFunction是弹出框点击同意按钮时运行的函数，cancelFunction是点击取消按钮时运行的函数

例： someName.set('methodOne', confirmFunction, cancelFunction)
 