import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";
import { getAllRooms } from "../../api/rooms";

const Rooms = () => {
     const [rooms, setRooms] = useState([]);
     const [params, setParams] = useSearchParams();
     const category = params.get('category');
     const [loading, setLoading] = useState(false)



     useEffect(() => {
          setLoading(true)
          getAllRooms()
                .then(data => {
                    if ( category ) {
                         const filtered = data.filter(room => room.category === category)
                         setRooms(filtered)
                    }
                    else setRooms(data)

                    setLoading(false)
               })
     }, [category]);

     if(loading) return <Loader></Loader>
     
     return (
          <Container>

               {
                    rooms && rooms.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 pt-6">
                         {
                              rooms.map(room =>
                                   <Card key={room._id} room={room}>
                                   </Card>)
                         }
                    </div>
                         : <div className="min-h-[calc(100vh-350px)]  flex items-center justify-center">
                              <Heading center={true} title="No rooms available in this Category" subtitle="please select other categories." />
                         </div>
               }

          </Container>
     );
};

export default Rooms;