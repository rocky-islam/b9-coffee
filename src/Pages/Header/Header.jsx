import headerImg from '../../assets/images/more/3.png'

const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${headerImg})`}} className='h-[800px] bg-center bg-cover bg-no-repeat relative'>
            <div className='text-white w-[724px] absolute right-[307px] top-[288px]'>
                <div>
                <h1 className='text-[55px] font-[Rancho]'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='font-[Raleway] mt-4'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='font-[Rancho] bg-[#E3B577] w-[130px] h-[48px] mt-8'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Header;