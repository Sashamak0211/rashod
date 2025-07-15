import { useState } from "react"

export function RegisterPassword({ onChange }) {

  const [password, setPassword] = useState('')

  const handleInputChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)

    if(onChange) {
      onChange(newPassword)
    }
  }

  return (
    <input 
    type="password"
    value={password}
    onChange={handleInputChange}/>
  )
}