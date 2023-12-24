//import clsx from 'clsx';

//Components
import AppHeader from "./components/AppHeader";
import MainInfo from "./components/MainInfo";

//Styles
//import classes from './App.module.css';
import Services from "./components/Services";
import Providers from "./components/Providers";
import Download from "./components/Download";

function App() {
  return (
    <>
        <AppHeader />
        <MainInfo />
        <Services />
        <Providers />
        <Download />
    </>
  )
}

export default App
