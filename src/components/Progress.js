import { PropTypes } from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';

const ProgressBar = ({ percentage }) => (
  <div className="progress">
    <div className="chart">
      <CircularProgressbar value={percentage} />
    </div>
    <div className="progressValue">
      <h3>
        {percentage}
        %
      </h3>
      <p>Completed</p>
    </div>
  </div>
);
ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};
export default ProgressBar;
