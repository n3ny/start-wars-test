import axios from 'axios';

export const GET_FILMS_START = 'GET_FILMS_START';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_FAILD = 'GET_FILMS_FAILD';
export const GET_FILMS_END = 'GET_FILMS_END';

/** Actions **/
export const startGetFilms = payload => ({
    type: GET_FILMS_START,
    ...payload
}) 

export const getFilms = () => async (dispatch, getState) => {
    try {
        const response = await axios.get('https://swapi.dev/api/films/');
        dispatch({
            type: GET_FILMS_SUCCESS,
            payload: response.data.results
        })  
    } catch (error) {
        console.log(error) //TODO: mandar un mensaje de error
    }
} 

export const faildGetFilms = payload => ({
    type: GET_FILMS_FAILD,
    ...payload
})

export const endGetFilms = payload => ({
    type: GET_FILMS_END,
    ...payload
})