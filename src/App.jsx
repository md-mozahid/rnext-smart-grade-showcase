import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './pages/Header'
import StudentTable from './pages/StudentTable'

function App() {
  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white">
        <Navbar />
        <Header />
        <StudentTable />
        <Footer />
      </div>
    </>
  )
}

export default App
