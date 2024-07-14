import { Route, Routes } from 'react-router'
import './App.css'
import Content from './components/Content'
import Navbar from './components/Navbar'
import FullStack from './components/FullStack'
import DataScience from './components/DataScience'
import Security from './components/Security'
import Career from './components/Career'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/Content' element={<Content/>}/><Route/>
        <Route path='/FullStack' element={<FullStack/>}/><Route/>
        <Route path='/DataScience' element={<DataScience/>}/><Route/>
        <Route path='/Security' element={<Security/>}/><Route/>
        <Route path='/Career' element={<Career/>}/><Route/>
      </Routes>
    </>
  )
}

export default App
