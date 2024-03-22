import { Navigate } from "react-router-dom";
import { makeRequest } from "../../axios.js";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from '@tanstack/react-query';

const Posts = ({userId}) =>{

  const { isPending, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
        makeRequest.get("/posts?userId="+userId).then(resp => {
            return resp.data;
        })
  });    

    return (
        <div className="posts">
            {error ? <Navigate to="/login"/> : isPending ? "Loading..." :
                data?.map((post) => (
                    <Post key={post.id} post={post} />
               ))}
        </div>
    );
}

export default Posts;