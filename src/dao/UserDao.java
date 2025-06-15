package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import bean.User;


public class UserDao extends Dao{

	//User情報の取得
	public User get(String id, String password) throws Exception {
	    Connection con = getConnection();
	    PreparedStatement st = con.prepareStatement("select * from user where id=? and password=?");
	    st.setString(1, id);
	    st.setString(2, password);
	    ResultSet rs = st.executeQuery();

	    User user = null;
	    if (rs.next()) {
	        user = new User();
	        user.setId(rs.getString("id"));
	        user.setPassword(rs.getString("password"));
	        user.setName(rs.getString("name"));
	    }

	    st.close();
	    con.close();
	    return user;
	}

}