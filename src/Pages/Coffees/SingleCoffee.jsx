import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const SingleCoffee = ({ item, viewCoffee, setViewCoffee}) => {
  const {_id, name, chef, taste, photoUrl } = item;
//   console.log(item);

  

  const handleDelete = id =>{
    console.log(id)

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          fetch(`http://localhost:5000/coffees/${id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });

                  const remaining = viewCoffee.filter(cof => cof._id !== id);
                  setViewCoffee(remaining)
            }
          })
        
        }
      });

      
  }


  return (
    <div>
      <div className="card card-side bg-[#F5F4F1] shadow-xl">
        <figure>
          <img src={photoUrl} alt="photo" className="w-[195px] h-[240px]" />
        </figure>
        <div className="card-body flex justify-around flex-row items-center">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{chef}</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions">
            <div className="join join-vertical text-white">
                <Link to={`/viewCoffee/${_id}`} className="btn join-item bg-[#D2B48C] mb-4 text-white">
                <button >View</button>
                </Link>
              <Link to={`/update/${_id}`} className="btn join-item mb-4 bg-[#3C393B] text-white"><button >Edit</button></Link>
              <button onClick={() => handleDelete(_id)} className="btn join-item bg-[#EA4744] text-white">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;
