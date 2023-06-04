import PropTypes from "prop-types";

export default function Header({myOnClick, number}){
    return(
        <header>
            <div className="score">
                <h1>Notifications</h1>
                <span>{number}</span>
            </div>
            <button onClick={myOnClick}>Mark all as read</button>
        </header>
    )
}

Header.propTypes = {
    myOnClick: PropTypes.func,
    number: PropTypes.string
}