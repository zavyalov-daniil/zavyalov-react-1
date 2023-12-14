import clsx from 'clsx';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

//Components
import CounterButton from "./components/CounterButton";
//Styles
import classes from './App.module.css';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={classes.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
              src={reactLogo}
              className={clsx(classes.logo, classes.react)}
              alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={classes.card}>
        <CounterButton defaultCount={42}/>
        <CounterButton />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={classes.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
