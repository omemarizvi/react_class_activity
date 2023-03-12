import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './components/profile';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import {users} from './components/users';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Profile id = {users[0].profilePicture} firstName={users[0].firstName} lastName={users[0].lastName} classLevel={users[0].classLevel} email={users[0].email} school={users[0].school} />
    <Profile id = {users[1].profilePicture} firstName={users[1].firstName} lastName={users[1].lastName} classLevel={users[1].classLevel} email={users[1].email} school={users[1].school} />
    <Profile id = {users[2].profilePicture} firstName={users[2].firstName} lastName={users[2].lastName} classLevel={users[2].classLevel} email={users[2].email} school={users[2].school} />
    <Profile id = {users[3].profilePicture} firstName={users[3].firstName} lastName={users[3].lastName} classLevel={users[3].classLevel} email={users[3].email} school={users[3].school} />
    <Profile id = {users[4].profilePicture} firstName={users[4].firstName} lastName={users[4].lastName} classLevel={users[4].classLevel} email={users[4].email} school={users[4].school} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();