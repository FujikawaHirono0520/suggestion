<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="../tool/header.jsp" %>

<!--カレンダー表示用の空div-->
<div id="calendar"></div>
<div id="modal" class="modal">
    <div class="modal-content">
        <span id="closeModal" class="close">&times;</span>
        <p id="modalText"></p>
    </div>
</div>

<%@ include file="../tool/footer.jsp" %>
<!--JavaScriptの読み込み-->
<script src="../js/calendar.js"></script>