// import "./App.css";


// function App() {
//   return (
//     <>
//     <Profile name="$0/month" title="FREE" users="Single Users" storage="50GB" pp="Unlimited Public Projects" ca="Community Access" ex1="Unlimited Private Project" ex2="Dedicated Phone Support" ex3="Free Subdomain" ex4="Monthly Status Reports"  sW="❌" sR="✔"/>
//     <Profile name="$9/month" title="PLUS" users="5 Users" storage="50GB" pp="Unlimited Public Projects" ca="Community Access" ex1="Unlimited Private Project" ex2="Dedicated Phone Support" ex3="Free Subdomain" ex4="Monthly Status Reports" />
//     <Profile name="$49/month" title="PRO" users="Unlimited Users" storage="50GB" pp="Unlimited Public Projects" ca="Community Access" ex1="Unlimited Private Project" ex2="Dedicated Phone Support" ex3="Free Subdomain" ex4="Monthly Status Reports" />
//     </>
//   );
// }

// export default App;

// function Profile(props) {
//   function profileConfig() {
    
//     // return props.name;
//   }
//   return (
//     <div className = "profile-container">
//       <p className="types"><b>{props.title}</b></p>
//       <h1>{props.name}</h1>
//       <p>-----------------------------------------------------</p>

//       <p>✔ {props.users}</p>
//       <p>✔ {props.storage} Storage</p>
//       <p>✔ {props.pp}</p>
//       <p>✔ {props.ca}</p>
//       <p>❌{props.ex1}</p>
//       <p>❌{props.ex2}</p>
//       <p>❌{props.ex3}</p>
//       <p>❌{props.ex4}</p>
//       <button>Button</button>   
//     </div>
//   );
// }



//===================================================
import "./App.css";


function App() {
  const free = {
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
  }
  const plus = {
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
  }
  const pro = {
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
  }
 
  return (
    <>
    <Profile model={free} />
    <Profile model={plus} />
    <Profile model={pro} />
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