import { useState , useEffect , useReducer } from "react"; // useState အား react မှ ခေါ်ယူသုံးပြုရမည်ဖြစ်သ်ည
// ****** useState ***********
// useState အသုံးပြုထားသော component သည် uppercase ဖြစ်နေရမယ်
// useState သည် component body / function body ထဲတွင် မဖြစ်မနေရှိနေရမည်
// useState အား if statement နှင့် loop ထဲတွင်အသုံးပြု၍ မရပေ 
// ဥပမာ
// if(true){
//     useState(10);
// }
// for(let i = 0 ; i < Array.length ; i++){
//     useState(10);
// }

// function App(){
//     // const state = useState(10); // usestate ၏ () ထဲတွင် ထည့်လိုက်သော value သည် state variabel ၌  array ပုံစံဖြင့် ind 0 သည် မိမိ ( ) အတွင်း ရိုက်ထည့်လိုက်သော value ဖြစ်ပြီး ind 1 သည် function တစ်ခုဖြစ်သ်ည ၄င်း function သည် ind 0 value အား update လုပ်ချင်လှှင်အသုံးပြုရမည် 
//     // ind 0 ၏ value အား ပြန်လည်အသုံးပြုနိုင်ရန် state variable တွင် index no ဖြင့် ပြန်ခေါ်ရမည်ြဖစ်သ်ည 
//     // console.log(state) 



//     // arr destructing ပြုလုပ်၍ အသုံးပြုနိင်သ်ည ဥပမာ
//     // const arr = [1,2,3,4,5];
//     // var one = arr[0];
//     // var two = arr[1];
//     // var three = arr[2];
//     // var four = arr[3];
//     // var five = arr[4];

//     // destructing form 
//     // var [one,two,three,four,five] = arr;
//     // state အား destruction ပြုလုပ်ရန် 

//     // const state = useState(10);
//     var [count,setcount] = useState(10);

//     function increase(){
        
//         // setcount(count+3); // increase အား တစ်ခါခေါ်တို်ငး setcount fun ၏ parameter ရှိ count+1 သည် အလုပ်လုပ်နေမည်ဖြစ်သည် တိုးချင်လျှော့ချင်သော value အား function ၏ parameter အနေဖြင့် ပေးရမည် 
//         // count သည် useState ထဲတွင်ထည့်ထားသော value ဖြင့် စတင်နေမည်ဖြစ်သည် 
//         // value သည် function အား ဘယ်နှခါခေါ်ခေါ် ၁ ဘဲပေါင်းပေးနေမည်ဖြစ်သည် နောက်ဆုံး ဖြစ်ခဲ့သော တန်ဖိုးအား ရယူရန် 
//         // setcount() ထဲတွင် function ေနာက်တစိခုရှိသည် ၄င်း ၏ parameter သည် နောက်ဆုံး ဖြစ်ခဲ့သော value ဖြစ်နေမည်ဖြစ်ပြီး ၄င်း value အား အပေါင်းအနှုတ်အမြောက်အစား ပြောင်းလဲနိုင်သည် 
//         // setcount(count+3); နောက်ဆုံး ပြောင်းလဲ ခဲ့သော တန်ဖိုးအား မပြော်ငးလဲဘဲလုပ်ဆောင်နေမည်ဖြစ်သည် 
//         setcount((preValue)=> preValue + 1) // နောက်ဆံဒး  ပြော်ငးလဲခဲသော တန်ဖိုးအား 1 ေပြာင်းပေးမည်ြဖစသ်ည် 
//         setcount((preValue)=> preValue + 1) // နှစ်ခါခေါ်ထားသော်ကြောင့် နောက်ဆံုးရရှိခဲ့သော တန်ဖိုးသည် 1 ဖြစ်သောကြောင့် ေနာက်ထပ် ၁ ေပါင်းပြီး function တစ်ခါခေါ်တိုင်း 2 ေပါင်းပေးနေမည်ဖြစ်သည် 
//     }

