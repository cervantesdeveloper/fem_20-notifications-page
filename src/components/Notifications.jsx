import { useEffect, useState} from "react"
import PropTypes from "prop-types";

import Notification from "./Notification"
import datos from "../notifications.json"

export default function Notifications({clear}){

const [notifications, setNotifications] = useState([]);
const [notSeen, setNotSeen] = useState([]);

let notWatched = 0

useEffect(()=>{
    setNotifications(datos)
}, [])

useEffect(()=>{
    setNotSeen(notWatched)
}, [notifications])

useEffect(()=>{
    setNotSeen(0)
}, [clear])

let list = notifications.map(notification=>{
    !notification.watched ? notWatched += 1 : notWatched += 0
    
    return (
        <li key={notification.id}>
            <Notification
                id={notification.id}
                name={notification.name}
                avatar={notification.avatar}
                action={notification.action}
                subject={notification.subject}
                message={notification.message}
                relatedImage={notification.relatedImage}
                timeFrame={notification.timeFrame}
                viewed={notification.watched || clear}
            />
        </li>
    )
})


Notifications.propTypes = {
    clear: PropTypes.bool,
    myOnLoad: PropTypes.func
}

    return(
        <ul data-number={notSeen}>
            {list.length == 0 ? (<p>Loading ...</p>) : list}
        </ul>
    )
}