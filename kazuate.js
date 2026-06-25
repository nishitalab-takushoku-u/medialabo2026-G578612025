// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
// 入力回数（予想回数）
let kaisu = 0;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 予想回数を1増やして表示
  kaisu = kaisu + 1;
  let s = document.querySelector('#kaisu');
  s.textContent = kaisu;
  // テキストボックスの値を取得
  let i = document.querySelector('#shimei');
  let yoso = Number(i.value);
  // 判定結果を表示する p 要素
  let p = document.querySelector('#result');
  // 正解判定
  if (kaisu >= 4) {
    p.textContent =
      '答えは ' + kotae + ' でした．すでにゲームは終わっています';
  }
  else if (yoso === kotae) {
    p.textContent = '正解です．おめでとう!';
  }
  else if (kaisu === 3) {
    p.textContent =
      'まちがい．残念でした．答えは ' + kotae + ' です．';
  }
  else if (yoso < kotae) {
    p.textContent =
      'まちがい．答えはもっと大きいですよ';
  }
  else {
    p.textContent =
      'まちがい．答えはもっと小さいですよ';
  }
}

// ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector('#print');
b.addEventListener('click', hantei);
