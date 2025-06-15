//月名と曜日名を配列に入れる
const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

//今日の日付を取得
const today = new Date();

//カレンダー表示用の年と月を初期化
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

//今日の日付に戻す関数
function getToday(){
    currentYear = today.getFullYear();
    currentMonth = today.getMonth();
    renderCalendar();
}

//カレンダーを表示する関数
function renderCalendar() {
    //月の最初の日にちを取得
    const firstDate = new Date(currentYear, currentMonth, 1);
    //曜日を取得
    const firstDay = firstDate.getDay();
    //月の最後の日にちを取得
    const lastDate = new Date(currentYear, currentMonth + 1, 0);
    const lastDay = lastDate.getDate();

    //日付のカウント
    let dayCount = 1;
    //月と年を表示
    let createHtml = `<h1>${monthName[currentMonth]} , ${currentYear}</h1>`;
    //前の月、次の月、今日の日付に移動するボタンを設置
    createHtml += `<div id="next-prev">
                      <button onclick="prev()">◀ Prev</button>
                      <button onclick="getToday()">Today</button>
                      <button onclick="next()">Next ▶</button>
                   </div><br>
                   `;
    
    //曜日の見出しを出力
    createHtml += '<table><tr>';
    for (let i = 0; i < dayName.length; i++) {
        let dayClass = '';
        if (i === 0){
            //日曜の色を変えたいため、class名を定義
            dayClass = 'sun';
        }else if (i === 6){
            //土曜の色を変えたいため、class名を定義
            dayClass = 'sat';
        }
        createHtml += `<th class="${dayClass}">${dayName[i]}</th>`;
    }

    createHtml += `</tr>`;

    //カレンダーの日付を表示
    for (let n = 0; n < 6; n++) {
        createHtml += `<tr>`;
        for (let d = 0; d < 7; d++) {
            //最初の週で前の月の空白
            if (n === 0 && d < firstDay) {
                createHtml += `<td></td>`;
            //最後の週で今月の日付が終わった後の空白
            } else if (dayCount > lastDay) {
                createHtml += `<td></td>`;
            } else {
                //2025-06-10みたいな形式のdateKey
                const dateKey = `${currentYear}-${currentMonth+1}-${dayCount}`;
                //localStrageからコーディネート提案と占いの結果を取る
                const coordination = localStorage.getItem(`coordination_${dateKey}`)
                const fortune = localStorage.getItem(`fortune_${dateKey}`);

                //今日の日付を強調する
                if (currentYear === today.getFullYear() && currentMonth === today.getMonth() && dayCount === today.getDate()){
                    createHtml += `<td class="today" onclick="openModal('${dateKey}')">${dayCount}`;
                }else{
                    createHtml += `<td onclick="openModal('${dateKey}')">${dayCount}`;
                }

                //コーディネートまたは占いの結果があれば〇を出力
                if (coordination || fortune){
                    createHtml += ` 〇`
                }

                createHtml += `</td>`
                //次の日へ進む
                dayCount++;
            }
        }
        createHtml += `</tr>`;
        //日付をすべて表示できたらループ終了
        if (dayCount > lastDay){
            break
        };
    }

    createHtml += `</table>`;
    //HTMLに出力
    document.getElementById('calendar').innerHTML = createHtml;
}

//前の月に移動する関数
function prev() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

//次の月に移動する関数
function next() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

//モーダルを開く
function openModal(dateKey){
    //localStrageに保存されている文字列をオブジェクトとして受け取る
    let data = null;
    let fortune = null;
    try{
        data = JSON.parse(localStorage.getItem(`coordination_${dateKey}`));
    }catch(e){
        console.error(`コーディネートデータの読み込みエラー：`, e);
    }
    try{
        fortune = JSON.parse(localStorage.getItem(`fortune_${dateKey}`));
    }catch(e){
        console.error(`占いデータの読み込みエラー：`, e);
    }

    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modalText');

    //天気、気温の表示用
    const weatherName = {"rainy":"雨", "sunny":"晴れ", "cloudy":"曇り"};
    const tempName = {"hot":"27℃～", "mild":"21～26℃", "cool":"11～20℃", "cold":"0～10℃"}

    let modalHtml = `<div class="modal-message">`;
    
    // コーディネート情報があれば表示
    if (data) {
        modalHtml += `
            <p><strong>気分：</strong>${data.mood}</p>
            <p><strong>天気：</strong>${weatherName[data.weather]}</p>
            <p><strong>気温：</strong>${tempName[data.temperature]}</p>
            <p><strong>スタイル：</strong>${data.style}</p>
            <p><strong>メッセージ：</strong>${data.message}</p>
        `;
    }

    // 占い情報があれば表示
    if (fortune) {
        modalHtml += `
            <hr>
            <p><strong>運勢：</strong>${fortune.fortune}</p>
            <p><strong>ラッキーカラー：</strong>${fortune.color}</p>
            <p><strong>ラッキーアイテム：</strong>${fortune.item}</p>
            <p><strong>ファッションのヒント：</strong>${fortune.tip}</p>
        `;
    }

    // どちらもなければメッセージ
    if (!data && !fortune) {
        modalHtml += `<p>この日には記録がありません。</p>`;
    }

    modalHtml += `</div>`;

    //モーダルを表示
    modalText.innerHTML = modalHtml;
    modal.style.display = "block";

    //「×」でモーダルを閉じる
    document.getElementById('closeModal').onclick = () =>{
        modal.style.display = 'none';
    };
}

renderCalendar();