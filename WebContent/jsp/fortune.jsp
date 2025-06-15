<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="../tool/header.jsp" %>

<!--フォーム送信ボタン-->
<button id="fortune-button" class="fortune-button">占う</button>
<!--結果表示用の空div-->
<div id="fortune-show"></div>

<%@ include file="../tool/footer.jsp" %>
<!--JavaScriptの読み込み-->
<script src="../js/fortune.js"></script>