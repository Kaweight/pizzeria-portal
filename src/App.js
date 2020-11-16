import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Homepage from "./components/views/Homepage/Homepage";
import Login from "./components/views/Login/Login";
import Booking from "./components/views/Booking/Booking";
import Tables from "./components/views/Tables/Tables";
import Kitchen from "./components/views/Kitchen/Kitchen";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
            <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          </Route>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
