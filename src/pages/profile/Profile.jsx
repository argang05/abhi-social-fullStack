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
import coverIcon from "./coverIcon.jpeg"
import Posts from "../../components/posts/Posts"

const Profile = () =>{
    return (
        <div className="profile">
            <div className="images">
                <img src={coverIcon} className="cover"/>
                <img src="https://c4.wallpaperflare.com/wallpaper/182/183/748/edward-kenway-assassin-s-creed-video-games-wallpaper-preview.jpg" className="profilePic"/>
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
                        <span>Edward Kenway</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon/>
                                <span>UK</span>
                            </div>
                            <div className="item">
                                <LanguageIcon/>
                                <span>edkenway.com</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <Posts/>
            </div>
        </div>
    );
}

export default Profile;