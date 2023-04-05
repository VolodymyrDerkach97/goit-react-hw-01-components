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
