export function RegisterButton({ email, password, onClick }) {

  const onHandleClick = () => {
    onClick(email, password)
  };
  return (
    <button onClick={onHandleClick}>Войти</button>
  );
}