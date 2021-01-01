## 参考資料
- [canvas上のマウス座標を取得する。【JS】](https://tech-blog.s-yoshiki.com/entry/90)

## 手順
- utilに定義する
```js
canvas.addEventListener('click', function(e) {
  var BORDER_W = 1;
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left - BORDER_W;
  var y = e.clientY - rect.top - BORDER_W;
  document.getElementById('textarea').value += `${x}:${y}\n`;
});
```