import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";

const Post = ({post}) =>{

    const[commentOpen , setCommentOpen] = useState(false);

    //TEMPORARY likesNum and liked variables:
    var [likesNum,updateLikesNum] = useState(18);
    const [liked,setLiked] = useState(false)
    const handleLiked = () =>{
        setLiked(!liked);
        if(liked){
            updateLikesNum(likesNum -= 1);
        }else{
            updateLikesNum(likesNum += 1);
        }
    }
    const handleCommentOpen = () =>{
        setCommentOpen(!commentOpen)
    }

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{textDecoration: "none" , color: "inherit"}}>
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon/>
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} />
                </div>
                <div className="info">
                    <div className="item" onClick={handleLiked}>
                        {/* TEMPORARY Button */}
                        {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
                         {/* TEMPORARY Like variable */}
                         {likesNum} Likes
                    </div>
                    <div className="item" onClick={handleCommentOpen}>
                        <TextsmsOutlinedIcon/> 2 Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon/> Share
                    </div>
                </div>
                {commentOpen && <Comments/>}
            </div>
        </div>
    );
}

export default Post;