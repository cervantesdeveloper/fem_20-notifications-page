import PropTypes from "prop-types";

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
            <img className="avatar" src={avatar}></img>
            <div className="card-notification__content">
                <div className="card-notification__resume">
                    <p>{`${name}`} <span> {`${action}`}</span> <span> {`${subject}`}</span></p>
                    <p>{timeFrame} ago</p>
                </div>
                {message.trim() != "" && (<p className="card-notification__mesagge">{message}</p>)}
            </div>
            {relatedImage.trim() != "" && (<img src={relatedImage}></img>) }
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