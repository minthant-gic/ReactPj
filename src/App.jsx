import "./App.css";
import Main from "./components/AirHubNav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import PhotoSwin from "./images/image12.png";
import Star from "./images/Star1.png";

function App() {
  return (
    <>
      <Main />
      <Hero />
      <div className="flex">
        <Card
          head={PhotoSwin}
          img={Star}
          rating="5.0"
          count="6"
          country="USA"
          detail="Life lesson with Katie Zaferas"
          price="136"
          status= "Sold Out"
        />
        <Card
          head={PhotoSwin}
          img={Star}
          rating="5.0"
          count="30"
          country="USA"
          detail="Learn Wedding Photography"
          price="125"
          status= "InStock"
        />
        <Card
          head={PhotoSwin}
          img={Star}
          rating="4.8"
          count="2"
          country="USA"
          detail="Group Mountain Biking"
          price="50"
          status= "Online"
        />
      </div>
    </>
  );
}

export default App;
