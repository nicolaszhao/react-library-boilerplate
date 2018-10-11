import React from 'react';
import { NavLink } from 'react-router-dom';
import { Animate } from 'react-tote-box';
import style from './nav.scss';

const Item = ({ label, to, activeOnlyWhenExact }) => (
  <li>
    <NavLink
      to={to}
      exact={activeOnlyWhenExact}
      activeClassName={style.active}
    >
      {label}
    </NavLink>
  </li>
);

const Nav = ({ routes, visible, onClick }) => (
  <Animate
    in={visible}
    duration={400}
    animation="fadeRight"
  >
    <nav className={style.nav} onClick={onClick}>
      <ul>
        {routes.map((route, i) => (
          <Item 
            key={i} 
            label={route.text} 
            to={route.path} 
            activeOnlyWhenExact={route.path === '/'} 
          />
        ))}
      </ul>
    </nav>
  </Animate>
);

Nav.Item = Item;

export default Nav;
