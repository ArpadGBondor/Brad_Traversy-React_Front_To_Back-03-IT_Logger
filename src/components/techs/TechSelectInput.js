import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TechSelectInput = ({ tech, setTech, techState: { techs, loading } }) => {
    // Since getTechs() is already called in TechListModal, there is no need to call it again here.
    return (
        <div className="input-field">
            <select name="tech" value={tech} className="browser-default" onChange={(e) => setTech(e.target.value)}>
                <option value="" disabled>
                    {loading || techs === null
                        ? 'Techs loading...'
                        : techs.length === 0
                        ? 'No technicians to show...'
                        : 'Select Technician'}
                </option>
                {!loading &&
                    techs !== null &&
                    techs.map((tech, idx) => (
                        <option
                            key={idx}
                            value={`${tech.firstname} ${tech.lastname}`}
                        >{`${tech.firstname} ${tech.lastname}`}</option>
                    ))}
            </select>
        </div>
    );
};

TechSelectInput.propTypes = {
    tech: PropTypes.string.isRequired,
    setTech: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    techState: state.tech,
});

export default connect(mapStateToProps)(TechSelectInput);
