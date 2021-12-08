import React, { useEffect } from 'react';
import '@materializecss/materialize/dist/css/materialize.min.css';
import '@materializecss/materialize/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
    useEffect(() => {
        // Init Materialize JS
        window.M.AutoInit();
    }, []);

    return (
        <Provider store={store}>
            <SearchBar />
            <div className="container">
                <AddBtn />
                <AddLogModal />
                <EditLogModal />
                <AddTechModal />
                <TechListModal />
                <Logs />
            </div>
        </Provider>
    );
};

export default App;
