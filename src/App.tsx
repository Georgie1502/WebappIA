import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import DestinationDetail from './components/pages/DestinationDetail'
import PageLayout from './components/templates/PageLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/destination/:id" element={<PageLayout><DestinationDetail /></PageLayout>} />
      </Routes>
    </BrowserRouter>
  )
}
