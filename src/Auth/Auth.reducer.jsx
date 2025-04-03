import { API } from "../API/API";
const CHECK_AUTH = 'CHECK_AUTH';
let initial_state =
{

}

const Auth_reducer = (state = initial_state, action)
{
    switch (action.type) {
        case CHECK_AUTH:
            {

                return state;
            }
        default:
            return state

    }
}