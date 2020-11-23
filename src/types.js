import PropTypes from 'prop-types';

export const propTypesVariables = PropTypes.shape({
    vars: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
            PropTypes.string,
        ]),
    ).isRequired,
    preVal: PropTypes.string,
    sepVal: PropTypes.string,
    sufVal: PropTypes.string,
    preVaR: PropTypes.string,
    sepVaR: PropTypes.string,
    sufVaR: PropTypes.string,
});
