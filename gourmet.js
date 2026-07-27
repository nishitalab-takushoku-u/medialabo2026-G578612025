
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
    for (let i = 0; i < data.results.shop.length; i++) {
        console.log(data.results.shop[i].name);
        console.log(data.results.shop[i].access);
        console.log(data.results.shop[i].address);
        console.log(data.results.shop[i].budget.name);
        console.log(data.results.shop[i].genre.name);
        console.log(data.results.shop[i].open);
        console.log(data.results.shop[i].mobile_access);
        if (data.results.shop[i].sub_genre != undefined) {
            console.log(data.results.shop[i].sub_genre.name);
        }
        else {
            console.log("サブジャンルなし");
        }
        console.log(data.results.shop[i].urls.pc);
    }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

    let old = document.querySelector("#result");
    if (old != null) {
        old.remove();
    }

    let div = document.createElement("div");
    div.id = "result";
    document.body.insertAdjacentElement("beforeend", div);

    for (let i = 0; i < data.results.shop.length; i++) {

        let h3 = document.createElement("h3");
        h3.textContent = "検索結果" + (i + 1) + "件目";
        div.insertAdjacentElement("beforeend", h3);

        let ul = document.createElement("ul");
        div.insertAdjacentElement("beforeend", ul);

        let img = document.createElement("img");
        img.src = data.results.shop[i].photo.pc.l;
        ul.insertAdjacentElement("beforeend", img);

        let li = document.createElement("li");
        li.textContent = "名前: " + data.results.shop[i].name;
        ul.insertAdjacentElement("beforeend", li);

        li = document.createElement("li");
        li.textContent = "アクセス: " + data.results.shop[i].access;
        ul.insertAdjacentElement("beforeend", li);

        li = document.createElement("li");
        li.textContent = "住所: " + data.results.shop[i].address;
        ul.insertAdjacentElement("beforeend", li);

        li = document.createElement("li");
        li.textContent = "予算: " + data.results.shop[i].budget.name;
        ul.insertAdjacentElement("beforeend", li);

        li = document.createElement("li");
        li.textContent = "ジャンル: " + data.results.shop[i].genre.name;
        ul.insertAdjacentElement("beforeend", li);

        li = document.createElement("li");
        li.textContent = "営業時間: " + data.results.shop[i].open;
        ul.insertAdjacentElement("beforeend", li);

        li = document.createElement("li");
        li.textContent = "最寄駅: " + data.results.shop[i].station_name;
        ul.insertAdjacentElement("beforeend", li);

        li = document.createElement("li");
        if (data.results.shop[i].sub_genre != undefined) {
            li.textContent = "サブジャンル: " + data.results.shop[i].sub_genre.name;
        }
        else {
            li.textContent = "サブジャンル: なし";
        }

        ul.insertAdjacentElement("beforeend", li);

        li = document.createElement("li");
        let a = document.createElement("a");
        a.href = data.results.shop[i].urls.pc;
        a.textContent = "ご予約はこちら";
        li.insertAdjacentElement("beforeend", a);
        ul.insertAdjacentElement("beforeend", li);
    }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let button = document.querySelector("#search");
button.addEventListener("click", sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

    let input = document.querySelector("#genre");
    let genre = input.value;

    // 入力欄が空ならラジオボタンを使う
    if (genre == "") {

        let radio = document.querySelector('input[name="food"]:checked');

        if (radio != null) {
            genre = radio.value;
        }

    }

    // 日本語入力をコードに変換
    if (genre == "居酒屋") {
        genre = "G001";
    }
    else if (genre == "ダイニングバー・バル") {
        genre = "G002";
    }
    else if (genre == "創作料理") {
        genre = "G003";
    }
    else if (genre == "和食") {
        genre = "G004";
    }
    else if (genre == "洋食") {
        genre = "G005";
    }
    else if (genre == "イタリアン・フレンチ") {
        genre = "G006";
    }
    else if (genre == "中華") {
        genre = "G007";
    }
    else if (genre == "焼肉・ホルモン") {
        genre = "G008";
    }
    else if (genre == "アジア・エスニック料理") {
        genre = "G009";
    }
    else if (genre == "各国料理") {
        genre = "G010";
    }
    else if (genre == "カラオケ・パーティ") {
        genre = "G011";
    }
    else if (genre == "バー・カクテル") {
        genre = "G012";
    }
    else if (genre == "ラーメン") {
        genre = "G013";
    }
    else if (genre == "カフェ・スイーツ") {
        genre = "G014";
    }
    else if (genre == "その他グルメ") {
        genre = "G015";
    }
    else if (genre == "お好み焼き・もんじゃ") {
        genre = "G016";
    }
    else if (genre == "韓国料理") {
        genre = "G017";
    }

    let url =
        "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"
        + genre + ".json";

    axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);

}


let topButton = document.querySelector("#top");
topButton.

function topPage() {
    window.scrollTo(0, 0);
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
