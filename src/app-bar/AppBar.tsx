import './AppBar.css'
import LogoButton from './components/LogoButton'
import PageButton from './components/PageButton'

interface Page {
  name: string
  link: string
}

const pagesNames: Page[] = [
  { name: 'Home', link: '/' },
  { name: 'FAQ', link: '/faq' },
  { name: 'MAP', link: '/map' },
  { name: 'PEOPLE', link: '/people' },
  { name: 'MAP', link: '/map' },
  { name: 'MAP', link: '/map' },
]

function AppBar() {
  return (
    <div className="bar">
      {pagesNames.map((page) => (
        <PageButton name={page.name} link={page.link} />
      ))}
      <LogoButton />
    </div>
  )
}

export default AppBar
