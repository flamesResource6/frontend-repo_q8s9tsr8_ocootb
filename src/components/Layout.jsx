import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }){
  return (
    <div className="min-h-screen bg-[#070B16] text-white">
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
