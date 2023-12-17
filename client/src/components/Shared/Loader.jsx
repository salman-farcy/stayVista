/* eslint-disable react/prop-types */
import { ScaleLoader } from 'react-spinners'

const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <ScaleLoader size={60} color='#F43F5E' />
      
    </div>
  )
}

export default Loader
