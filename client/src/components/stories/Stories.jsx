import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () =>{

    const {currentUser} = useContext(AuthContext);

    //TEMPORARY 
    const stories = [
        {
            id : 1,
            name : "La Volpe",
            img : "https://i.pinimg.com/236x/d5/ca/bd/d5cabd8bb4a5e26f9b8c0bbf96e00e5d.jpg",
        },
        {
            id : 2,
            name : "Bartolomeo",
            img : "https://pm1.aminoapps.com/6320/b7716734bbcb1228e20c1051b19401c0608e98e9_00.jpg",
        },
        {
            id : 3,
            name : "Altair",
            img : "https://cdnb.artstation.com/p/assets/images/images/027/190/665/large/rup_k-_arts-altair-ibah.jpg?1590844019",
        },
        {
            id : 4,
            name : "Caterina",
            img : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/675ae967-034e-4a95-b8e9-bc2aaa4ef668/d46s8qs-620b8922-6027-4d7b-abb4-ff6b44cd0adc.jpg",
        },
    ];


    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Stories;