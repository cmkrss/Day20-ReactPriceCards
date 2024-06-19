// import "./App.css";


// function App() {
//   const free = {
//     type : "FREE",
//     price: 0,
//     users: {value:"✔ Single User", style:"able"},
//     storage: {value:"✔ 50GB", style:"able"},
//     pp   : {value:"✔ Unlimited Public Project", style:"able"},
//     ca   : {value:"✔ Community Access", style:"able"},
//     ex1  : {value:"❌ Unlimited Private Projects", style:"disable"},
//     ex2  : {value:"❌ Dedicated Phone Support", style:"disable"},
//     ex3  : {value:"❌ Free Subdomain", style:"disable"},
//     ex4  : {value:"❌ Monthly Status Reports", style:"disable"}
//   }
//   const plus = {
//     type : "PLUS",
//     price: 9,
//     users: {value:"✔ 5 Users", style: "able"},
//     storage: {value: "✔ 50GB", style: "able"},
//     pp   : {value:"✔ Unlimited Public Project", style: "able"},
//     ca   : {value:"✔ Community Access", style: "able"},
//     ex1  : {value:"✔ Unlimited Private Projects", style:"able"},
//     ex2  : {value:"✔ Dedicated Phone Support", style:"able"},
//     ex3  : {value:"✔ Free Subdomain", style:"able"},
//     ex4  : {value:"❌ Monthly Status Reports", style:"disable"}
//   }
//   const pro = {
//     type : "PRO",
//     price: 49,
//     users: {value:"✔ Unlimited Users", style: "able"},
//     storage: {value:"✔ 50GB", style: "able"},
//     pp   : {value:"✔ Unlimited Public Project",style:"able"},
//     ca   : {value:"✔ Community Access", style:"able"},
//     ex1  : {value:"✔ Unlimited Private Projects", style:"able"},
//     ex2  : {value:"✔ Unlimited Private Projects", style:"able"},
//     ex3  : {value:"✔ Unlimited Private Projects", style:"able"},
//     ex4  : {value:"✔ Unlimited Private Projects", style:"able"},
//   }
 
//   return (
//     <>
//     <Profile model={free} />
//     <Profile model={plus} />
//     <Profile model={pro} />
//     </>
//   );
// }

// export default App;

// function Profile({ model }) {
//   return (
//     <div className = "profile-container">
//       <p className="types">{model.type}</p>
//       <h1>${model.price}/month</h1>
//       <p className="linePara">-----------------------------------------------------</p>

//       <p>{model.users.value}</p>
//       <p>{model.storage.value} Storage</p>
//       <p>{model.pp.value}</p>
//       <p>{model.ca.value}</p>
//       <p className={model.ex1.style}>{model.ex1.value}</p>
//       <p classname={model.ex2.style}>{model.ex2.value}</p>
//       <p className={model.ex3.style}>{model.ex3.value}</p>
//       <p className={model.ex4.style}>{model.ex4.value}</p>
//       <button>Button</button>   
//     </div>
//   );
// }



//===============================================================================
import "./App.css";


function App() {
  const data = [
    {
      type : "FREE",
      price: 0,
      users: {value:"✔ Single User", style:"able"},
      storage: {value:"✔ 50GB", style:"able"},
      pp   : {value:"✔ Unlimited Public Project", style:"able"},
      ca   : {value:"✔ Community Access", style:"able"},
      ex1  : {value:"❌ Unlimited Private Projects", style:"disable"},
      ex2  : {value:"❌ Dedicated Phone Support", style:"disable"},
      ex3  : {value:"❌ Free Subdomain", style:"disable"},
      ex4  : {value:"❌ Monthly Status Reports", style:"disable"}
    },
    {
      type : "PLUS",
      price: 9,
      users: {value:"✔ 5 Users", style: "able"},
      storage: {value: "✔ 50GB", style: "able"},
      pp   : {value:"✔ Unlimited Public Project", style: "able"},
      ca   : {value:"✔ Community Access", style: "able"},
      ex1  : {value:"✔ Unlimited Private Projects", style:"able"},
      ex2  : {value:"✔ Dedicated Phone Support", style:"able"},
      ex3  : {value:"✔ Free Subdomain", style:"able"},
      ex4  : {value:"❌ Monthly Status Reports", style:"disable"}
    },
    {
      type : "PRO",
      price: 49,
      users: {value:"✔ Unlimited Users", style: "able"},
      storage: {value:"✔ 50GB", style: "able"},
      pp   : {value:"✔ Unlimited Public Project",style:"able"},
      ca   : {value:"✔ Community Access", style:"able"},
      ex1  : {value:"✔ Unlimited Private Projects", style:"able"},
      ex2  : {value:"✔ Unlimited Private Projects", style:"able"},
      ex3  : {value:"✔ Unlimited Private Projects", style:"able"},
      ex4  : {value:"✔ Unlimited Private Projects", style:"able"},
    },
  ];
 
  return (
    <>
    {data.map((val, idx)=>(
      <Profile model={val} />
    ))}
    </>
  );
}

export default App;

function Profile({ model }) {
  return (
    <div className = "profile-container">
      <p className="types">{model.type}</p>
      <h1>${model.price}/month</h1>
      <p className="linePara">-----------------------------------------------------</p>

      <p>{model.users.value}</p>
      <p>{model.storage.value} Storage</p>
      <p>{model.pp.value}</p>
      <p>{model.ca.value}</p>
      <p className={model.ex1.style}>{model.ex1.value}</p>
      <p classname={model.ex2.style}>{model.ex2.value}</p>
      <p className={model.ex3.style}>{model.ex3.value}</p>
      <p className={model.ex4.style}>{model.ex4.value}</p>
      <button>Button</button>   
    </div>
  );
}