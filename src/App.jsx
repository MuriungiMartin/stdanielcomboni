import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import BackToTopButton from "./Components/backtotop";
function App() {


  return (
 <div style={{ overflowY: 'auto', height: '100vh' }}>
      <NavBar />
      <Footer />     
      <BackToTopButton/> 
    </div>
  );
}

export default App;
