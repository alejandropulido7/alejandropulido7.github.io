import './App.css'
import {GlobalState} from './context/global/GlobalState'
import Banner from "./components/banner/Banner";
import { useEffect, useState } from 'react';
import Navigation from './components/navigation/Navigation';

function App() {

  function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
      function handleResize() {
          setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fullHeight = () => {
      return windowDimensions
  }

  return (
    <GlobalState>
      <Navigation dimensions={fullHeight()}/>
      <Banner height={fullHeight().height}/>
    </GlobalState>
  )
}

export default App
