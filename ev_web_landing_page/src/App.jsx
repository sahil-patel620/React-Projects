import { useEffect, useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(( ) => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
      
  return () => clearInterval(interval);
    }, 3000);
  }, []);

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </div>
  );
}

export default App;
