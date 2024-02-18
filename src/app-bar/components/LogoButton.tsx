import logo from '../../assets/Logo.png'
import './LogoButton.css'

function LogoButton() {
  return (
    <div className="logo">
      <img className="rotating" src={logo} />
    </div>
  )
}

export default LogoButton
