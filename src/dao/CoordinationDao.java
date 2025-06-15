package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class CoordinationDao extends Dao {

    public void save(String id, String date, String mood, String weather, String temperature, String style, String message) throws Exception {
        Connection con = getConnection();

        // まず指定の日付がすでに存在するか確認
        String checkSql = "SELECT COUNT(*) FROM coordination WHERE date = ?";
        PreparedStatement check = con.prepareStatement(checkSql);
        check.setString(1, date);
        ResultSet rs = check.executeQuery();

        boolean exists = false;
        if (rs.next()) {
            exists = rs.getInt(1) > 0;
        }
        rs.close();
        check.close();

        if (exists) {
            // UPDATE
            String updateSql = "UPDATE coordination SET id =? mood=?, weather=?, temperature=?, style=?, message=? WHERE date=?";
            PreparedStatement updateSt = con.prepareStatement(updateSql);
            updateSt.setString(1, id);
            updateSt.setString(2, mood);
            updateSt.setString(3, weather);
            updateSt.setString(4, temperature);
            updateSt.setString(5, style);
            updateSt.setString(6, message);
            updateSt.setString(7, date);
            updateSt.executeUpdate();
            updateSt.close();
        } else {
            // INSERT
            String insertSql = "INSERT INTO coordination (id, date, mood, weather, temperature, style, message) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement insertSt = con.prepareStatement(insertSql);
            insertSt.setString(1, id);
            insertSt.setString(2, date);
            insertSt.setString(3, mood);
            insertSt.setString(4, weather);
            insertSt.setString(5, temperature);
            insertSt.setString(6, style);
            insertSt.setString(7, message);
            insertSt.executeUpdate();
            insertSt.close();
        }

        con.close();
    }
}
