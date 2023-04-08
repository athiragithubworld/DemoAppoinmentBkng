import React, { Fragment, useContext, useState , useEffect} from "react";

import BookingContext from "./store/BookingContext";

const AppoinmentBooking = (props) => {

    const Bookingcontxt = useContext(BookingContext);

    // let totalbookings =0;
    // Bookingcontxt.list.forEach(item =>{
    //     totalbookings=totalbookings+parseInt(item.bookingId)
    // })

  


  const [bookingId, setBookingId] = useState("");
  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");

  const [bookingList ,setBookingList] = useState([]);

  
    // bookingList.forEach(item =>{
    //     totalbookings=totalbookings+parseInt()
    // })

    let totalbookings =0;
    if( bookingList){
      totalbookings=bookingList.length;
    }

  const bookingIdHandler =(event) =>{
    setBookingId(event.target.value);
}
const nameHandler =(event) =>{
    setName(event.target.value);;
}
const phnoHandler =(event) =>{
    setPhno(event.target.value);
}

  const submitBookingHandler = (event) => {
    event.preventDefault();
    
    
    // const bkngList = (setBookingList((prevList) =>{
    //     return ([...prevList ,{bookingId:bookingId,name:name,phno:phno}])
    // }))

    // let BkList =[]
   setBookingList ((prevList) =>{
       const BkList =[...prevList ,{bookingId:bookingId,name:name,phno:phno}]
        console.log("list1",BkList)
        // console.log("BooKlist",Bookingcontxt.addBooking(BkList))
        return BkList

        
    })

    setBookingId("");
    setName("");
    setPhno("");


  };

  useEffect(() => {
    
    Bookingcontxt.addBooking(bookingList)
    console.log("list2yyy",bookingList)

  }, [bookingList]);

  
  return (
    <>
      <form>
        <label>Booking No</label>
        <input
          type="number"
          className="bookingid"
          value={bookingId}
          onChange={bookingIdHandler}
        ></input>

        <label>Name</label>
        <input
          type="text"
          className="name"
          value={name}
          onChange={nameHandler}
        ></input>
        
        <label>Phone No</label>
        <input
          type="number"
          className="phno"
          value={phno}
          onChange={phnoHandler}
        ></input>

        <button type="submit" onClick={submitBookingHandler}>Submit Booking</button>
        
       
      </form>
      <button onClick={props.onClick}>
          <span>Booking List </span>
          <span> - {totalbookings} - </span>
        </button>
    </>
  );
};

export default AppoinmentBooking;
