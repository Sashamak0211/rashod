export function RegisterButton({ email, password, onClick }) {

  const empty = !email || !password;

  return (
    <button 
    onClick={() => onClick(email, password)}
    disabled = {empty}
    >
      Войти
      </button>
  );
}