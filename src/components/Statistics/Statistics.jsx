import PropTypes from 'prop-types';
import {
  StatisticContainer,
  StatisticTitle,
  StatisticValue,
} from 'components/Statistics/Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <StatisticContainer>
      <StatisticTitle>
        Good:
        <StatisticValue>{good}</StatisticValue>
      </StatisticTitle>
      <StatisticTitle>
        Neutral:
        <StatisticValue>{neutral}</StatisticValue>
      </StatisticTitle>
      <StatisticTitle>
        Bad:
        <StatisticValue>{bad}</StatisticValue>
      </StatisticTitle>
      <StatisticTitle>
        Total:
        <StatisticValue>{total}</StatisticValue>
      </StatisticTitle>
      <StatisticTitle>
        Positive feedback:
        <StatisticValue>{positiveFeedback}%</StatisticValue>
      </StatisticTitle>
    </StatisticContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
