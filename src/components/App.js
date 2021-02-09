import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.scss';
import Banner from './Banner/Banner';
import PrimaryContent from './PrimaryContent/PrimaryContent';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <PrimaryContent />
      <Footer />
    </div>
  );
}

export default App;
