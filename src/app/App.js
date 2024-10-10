import '../app/css/App.css';
import HeaderComponents from './components/HeaderComponents'; // Corrigir o caminho, se necessário
import MainComponents from './components/MainComponente';
import Footer from './components/FooterComponent.js';

function App() {
  return (
    <div className="App">
      <HeaderComponents />
      <MainComponents/>
      <Footer/>
      </div>
    
  );
}

export default App;