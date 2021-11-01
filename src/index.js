// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

let imageCount = 0;
let imageCert = [
    "https://www.sololearn.com/Certificate/1024-8034487/jpg/",
    "https://www.sololearn.com/Certificate/1014-8034487/jpg/",
    "https://www.sololearn.com/Certificate/1051-8034487/jpg/",
    "https://www.sololearn.com/Certificate/1080-8034487/jpg/"
];

window.onload = () => {
    document.getElementById('next-picture').onclick = () => {
        let img = document.getElementById('image');
        img.src = imageCert[imageCount];
        imageCount++;
        if (imageCount >= imageCert.length) imageCount = 0;
    };
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
