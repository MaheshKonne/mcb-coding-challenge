import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.scss';
import Banner from './Banner/Banner';
import PrimaryContent from './PrimaryContent/PrimaryContent';
import SecondaryContent from './Products/Products';
import InputField from './ui-components/InputField';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <div className="headerSection">
        <Header />
        <Banner />
      </div>
      <PrimaryContent />
      <SecondaryContent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
