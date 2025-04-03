import { connect } from "react-redux"
import styles from './List_bid.module.css'
import { API } from "../API/API"
import { useEffect, useState, useRef } from "react"
import { GetUsersCR, SetUsersCR } from "./List_bid_reducer"
import { useNavigate } from "react-router-dom"
const List_bid = (props) => {
    const main_ref = useRef(true);
    const [isUpdate, setUpdate] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        if (main_ref.current) {
            API.GetBids().then(res => {
                props.SetUsersCR(res.data.bids);
                setUpdate(true);
            })
            main_ref.current = false;
        }

    })

    const change_data = (id) => {

    }

    return (
        <>
            <label className={styles.title}>Заявки на размещение вакансий</label>
            <div className={styles.main_container}>
                {
                    (isUpdate && (
                        props.Users.map(item => {
                            console.log(item)
                            return <div key={item.id} className={styles.container}>
                                <button onClick={() => {
                                    navigate(`/change_bid`, { state: { item } });




                                }
                                } className={styles.change_bid}>Изменить заявку</button>
                                <label className={styles.id}>id:{item.id}</label>
                                <label className={styles.appointment}>appointment:{item.appointment}</label>
                                <label className={styles.naming_vacation}>naming_vacation:{item.naming_vacation}</label>
                                <label className={styles.department}>department:{item.department}</label>
                                <label className={styles.date_open}>date_open:{item.date_open}</label>
                                <label className={styles.date_closed}>date_closed:{item.date_closed}</label>
                                <label className={styles.gender}>gender:{item.gender}</label>
                                <label className={styles.education}>education:{item.education}</label>

                            </div>
                        })
                    ))




                }
            </div >

        </>
    )
}
let mapStateToProps = (state) => { return { Users: state.bids.users } }
export default connect(mapStateToProps, { GetUsersCR, SetUsersCR })(List_bid)