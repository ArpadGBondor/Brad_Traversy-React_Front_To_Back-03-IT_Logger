import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logActions';
import TechSelectInput from '../techs/TechSelectInput';

const EditLogModal = ({ current, updateLog }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    }, [current]);

    useEffect(() => {
        window.M.updateTextFields();
    }, [message]);

    const onSubmit = () => {
        if (message === '' || tech === '') {
            window.M.toast({ text: 'Please enter a message and select a tech' });
        } else {
            const updLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date(),
            };

            console.log(updLog);
            updateLog(updLog);

            window.M.toast({ text: `Log #${current.id} has been updated by ${tech}` });

            // Clear Fields
            setMessage('');
            setAttention(false);
            setTech('');
        }
    };

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <TechSelectInput tech={tech} setTech={setTech} />
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={(e) => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light blue btn">
                    Enter
                </a>
            </div>
        </div>
    );
};

const modalStyle = {
    width: '75%',
    height: '75%',
};

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
