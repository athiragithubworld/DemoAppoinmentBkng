import react , {useState} from "react";

import AppoinmentBooking from "./Componenets/AppoinmentBooking";
import BookingList from "./Componenets/BookingList";
import BookingProvider from "./Componenets/store/BookingProvider";

function App() {

const [openCart ,setOpenCart] = useState(false)

const clickOpenCart = () =>{
  setOpenCart(true)
}

const closeCart = () =>{
  setOpenCart(false)
}

  return (
    <BookingProvider>
      
      <AppoinmentBooking onClick={clickOpenCart}></AppoinmentBooking>
      {openCart && <BookingList onClose={closeCart}></BookingList>}
      
      
    </BookingProvider>
  );
}

export default App;
