import { useState } from "react";
import { RegisterButton } from "./RegisterButton";
import { RegisterEmail } from "./RegisterEmail";
import { RegisterPassword } from "./RegisterPassword";


function RegisterForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = (email, password) => {

  }
 return (
  <div className="registerForm">
    <RegisterEmail onChange={setEmail} />
    <RegisterPassword onChange={setPassword} />
    <RegisterButton 
    email={email}
    password={password}
    
    onClick={handleSubmit}/>
  </div>
 )
}

export default RegisterForm;