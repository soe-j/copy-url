document.addEventListener('copy', function (e) {

  // 文字を選択している
  if (window.getSelection().toString()) return;

  // フォーム内で文字を選択している
  if (document.activeElement.selectionStart !== document.activeElement.selectionEnd) return;

  var url = decodeURIComponent(location.href);
  e.clipboardData.setData("text/plain", url);
  e.preventDefault(); // もとのcopy処理を実行しない

});
