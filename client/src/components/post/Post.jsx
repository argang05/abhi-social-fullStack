import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Comments from "../comments/Comments";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from "../../axios.js";
import { AuthContext } from "../../context/authContext.js";

const Post = ({post}) =>{

    const [commentOpen, setCommentOpen] = useState(false);
    
    const { currentUser } = useContext(AuthContext);
    

    const { isPending, error, data } = useQuery({
        queryKey: ["likes" , post.id],
        queryFn: () =>
            makeRequest.get("/likes?postId="+post.id).then(resp => {
                return resp.data;
            })
    });     

    // console.log(data);

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (liked) => {
            if (liked) {
                return makeRequest.delete("/likes?postId="+post.id);
            }
            return makeRequest.post("/likes" , {postId : post.id})
        },
        onSuccess: () => { 
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["likes"] })
        },
    })  

    const handleLike = () => {
        mutation.mutate(data?.includes(currentUser.id))
    };
    
    const handleCommentOpen = () =>{
        setCommentOpen(!commentOpen);
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
                            <span className="date">{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizIcon/>
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    {post.userId === currentUser.id ? <img src={"./upload/"+post?.img} /> : <img src={post.img} />}
                </div>
                <div className="info">
                    <div className="item" >
                        {
                            isPending ? "Loading..." : data?.includes(currentUser.id) ?
                            (<FavoriteOutlinedIcon style={{ color: "red" }} onClick={handleLike} />)
                            :
                            (<FavoriteBorderOutlinedIcon onClick={handleLike} />)
                        }
                         {data?.length} Likes
                    </div>
                    <div className="item" onClick={handleCommentOpen}>
                        <TextsmsOutlinedIcon/> Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon/> Share
                    </div>
                </div>
                {commentOpen && <Comments postId={post.id} />}
            </div>
        </div>
    );
}

export default Post;