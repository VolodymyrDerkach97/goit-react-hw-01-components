import PropTypes from 'prop-types';

import StatisticsItem from '../StatisticsItem';
import { Section, StatsList } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2 className="title">{title}</h2>}

      <StatsList>
        {stats.map(d => {
          return (
            <StatisticsItem
              key={d.id}
              label={d.label}
              percentage={d.percentage}
            />
          );
        })}
      </StatsList>
    </Section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