//     // console.log(one);
//     return (
//     //   <div>
//     //       <h1>{state[0]}</h1>
//     //       {/* // ind 0 ၏ value အား ပြန်လည်အသုံးပြုနိုင်ရန် state variable တွင် index no ဖြင့် ပြန်ခေါ်ရမည်ြဖစ်သ်ည  */}
//     //       <button >+</button>
//     //   </div>
//     <div>
//           <h1>{count}</h1>
//           {/* // ind 0 ၏ value အား ပြန်လည်အသုံးပြုနိုင်ရန် state variable တွင် index no ဖြင့် ပြန်ခေါ်ရမည်ြဖစ်သ်ည  */}
//           <button onClick={increase}>+</button>
//       </div>
//     )
//   }

  // ------------------------------

  // *** useEffect();

  // render display //    
  // side effect = > to reach outside world // မိမိ component အတွင်းမဟုတ်ဘဲ ပြင်ပမှ data များ အား ဆက်သွယ်အသုံးပြုနိုင်သည် (backend server or api request)
  // by default it run after every render // မိမိ၏ component render လုပ်ပြီးတိုင်း useEffect သည် အလိုအလျှောက် run မည်ဖြစ်သည်
  // cannot conditional
  // second parameter -> only run initial render
  // cleanup function
  // fetch data -> https://api.github.com/users
  // conditional rendering


// function App(){
//   const [value, setValue] = useState(0);
  
//   // useEffect() ထဲတွင် callback function တစ်ခု လက်ခံပြီး ၄င်း function ၏ return သည် component render ဖြစ်ပြိးချိန်တွင် အလုပ်လုပ်မည်ဖြစသ်ည် 

//   // useEffect(()=>{// useEffect() ထဲတွင် parameter နှစ်ခုလက်ခံပြီး  callback function တစ်ခု နှင့် array တစ်ခု လက်ခံပြီး ၄င်း function ၏ return သည် comeponent render ဖြစ်ပြိးချိန်တွင် အလုပ်လုပ်မည်ဖြစသ်ည် 
//   // // [ ] ထဲတွင် empty ပေးလိုက်ပါက useEffect အား တစ်ကြိမ်ဘဲ အလုပ်လုပါမည်ဖြစ်သည် 
//   //   console.log("Use effect was renedered")
//   // },[]);

//   // [] ထဲတွင် ‌value ေပးလို်ကပါက value ေပြာင်သွားတိုင်း အလုပ်လုပ်နေမည်ဖြစ်သည်
//   useEffect(()=>{// useEffect() ထဲတွင် parameter နှစ်ခုလက်ခံပြီး  callback function တစ်ခု နှင့် array တစ်ခု လက်ခံပြီး ၄င်း function ၏ return သည် comeponent render ဖြစ်ပြိးချိန်တွင် အလုပ်လုပ်မည်ဖြစသ်ည် 
//     // [ ] ထဲတွင် empty ပေးလိုက်ပါက useEffect အား တစ်ကြိမ်ဘဲ အလုပ်လုပါမည်ဖြစ်သည် 
//       console.log("Use effect was renedered")
//     },[value]);

//   // * error
//   // if(true){
//   //   useEffect(()=>{
//   //     console.log("Use effect was renedered")
//   //   })
//   // }


//   function increase(){
//     setValue(value + 1);
//   }
//   console.log("This is component");
//   return (
//     <div>
//       <h1>{value}</h1>
        
