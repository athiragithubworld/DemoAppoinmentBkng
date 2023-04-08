import React from "react";

const BookingContext = React.createContext({
    list:[],
    totalBooking:0,
    addBooking:(booking) =>{}
})

export default BookingContext;