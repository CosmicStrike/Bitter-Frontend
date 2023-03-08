import './input.css'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import MainRouter from './mainRouter';
import LoginRouter from './loginRouter';
import PageNotFound from './Pages/pageNotFound';

function App() {
  // let isLoggedIn = localStorage.getItem("Login")
  let isLoggedIn = true

  return (
    <>
      <SnackbarProvider
        maxSnack={1}
        preventDuplicate
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>

        <BrowserRouter>
          <Routes>
            <Route path="/*" element={isLoggedIn ? <MainRouter /> : <LoginRouter />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

      </SnackbarProvider>
    </>
  );
}



export default App;
