import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";

const Comments = () =>{

    const {currentUser} = useContext(AuthContext);
    //Temporary
    const comments = [
        {
        id: 1,
        desc: "Nice post boy!!",
        name: "The Black Beard",
        userId: 1,
        profilePicture:
            "https://i.ytimg.com/vi/oGpF8iD1yUo/sddefault.jpg",
        },
        {
        id: 2,
        desc: "Amazing mate!",
        name: "Charles Vane",
        userId: 2,
        profilePicture:
            "https://pbs.twimg.com/profile_images/1121967028426899457/Q0nnAbGX_400x400.jpg",
        },
    ];


    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} />
                <input type="text" placeholder="write a comment..."/>
                <button>Send</button>
            </div>
            {
                comments.map(comment => (
                    <div className="comment">
                        <img src={comment.profilePicture} />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">1 hour ago</span>
                    </div>
                ))
            }
        </div>
    );
}

export default Comments;