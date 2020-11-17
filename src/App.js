import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/views/Homepage/Homepage";
import Login from "./components/views/Login/Login";
import Ordering from "./components/views/Ordering/Ordering";
import Tables from "./components/views/Tables/Tables";
import Kitchen from "./components/views/Kitchen/Kitchen";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <ThemeProvider theme={theme}>
              <Switch>
                <Route>
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                  <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                  <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
                  <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
                  <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Ordering} />
                </Route>
              </Switch>
            </ThemeProvider>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
