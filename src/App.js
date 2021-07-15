import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './pages/Search';

function App() {
        return (
                <Router>
                        <div className="container">
                                <nav className="navbar">
                                        <div className="navbar-brand">
                                                <a className="navbar-item" href="https://bulma.io">
                                                        <img
                                                                src="https://bulma.io/images/bulma-logo.png"
                                                                width="112"
                                                                height="28"
                                                                alt="demo logo"
                                                        />
                                                </a>

                                                <a
                                                        role="button"
                                                        className="navbar-hamburger"
                                                        aria-label="menu"
                                                        aria-expanded="false"
                                                        data-target="navbarBasicExample"
                                                >
                                                        <span aria-hidden="true" />
                                                        <span aria-hidden="true" />
                                                        <span aria-hidden="true" />
                                                </a>
                                        </div>
                                        <div id="navbarBasicExample" className="navbar-menu is-active">
                                                <div className="navbar-start">
                                                        <a>
                                                                <Link className="navbar-item" to="/">
                                                                        Home
                                                                </Link>
                                                        </a>
                                                        <a>
                                                                <Link className="navbar-item" to="/employees">
                                                                        Employees
                                                                </Link>
                                                        </a>
                                                </div>
                                        </div>
                                </nav>
                                <Switch>
                                        <Route path="/">
                                                <Search />
                                        </Route>
                                        <Route path="/employees">
                                                <Employees />
                                        </Route>
                                </Switch>
                        </div>
                </Router>
        );
}

function Employees() {
        return <h2>Employees</h2>;
}

export default App;
