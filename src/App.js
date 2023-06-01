import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import '../src/Assets/Style/style.css'
import { GalleryProvider } from './Context/GalleryContext';


function App() {
  return (
    <>
      <GalleryProvider>
        <div className='Main'>
          <Header />
          <Gallery />
          <Footer />
        </div>
      </GalleryProvider>
    </>
  );
}

export default App;
