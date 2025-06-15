//占いの結果をリストに格納
const fortunes = ['大吉', '中吉', '小吉', '吉', '凶'];
const colors = ['赤', '青', '黄色', '緑', 'ピンク', '白', '黒'];
const items = ['帽子', 'スニーカー', 'ネックレス', 'ピアス/イヤリング', 'バッグ'];
const tips = [
  '明るい色を選ぶと良いかも！？',
  'アクセサリーで個性を出そう！',
  'シンプルな服装が吉',
  'レイヤードスタイルに挑戦しよう',
  '柄物を取り入れて運気アップ'
];

//ボタンが押されたらlocalStrageに保存、表示する関数
document.getElementById('fortune-button').addEventListener('click', function(e){
    e.preventDefault();
    //各リストからランダムに取得
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    //2025-06-10みたいな形式で保存
    const today = new Date();
    const dateKey = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;  // 例: "2025-6-10"

    try{
        //localStorageに保存
        localStorage.setItem(`fortune_${dateKey}`, JSON.stringify({
            fortune:randomFortune,
            color:randomColor,
            item:randomItem,
            tip: randomTip
        }));
    }catch(e){
        console.log(`ローカルストレージへの保存に失敗しました。：`, e);
    }

    //結果の表示
    document.getElementById('fortune-show').innerHTML = `
        <h1>今日のあなたは...</h1>
        <div class="fortune-result">
            <p><strong>運勢：</strong>${randomFortune}</p>
            <p><strong>ラッキーカラー：</strong>${randomColor}</p>
            <p><strong>ラッキーアイテム：</strong>${randomItem}</p>
            <p><strong>ファッションのヒント：</strong>${randomTip}</p>
        </div>
    `;

});