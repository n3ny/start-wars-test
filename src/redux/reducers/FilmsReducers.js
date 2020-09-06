import {
    GET_FILMS_SUCCESS,
    GET_FILMS_START,
    GET_FILMS_FAILD,
    GET_FILMS_END
} from '../actions/Films'

const initialState = {
    data: [],
    httpBussy: false,
    error: undefined,
    message: undefined
}

export default function getFilmsReducers(state = initialState, action) {
    switch (action.type) {
        case GET_FILMS_START:
            return {
                ...state,
                httpBussy: true
            }
            break;

        case GET_FILMS_SUCCESS:
            return {
                ...state,
                data: action.payload,
            }
            break;

        case GET_FILMS_FAILD:
            return {
                ...state,
                error: action.payload,
                message: action.payload.message
            }
            break;

        case GET_FILMS_END:
            return {
                ...state,
                httpBussy: false
            }
            break;

        default:
            return state;
            break;
    }
}