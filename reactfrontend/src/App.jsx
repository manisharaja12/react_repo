// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Component/functionalComponents/navbar";
// import Home from "./Component/functionalComponents/Home";
// import About from "./Component/functionalComponents/About";
// import Contact from "./Component/functionalComponents/Contact";
// import LearningReact from "./Component/functionalComponents/LearningReact";
// import Login from "./Component/functionalComponents/login";
// import Signup from "./Component/functionalComponents/Signup";

// import './css/App.css';
// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/learningReact" element={<LearningReact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }



// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/functionalComponents/navbar";

// Main pages
import Home from "./Component/functionalComponents/Home";
import About from "./Component/functionalComponents/About";
import Contact from "./Component/functionalComponents/Contact";
import Login from "./Component/functionalComponents/login";
import Signup from "./Component/functionalComponents/Signup";

// Learning React
import Props from "./Component/functionalComponents/Props";
import State from "./Component/functionalComponents/State";
import Task from "./Component/functionalComponents/task";
import Events from "./Component/functionalComponents/event";

// Hooks
import UseState from "./Component/functionalComponents/Hooks/UseState";
import UseEffect from "./Component/functionalComponents/Hooks/UseEffect";
import UseEffectAPI from "./Component/functionalComponents/Hooks/UseEffectAPI";
import UseCallback from "./Component/functionalComponents/Hooks/UseCallback";
import UseRef from "./Component/functionalComponents/Hooks/UseRef";

import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Main */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Learning React */}
        <Route path="/props" element={<Props />} />
        <Route path="/state" element={<State />} />
        <Route path="/task" element={<Task />} />
        <Route path="/events" element={<Events />} />

        {/* Hooks */}
        <Route path="/hooks/usestate" element={<UseState />} />
        <Route path="/hooks/useeffect" element={<UseEffect />} />
        <Route path="/hooks/useeffectapi" element={<UseEffectAPI />} />
        <Route path="/hooks/usecallback" element={<UseCallback />} />
        <Route path="/hooks/useref" element={<UseRef />} />

        {/* 404 */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

