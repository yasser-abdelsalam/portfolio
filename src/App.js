
import Pages from "./components/pages/Pages";
import React,{useEffect} from "react";
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css"






function App() {
   useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className="App">
     <Pages />
     
    </div>
  );
}

export default App;
