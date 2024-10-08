import "./App.css";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import CarouselSection from "./CarouselSection";
import CardSection from "./CardSection";
import QustionSection from "./QustionSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <CarouselSection />
      <CardSection />
      <QustionSection />
      <Footer />
    </div>
  );
}

export default App;
