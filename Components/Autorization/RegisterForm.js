import { RegisterButton } from "./RegisterButton";
import { RegisterEmail } from "./RegisterEmail";
import { RegisterPassword } from "./RegisterPassword";


function RegicterForm() {
 return (
  <div className="registerForm">
    <RegisterEmail/>
    <RegisterPassword/>
    <RegisterButton email={email} password={password} onClick={onClick}/>
  </div>
 )
}

export default RegicterForm;