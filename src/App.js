import './App.scss';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import 'react-toastify/dist/ReactToastify.css';
import Routes from './pages/Routes'
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes/>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AuthContextProvider>

    </>


  );
}

export default App;
