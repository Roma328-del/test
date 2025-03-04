import { connect } from "react-redux"
import styles from './List_bid.module.css'
const List_bid = (props) => {

    return (
        <>
            <label className={styles.title}>Заявки на размещение вакансий</label>
            <div className={styles.main_container}>
                <div className={styles.container1}></div>
                <div className={styles.container2}></div>
                <div className={styles.container3}></div>
            </div>

        </>
    )
}
let mapStateToProps = (state) => { return state }
export default connect(mapStateToProps, {})(List_bid)