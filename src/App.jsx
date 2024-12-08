import Coffees from "./Pages/Coffees/Coffees";
import NavBar from "./Pages/components/Nav/NavBar";
import Header from "./Pages/Header/Header";
import Icons from "./Pages/Icons/Icons";

function App() {
  return (
    <>
      <div >
        <NavBar></NavBar>
        <Header></Header>
        <Icons></Icons>
        <Coffees></Coffees>
      </div>
    </>
  );
}

export default App;
