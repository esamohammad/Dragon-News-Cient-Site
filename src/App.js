import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;




// {/* React-hot-tost */ }
// 🌟🌟🌟🌟🌟💥💥💥💥💥🌟🌟🌟🌟🌟🌟
// Now we are going to the authentication.
// 🌟🌟🌟🌟🌟💥💥💥💥💥🌟🌟🌟🌟🌟🌟