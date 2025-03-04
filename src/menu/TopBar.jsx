import styles from './TopBar.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const [button1, isSelected1] = useState(false);
  const [button2, isSelected2] = useState(false);
  const navigate = useNavigate();

  const change_color = (button) => {
    switch (button) {
      case (1):
        {
          isSelected2(false);
          isSelected1(true);
          break;
        }
      case (2):
        {
          isSelected1(false);
          isSelected2(true);
          break;
        }
      default:
        {
          break;

        }
    }
  }

  return (
    <>
      <div className={styles.AllBar}>
        <div className={styles.ellipse}></div>
        <div className={styles.buttons}>

          {(!button1) && (<div
            className={styles.button1}>
            <label
              className={styles.label1}
              onClick={() => {
                change_color(1);
                navigate('/list_bids')
              }}>Все заявки</label>
          </div>)}

          {(button1) && (<div
            className={styles.button1_pressed}>
            <label
              className={styles.label1}
              onClick={() => {
                change_color(1);
                navigate('/list_bids');
              }}>Все заявки</label>
          </div>)}

          {(!button2) && (<div
            className={styles.button2}>
            <label
              className={styles.label2}
              onClick={() => {
                change_color(2);
                navigate('./registration');
              }}>Создание заявки</label>
          </div>)}

          {(button2) && (<div
            className={styles.button2_pressed}>
            <label
              className={styles.label2}
              onClick={() => {
                change_color(2);
                navigate('./registration');
              }}>Создание заявки</label>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default TopBar
