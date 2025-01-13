import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from './components/Sidebar.jsx';
import { RouterFile } from './RouterFile.js';

function App() {
  return (
    <>
      <RouterFile/>
      {/* <Sidebar/> */}
    </>
  );
}

export default App;
