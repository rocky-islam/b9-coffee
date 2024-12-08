import React from "react";

const SingleCoffee = ({ item }) => {
  const { name, chef, taste, photoUrl } = item;
  console.log(item);
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
              <button className="btn join-item bg-[#D2B48C] mb-4 text-white">Button</button>
              <button className="btn join-item mb-4 bg-[#3C393B] text-white">Button</button>
              <button className="btn join-item bg-[#EA4744] text-white">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;
