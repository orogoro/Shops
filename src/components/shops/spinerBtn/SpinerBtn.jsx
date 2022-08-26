import PulseLoader from 'react-spinners/PulseLoader';
import PropTypes from 'prop-types';

function SpinerBtn({ color, size }) {
  return <PulseLoader color={color} size={size} />;
}

export default SpinerBtn;

SpinerBtn.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
