import {
    GET_LOGS,
    SET_LOADING,
    ADD_LOG,
    UPDATE_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    SEARCH_LOGS,
    LOGS_ERROR,
} from './types';

// Get logs from server
export const getLogs = () => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch('/logs');
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.message,
        });
    }
};

// Add a log to server
export const addLog = (log) => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch('/logs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(log),
        });
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.message,
        });
    }
};

// Update a log on server
export const updateLog = (log) => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(log),
        });
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.message,
        });
    }
};

// Delete log from server
export const deleteLog = (id) => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch(`/logs/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

        dispatch({
            type: DELETE_LOG,
            payload: id,
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.message,
        });
    }
};

// Set current log
export const setCurrentLog = (log) => {
    return {
        type: SET_CURRENT,
        payload: log,
    };
};

// Clear current log
export const clearCurrentLog = () => {
    return {
        type: CLEAR_CURRENT,
    };
};

// Search logs from server
export const searchLogs = (searchText) => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch(`/logs?q=${searchText}`);
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
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
