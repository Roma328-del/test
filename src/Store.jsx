import { configureStore } from "@reduxjs/toolkit";
import Registration_reducer from "./registration/Registration_reducer";

const Store = configureStore(
  {
    reducer:
    {
      registration: Registration_reducer
    }
  }
)


export default Store