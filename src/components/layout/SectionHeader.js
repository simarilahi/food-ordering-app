export default function SectionHeader({subHeader,mainHeader}){
    return(
        <div className="text-center">
            <h3 className="uppercase text-gray-500 font-semibold leading-3">
                {subHeader}
            </h3>
            <h2 className="text-primary font-bold text-4xl italic">
                {mainHeader}
            </h2>
        </div>
    );
}