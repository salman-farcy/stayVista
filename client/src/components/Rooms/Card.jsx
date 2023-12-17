/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"




const Card = ({ room }) => {
     // const {title, price, host, image, location} = room;
     return (

          <Link to={`/room/${room?._id}`} className='col-span-1 cursor-pointer group'>
               <div className='flex flex-col gap-2 w-full'>
                    <div className=' aspect-square w-full relative overflow-hidden rounded-lg'>
                         <img
                              src={room?.image}
                              alt='Room'
                              className='object-cover h-full  w-full group-hover:scale-110 transition'
                         />

                         <div className='absolute top-3 right-3'>
                              {/* <HeartButton /> */}
                         </div>
                    </div>

                    <div className='font-semibold text-lg'>{room?.location}</div>

                    {/* <div className='font-light text-neutral-500'>
                         5 nights . June 19 - 26
                    </div> */}

                    <div className='flex flex-row items-center gap-1'>
                         <div className='font-semibold'>${room?.price}</div>
                         <div className='font-light'>night</div>
                    </div>

               </div>
          </Link>
     )
}

export default Card