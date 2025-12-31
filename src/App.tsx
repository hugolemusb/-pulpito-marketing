import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { AdminToolbar } from './components/AdminToolbar';
import { AuthProvider } from './context/AuthContext';
import { AdminLogin } from './pages/AdminLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/" element={
            <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
              <Navbar />
              <AdminToolbar />
              <main className="flex-grow">
                <Hero />
                <Features />
                <Pricing />
              </main>
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
