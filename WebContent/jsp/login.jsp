<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="../tool/header-login.jsp" %>

    <h1>ログイン</h1>

    <c:if test="${not empty message}">
        <p style="color: red; text-align: center;">${message}</p>
    </c:if>

    <form action="../main/Login.action" method="post">
        <p>ユーザーID：<input type="text" class="input-id" name="input-id" placeholder="半角でご入力ください" required /></p>
		<p>パスワード：<input type="password" id="input-pass" name="input-pass" class="input-pass" placeholder="30字以内の半角英数字でご入力ください" required />
		<button type="button" id="btn_passview">表示</button></p>
        <button type="submit" class="login-button">ログイン</button>
    </form>

<%@ include file="../tool/footer.jsp" %>
<script src="../js/login.js"></script>
