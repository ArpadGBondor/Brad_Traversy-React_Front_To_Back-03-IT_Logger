import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR, SET_LOADING } from './types';

// Get techs from server
export const getTechs = () => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch('/techs');
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.message,
        });
    }
};

// Add a tech to server
export const addTech = (tech) => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch('/techs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tech),
        });
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.message,
        });
    }
};

// Delete tech from server
export const deleteTech = (id) => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch(`/techs/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

        dispatch({
            type: DELETE_TECH,
            payload: id,
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.message,
        });
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
