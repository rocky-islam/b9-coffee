import iconImg from '../../assets/images/more/10.png'
import icon1 from '../../assets/images/icons/1.png'
import icon2 from '../../assets/images/icons/2.png'
import icon3 from '../../assets/images/icons/3.png'
import icon4 from '../../assets/images/icons/4.png'

const Icons = () => {
    return (
        <div style={{ backgroundImage: `url(${iconImg})`}} className='h-[300px]'>
            <div className='flex justify-center items-center h-[300px] w-full gap-x-10'>
                <div className='w-[300px]'>
                    <img src={icon1} alt="" className='w-[70] h-[70]'/>
                    <h1 className='font-[Rancho] text-[35px]'>Awesome Aroma</h1>
                    <p className='font-[Raleway] text-base'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='w-[300px]'>
                    <img src={icon2} alt="" className='w-[70] h-[70]'/>
                    <h1 className='font-[Rancho] text-[35px]'>High Quality</h1>
                    <p className='font-[Raleway] text-base'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='w-[300px]'>
                    <img src={icon3} alt="" className='w-[70] h-[70]'/>
                    <h1 className='font-[Rancho] text-[35px]'>Pure Grades</h1>
                    <p className='font-[Raleway] text-base'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='w-[300px]'>
                    <img src={icon4} alt="" className='w-[70] h-[70]'/>
                    <h1 className='font-[Rancho] text-[35px]'>Proper Roasting</h1>
                    <p className='font-[Raleway] text-base'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
                
            </div>
        </div>
    );
};

export default Icons;