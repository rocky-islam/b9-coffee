import NavBar from "../../components/Nav/NavBar";
import coverIng from "../../../assets/images/more/11.png";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;

        const coffee = {name, chef, supplier, taste, category, details, photoUrl}
        console.log(coffee)

        console.log(name)

        fetch(`http://localhost:5000/addcoffee`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    
                    icon: "success",
                    title: "Coffee added Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

  return (
    <div>
      <NavBar></NavBar>
      <div
        style={{ backgroundImage: `url(${coverIng})` }}
        className="bg-cover bg-center relative"
      >
        <Link to={'/'} className="absolute left-[260px] text-[#374151] font-[Rancho] text-3xl pt-[50px]"><button>← Back to home</button></Link>
        <div className="flex justify-center items-center">
        <div className="bg-[#F4F3F0] w-8/12 h-screen mt-12 p-14 py-2">
        
          <div>
          <div className="mt-12 text-center">
            <h1 className="text-5xl font-[Rancho]">Add New Coffee</h1>
            <p className="font-[Raleway] text-lg my-8">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <div>
            <form onSubmit={handleAddCoffee}>
              <div className="flex gap-2">
                <div className="w-1/2">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text font-[Raleway] text-xl">Name</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Coffee Name"
                    className="input input-bordered w-full"
                  />
                </label>
                </div>
                <div className="w-1/2">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text font-[Raleway] text-xl">Chef</span>
                  </div>
                  <input
                    type="text"
                    name="chef"
                    placeholder="Enter Coffee Chef"
                    className="input input-bordered w-full"
                  />
                </label>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text font-[Raleway] text-xl">Supplier</span>
                  </div>
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Enter Coffee Supplier"
                    className="input input-bordered w-full"
                  />
                </label>
                </div>
                <div className="w-1/2">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text font-[Raleway] text-xl">Taste</span>
                  </div>
                  <input
                    type="text"
                    name="taste"
                    placeholder="Enter Coffee Taste"
                    className="input input-bordered w-full"
                  />
                </label>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text font-[Raleway] text-xl">Category</span>
                  </div>
                  <input
                    type="text"
                    name="category"
                    placeholder="Enter Coffee Category"
                    className="input input-bordered w-full"
                  />
                </label>
                </div>
                <div className="w-1/2">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text font-[Raleway] text-xl">Details</span>
                  </div>
                  <input
                    type="text"
                    name="details"
                    placeholder="Enter Coffee Details"
                    className="input input-bordered w-full"
                  />
                </label>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-full">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text font-[Raleway] text-xl">Photo</span>
                  </div>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="Enter Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
                </div>
              </div>
              <button className="w-full btn bg-[#D2B48C] text-2xl font-[Rancho] text-[#331A15] stroke-orange-950 my-8">Add Coffee</button>
            </form>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
