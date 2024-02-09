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

    // const posts = [
    //     {
    //     id: 1,
    //     name: "Edward Kenway",
    //     userId: 1,
    //     profilePic:
    //         "https://c4.wallpaperflare.com/wallpaper/182/183/748/edward-kenway-assassin-s-creed-video-games-wallpaper-preview.jpg",
    //     desc: "Meeting my daughter after a very long time!!",
    //     img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/05/Assassins-Creed-Black-Flag-Edward-Kenway-Deserved-Protagonist-Trilogy.jpg",
    //     },
    //     {
    //     id: 2,
    //     name: "Edward Kenway",
    //     userId: 1,
    //     profilePic:
    //         "https://c4.wallpaperflare.com/wallpaper/182/183/748/edward-kenway-assassin-s-creed-video-games-wallpaper-preview.jpg",
    //     desc: "I'm not an easy man to call a friend, am I?",
    //     },
    // ];

    // console.log(data);

    return (
        <div className="posts">
            {error ? "Something Went Wrong!" : isPending ? "Loading..." : data.map((post) =>(
                <Post post={post} key={post.id}/>
            ))}
        </div>
    );
}

export default Posts;