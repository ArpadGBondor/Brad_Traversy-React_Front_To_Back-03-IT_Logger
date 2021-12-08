import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteLog, setCurrentLog } from '../../actions/logActions';

const LogItem = ({ log, deleteLog, setCurrentLog }) => {
    const onDelete = () => {
        deleteLog(log.id);
        window.M.toast({ text: `Log #${log.id} deleted.` });
    };

    return (
        <li className="collection-item">
            <div>
                <a
                    href="#edit-log-modal"
                    onClick={() => setCurrentLog(log)}
                    className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
                >
                    {log.message}
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span> last updated by{' '}
                    <span className="black-text">{log.tech}</span> on{' '}
                    <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
                </span>
                <a href="#!" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrentLog: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrentLog })(LogItem);