//       <button onClick={increase}>+</button>
//     </div>
//   )
//၀--------------------------------၀
  // useEffect သည် clean up function တစ်ခုကိုပေးသည် 

  // function App(){
  //   const [site, setSite] = useState(window.innerWidth);
    
  //   useEffect(()=>{
  //     window.addEventListener("resize",function(){ // windwo ၏ width ပြောင်းလဲသွားတိုင်း setSite မှ site အား value update လုပ်ပေးနေမည်ဖြစ်သည် သို့သော် ၄၉်းသည် memory သည် ပြသနာဖြစ်လာနိုင်သည် 
  //       // useEffect သည် cleanUp function အား ပြန်ပေးသည် 
  //       setSite(window.innerWidth);
      
  //     })
  //     return ( // addEventListener လုပ်ပီးတိုင်း return အနေဖြင့် removeEventListener အား ထုတ်ပေးမည်ဖြစ်သည် ထို့ကြော်င့ memory နှင့် cpu အာ းသက်သာစေသည် return အနေဖြင့် ပြန်ပေးမည်ဖြစ်သည် console ဖြင့် စစ်နိုင်သည် 
  //       window.removeEventListener("resize",function(){
  //         setSite(window.innerWidth);
  //       })
  //     )
  //   },[site]);
  //   console.log("This is component");
    
  //   return (
  //     <div>
  //       <h1>{site} px</h1>
          
  //       <button>+</button>
  //     </div>
  //   )

  //0----------------------0
  //  Using With API

  // const url = "https://api.github.com/users"; // api အား varible တစ်ခုတွင်သိမ်းထားရမည် 
  // function App(){
  //   const [users, setUser] = useState([]); // api မှာ array ကို ထည့်မည်ြဖစ်သောကြောင့် လော‌ောလဆယ် empty ပေးထားမည် 
    
  //   async function getUsers(){
  //     const response = await fetch(url) ; // api မှလာသော data များအား await fetch ဖြင့် ဖမ်းယူပြီး response ထဲတွင်ထည့်ထားမည်ြဖစသ်ည 
  //     // api အား ခေါ်ယူရန် async function အား အသံုးပြုရမည် 
  //     const users = await response.json() ; // fetch မှရလာသော data များအား await ဖြင့် ဖြေချပြိး users ထဲတွင် ထည့်လိုက်မည်ြဖစသ်ည် json method ဖြင့် ဖြေချရမည်ဖြစ်သည် 
  //     setUser(users) // users သည် setUser ေနရာတွင်ဝင်ပြီး UI တွင် result ပြမည်ြဖစသ်ည် 
  //     console.log(users);
  //   }
  //   // useEffect(()=>{
  //   //   getUsers();
      
  //   // }); // second parameter မပါသဖြ်င့ setUser သည် ထပ်ခါထပ်ခါ ခေါ်နေမည်ဖြစ်ပြီး CPU အလုပ်များနိုင်သည် ထို့ကြောင့် second parameter ပေးရမည်

  //   useEffect(()=>{
  //     getUsers();
      
  //   },[]);
  //   console.log("This is component");
    
  //   return (
  //     <div>
  //       <h1>GitHub User</h1>
  //       <ul>
  //         {/* users သည် array ဖြင့် ထွက်လာသောကြောင့် map လုပ်ပေဂ၇မည် */}
  //         {users.map(function(user){
  //           console.log(user);
  //           return (
  //             <li key = {user.id}>
  //               <img src={user.avatar_url} widht={"70px"} height={"70px"} alt={user.login}/>
  //               <h4>{user.login}</h4>
  //             </li>
  //           )
  //         })}
  //       </ul>
          
  //     </div>
  //   )

  // 0-------------------------0

  // *** Conditional rendering****

  // const url = "https://api.github.com/users"; 
  // function App(){
  //   const [users, setUser] = useState([]); 

  //   const [isLoading,setIsLoading] = useState(true);

  //   const [iserror,seterror] = useState(false); // api request မှားလျှင် error ပြရန် 



    
  //   async function getUsers(){
  //     const response = await fetch(url) ;
  //     const users = await response.json() ; 
      
  //     if(response.status > 300){ // fetch မှာ လုသော error သည် 300 ထပ်ကျော်နေပါက 
  //       console.log(response.status)
  //       seterror(true); // error ကုဒ်ကို ေဖာ်ပြမည် 
  //       setIsLoading(false); // loading ကို ဖျောက်မည် 
  //     }
      
  //     setUser(users);
  //     setIsLoading(false); // setUser ထဲတွင် data ရောက်ပြီးပြီဆိုမှ setIsLoading ၏ useState တန်ဖိုးကို false  ‌ေပြာင်းလိုက်မည်ဖြစ်သည် 
  //   }
  //   useEffect(()=>{
  //     getUsers();
      
  //   },[]);
  //   console.log("This is component");

  //   if(isLoading){ // isloading သာ true ဖြစ်နေလှှင် loading ဘဲပြနေမည်ြဖစ်ပြိး false ဖြစ်နေမှ အောက်ရှိ return ကိုပြပေးနေမည်ဖြစ်သည် 
  //     return <h1>Loading</h1> 
  //   }

  //   //  network error ပြနိုင်ရန် 
  //   if(iserror){ // iserror တန်ဖိုးသည် true ဖြစ်နေပါက အောက်က ကုဒ်ကို run မည် 
  //     return <h1>Opps error</h1>
  //   }
  //   return (
  //     <div>
  //       <h1>GitHub User</h1>
  //       <ul>
  //         {users.map(function(user){
  //           // console.log(user);
  //           return (
  //             <li key = {user.id}>
  //               <img src={user.avatar_url} widht={"70px"} height={"70px"} alt={user.login}/>
  //               <h4>{user.login}</h4>
  //             </li>
  //           )
  //         })}
  //       </ul>
          
  //     </div>
  //   )
  // 0-------------------------0
  // ----- use reducer --------
  // 0-------------------------0

