
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Route';

function App() {
  return (
    <div >
      {/* <h1>hey this is react</h1> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
