import PropTypes from 'prop-types';
import { Container } from './Statstics.styled';
import { Title } from './Statstics.styled';
import { StatList } from './Statstics.styled';
import { Item } from './Statstics.styled';
import { Label } from './Statstics.styled';
import { Percentage } from './Statstics.styled';
import { getRandomHexColor } from 'components/getRandomHexColor';

export const Statistics = ({ title = 0, stats }) => {
  return (
    <Container>
      <Title>{title.length > 0 && <h2>{title}</h2>}</Title>
      <StatList>
        {stats.map(({ label, percentage, id }) => (
          <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Container>
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
