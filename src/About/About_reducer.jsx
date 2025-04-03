import { API } from "../API/API";
const SET_USERS = 'SET_USERS';
const GET_USERS = 'GET_USERS';

let initial_state =
{
    users: [
        {

        }
    ]
}

let About_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_USERS:
            return state;
        default:
            return state;

    }

}



export default About_reducer;