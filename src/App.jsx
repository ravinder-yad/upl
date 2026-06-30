import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import HomePage from './pages/HomePage'

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
          <HomePage />
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

export default App
