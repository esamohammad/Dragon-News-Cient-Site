import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
   {
       path: '/',
       element: <Main></Main>,
       children: [
           {
               path: '/',
               element: <Home></Home>
           },
           {
               path: '/category/:id',
               element: <Category></Category>
           },
           {
               path: '/news/:id',
               element: <News></News>
           }
       ]
   }
])