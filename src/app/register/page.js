import Image from "next/image";

export default function RegisterPage(){
    return(
        <section>
            
            <h1 className="text-center text-primary font-semibold text-2xl mt-8 mb-4">
                Register
            </h1>

            <form className="block max-w-xs mx-auto">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit" >Register</button>
                <div className="text-center text-gray-500 my-4">
                    or login with provider
                </div>
                <button className="flex gap-4 justify-center">
                    <Image src={'/google.png'} alt={''} width={24} height={24} />
                    Login with google
                </button>
            </form>


        </section>
    );
}