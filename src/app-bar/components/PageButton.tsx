import { NavLink } from 'react-router-dom'
import './PageButton.css'

interface PageButtonProps {
  link: string
  name: string
}

function PageButton({ link, name }: PageButtonProps) {
  return (
    <NavLink className="button" to={link}>
      {name}
    </NavLink>
  )
}

export default PageButton
