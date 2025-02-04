import React from "react";
// import Netflix from "./components/Netflix";
// import "./components/Aflix.css";
// import { EventHandling } from "./components/EventHandling";
// import { Eventprops } from "./components/Eventprops";
// import { EventPropagation } from "./components/EventPropagation";
// import {State} from './components/hooks/State';
import { LiftingStateUp } from './components/LiftingStateUp';

export const App = () => {
  return (
    <section className="container">

      {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
      {/* <Netflix/> */}
      {/* <EventHandling/> */}
      {/* <Eventprops/> */}
      {/* <EventPropagation /> */}
      {/* <State/> */}
      <LiftingStateUp/>
   

    </section>
  );
};






// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Hello Ayush</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
