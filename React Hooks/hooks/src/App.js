import React, { useReducer } from 'react'
import './App.css';
import ComponentC from './Components/Context Hook/ComponentC';
import CounterR from './Components/Use reducer Hook/CounterR';
import CounterThree from './Components/Use reducer Hook/CounterThree';
import CounterTwo from './Components/Use reducer Hook/CounterTwo';
import DataFetchingOne from './Components/Use reducer Hook/FetchingDataWithUseReducer/DataFetchingOne';
import DataFetchingTwo from './Components/Use reducer Hook/FetchingDataWithUseReducer/DataFetchingTwo';
import CompoA from './Components/Use reducer Hook/useReducerWithUseContext/CompoA';
import CompoB from './Components/Use reducer Hook/useReducerWithUseContext/CompoB';
import CompoC from './Components/Use reducer Hook/useReducerWithUseContext/CompoC';
import ParentComponent from './Components/UseCallBackHook/ParentComponent';
import ClassCounterUseEffect from './Components/useEffectHook.js/ClassCounterUseEffect';
import ClassMouse from './Components/useEffectHook.js/ClassMouse';
import DataFetching from './Components/useEffectHook.js/Data Fetching/DataFetching';
import HookCounterOne from './Components/useEffectHook.js/HookCounterOne';
import IntervalClassCounter from './Components/useEffectHook.js/IntervalClassCounter';
import IntervalHookCounter from './Components/useEffectHook.js/IntervalHookCounter';
import MouseContainer from './Components/useEffectHook.js/MouseContainer';
import CounterM from './Components/UseMemoHook/CounterM';
import FocusInput from './Components/useRef Hook/FocusInput';
import HookTimer from './Components/useRef Hook/HookTimer';
import ClassCounter from './Components/useStateHook.js/ClassCounter';
import HookCounter from './Components/useStateHook.js/HookCounter';
import UseStateToUpdateArray from './Components/useStateHook.js/UseStateToUpdateArray';
import UseStateUsingObject from './Components/useStateHook.js/UseStateUsingObject';
import UseStateWithPreviousState from './Components/useStateHook.js/UseStateWithPreviousState';


//creating context for only use context hook
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

const initialState = 0
const reducer = (state , action) => {             
  switch(action){
      case 'increment' : return state + 1
      case 'decrement' : return state - 1
      case 'reset' : return initialState
      default : return state
  }
} 
//creating contexts for useReducer With useContext
export const CountContext = React.createContext()



function App() {
//state for useReducer with useContext
const [count , dispatch] = useReducer(reducer , initialState)

  return (
    <div className="App">
      <strong>useState() Hook <br/></strong>
      By using class<ClassCounter />
      By using useState() Hook<HookCounter /><hr /> 
      counter using previous state<UseStateWithPreviousState />
      <hr />
      <strong>useState passsing the parameter as a object</strong> <UseStateUsingObject /><hr/>
      <strong>using array as a paramter in useState</strong><UseStateToUpdateArray />
      <hr/>
      <strong>useEffect Hook</strong><br/>
      class working <ClassCounterUseEffect />
      Hook Counter <HookCounterOne />
      Class Move <ClassMouse />
      Hook Mouse with cleanUp code<MouseContainer />
      <hr/>
      useEffect with incorrect dependencies <br/>
      class interval example<IntervalClassCounter />
      Hook interval example <IntervalHookCounter />
      <hr/>
      <strong>Data Fetching</strong><DataFetching />
      <hr/><strong>useContext Hook</strong> 
      <UserContext.Provider value={'Tejas'}>
        <ChannelContext.Provider value={'CodeEvolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      <hr/><strong>use reducer hook</strong>
      usereducer to make simple state <CounterR />
      useReducer to implement complex state and action <CounterTwo />
      using multiple useReducer hooks <CounterThree /><br />
      useReducer hook with usecontext <br />
      <h5>count - {count}</h5>
      here we are  passing the value as an object which has one property as a state and other as dispatch method
      <CountContext.Provider value={{countState : count , countDispatch : dispatch}} >
        <CompoA />
        <CompoB />
        <CompoC />
      </CountContext.Provider> 
      {/* So here we can access the global state in any of the component compoA , compoD , CompoF by useContext hook */}
      
      <hr/>Data Fetching using useState <DataFetchingOne />
      <br/>Data fetching using useReducer <DataFetchingTwo/>

      <hr/>
      using usecallbacks <ParentComponent />
      <br/><hr/> using UseMemos <CounterM />
      <br/><hr/> using useRef Hooks  <FocusInput /><br />
      <HookTimer />


    </div>
  ) 
}

export default App;
