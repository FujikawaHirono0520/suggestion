<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="../tool/header.jsp" %>

<!--メインタイトル-->
        <h1>Today's Outfit Suggestion</h1>
        <form class="coordination-form">
            <!--気分の選択-->
            <div>
            <label>気分：</label>
            <select id="mood">
                <option value="元気">元気</option>
                <option value="憂鬱...">憂鬱...</option>
                <option value="やる気なし">やる気なし</option>
                <option value="落ち着きたい">落ち着きたい</option>
                <option value="ちょっとブルー">ちょっとブルー</option>
                <option value="集中したい">集中したい</option>
                <option value="恋したい♥">恋したい♥</option>
                <option value="穏やか">穏やか</option>
                <option value="やる気満々！">やる気満々！</option>
            </select>
            </div>

            <!--天気の選択-->
            <div>
            <label>天気：</label>
            <select id="weather">
                <option value="sunny">晴れ</option>
                <option value="cloudy">曇り</option>
                <option value="rainy">雨</option>
            </select>
            </div>

            <!--気温の選択-->
            <div>
            <label>気温：</label>
            <select id="temperature">
                <option value="cold">0～10℃</option>
                <option value="cool">11～20℃</option>
                <option value="mild">21～26℃</option>
                <option value="hot">27℃～</option>
            </select>
            </div>

            <!--フォーム送信ボタン-->
            <button id="submit">結果を見る</button>
        </form>

        <!--結果表示用の空div-->
        <div id="result-show"></div>

<%@ include file="../tool/footer.jsp" %>
<!--JavaScriptの読み込み-->
        <script src="../js/coordination.js"></script>