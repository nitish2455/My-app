import ExpressionForm from "./components/ExpressionForm"
import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <ExpressionForm/>
      {/* <div className="mt-auto">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
