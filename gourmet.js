
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data.results.shop[0].name)
  console.log(data.results.shop[0].access)
  console.log(data.results.shop[0].address)
  console.log(data.results.shop[0].budget.name)
  console.log(data.results.shop[0].genre.name)
  console.log(data.results.shop[0].open)
  console.log(data.results.shop[0].mobile_access)
  console.log(data.results.shop[0].sub_genre.name)
  console.log(data.results.shop[0].urls.pc)
  console.log(data.results.shop[1].name)
  console.log(data.results.shop[1].access)
  console.log(data.results.shop[1].address)
  console.log(data.results.shop[1].budget.name)
  console.log(data.results.shop[1].genre.name)
  console.log(data.results.shop[1].open)
  console.log(data.results.shop[1].mobile_access)
  console.log(data.results.shop[1].sub_genre.name)
  console.log(data.results.shop[1].urls.pc)

}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let old = document.querySelector("#result");
if (old) {
    old.remove();
}
  let div = document.createElement("div");
div.id = "result";
document.body.insertAdjacentElement("beforeend", div);

  
  let h3 = document.createElement("h3");
  h3.textContent = "検索結果1件目";
  div.insertAdjacentElement("beforeend", h3);

  let ul = document.createElement("ul");
  div.insertAdjacentElement("beforeend", ul);

  let img = document.createElement("img");
  img.src = data.results.shop[0].photo.pc.l;
  ul.insertAdjacentElement("beforeend", img);

  let li = document.createElement("li");
  li.textContent = "名前: " + data.results.shop[0].name;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "アクセス: " + data.results.shop[0].access;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "住所: " + data.results.shop[0].address;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "予算: " + data.results.shop[0].budget.name;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "ジャンル: " + data.results.shop[0].genre.name;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "営業時間: " + data.results.shop[0].open;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "最寄駅: " + data.results.shop[0].station_name;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "サブジャンル: " + data.results.shop[0].sub_genre.name;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  let a = document.createElement("a");
  a.href = data.results.shop[0].urls.pc;
  a.textContent = "ご予約はこちら";
  li.insertAdjacentElement("beforeend", a);
  ul.insertAdjacentElement("beforeend", li);



  h3 = document.createElement("h3");
  h3.textContent = "検索結果2件目";
  div.insertAdjacentElement("beforeend", h3);

  ul = document.createElement("ul");
  div.insertAdjacentElement("beforeend", ul);

  img = document.createElement("img");
  img.src = data.results.shop[1].photo.pc.l;
  ul.insertAdjacentElement("beforeend", img);

  li = document.createElement("li");
  li.textContent = "名前: " + data.results.shop[1].name;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "アクセス: " + data.results.shop[1].access;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "住所: " + data.results.shop[1].address;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "予算: " + data.results.shop[1].budget.name;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "ジャンル: " + data.results.shop[1].genre.name;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "営業時間: " + data.results.shop[1].open;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "最寄駅: " + data.results.shop[1].station_name;
  ul.insertAdjacentElement("beforeend", li);

  li = document.createElement("li");
  li.textContent = "サブジャンル: " + data.results.shop[1].sub_genre.name;
  ul.insertAdjacentElement("beforeend", li);
  

  li = document.createElement("li");
  a = document.createElement("a");
  a.href = data.results.shop[1].urls.pc;
  a.textContent = "ご予約はこちら";
  li.insertAdjacentElement("beforeend", a);
  ul.insertAdjacentElement("beforeend", li);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let button = document.querySelector("#search");
button.addEventListener("click", sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

let input = document.querySelector("#genre");
let genre = input.value;

let url =
"https://www.nishita-lab.org/web-contents/jsons/hotpepper/"
+ genre + ".json";
 // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
  

}
  


// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
let data = resp.data;
if (typeof data === "string") {
data = JSON.parse(data);
}
print(data);
printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
