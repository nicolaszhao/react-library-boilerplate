import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import cls from 'classnames';
import { APP_BASE_URL } from 'config/base-url';
import Home from './Home';
import NoMatch from './NoMatch';
import Nav from './Nav';
import style from './app.scss';

const routes = [
  {
    path: '/',
    component: Home,
    text: 'Home'
  },
  {
    path: '/example1',
    component: () => <div>Example 1</div>,
    text: 'Example 1'
  },
  {
    path: '/example2',
    component: () => <div>Example 2</div>,
    text: 'Example 2'
  }
];

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menusOff: true  
    };
  }

  handleMenusSwitchClick = () => {
    this.setState({ menusOff: !this.state.menusOff });
  }

  render() {
    return (
      <div className={cls('container', style.container)}>
        <header className={style.header}>
          <h1>Examples</h1>
          <button className={style['menus-switch']} onClick={this.handleMenusSwitchClick}>
            <span className={style['menus-switch-text']}></span>
          </button>
        </header>
        <div className={style.content}>
          <Switch>
            <Route path="/" component={Home} exact />
            {routes.map((route, i) => (
              <Route key={i} path={route.path} component={route.component} />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Nav routes={routes} visible={!this.state.menusOff} onClick={this.handleMenusSwitchClick} />
      </div>
    );
  }
}

const App = () => (
  <Router basename={APP_BASE_URL}>
    <Route component={Container} />
  </Router>
);

export default hot(module)(App);
