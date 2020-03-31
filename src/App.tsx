// import React from 'react';
// import logo from './logo.svg';
// import styles from './App.module.css';
// import TextInput from './components/TextInput/text-input';

// function App() {
//   return (
//     <div className={styles["App"]}>
//       <header className={styles["App-header"]}>
//         <img src={logo} className={styles["App-logo"]} alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//         className={styles["App-link"]}
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <TextInput />
//       </header>
      
//     </div>
//   );
// }

// export default App;



// Will allow us to access nested routes.
// NOTE: if you add exact without <switch>,
// you wont be able to access those routes

import React, { Fragment } from 'react'
import { MyComponent, StyledBox } from './components/index'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './utils/styles/global';
import store from "./store";

const App: React.FC = () => (
  <Provider store={store}> 
      <Fragment>
          <GlobalStyle />
          <Router>
              <Switch> 
                  <Route exact path="/" component={MyComponent} />
                  <Route exact path="/styledbox" component={StyledBox} />
              </Switch>
          </Router>
      </Fragment>
  </Provider>
);

export default App;