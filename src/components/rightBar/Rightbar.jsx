import "./rightBar.scss";

const RightBar = () =>{
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.8tracks.com/cover/i/009/764/349/Roman_Underground_3-5683.png?rect=691,120,400,400&q=98&fm=jpg&fit=max"/>
                            <span>Machiavelli</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://64.media.tumblr.com/46df893a4bbe6ba324baa029d81ad99f/0e70f7e4c844cb40-86/s400x600/e6f03061b40a68c2064819d31f695fdb33bb29b1.jpg"/>
                            <span>Claudia</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                        <div className="user">
                            <div className="userInfo">
                                <img src="https://sm.ign.com/ign_in/news/a/assassins-/assassins-creed-syndicate-jacob-frye-statue-up-for_12ez.jpg"/>
                                <p>
                                    <span>Jacob</span> changed his cover picture    
                                </p>
                            </div>
                            <span className="timeSpan">1 min ago</span>
                        </div>
                        <div className="user">
                            <div className="userInfo">
                                <img src="https://pbs.twimg.com/media/FtsltskWcAE-1xm.jpg:large"/>
                                <p>
                                    <span>Bayek</span> changed his profile picture
                                </p>
                            </div>
                            <span className="timeSpan">2 min ago</span>
                        </div>
                        <div className="user">
                            <div className="userInfo">
                                <img src="https://c4.wallpaperflare.com/wallpaper/869/1011/646/evie-frye-assassin-s-creed-syndicate-assassin-s-creed-wallpaper-preview.jpg"/>
                                <p>
                                    <span>Evie</span> posted an update
                                </p>
                            </div>
                            <span className="timeSpan">3 min ago</span>
                        </div>
                        <div className="user">
                            <div className="userInfo">
                                <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/assassins-creed-4/9/9c/Haytham_kenway.png"/>
                                <p>
                                    <span>Haytham</span> posted a picture
                                </p>
                            </div>
                            <span className="timeSpan">5 min ago</span>
                        </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/assassins-creed-4/9/9c/Haytham_kenway.png"/>
                            <div className="online" />
                            <span>Haytham</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://c4.wallpaperflare.com/wallpaper/869/1011/646/evie-frye-assassin-s-creed-syndicate-assassin-s-creed-wallpaper-preview.jpg"/>
                            <div className="online" />
                            <span>Evie</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://sm.ign.com/ign_in/news/a/assassins-/assassins-creed-syndicate-jacob-frye-statue-up-for_12ez.jpg"/>
                            <div className="online" />
                            <span>Jacob</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://celestialeclipse.files.wordpress.com/2011/01/ac_brotherhood__c.jpg"/>
                            <div className="online" />
                            <span>Cristina</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.redd.it/fcgsv0ybrzr41.jpg"/>
                            <div className="online" />
                            <span>Leonardo</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/originals/fe/58/cf/fe58cfa79ea0169cd38cf7e0d6ffbd0c.jpg"/>
                            <div className="online" />
                            <span>Mario</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RightBar;