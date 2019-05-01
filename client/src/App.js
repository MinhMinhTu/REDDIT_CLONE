import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

//header
import Home from './pages/Home'

//page
import Register from './pages/Register'
import Header from './container/Header'

//theme
import theme from './theme'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Register' component={Register} />
            </Switch>
          </>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
