import styles from '../registration/Registration.module.css'
import { useState } from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
const Registration = (props) => {
    const [calendarVisibility1, SetVisibility1] = useState(false);
    const [calendarVisibility2, SetVisibility2] = useState(false);
    const [date, SetData] = useState(new Date());

    return (
        <>
            <label className={styles.main_title}>Форма размещения заявки</label>
            <div className={styles.main_container}>
                <div className={styles.first_container}>
                    <div className={styles.first_container1}>
                        <div className={styles.first_container1_1}>
                            <label className={styles.appointment}>Наименование должности</label>
                            <input className={styles.appointment_input} type="text" />
                        </div>

                        <div className={styles.first_container1_2}>
                            <label className={styles.naming_vacation}>Наименование вакансии*</label>
                            <input className={styles.naming_vacation_input} type="text" />
                        </div>

                        <div className={styles.first_container1_3}>
                            <label className={styles.department}>Отдел*</label>
                            <input className={styles.department_input} type="text" />
                        </div>
                    </div>



                    {/* на завтра */}


                    <div className={styles.first_container2}>
                        <div className={styles.calendar_input1}>
                            <label className={styles.label_calendar1}>Дата открытия*</label>
                            <div className={styles.calendar1}>
                                <DatePicker
                                    showIcon
                                    calendarIconClassName={styles.icon}
                                    selected={date}
                                    onChange={(new_date) => { SetData(new_date) }}
                                />
                            </div>
                        </div>
                        <div className={styles.calendar_input2}>
                            <label className={styles.label_calendar2}>
                                Плановая дата закрытия*</label>
                            <div className={styles.calendar2}>
                                <DatePicker
                                    showIcon
                                    calendarIconClassName={styles.icon}
                                    selected={date}
                                    onChange={(new_date) => { SetData(new_date) }}
                                />
                            </div>
                        </div>
                    </div>


                    <div className={styles.first_container3}>
                        <div className={styles.first_container3_1}>
                            <label className={styles.gender_label}>Пол*</label>
                            <div className={styles.gender_container}>
                                <div className={styles.gender_container1_1}>
                                    <button className={styles.gender_button_1}></button>
                                    <label className={styles.gender_label_1}>Мужской</label>
                                </div>
                                <div className={styles.gender_container1_2}>
                                    <button className={styles.gender_button_2}></button>
                                    <label className={styles.gender_label_2}>Женский</label>
                                </div>


                            </div>
                        </div>
                        <div className={styles.first_container3_2}>
                            <label className={styles.education_label}>Образование*</label>
                            <select name="education"
                                className={styles.education_select}>
                                <option className={styles.option1} value="High">Высшее</option>
                                <option className={styles.option2} value="Middle">Среднее</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className={styles.second_container}>

                </div>
                <div className={styles.third_container}>

                </div>
            </div>

        </>
    )

}

export default Registration;