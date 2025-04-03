import { use, useState } from 'react'
import TopBar from './menu/TopBar'
import Registration from './registration/Registration'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import List_bid from './List_bid/List_bid'
import { API } from './API/API'
import fs from 'fs'
import { instance } from './API/API'




function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.length === 1)
      navigate('/bids')
  })
  return (
    <>
      <TopBar />
      <Routes>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/bids' element={<List_bid />}></Route>
        <Route path='/change_bid' element={<Registration />}></Route>

      </Routes>
    </>
  )
}

export default App
