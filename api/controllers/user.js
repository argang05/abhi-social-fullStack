import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
    const userId = req.params.userId;
    const q = "SELECT * FROM users WHERE id=?";

    db.query(q, [userId], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }

        const { password, ...info } = data?.[0];
        return res.json(info);
    });
}
export const updateUser = (req, res) => {
    const token = req.cookies.accessToken;

    if(!token){
        return res.status(401).json("Not Logged In!");
    }

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) {
            return res.status(403).json("Token Is Not Valid!");
        }

        const q = "UPDATE users SET `name`=? ,`city`=? ,`website`=? ,`coverPic`=? ,`profilePic`=? WHERE id=?";

        db.query(q, [
            req.body.name,
            req.body.city,
            req.body.website,
            req.body.coverPic,
            req.body.profilePic,
            userInfo.id
        ], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }
            if (data.affectedRows > 0) {
                return res.json("Updated!");
            }
            return res.status(403).json("You can update only your post!");
        })
    });

}
