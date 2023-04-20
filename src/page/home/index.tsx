import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../hook'
import { PATH } from '../../router/router'
import "./style.scss"
export default function Home() {
  const [storedValue, setValue] = useLocalStorage("user", {})
  const navigate = useNavigate()
  const handleLogout =()=>{
    setValue({})
    navigate(PATH.LOGIN)
  }
  return (
    <div className='home'>
      <h3>     
         Hello : {storedValue.username}
      </h3>
      <input onClick={handleLogout} type="button" className='btn' value={'Log out'} />
    </div>
  )
}
