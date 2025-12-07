import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <QuoteSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
