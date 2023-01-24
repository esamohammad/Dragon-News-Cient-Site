import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../countext/AuthProvider/AuthProvider';



/* 
1. only allow authenticated user to visit the route
2. 
3. Redirect user to the route they wanted to go before login
*/

const PrivetRoute = ({children}) => {
   
      const {user} = useContext(AuthContext);

      const location = useLocation(); 
     //rederect💥💥



      if(!user){
         return <Navigate to="/login" state={{from: location}} replace></Navigate>
     }
     return children;
};

export default PrivetRoute;