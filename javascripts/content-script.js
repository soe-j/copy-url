document.addEventListener('copy', function (e) {

  // 文字を選択している
  if (window.getSelection().toString()) return;

  // フォーム内で文字を選択している
  if (document.activeElement.selectionStart !== document.activeElement.selectionEnd) return;

  const decodedUrl = decodeURIComponent(location.href);

  // slackなどで、以下の文字列でURLが区切られてしまうので
  const url = decodedUrl.replace(/\ /g, '%20').replace(/　/g, '%E3%80%80').replace(/／/g, '%EF%BC%8F');

  e.clipboardData.setData("text/plain", url);
  e.preventDefault(); // もとのcopy処理を実行しない

});
