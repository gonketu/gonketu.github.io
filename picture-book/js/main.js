// パスキーのシンデレラ：スクリプト
// 別添1の関係図（Mermaid）を、閲覧環境のライト／ダークに合わせて描画する。
(function () {
  "use strict";

  function render() {
    if (!window.mermaid) {
      // オフラインなどでライブラリが読めない場合は、図の定義テキストをそのまま表示する
      return;
    }
    var dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    window.mermaid.initialize({
      startOnLoad: false,
      theme: dark ? "dark" : "default",
      securityLevel: "strict",
      fontFamily: '"Zen Maru Gothic","Hiragino Maru Gothic ProN","Yu Gothic",sans-serif'
    });
    window.mermaid.run({ querySelector: "pre.mermaid" });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
