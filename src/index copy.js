import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContext from "../src/api/auth-context"

const root = ReactDOM.createRoot(document.getElementById('root'));
const AppWrapper = () => {
  const [loggedIn, setLoggedIn] = useState(false)

root.render(
 
  <React.StrictMode>
  <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
    <App />
    </AuthContext.Provider>
  </React.StrictMode>
 
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
ReactDOM.render(
  <AppWrapper/>,
  document.querySelector('#app')
)
