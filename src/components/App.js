import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.scss';
import Banner from './Banner/Banner';
import PrimaryContent from './PrimaryContent/PrimaryContent';
import SecondaryContent from './Products/Products';

function App() {
  return (
    <div className="App">
      <div className="headerSection">
        <Header />
        <Banner />
      </div>
      <PrimaryContent />
      <SecondaryContent />
      <Footer />
    </div>
  );
}

export default App;
