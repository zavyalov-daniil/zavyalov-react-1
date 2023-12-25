//import clsx from 'clsx';

//Components
import AppHeader from "./components/AppHeader";
import MainInfo from "./components/MainInfo";

//Styles
//import classes from './App.module.css';
import Services from "./components/Services";
import Providers from "./components/Providers";
import Download from "./components/Download";
import Slide from "./components/common/Slide";
import userPhoto from "./assets/user_photo.png";

function App() {
  return (
    <>
        <AppHeader />
        <MainInfo />
        <Services />
        <Providers />
        <Download />
        <Slide
            headingText={"What our customer are saying"}
            mainText={"“Our dedicated patient engagement app and \n" +
                "web portal allow you to access information instantaneously (no tedeous form, long calls, \n" +
                "or administrative hassle) and securely”"}
            userPhoto={userPhoto}
            userName={"Edward Newgate"}
            userRole={"Founder Circle"}
        />
    </>
  )
}

export default App
