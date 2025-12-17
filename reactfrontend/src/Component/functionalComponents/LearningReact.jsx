import Props from "./Props"; 
import State from "./State";
import Task from "./task";       
import Events from "./event";
import UseState from "./Hooks/UseState"; 
import UseEffect from "./Hooks/UseEffect";  
import UseEffectAPI from "./Hooks/UseEffectAPI";
import FakeImageAPI from "./Hooks/FakeImageAPI";
import  UseCallback  from "./Hooks/UseCallback";
import UseRef from "./Hooks/UseRef";
const LearningReact = () => {
  return (
    <div>
      <h1>Learning Page</h1>
      <p>Welcome to my website!</p>
      <hr />
       <ol>
          <li><Props hi="Welcome Props" grade="12" age="18" img="vite.svg"/></li>
          <li><Task item="Welcom to Task" /></li>
          <ul><li>Hooks</li></ul>
          <ul><li><UseState/></li>
          <li><UseEffect/></li></ul>
          <li><UseEffectAPI/></li>
          <li><FakeImageAPI/></li>
          <li><UseRef/></li>
          <li><State/></li>
          <li><Events /></li>
          <li><UseCallback/></li>

        </ol>
      <hr />
    </div>
  );
};

export default LearningReact;