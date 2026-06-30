import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import HomePage from './pages/HomePage'
import Matches from './pages/Matches'
import Table from './pages/Table'
import Stats from './pages/Stats'
import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'

function App() {
  return (
    <div 
      className="min-h-screen pb-32 pt-20 relative overflow-hidden font-sans"
      style={{
        background: 'repeating-linear-gradient(90deg, #F0F4F8 0px, #F0F4F8 80px, #E8EDF2 80px, #E8EDF2 160px)'
      }}
    >
      <Navbar />
      <main className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-white rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-2 md:p-6 mx-auto max-w-[1050px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/table" element={<Table />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Routes>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

export default App
