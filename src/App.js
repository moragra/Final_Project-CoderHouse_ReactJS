import "./styles.css";
import NavBar from "../src/Components/NavBar";
import CartWidget from "../src/Components/CartWidget";
import ItemListContainer from "../src/Containers/ItemListContainer";

// function Greetings(){
//   const Name = "Chair";
//   const Cant = 1;
//   const Price = 100;
//   return (

//   );
// }

export default function App({ children }) {
  return (
    <div className="App">
      <NavBar>
        <CartWidget />
      </NavBar>
      <div>
        <ItemListContainer Name="Chair" Cant="1" Price="100" />
      </div>
    </div>
  );
}
