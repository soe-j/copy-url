// slackなどで、以下の文字列でURLが区切られてしまうのでdecodeしないリスト
const noDecodeChars = [' ', '　', '／', '・', '（', '）'];
const noDecodeTable = noDecodeChars.map(char => {
  return { originalRegExp: new RegExp(char, 'g'), encodedChar: encodeURIComponent(char) }
});

document.addEventListener('copy', function (e) {

  // 文字を選択している
  if (window.getSelection().toString()) return;

  // フォーム内で文字を選択している
  if (document.activeElement.selectionStart !== document.activeElement.selectionEnd) return;

  var decodedUrl = decodeURIComponent(location.href);

  noDecodeTable.forEach(row => {
    decodedUrl = decodedUrl.replace(row.originalRegExp, row.encodedChar);
  });

  e.clipboardData.setData("text/plain", decodedUrl);
  e.preventDefault(); // もとのcopy処理を実行しない

});
