import {Button} from "@/components/ui/button.tsx";


const Header = () => {
    return (
        // Navbar Container
        <div className='bg-gray-800 p-3 md:p-4 lg:p-6 flex justify-between items-center'>
            {/*Logo Container*/}
            <div>
                <h1 className='text-xl  md:text-2xl lg:text-3xl' style={{color: '#F8F0E3'}}>MERN AUTH</h1>
            </div>

            {/*Buttons Container*/}
            <div className='flex space-x-4 md:space-x-6'>
                <Button className='bg-fuchsia-50 hover:bg-neutral-400' variant='ghost'>Sign Up</Button>
                <Button className='bg-fuchsia-50 hover:bg-neutral-400' variant='ghost'>Sign In</Button>
            </div>
        </div>
    );
};

export default Header;