// ES6

// 変数
// たいなみにES6からは var じゃなくて let で書く
var bird = "ひよこ"
console.log(bird + "さんこんにちは");

var bird = "にわとり"
console.log(bird + "さんこんにちは");

// 定数
const will = "元気でいる";
console.log(will);

// will = "元気じゃなくなる";
// console.log(will);

// アロー関数
let triangle = (a, b) => {
    console.log(a * b / 2);
};
triangle(5, 4);



// グローバル変数 ローカル変数
// 関数の中で定義するとローカル その関数の中で使える
// 外に書くとグローバル どこでも使える


$(function () {
    $("#submit").click(function (e) {
        // ページの再度読み込みを止める
        e.preventDefault();
        // 入力した郵便番号を取得する
        let post_code = $("#post_code").val();
        console.log(post_code);

        //APIにアクセス
        let zip_url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${post_code}`
        console.log(zip_url);

        fetch(zip_url)
            // .then(function(response){
            //     return response.json();
            // })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                let message = data['message'];
                console.log(message);

                if (message == null) {
                    let result = data['results'][0];
                    console.log(result);
                    let prefecture = result['address1'];
                    let city = result = ['address2'];
                    let town = result['address3'];
                    console.log(prefecture);

                    $("#prefecture").val(prefecture);
                }else {
                    console.log("nullの時");
                $('#test').text("不正な値です");
                }
    })

});