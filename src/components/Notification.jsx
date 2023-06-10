import PropTypes from "prop-types";
import angela from "../assets/avatars/avatar-angela-gray.webp"
import anna from "../assets/avatars/avatar-anna-kim.webp"
import jacob from "../assets/avatars/avatar-jacob-thompson.webp"
import kimberly from "../assets/avatars/avatar-kimberly-smith.webp"
import mark from "../assets/avatars/avatar-mark-webber.webp"
import nathan from "../assets/avatars/avatar-nathan-peterson.webp"
import rizky from "../assets/avatars/avatar-rizky-hasanuddin.webp"
import chess from "../assets/avatars/image-chess.webp"

function Notification({
    id, 
    name, 
    avatar, 
    action, 
    subject, 
    message, 
    relatedImage,
    timeFrame,
    viewed
}){
    
    
    return(
        <div 
            className={`card-notification ${viewed == false && "not-viewed"}`} 
            key={id}
        >
            <img className="avatar" src={`https://fem-20-notifications.netlify.app/asstes/avatar-${avatar}.webp`}></img>
            <div className="card-notification__content">
                <div className="card-notification__resume">
                    <p>{`${name}`} <span> {`${action}`}</span> <span> {`${subject}`}</span></p>
                    <p>{timeFrame} ago</p>
                </div>
                {message.trim() != "" && (<p className="card-notification__mesagge">{message}</p>)}
            </div>
            {relatedImage.trim() != "" && (<img src={`https://fem-20-notifications.netlify.app/assets/${relatedImage}.webp`}></img>) }
        </div>
    )
}

Notification.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    avatar: PropTypes.string,
    action: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string,
    relatedImage: PropTypes.string,
    timeFrame: PropTypes.string,
    viewed: PropTypes.bool
}

export default Notification;