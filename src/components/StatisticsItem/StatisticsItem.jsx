import PropTypes from 'prop-types';

import { StatsListItem } from './StatisticsItem.styled';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatsListItem>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatsListItem>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
