import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AutoLoansPage from './pages/AutoLoansPage'
import HomeImprovementPage from './pages/HomeImprovementPage'
import EmergencyLoansPage from './pages/EmergencyLoansPage'
import DebtConsolidationPage from './pages/DebtConsolidationPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auto-loans" element={<AutoLoansPage />} />
            <Route path="/home-improvement" element={<HomeImprovementPage />} />
            <Route path="/emergency-loans" element={<EmergencyLoansPage />} />
            <Route path="/debt-consolidation" element={<DebtConsolidationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
