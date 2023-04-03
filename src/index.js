import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./index.css";


// useState // useState သည် function ဖြစ်သည် ထို့နောက် 
// let count = 0 ;

// function increase(){
//   count++;
//   root.render(<App/>); // render သည် function ကို တစ်ခါခေါိတ်ုင်း တစ်ခါ render လုပ်နေမည်ဖြစ်သောကြောင့် value အား h1 assign တွင် ဖော်ပြသွားမည်ဖြစ်သည် သို့သော် ၄င်း သည် page တစ်ခုလံဒး render  လုပ်နေသောကြောင့် မှားယွင်းနေသည် ထို့ကြောင့် useState( ) function အား အသံဒးပြုရသည် 
//   console.log(count);
// }


// function App(){
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={increase}>+</button>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);


