import { useState } from "react"

export function RegisterPassword() {

  const [password, setPassword] = useState('')
  const onHandleClick = () => {
    setPassword(password)
  }

  return (
    <input 
    type="password"
    value={setPassword}
     onClick={onHandleClick}/>
  )
}