/*
author:       Alexander BRENNER
description:  WingBrowser - Small Content browser web application
date:         03/05/22
filename:     withRouter.js
*/

import { useNavigate } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    
    return (
      <Component
        navigate={navigate}
        {...props}
        />
    );
  };
  
  return Wrapper;
};