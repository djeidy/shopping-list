import { GET_ITEMS, DELETE_ITEMS, ADD_ITEM, ITEMS_LOADING } from './../actions/type';

const initialeState = {
    items: [], 
    loading: false
}

export default function(state = initialeState, action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state, 
                items: action.payload,
                loading: false
            }
        case DELETE_ITEMS:
            return{
                ...state,
                items: state.items.filter(item=> item._id !== action.payload)
            }
        case ADD_ITEM:
            return{
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

