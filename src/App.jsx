import './App.css'
import { useState, useEffect} from 'react'

import Header from './components/Header'
import Notifications from './components/Notifications'

function App() {
  const [clearNotifications, setCleatNotifications] = useState(false)
  const [notificationsNumer, setNotificationsNumber] = useState("0")
  
  const handleClick = ()=>{
    setCleatNotifications(true)
    setNotificationsNumber("0")
  }

  useEffect(()=>{
    setTimeout(()=>{
      setNotificationsNumber(document.querySelector("[data-number]").getAttribute("data-number"));
    }, 500)
  }, [])

  return (
    <>
      <main >
        <Header myOnClick = {handleClick} number={notificationsNumer}></Header>
        <Notifications clear={clearNotifications} ></Notifications>
      </main>
      <footer >

      </footer>
    </>
  )
}

export default App
