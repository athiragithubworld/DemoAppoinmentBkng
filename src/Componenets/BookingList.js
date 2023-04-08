import react , {useContext} from "react";
import classes from './BookingList.module.css'
import BookingContext from "./store/BookingContext";

const BookingList =(props) =>{

  const Bookingcntxt = useContext(BookingContext)
  console.log("cntxt",BookingContext)
  return(
    
    <form  onClick={props.onClose} className={classes.BookingForm}>
      <ul>
        {Bookingcntxt.list.map((item) =>{
          return(<li style={{listStyle:"none"}} key={item.bookingId}>
            {item.bookingId} - {item.name} -{item.phno}
          </li>)

        })}
      </ul>
      <div>
      <button className={classes.button}  >Close</button>
      </div>
      
    </form>
    
    
  )

}

export default BookingList;