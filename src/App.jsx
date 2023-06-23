import "./App.module.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";
import Practise1 from "./components/Practise1";
import Tern from "./components/Tern";

function App() {
  let name = "Ashraf";

  let arr = [
    {
      name: "adil",
      age: 52,
    },
    {
      name: "neha2",
      age: 53,
    },
    {
      name: "priya",
      age: 15,
    },
    {
      name: "priya2",
      age: 5435,
    },
  ];

  let user = {
    email: "abcd@gmail.com",
  };

  return (
    <div className="main-app">
      {/* {arr.map((element) => (
        <Card obj = {element} email = {user.email} />
      ))} */}

      {/* <Practise1 data = {arr}/> */}
      {/* <Counter/> */}

      {/* <Counter1/> */}

      <Tern/>

    </div>
  );
}

export default App;
