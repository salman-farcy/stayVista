
import { Helmet } from "react-helmet-async"
import Categories from "../../components/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"


const Home = () => {
  
  return (
    <div>
      <Helmet>
      <title>StayVista | Home</title>
      </Helmet>

      {/* Categories Section */}
      <Categories />

      {/* Rooms Section */}
      <Rooms />
    </div>
  )
}

export default Home
