import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from "../../axios.js";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.js";

const Profile = () => {

    const { currentUser } = useContext(AuthContext);

    const userId = parseInt(useLocation().pathname.split("/")[2]); //Split pathname on basis of '/' and pick the 3rd element(which is profile id) 
    
    const { isPending, error, data } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            makeRequest.get("/users/find/"+userId).then(resp => {
                return resp.data;
            })
    });

    return (
        <div className="profile">
            {isPending ? "Loading" : <>
                <div className="images">
                    <img src={data?.coverPic} className="cover" />
                    <img src={data?.profilePic} className="profilePic" />
                </div>
                <div className="profileContainer">
                    <div className="uInfo">
                        <div className="left">
                            <a href="#">
                                <FacebookTwoToneIcon fontSize="large" />
                            </a>
                            <a href="#">
                                <InstagramIcon fontSize="large" />
                            </a>
                            <a href="#">
                                <TwitterIcon fontSize="large" />
                            </a>
                            <a href="#">
                                <LinkedInIcon fontSize="large" />
                            </a>
                            <a href="#">
                                <PinterestIcon fontSize="large" />
                            </a>
                        </div>
                        <div className="center">
                            <span>{data?.name}</span>
                            <div className="info">
                                <div className="item">
                                    <PlaceIcon />
                                    <span>{data?.city}</span>
                                </div>
                                <div className="item">
                                    <LanguageIcon />
                                    <span>{data?.website}</span>
                                </div>
                            </div>
                            {userId === currentUser.id ? (<button>Update</button>) : (<button>Follow</button>)}
                        </div>
                        <div className="right">
                            <EmailOutlinedIcon />
                            <MoreVertIcon />
                        </div>
                    </div>
                    <Posts userId={userId}/>
                </div>
            </>
        }
        </div>
    );
};

export default Profile;