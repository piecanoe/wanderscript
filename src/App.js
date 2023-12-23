import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
import data from "./data"
import './App.css';

function App() {
    const cards = data.map((item) => {
      return (
        <Card 
          key={item.id}
          {...item}
        />
      )
    })

  return (
    <div className="App">
      <Navbar />
      {cards}
      <Footer />
    </div>
  );
}

export default App;
