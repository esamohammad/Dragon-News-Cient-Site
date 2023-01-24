import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../countext/AuthProvider/AuthProvider';



/* 
1. only allow authenticated user to visit the route
2. 
3. Redirect user to the route they wanted to go before login
*/

const PrivetRoute = ({ children }) => {

   const { user , loading} = useContext(AuthContext);

   const location = useLocation();
   //rederect💥💥


   //if privet route reload then go to login---(solved)
   //   💥💥💥💥

   if(loading){
      return  <Spinner animation="border" variant="primary" />
  }

   if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>
   }
   return children;
};

export default PrivetRoute;