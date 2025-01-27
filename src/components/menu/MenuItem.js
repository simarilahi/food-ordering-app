export default function MenuItem(){

    return(

    
        <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white
        transition-all hover:shadow-2xl hover:shadow-black/25'>
            <div className="text-center max-h-8">
                <img src='food3.png' alt='food' className="max-h-auto max-h-10 block mx-auto"/>
            </div>
            <h4 className='font-semibold text-xl my-2'>Fried Rice</h4>
            <p className='text-gray-500 text-sm'>
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Deserunt blanditiis, 
                unde assumenda facilis quos ea sint natus 
                dolorem optio accusantium molestiae ut ab rem.
                Ea quasi autem reprehenderit quam iste!
            </p>
            <button className='bg-primary text-white rounded-full px-4 py-2 mt-4'>
                Add to cart LKR.600.00
            </button>
        </div>
    

    );

}