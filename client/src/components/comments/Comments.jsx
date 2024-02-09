import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";
import { makeRequest } from "../../axios.js";
import moment from "moment";
import { useQuery , useMutation, useQueryClient,} from '@tanstack/react-query';


const Comments = ({ postId }) => {
    
    const [desc, setDesc] = useState("");

    const { currentUser } = useContext(AuthContext);
    
    const { isPending, error, data } = useQuery({
        queryKey: ["comments" , postId],
        queryFn: () =>
            makeRequest.get("/comments?postId="+postId).then(resp => {
                return resp.data;
            })
    });  
    
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newComment) => {
      return makeRequest.post("/comments" , newComment)
    },
    onSuccess: () => { 
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["comments"] })
    },
  })  

  const handleClick = async (e) =>{
    e.preventDefault();
    mutation.mutate({ desc, postId});
    setDesc("");
  }    
    //Temporary
    // const comments = [
    //     {
    //     id: 1,
    //     desc: "Nice post boy!!",
    //     name: "The Black Beard",
    //     userId: 1,
    //     profilePicture:
    //         "https://i.ytimg.com/vi/oGpF8iD1yUo/sddefault.jpg",
    //     },
    //     {
    //     id: 2,
    //     desc: "Amazing mate!",
    //     name: "Charles Vane",
    //     userId: 2,
    //     profilePicture:
    //         "https://pbs.twimg.com/profile_images/1121967028426899457/Q0nnAbGX_400x400.jpg",
    //     },
    // ];


    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} />
                <input
                    type="text"
                    placeholder="write a comment..."
                    value={desc}
                    onChange={ 
                        (e) => setDesc(e.target.value) 
                    } 
                />
                <button onClick={handleClick}>Send</button>
            </div>
            {isPending ? "Loading..." :
                data.map(comment => (
                    <div className="comment">
                        <img src={comment.profilePic} />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">{moment(comment.createdAt).fromNow()}</span>
                    </div>
                   
                ))
            }
        </div>
    );
}

export default Comments;