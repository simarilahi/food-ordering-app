import Image from 'next/image';
import Right from '../icons/Right';


export default function Hero(){
    return(
        <section className='hero'  >
            <div className='pt-4 pb-0'>
                <h1 className='text-4xl font-semibold leading-12'>
                    Where Every Meal Feels Like Home&nbsp;  
                    <span className='text-primary'>
                         Meal
                    </span>
                </h1>
                <p className='my-6 text-gray-500 text-sm'>
                    Bringing you comfort food with a twist. 
                    Whether you're dining in or on the go, 
                    our dishes are made to warm your heart
                    and fill your soul.
                </p>
                <div className='flex gap-4 text-sm'>
                    <button 
                        className='bg-primary text-white px-4 py-2 rounded-full 
                        flex gap-2 uppercase  items-center'>
                            Order now
                            <Right></Right>
                    </button>
                    <button className='flex gap-2 py-2 text-gray-600 font-semibold'>
                        Learn more
                        <Right/>
                    </button>
                </div>
            </div>
            
            <div className='relative  items-center '>
                <Image src={'/food2.png'}  layout={'fill'} objectFit={'contain'} alt={'foods image'}/>
            </div>
        </section>
    );
}