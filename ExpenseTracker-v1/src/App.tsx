import './App.css'
import Nav from './components/nav'
import Dashboard from './pages/dashboard'
function App() {

  return (
    <section className='flex bg-neutral-950 h-screen text-white p-4 gap-6'>
      <Nav />
      <Dashboard />
    </section>
  )
}

export default App
