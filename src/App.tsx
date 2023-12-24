import './App.css'
import Navigation from './components/navigation/Navigation'
import {GlobalState} from './context/global/GlobalState'
import Banner from "./components/banner/Banner";

function App() {
  return (
    <GlobalState>
      <Navigation/>
      <Banner/>
    </GlobalState>
  )
}

export default App
