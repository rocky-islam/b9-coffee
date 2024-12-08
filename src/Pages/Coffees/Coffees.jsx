import { Link } from 'react-router';
import bgPic from '../../assets/images/more/1.png'
import { useEffect, useState } from 'react';
import SingleCoffee from './SingleCoffee';

const Coffees = () => {
    const [coffee, setCoffee] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:5000/coffees`)
        .then(res => res.json())
        .then(data =>{
            setCoffee(data)
        })
    },[])


    return (
        <div style={{ backgroundImage: `url(${bgPic})`}} className='bg-cover'>
            <div>
                <div className="text-center my-16">
                    <p className="font-[Raleway] text-xl text-[#1B1A1A]">--- Sip & Savor ---</p>
                    <h1 className='font-[Rancho] text-[54px] text-[#331A15]'>Our Popular Products</h1>
                    <Link to={'/addcoffee'} className='bg-[#E3B577] text-white font-[Rancho] text-2xl px-2 py-1'><button>Add Coffee</button></Link>
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-6 mx-20'>
                        {
                            coffee.map(item =><SingleCoffee
                            key={item._id}
                            item={item}
                            >
                            </SingleCoffee>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffees;