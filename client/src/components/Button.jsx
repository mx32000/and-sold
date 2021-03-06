import "../assets/components/Button.css"

export default function Button(props) {
  return(
      props.onClick 
        ? <button className={`button ${props.className}`} onClick={props.onClick}>{props.text}</button>
        : <button className={`button ${props.className}`}>{props.text}</button>
  )
}