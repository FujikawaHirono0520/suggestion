package main;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bean.User;
import dao.UserDao;
import tool.Action;

public class LoginAction extends Action {
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            String id = request.getParameter("input-id");
            String password = request.getParameter("input-pass");

            UserDao dao = new UserDao();
            User user = dao.get(id, password);

            if (user != null) {
                // ユーザー情報をセッションに保存
                request.getSession().setAttribute("user", user);

                // トップページにリダイレクト
                return "/jsp/index.jsp";
            } else {
                request.setAttribute("message", "IDまたはパスワードが間違っています");
                return "/jsp/login.jsp";
            }
        } catch (Exception e) {
            e.printStackTrace(); // ログに出す
            return "/jsp/error.jsp"; // ← ここでエラーページへ飛ばす
        }
    }
}
