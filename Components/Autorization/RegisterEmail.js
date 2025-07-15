export function RegisterEmail({ onChange }) {
  return (
    <input 
    type="email"
    placeholder="Введите Email"
    onChange={(e) => onchange(e.target.value) }
     />
  )
}