import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodoPage from "./components/TodoPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";


const App = () => {


    return (
      <BrowserRouter>
          <div>
              <div>
                  <NavLink to="/users">Users</NavLink>
                  <NavLink to="/todos">Todo task</NavLink>
              </div>
              <Route path={'/users'} exact>
                  <UserPage/>
              </Route>
                  <Route path={'/users/:id'} >
                  <UserItemPage/>
                  </Route>
              <Route path={'/todos'} exact>
                  <TodoPage/>
              </Route>
              <Route path={'/todos/:id'} >
                  <TodoItemPage/>
              </Route>
          </div>
      </BrowserRouter>
    )
}

export default App;