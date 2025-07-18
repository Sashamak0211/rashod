

export function RegisterPassword({ onChange }) {



  return (
    <input 
    type="password"
    placeholder="ВВедите пароль"
    onChange={(e) => onChange(e.target.value)}/>
  )
}