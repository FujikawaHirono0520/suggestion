<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<head>
	<meta charset="UTF-8">
	<title>コーディネート提案</title>
	<!--外部スタイルシートの読み込み-->
	<link rel="stylesheet" href="../css/style.css">
</head>
<body>
	<!--ヘッダー：ナビゲーションメニューを含む-->
	<div class="header-container">
		<!-- ナビゲーション -->
		<nav>
			<ul>
				<!--ホーム画面-->
				<li><a href="../jsp/index.jsp">Home</a></li>
				<!--コーディネート提案画面-->
				<li><a href="../jsp/coordination.jsp">Suggestion</a></li>
				<!--占い画面-->
				<li><a href="../jsp/fortune.jsp">Fortune Telling</a></li>
			</ul>
		</nav>

			<!-- ユーザー情報 -->
            <c:if test="${not empty sessionScope.user}">
    		<div class="user-info">
    			<span>${sessionScope.user.name} 様</span>
    			<form action="../main/Logout.action" method="post">
    				<button type="submit" class="logout-btn">ログアウト</button>
    			</form>
    		</div>
    		</c:if>
	</div>
        </header>