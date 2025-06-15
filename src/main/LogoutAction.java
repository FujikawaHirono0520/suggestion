package main;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import tool.Action;

public class LogoutAction extends Action {
    public String execute(
        HttpServletRequest request, HttpServletResponse response
    ) throws Exception {

        HttpSession session = request.getSession();

        //ユーザー情報の削除
        if (session.getAttribute("user") != null && session.getAttribute("user") != null) {
            session.removeAttribute("user");
            return "/jsp/logout.jsp";
        }

        return "/jsp/error.jsp";
    }
}

