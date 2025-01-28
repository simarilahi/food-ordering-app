import Image from 'next/image';
import ManuIcon from '../icons/MenuIcon';
import MenuItem from '../menu/MenuItem';
import SectionHeader from './SectionHeader';


export default function HomeManu() {
    return (
        <section >
            <div className='mb-8'>
                <div className='flex items-center justify-center '>
                    <ManuIcon/>
                </div>
                {/* <div className='h-16 relative'>
                <Image src={'/food1.png'} layout={'fill'} objectFit={'contain'} alt={'Sri lankan food'} />
                </div> */}

                
                <div className=''>
                    <SectionHeader subHeader={'CHECK OUT'} mainHeader={'Menu'}></SectionHeader>
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