import { configureStore } from "@reduxjs/toolkit";
import Registration_reducer from "./registration/Registration_reducer";
import List_bid_reducer from "./List_bid/List_bid_reducer";
import About_reducer from "./About/About_reducer";

const Store = configureStore(
  {
    reducer:
    {
      registration: Registration_reducer,
      bids: List_bid_reducer,
      about: About_reducer
    }
  }
)


export default Store