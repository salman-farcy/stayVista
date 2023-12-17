/* eslint-disable no-undef */
import { DateRange } from 'react-date-range'

const Calender = ({ value, handleSelect }) => {
  console.log(value);
  
  
  return (
    <DateRange
      rangeColors={['#F43F5E']}
      ranges={[value]}
      direction='vertical'
      showDateDisplay={false}
      
    />
    
  )
}

export default Calender