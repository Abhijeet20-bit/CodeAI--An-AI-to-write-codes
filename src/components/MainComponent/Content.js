import React from "react";
import bot from "./../../images/bot.svg"
import user from "./../../images/user.svg"
const Content = ({userQueries}) => {
    return(
           
            <div className='min-h-screen-1' style={{backgroundColor: "#343541"}}>
                {userQueries.map((item)=>
                <div key={item.key}>
                <div className="wrapper" >
                    <div className="chat">
                        <div className="profile">
                            <img src={user} alt="user" />
                        </div>
                        <div className="message" >{item.Q}</div>
                    </div>
                </div>
                <div className="wrapper ai" >
                <div className="chat">
                    <div className="profile">
                        <img src={bot} alt="bot" />
                    </div>
                    <div className="message" >{item.A}</div>
                </div>
                </div>
                </div>
                )}
            </div>
        
    );
}

export default Content;