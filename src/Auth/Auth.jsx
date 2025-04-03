import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
let Auth = (Component) => {
  let New_component = (props) => {
    const navigate = useNavigate()
    const [isUpdate, SetUpdate] = useState(false)
    const [isAuth, SetAuth] = useState(false)

    useEffect(() => {
      if (!isUpdate) {
      }
    })
    return
    (
      <>

      </>
    )
  }
  return New_component
}

export default Auth