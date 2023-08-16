import {Button} from "@/components/ui/button.tsx";

const Hero = () => {
    return (
        <div className='flex justify-center py-10 px-6 md:p-10 md:px-16'  >

        {/*    Content Container*/}
        <div className='bg-blue-100 max-w-7xl py-12 px-6 md:py-16 border-gray-300 border rounded-2xl space-y-10 text-center'>
            <h2 className='text-2xl md:text-5xl font-semibold'>MERN Authentication</h2>

            <p className='text-md md:text-xl flex-wrap'>This is a Authentication Application that stores a JWT in an HTTP-Only cookie. It also uses Redux Toolkit for State Management.</p>

            {/*Buttons Container*/}
            <div className='space-x-6 md:space-x-9'>
                <Button className='bg-blue-600 hover:bg-blue-800' variant='ghost' style={{color: '#F8F0E3'}}>Sign In</Button>
                <Button className='bg-neutral-500 hover:bg-neutral-600' variant='ghost' style={{color: '#F8F0E3'}}>Sign Up</Button>
            </div>
        </div>

        </div>
    );
};

export default Hero;