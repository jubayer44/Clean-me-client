import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className="dark:bg-gray-800">
      <Toaster/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
