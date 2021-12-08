import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';

const AddTechModal = ({ tech: { loading }, addTech }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const onSubmit = () => {
        if (firstname === '' || lastname === '') {
            window.M.toast({ text: 'Please enter a message and tech' });
        } else {
            const newTech = {
                firstname,
                lastname,
            };

            addTech(newTech);

            window.M.toast({ text: `Tech added : ${firstname} ${lastname}` });

            // Clear Fields
            setFirstname('');
            setLastname('');
        }
    };

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <label htmlFor="firstName" className="active">
                            First name
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="lasttName"
                            id="lasttName"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <label htmlFor="lasttName" className="active">
                            Last name
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a
                    href="#!"
                    onClick={onSubmit}
                    className="modal-close waves-effect waves-light blue btn"
                    disabled={loading}
                >
                    {loading ? 'Techs loading' : 'Enter'}
                </a>
            </div>
        </div>
    );
};

AddTechModal.propTypes = {
    tech: PropTypes.object.isRequired,
    addTech: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    tech: state.tech,
});

export default connect(mapStateToProps, { addTech })(AddTechModal);
