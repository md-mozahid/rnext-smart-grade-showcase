import Logo from '../assets/lws-logo-en.svg'
import Button from './Button'

export default function Navbar() {
  return (
    <>
      <nav className="py-6">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <img className="h-[40px]" src={Logo} alt="Lws" />
          </a>
          <Button className="bg-[#172227]">Get Admission</Button>
        </div>
      </nav>
    </>
  )
}
