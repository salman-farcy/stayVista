
import { useLoaderData, } from 'react-router-dom';
import Container from '../../components/Shared/Container';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import RoomInfo from './RoomInfo';
import RoomReservation from './RoomReservation';

const RoomDtails = () => {
     const room = useLoaderData()

     return (
          <Container>
               <Helmet>
                    <title>{room?.title}</title>
               </Helmet>

               <div className="max-w-screen-xl mx-auto">
                    <div className="">
                         {/* Header */}
                         <Header room={room} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-8  lg:gap-8 py-4 md:py-8">
                         {/* Room info */}
                         <RoomInfo room={room} />

                         {/* RoomReservation / Chalander */}
                         <RoomReservation room={room} />
                    </div>

               </div>
          </Container>
     );
};

export default RoomDtails;