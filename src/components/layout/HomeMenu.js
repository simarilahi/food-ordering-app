import Image from 'next/image';
import ManuIcon from '../icons/MenuIcon';
import MenuItem from '../menu/MenuItem';


export default function HomeManu() {
    return (
        <section className="">
            <div>
                <div className='flex items-center justify-center '>
                    <ManuIcon/>
                </div>
                {/* <div className='h-16 relative'>
                <Image src={'/food1.png'} layout={'fill'} objectFit={'contain'} alt={'Sri lankan food'} />
                </div> */}
            
                <div className="text-center">
                    <h3 className="uppercase text-gray-500 font-semibold leading-3">
                        Check out
                    </h3>
                    <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
    
        </section>
    );
}