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

let List_bid_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_USERS:
            {
                return { ...state, users: action.NewState }
            }
        default:
            return state;
    }
}
export let GetUsersCR = (page, count) => {
    API.GetBids(page, count).then(res => {
        return res.data
    })
}
export let SetUsersCR = (NewState) => { return { NewState, type: SET_USERS } }

export let AddBids = (Gender) => {

}

export default List_bid_reducer;