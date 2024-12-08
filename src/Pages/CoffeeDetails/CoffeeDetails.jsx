import { useLoaderData } from "react-router";
import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, taste, photoUrl } = coffee;

  return (
    <div>
        <NavBar></NavBar>
      <div className="flex justify-center">
      <div className="card bg-base-100 w-96 shadow-xl ">
        <figure>
          <img
            src={photoUrl}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{chef}</p>
          <p>{taste}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CoffeeDetails;
