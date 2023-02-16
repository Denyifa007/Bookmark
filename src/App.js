
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Components/Head';
import Main from './Components/Main';
import Leg from './Components/Leg';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Head/>
      <Main/>
      <Leg/>
      <Footer/>

      
    
    </div>
  );
}

export default App;
