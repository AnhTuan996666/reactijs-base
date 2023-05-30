
import './App.scss';
import ListComponent from './Todo';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Example/Home';
import NoPage from './Nopage';
import Mycomponent from './Example';
import Layout from './Layout';
import ListUser from './Nav/Users/ListUser';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} exact="true">
            <Route index element={<Home />} />
            <Route path="blogs" element={<ListComponent />} />
            <Route path="contact" element={<Mycomponent />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
