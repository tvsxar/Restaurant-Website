import Header from './components/Header/Header';
import Promotion from './components/Promotion/Promotion';
import Decoration from './components/Decoration/Decoration';
import Offers from './components/Offers/Offers';
import Research from './components/Research/Research';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Promotion />
        <Decoration />
        <Offers />
        <Research />
        <Footer />
      </div>
    </>
  )
}

export default App
