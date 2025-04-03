import axios from "axios";
export let instance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: { 'Content-Type': 'application/json' }
})
export const API = {
    DeleteBid: (id) => {
        return instance.post('/delete_bid', { id })
    },
    AddBid: (appointment, naming_vacation, department,
        date_open, date_closed, education, gender) => {
        return instance.post('/create_new_bid', {
            appointment, naming_vacation, department,
            date_open, date_closed, education, gender
        })
    },
    GetBids: (page, count) => {
        return instance.get(`/bids`);
    },
    ChangeBid: (id, appointment, naming_vacation, deparment,
        data_open, data_closed, education, gender) => {
        return instance.post(`/change_data/${id}`, {
            appointment, naming_vacation, deparment,
            data_open, data_closed, education, gender
        })
    }
}