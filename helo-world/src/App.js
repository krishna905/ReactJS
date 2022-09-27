import logo from './logo.svg';
import './App.css';
import Greet from './components/1.Greet';
import Welcome from './components/1.Welcome';
import Hello from './components/1.Hello';
import Message from './components/2.Message';
import Counter from './components/3.Counter';
import FunctionClick from './components/4.FunctionClick';
import ClassClick from './components/4.ClassClick';
import EventBind from './components/5.EventBind';
import ParentComponent from './components/6.ParentComponent';
import UserGreeting from './components/7.UserGreeting';
import NameList from './components/8.NameList';
import Stylesheet from './components/9.Stylesheet'
import InlineStyle from './components/10.InlineStyle';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/11.Form';
import LifecycleA from './components/12.LifecycleA';
import FragmentDemo from './components/13.FragmentDemo';
import Table from './components/14.Table';
import PureComp from './components/15.PureComp';
import ParentComp from './components/15.ParentComp';
import RefsDemo from './components/16.RefsDemo';
import FocusInput from './components/17.FocusInput';
import FrParentInput from './components/18.FrParentInput';
import PortalDemo from './components/19.PortalDemo';
import Hero from './components/20.Hero';
import ErrorBoundary from './components/20.ErrorBoundary';
import ClickCounter from './components/21.ClickCounter';
import HoverCounter from './components/21.HoverCounter';
import ClickCnterTwo from './components/22.ClickCnterTwo';
import HoverCntTwo from './components/22.HoverCntTwo';
import User from './components/22.User';
import Counterrr from './components/22.Counter';
import ComponentC from './components/23.ComponentC';
import { UserProvider, ChannelProvider } from './components/23.userContext';
import Fetching from './components/24.Fetching';
import Lift from './components/ggggggg';
function App() {
  return (
    <div className="App">

      {/* <Lift /> */}

      {/* <Fetching /> */}
      {/* <UserProvider value="Krishna">
        <ChannelProvider value={'LPU'}>
          <ComponentC />
        </ChannelProvider>
      </UserProvider> */}

      {/* <Counterrr>
        {(count, incrementCounter) => (
          <ClickCnterTwo count={count} incrementCounter={incrementCounter} />
        )}
      </Counterrr>

      <Counterrr>
        {(count, incrementCounter) => (
          <HoverCntTwo count={count} incrementCounter={incrementCounter} />
        )}
      </Counterrr> */}

      {/* <Counterrr
        render = {(count, incrementCounter) => (
          <HoverCntTwo count={count} incrementCounter={incrementCounter} />
        )}
      /> 
      render prop is passed..In 22.Counter.js, write this.props.render ..Instead of this.props.children*/}

      {/* <User render={(isLoggedIn) => isLoggedIn ? 'Krishna' : 'Guest'} /> */}

      {/* <HoverCounter name='Krishna'/>
      <ClickCounter/> */}


      {/* <ErrorBoundary>
        <Hero heroName='Batman' />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName='Superman'  />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName='Joker' />
      </ErrorBoundary> */}

      {/* <PortalDemo/> */}

      {/* <FrParentInput/> */}

      {/* <FocusInput/> */}

      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}

      {/* <Table /> */}

      {/* <FragmentDemo/> */}

      <LifecycleA />

      {/* <Form /> */}

      {/* <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Success</h2> */}

      {/* <InlineStyle/> */}

      {/* <Stylesheet primary={true}/> */}

      {/* <NameList/> */}

      {/* <UserGreeting/> */}

      {/* <ParentComponent/> */}


      {/* <EventBind/> */}


      {/* <FunctionClick/>
      <ClassClick/> */}

      {/* <Counter/> */}

      {/* <Message /> */}

      {/* <Greet name='Gunther' role='waiter'/>
      <Welcome name='Jade' role='Baby sitter'/> */}

      {/* <Greet name='Monica' role='chef'>
      <p>This is children props</p>
      </Greet>
     <Greet name='Joey' role='actor'>
      <button >Action</button>
      </Greet>
     <Greet name='Chandhler' role='transponster'/>

     <Welcome name='Ross' role='paleontologist'/>
     <Welcome name='Pheobe' role='masseure'/>
     <Welcome name='Rachel' role='assistant'/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
