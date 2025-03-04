import { use, useState } from 'react'
import TopBar from './menu/TopBar'
import Registration from './registration/Registration'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import List_bid from './List_bid/List_bid'
import { instance, instance1 } from './API/API';
import fs from 'fs'
// import server from '../../server'
// import { update_data } from '../server/server_js'



function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, AddData] = useState(undefined)

  useEffect(() => {
    if (location.pathname.length === 1)
      navigate('/list_bids')
    if (!data) {
      instance1.get().then(response => {
        console.log(response);
        AddData(response.data)
      });
    }



  })
  // console.log(data);
  return (
    <>
      {/* <TopBar /> */}

      {/* {console.log(server)} */}



      {(data) && <button onClick={() => {

        instance.post('/bids', { name: 'Roman', age: '23' }).then(response => console.log(response))

      }}>Add_New_Data</button>}

      {/* <Routes>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/list_bids' element={<List_bid />}></Route>
      </Routes> */}
    </>
  )
}

export default App
