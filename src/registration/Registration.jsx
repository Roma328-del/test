import styles from '../registration/Registration.module.css'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import { useForm } from "react-hook-form"
import "react-datepicker/dist/react-datepicker.css";
import { API } from '../API/API';
import { useNavigate, useLocation } from 'react-router-dom';
const Registration = (props) => {
    const [calendarVisibility1, SetVisibility1] = useState(false);
    const [calendarVisibility2, SetVisibility2] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const [gender, SetGender] = useState(null);

    const [date_open, SetData_open] = useState(new Date());
    const [date_closed, SetData_closed] = useState(new Date());

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        API.AddBid(data['APPOINTMENT'], data['NAMING_VACATION'], data['DEPARTMENT'],
            date_open, date_closed, ref0.current.value, gender).then(res => console.log(res));
        navigate(`/bids`);
    }

    const ref0 = React.createRef();
    console.log(location.state)

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.main_title}>Форма размещения заявки</label>
                <div className={styles.main_container}>
                    <div className={styles.first_container}>
                        <div className={styles.first_container1}>
                            <div className={styles.first_container1_1}>
                                <label className={styles.appointment}>Наименование должности

                                </label>
                                <input defaultValue={location.state.item.appointment} {...register('APPOINTMENT', { required: true })} className={styles.appointment_input} type="text" />
                            </div>

                            <div className={styles.first_container1_2}>
                                <label className={styles.naming_vacation}>Наименование вакансии*</label>
                                <input defaultValue={location.state.item.naming_vacation} {...register('NAMING_VACATION', { required: true })} className={styles.naming_vacation_input} type="text" />
                            </div>

                            <div className={styles.first_container1_3}>
                                <label className={styles.department}>Отдел*</label>
                                <input defaultValue={location.state.item.department} {...register('DEPARTMENT', { required: true })} className={styles.department_input} type="text" />
                            </div>
                        </div>


                        <div className={styles.first_container2}>
                            <div className={styles.calendar_input1}>
                                <label className={styles.label_calendar1}>Дата открытия*</label>
                                <div className={styles.calendar1}>
                                    <DatePicker
                                        showIcon
                                        calendarIconClassName={styles.icon}
                                        selected={date_open}
                                        onChange={(new_date) => { SetData_open(new_date) }}
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
                                        selected={date_closed}
                                        onChange={(new_date) => { SetData_closed(new_date) }}
                                    />
                                </div>
                            </div>
                        </div>


                        <div className={styles.first_container3}>
                            <div className={styles.first_container3_1}>
                                <label className={styles.gender_label}>Пол*</label>
                                <div className={styles.gender_container}>
                                    <div className={styles.gender_container1_1}>
                                        {(gender === null || gender === 'Женский') && <button
                                            type="button"
                                            onClick={() => {
                                                SetGender('Мужской');
                                            }}
                                            className={styles.gender_button_1}>
                                        </button>}
                                        {
                                            (gender === 'Мужской') && <button
                                                type="buttcdscscaon"
                                                onClick={() => {
                                                    SetGender('Мужской');
                                                }}
                                                className={styles.gender_is_pressed1}>
                                            </button>
                                        }
                                        <label className={styles.gender_label_1}>Мужской</label>
                                    </div>
                                    <div className={styles.gender_container1_2}>
                                        {
                                            (gender === null || gender === 'Мужской') && <button
                                                type="button"
                                                onClick={() => {
                                                    SetGender('Женский')
                                                }}
                                                className={styles.gender_button_2}>
                                            </button>
                                        }
                                        {
                                            (gender === 'Женский') && <button
                                                type="button"
                                                onClick={() => {
                                                    SetGender('Женский')
                                                }}
                                                className={styles.gender_is_pressed2}>
                                            </button>
                                        }
                                        <label className={styles.gender_label_2}>Женский</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.first_container3_2}>
                                <label className={styles.education_label}>Образование*</label>
                                <select name="education"
                                    className={styles.education_select} ref={ref0} >
                                    <option className={styles.option1} value="Высшее">Высшее</option>
                                    <option className={styles.option2} value="Среднее">Среднее</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    {/* <button onSubmit={onSubmit}>SEND_DATA</button> */}

                    <input type="submit" value={'SEND'} />

                    <div className={styles.second_container}>

                    </div>
                    <div className={styles.third_container}>

                    </div>
                </div>
            </form>

        </>
    )

}

export default Registration;