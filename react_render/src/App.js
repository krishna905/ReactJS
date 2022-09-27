import logo from './logo.svg';
import './App.css';
import { UseState } from './Components/UseState/UseState';
import { UseReducer } from './Components/UseReducer/UseReducer';
import { ObjectUseState } from './Components/ImmutableState/ObjectUseState';
import { ArrayUseState } from './Components/ImmutableState/ArrayUseState';
import { Parent } from './Components/Parent Child/Parent';
import { ParentOne } from './Components/Parent Child/OptimiseParChild/ParentOne';
import { ChildOne } from './Components/Parent Child/OptimiseParChild/ChildOne';
import { GrandParent } from './Components/Parent Child/OptimiseParChild/GrandParent';
import { ParentTwo } from './Components/Parent Child/OptimiseParChild/ParentTwo';
import { ParentThree } from './Components/Parent Child/IncorrectOptimise/ParentThree';
import { ParentFour } from './Components/Parent Child/IncorrectOptimise/ParentFour';
import { ParentFive } from './Components/Parent Child/IncorrectOptimise/ParentFive';
import { ParentSix } from './Components/Parent Child/IncorrectOptimise/ParentSix';
import { ContextParent } from './Components/Context/ContextParent';
import { ChildA } from './Components/Context/ContextChild';

function App() {
  return (
    <div className="App">
      {/* <ContextParent>
        <ChildA/>
      </ContextParent> */}

      {/* <ContextParent/> */}

      {/* <ParentSix/> */}
      {/* <ParentFive/> */}
      {/* <ParentFour/> */}
      {/* <ParentThree/> */}

      {/* <ParentTwo/> */}

      {/* <GrandParent/> */}

      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}

      {/* <Parent/> */}

      {/* <ArrayUseState/> */}
      {/* <ObjectUseState/> */}

      <UseReducer/>

      {/* <UseState/> */}
    </div>
  );
}

export default App;
