import Heading from "../../components/Shared/Heading";


const Header = ({ room }) => {
     return (
          <div>
               <Heading title={room?.title} subtitle={room?.location} ></Heading>
               <div className='w-full md:h-[60vh] overflow-hidden my-4 rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl'>
                    <img
                         className='object-cover w-full'
                         src={room?.image}
                         alt='header image'
                    />
               </div>
          </div>
     );
};

export default Header;