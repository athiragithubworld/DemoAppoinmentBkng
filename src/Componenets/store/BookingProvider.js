import React ,{useState} from "react";

import BookingContext from "./BookingContext";

const BookingProvider = (props) =>{

    const [bookingList,setBookingList] = useState([]);
    // console.log("books",bookingList);

    const addBookingToListHandler = (booking) =>{
        // console.log("xyz",booking)

        setBookingList([...bookingList,booking])
        // let bookingLists=[...booking];
        // let hasList=false;

        // if(hasList){
        //     setBookingList(bookingLists)
        // }
        // else{
        //     setBookingList((prevList) =>{
        //         return([...prevList,booking])
        //     })
        // }

    }

    const BookingContexts = {
        list:bookingList,
        totalBooking:0,
        addBooking:addBookingToListHandler

    }

    return (
        <BookingContext.Provider value={BookingContexts}>
            {props.children}
        </BookingContext.Provider>
    )
}

export  default BookingProvider;