import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';

class App extends Component {
  render() {
    return(
      <header className={styles.root}>
        <h1 className={styles.root_title}>React is Installed finally :V </h1>
      </header>
    );
  }
}

export default App;
