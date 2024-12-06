import navBgImg from '../../../assets/images/more/15.jpg'
import logo from '../../../assets/images/more/logo1.png'
// bg-[url('/img/hero-pattern.svg')]
const NavBar = () => {
    return (
        <div>
           <div style={{ backgroundImage: `url(${navBgImg})`}} className='h-[120px]'>
                <div className='flex justify-center items-center py-4'>
                    <div>
                        <img src={logo} alt=""  className='w-[75px]'/>
                    </div>
                    <div>
                        <h1 className="text-white text-6xl font-[Rancho]">Espresso Emporium</h1>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default NavBar;