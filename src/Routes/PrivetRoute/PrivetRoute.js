import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../countext/AuthProvider/AuthProvider';








/* 
1. only allow authenticated user to visit the route
2. 
3. Redirect user to the route they wanted to go before login
*/






const PrivetRoute = ({children}) => {
   
      const {user} = useContext(AuthContext);

      if(!user){
         return <Navigate to="/login"></Navigate>
     }
     return children;
};

export default PrivetRoute;