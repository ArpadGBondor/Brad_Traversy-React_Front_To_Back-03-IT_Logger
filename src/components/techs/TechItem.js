import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech, deleteTech }) => {
    const onDelete = () => {
        deleteTech(tech.id);
        window.M.toast({ text: `Tech #${tech.id} deleted.` });
    };

    return (
        <li className="collection-item">
            <div>
                {tech.firstname} {tech.lastname}
                <a href="#!" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
