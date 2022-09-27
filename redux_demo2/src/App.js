import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import HooksIceContainer from './components/HooksIceContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserListContainer from './components/UserListContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserListContainer/>

        {/* <ItemContainer cake/>
        <ItemContainer/> */}

        {/* <NewCakeContainer/> */}
        
        {/* <HooksIceContainer/> */}

        {/* <IceCreamContainer/> */}

        {/* <HooksCakeContainer/> */}

        {/* <CakeContainer /> */}
       
      </div>
    </Provider>
  );
}

export default App;
