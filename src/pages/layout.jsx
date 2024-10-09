import React from 'react'
import { Outlet, useLocation } from 'react-router'
import { SwitchTransition,CSSTransition } from 'react-transition-group';


export default function layout() {
    let location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition timeout={300} classNames='fade' key={location.pathname}>
      
          <Outlet />
       
      </CSSTransition>
    </SwitchTransition>
  );
}
