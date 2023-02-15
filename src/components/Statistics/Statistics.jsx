import PropTypes from 'prop-types';

export const Statistics = ({ title = 0, stats }) => {
  return (
    <>
      <div>{title.length > 0 && <h2>{title}</h2>}</div>
      <ul className="stat-list">
        {stats.map(({ label, percentage, id }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
