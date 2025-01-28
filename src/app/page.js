import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeManu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";



export default function Home() {
  return (
    <>
     <Header/>
     <Hero></Hero>
     <HomeManu></HomeManu>
     <section className='my-16 text-center'>

        <SectionHeader 
          subHeader={'Our story'}
          mainHeader={'About us'} 
        >
        </SectionHeader>
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis eius, at ipsum voluptas laboriosam reprehenderit 
            quae nulla vero eligendi earum nesciunt repellendus incidunt
            temporibus distinctio impedit repudiandae voluptate iure sint.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis eius, at ipsum voluptas laboriosam reprehenderit 
            quae nulla vero eligendi earum nesciunt repellendus incidunt
            temporibus distinctio impedit repudiandae voluptate iure sint.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis eius.
          </p>

      

        </div>

     </section>
     <section className="text-center my-8">
      <SectionHeader
        subHeader={"Don't hesidate"}
        mainHeader={'Conduct us'}     
      >
      </SectionHeader>
      <div className="mt-8 underline text-gray-500">
        <a className="text-4xl" href="tel:+94774008822">
          +94 77 400 8822
        </a>
      </div>      
     </section>
     <footer className="p-8 text-gray-500 border-t text-center mt-8">
      &copy; 2025 All rights reserved.
     </footer>
    </>
  )
}
