let data = [];

//suggestion.jsonを読み込み
//例外処理
fetch('../data/suggestion.json')
    .then(response => response.json())
    .then(json => {
        //グローバル変数に代入
        data = json;
    })
    .catch(e => {
        console.error('データの読み込みに失敗しました:', e);
    });

//ボタンが押されたらデータの保存と表示をする関数
document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();

    //HTMLから値を受け取る
    const mood = document.getElementById('mood').value;
    const weather = document.getElementById('weather').value;
    const temperature = document.getElementById('temperature').value;

    //条件に合うデータを検索
    const result = data.find(item =>
        item.mood === mood && item.temperature === temperature
    );

    if (result) {
        //2025-06-10みたいな形式で保存
        const today = new Date();
        const dateKey = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;  // 例: "2025-6-10"

        try{
            //localStorageに保存
            localStorage.setItem(`coordination_${dateKey}`, JSON.stringify({
                mood,
                weather,
                temperature,
                style: result.style,
                message: result.message
            }));
        }catch(e){
        console.log(`ローカルストレージへの保存に失敗しました。：`, e);
        }

        //HTMLに表示
        document.getElementById('result-show').innerHTML = `
            <h2>↓↓今日のおすすめのコーデはこちら↓↓</h2>
            <div class="result">
                <p class="style">テーマは <span class="font-stress">${result.style}</span></p>
                <p class="message">${result.message}</p>
            </div>
        `;
    } else {
        document.getElementById('style').textContent = '';
        document.getElementById('message').textContent = '該当するコーディネートが見つかりませんでした。';
    }
});
