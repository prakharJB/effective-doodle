import './App.css';
import './css/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './components/pages/Home';
import GameContent from './components/pages/GameContent';
import Rosters from './components/pages/Rosters';
import Coaches from './components/pages/Coaches';
import PhotoGallery from './components/pages/PhotoGallery';
import GameInformation from './components/pages/GameInformation';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Menu />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/gamecontent' element={<GameContent />} />
        <Route path='/rosters' element={<Rosters />} />
        <Route path='/coaches' element={<Coaches />} />
        <Route path='/photogallery' element={<PhotoGallery />} />
        <Route path='/gameinfo' element={<GameInformation />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
