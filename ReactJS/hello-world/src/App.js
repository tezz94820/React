import React from 'react';
import './App.css';
import Greet from './Components/Greet';
import { Component } from 'react';
import Welcome from './Components/Welcome';
import StateMessage from './Components/StateMessage';
import CountSetState from './Components/CountSetState';
import FunctionClickEventHandling from './Components/FunctionClickEventHandling';
import ClassClickEventHandling from './Components/ClassClickEventHandling';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import ConditionalRendering from './Components/ConditionalRendering';
import ListRendering from './Components/ListRendering';
import NameList from './Components/List Rendering/NameList';
import IndexAsKey from './Components/List Rendering/IndexAsKey';
import Stylesheet from './Components/Css Stylesheet/Stylesheet';
import Inline from './Components/Css Stylesheet/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './Components/Form';
import LifecycleA from './Components/Mounting/LifecycleA';
import FragmentDemo from './Components/Fragment/FragmentDemo';
import Table from './Components/Fragment/Table';
import ParentComponentHere from './Components/pure component/ParentComponentHere';
import RefsDemo from './Components/Refs/RefsDemo';
import FocusRefsWithClassComponent from './Components/Refs/FocusRefsWithClassComponent';
import ForwardRefParentInput from './Components/Refs/ForwardRefParentInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Error Handling/Hero';
import ErrorBoundary from './Components/Error Handling/ErrorBoundary';
import ClickCounter from './Components/Higher order components/ClickCounter';
import HoverCounter from './Components/Higher order components/HoverCounter';
import ClickCounter2 from './Components/Render Props/ClickCounter2';
import HoverCounter2 from './Components/Render Props/HoverCounter2';
import User from './Components/Render Props/User';
import Counter2 from './Components/Render Props/Counter2';
import ComponentC from './Components/context/ComponentC';
import { UserProvider } from './Components/context/UserContext';
import PostList from './Components/HTTP/PostList';
import PostForm from './Components/HTTP/PostForm';


class App extends Component{
  render(){
    return (
      <div className="App">
        {/* functional components */}
        <Greet name="Tejas" heroName="spiderman"/>  {/*if there is no content between 2 opening and closing tags you can use self closing tags*/}
        <Greet name="Pratik" heroName="Batman">
          <button>Action</button>
        </Greet>
        
        {/* class components  */}
        <Welcome name="deep" heroName="venom" /> 
        <Welcome name="Ani" heroName="Iron Man"/>

        <StateMessage></StateMessage> <br/>
        <CountSetState/>
        <br/>
          Functional Component EventHandling <FunctionClickEventHandling/><br/>
          class Component EventHandling  <ClassClickEventHandling/><br/>
          Event Binding <EventBind/><br/>
          Child Component calls Parent Component <ParentComponent/><br/><hr/>
          conditional Rendering <ConditionalRendering/><br/><hr/>
          List Rendering < ListRendering/><br/>
          List rendering Folder <NameList/><br/>
          Index as a key <IndexAsKey/><hr/>
          Css Styling <Stylesheet primary={true}/>
          Inline Css <Inline/> <br/>  
         {/*not undrstood */} css Modules <h1 class="error">Error</h1>  <h1 class={styles.success}>Success</h1><hr/>
          {/*while using css modules write import style from address and then the class attribute can be set accordingly */}
          Form Handling <Form/><hr/>
          Mounting Lifecycle(see in console) <LifecycleA/><hr/>
          Fragments <FragmentDemo/>
          Table And Column Example <Table/><hr/>
          Pure components  <ParentComponentHere/><hr/>
          RefsDemo  <RefsDemo/>
          <FocusRefsWithClassComponent />
          Ref Forwarding  <ForwardRefParentInput /><hr />
          Portals      <PortalDemo /> <hr/>
          Error Handling
          <ErrorBoundary><Hero heroName="Batman"></Hero></ErrorBoundary>
          <ErrorBoundary><Hero heroName="Superman"></Hero></ErrorBoundary>
          <ErrorBoundary><Hero heroName="Joker" ></Hero></ErrorBoundary> <hr />
           Higher order components<br/>
           click Counter<ClickCounter name="Tejas" /><br/><br/>
           Hover Counter <HoverCounter /> <hr/>
           Render Props <br/>
           {/* Click Counter2<ClickCounter2 /><br/><br/>
           Hover Counter2 <HoverCounter2 />
           <User render={ isLoggedIn => isLoggedIn ? 'Tejas' : 'Guest'} />    
           Here the render props means that prop is being passed in the form of function <br/> */}
           <Counter2>
           
           {(count , incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
           )}
           </Counter2>

           <Counter2>
            {(count , incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
           )}
           </Counter2><hr/>
           Context api
           <UserProvider value="Tejas">
            <ComponentC />
           </UserProvider>
           {/* here enclose the parent component inside the provider tag and add the prop as the value */}
           <hr/>Http Get Request
           <PostList />
           <strong><hr/></strong>
           HTTP Post <br />
           <PostForm />
           

      </div>
    )
  }
}

export default App;
 
