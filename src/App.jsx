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
  let SUMM = function (nums) {
    let summ = 0;
    for (let num of nums) {
      summ += num
    }
    return summ
  };
  let f = [1, 2, 3, 4, 5];
  let a = SUMM(f);
  console.log(a);

  let g = [1, 3, -2, -1, 0];

  let equalOrmore = (mas) => {
    let count = 0;
    for (let i of mas)
      if (i >= 0)
        count++
    return count

  }

  let fibo = (x) => {
    // let count = 0;
    if (x > 1)
      return fibo(x - 1) + fibo(x - 2)
    else if (x === 1)
      return 1
    else if (x === 0)
      return 0
  }


  let str_mas = ['mas', 'data', 'fрррррр', 'gg'];
  let sort = (mas) => {
    for (let i = mas.length - 1; i > -1; i--) {
      if (mas[i].length < mas[i - 1].length) {
        let a = mas[i];
        mas[i] = mas[i - 1];
        mas[i - 1] = a;
      }
      return mas;
    }
  }
  console.log('sort:' + sort(str_mas));
  // console.log(str_mas[0].length)
  console.log('fibo(4)' + fibo(4));
  console.log('count:' + equalOrmore(g))


  let str = 'hola';
  // let str1 = string

  useEffect(() => {
    if (location.pathname.length === 1)
      navigate('/list_bids')
    if (!data) {
      // instance1.get().then(response => {
      //   console.log(response);
      //   AddData(response.data)
      // });
    }



  })
  let ok = { name: 'algo' }
  // console.log(data);
  return (
    <>
      {/* <TopBar /> */}

      {/* {console.log(server)} */}



      {(data) && <button onClick={() => {

        instance.post('/bids', { name: 'Roman', age: '23' }).then(response => console.log(response))

      }}>Add_New_Data</button>}


      <button onClick={() => {
        let a = SUMM(f)
      }}>SUMM</button>

      {/* <Routes>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/list_bids' element={<List_bid />}></Route>
      </Routes> */}
    </>
  )
}

export default App
