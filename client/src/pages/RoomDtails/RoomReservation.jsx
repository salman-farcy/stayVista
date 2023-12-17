/* eslint-disable react/prop-types */

import { formatDistance } from 'date-fns';
import Button from '../../components/Button/Button';
import Calender from './Calender';
import { useState } from 'react';



const RoomReservation = ({ room }) => {

     const [value, setValue] = useState({
          startDate: new Date(room?.from),
          endDate: new Date(room?.to),
          key: 'selection',
     })

     // Price calculation
     const totalDays = parseInt(
          formatDistance(new Date(room?.to), 
                         new Date(room?.from)).split(' ')[0])
     
     // total price Calculation
     const totalPrice = totalDays * room?.price
     
     
     return (
          <div className='order-1 lg:order-2 col-span-3 '>
               <div className="rounded-xl border border-neutral-200  flex flex-col justify-center  ">
                    <div className="gap-1 p-4 flex items-center ">
                         <div className='font-bold md:text-xl lg:text-2xl xl:text-3xl'>
                              ${room?.price}
                         </div>
                         <div className="font-light text-neutral-600">
                              Night
                         </div>
                    </div>

                    <hr />
                    <div className="flex justify-center overflow-x-auto ">
                         <Calender value={value}></Calender>
                    </div>
                    <hr />
                    <div className="gap-1 p-4 flex items-center ">
                         <Button label={"Reserve"}></Button>
                    </div>
                    <hr />
                    <div className="gap-1 p-4 flex items-center justify-between font-semibold text-lg">
                         <div className=" text-neutral-600">
                              Total 
                         </div>
                         <div className=" md:text-xl lg:text-2xl xl:text-3xl">
                              ${totalPrice}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default RoomReservation;