// const intialValue = {
//   count : 0,// initialValue အား useState ကဲ့သို့ကြိုတင်သတ်မှတ်ပေးရမ်ည အများအားဖြင့် object ‌‌ပေးရမည် 
// }
// function reducer(state,action){
//   // console.log(state)
//   if(action.type === "increment"){
//     return {...state , count : state.count + action.payload}
//   }
// }
// function App(){
//   const [state,dispatch] = useReducer(reducer,intialValue);// initialValue သည် state ထဲသို့ဝင်သွားမည်
//   //   // // useReducer() ထဲတွင် parameter နှစ်ခုရှိသည် function နှင့် initialValue ၄င်းအား array destruction ဖြင့် ခွဲထုတ်နိုင်သည် 
//   //   // // function အား မည်သည့်နေရာတွင်မဆိုရေးနိုင်သည် function အား မိမိကိုယ်တိုင်ဖန်တီးရမည်ဖြစ်သည်
//   //   // // console.log(useReducer);
//   //   // //console.log(state); // object ဖြင့် ပေးထားသောကြောင့် object ဖြင့် ပြန်ထွက်လာမည်ဖြစ်သည်

//   return(
//     <div>
//       <h1>{state.count}</h1>
//       {/* <button onClick={()=>dispatch({type: "increment" , payload : 1})}>+</button> */}
//       <button onClick={function(){
//         return dispatch({type: "increment" , payload : 1})
//       }}>+</button>
//     </div>
//   )
//   // intialValue ၏တန်ဖိုးသည် state ထဲ object အနေဖြင့်ဝင်သွားမည်
//   // reducer fun ထဲတွင် type နှင့် payload ဟူသော key မာျးဖြင့် object ပုံစံ parameter ပေးရမည်
//   // btn မှ click တစ်ချက်နှိပ်တိုင်း dispatch အား retrun ပေးမည်ဖြစ်ပြိး ၄င်း dispatch ထဲရှိ object value သည် reducer function ထဲတွင် action ၏ value အနေဖြင့် ဝင်သွားမည် 
//   // reducer fun ထဲတွင် state နှင့် action ဟူသော parameter နှစ်ခုရှိပြီး state သည် intialValue မှလာသော state ဖြစ်သည် 
//   // ထို့နောက် reducer fun ထဲတွင် if statement ဖြင့် action တွင်ဝင်လာသော object type အား condition စစ်ပြီး return အနေဖြင့် လုပ်‌ဆောင်ချက်အား လုပ်နိုင်သည်
//   // retrun တွင် {} ဖြင့် လူပ်ဆောင်ချက်များအား လုပ်နိုင်သည် ပထမဦးစွား state အား ဖြေချပေးရမည် မဖြေချလဲရသည် 
//   // ၄င်း state ထဲရှိ count တန်ဖိုးအား html တွင် ပြန်လည်အသံဒးချနိုင်သည်  
// }

// const initialValue = {
//   people : [],
// }

// function reducer(state,action){

//   if(action.type === "INPUT_ADDED"){
//     const newpeople = [...state.people , action.payload];

//     return {...state,people : newpeople}
//   }

// }
function App(){

//   const [inputValue,setInputValue] = useState("");

//   const [state , dispatch] = useReducer(reducer,initialValue);
//   const newItem = {id: (Math.random()*100).toString(), name : inputValue};
//   function submitHandler(e){
//     e.preventDefault();
//     dispatch({type : "INPUT_ADDED" , payload : newItem })
//     setInputValue(e.target.value = "");


//   }
//   function onChangeFun(e){
//     setInputValue(e.target.value);
//   }
//   // console.log(state)
//   // console.log(state.people)
//   return (
//     <div>
//       <h1>to do list</h1>
//       <form onSubmit={submitHandler}>
//         <input type={"text"} name="list" id="list" onChange={onChangeFun} value={inputValue} className="list" placeholder="Enter Text" autoComplete="off"/>
//         <button type="submit" >Submit</button>
//       </form>
//       <ul>
//         {state.people.map(function(person){
//           return (
//             <li key={person.id}>{person.name}</li>
//           )
          
//         })}
//       </ul>
//     </div>
//   )

// -------

}
export default App;