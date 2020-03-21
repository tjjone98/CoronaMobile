import React from 'react';
import {Provider} from 'mobx-react';
import store from './src/Stores';
import Container from './src/Container/Container';
class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Container />
      </Provider>
    );
  }
}
export default App;
