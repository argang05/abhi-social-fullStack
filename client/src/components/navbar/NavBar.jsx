import "./navBar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from "../../assets/icon.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () =>{

    const {toggle , darkMode} = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="left">
                <img src={logo} />
                <Link to="/" style={{textDecoration:"none"}}>
                    <span>abhisocial</span>
                </Link>
                <HomeOutlinedIcon />
                {darkMode ? 
                (
                    <WbSunnyOutlinedIcon className="mode" onClick={toggle}/>
                ) : (
                    <DarkModeOutlinedIcon className="mode" onClick={toggle}/>
                )}
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className="user">
                    <img src={"/upload/" + currentUser?.profilePic} />
                    <Link to={`/profile/${currentUser?.id}`} style={{textDecoration: "none" , color: "inherit"}}>
                            <span className="name">You</span>
                    </Link>               
                </div>
            </div>
        </div>
    );
}

export default NavBar;