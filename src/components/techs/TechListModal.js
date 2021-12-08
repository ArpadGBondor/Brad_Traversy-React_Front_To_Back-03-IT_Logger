import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                {loading || techs === null ? (
                    <div>Loading...</div>
                ) : techs.length === 0 ? (
                    <div>No technicians to show...</div>
                ) : (
                    <ul className="collection">
                        {techs.map((tech, idx) => (
                            <TechItem key={idx} tech={tech} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
