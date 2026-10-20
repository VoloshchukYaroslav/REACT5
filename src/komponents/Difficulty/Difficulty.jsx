import PropTypes from "prop-types";
import { Box, Title, Row, Pill } from "./Difficulty.style";

const LABELS = [
  { value: 0, text: "Easy" },
  { value: 1, text: "Medium" },
  { value: 3, text: "Hard" },
];

const Difficulty = ({ level }) => (
  <Box>
    <Title>Difficulty</Title>
    <Row>
      {LABELS.map(({ value, text }) => (
        <Pill key={value} $active={level === value}>
          {text}
        </Pill>
      ))}
    </Row>
  </Box>
);

Difficulty.propTypes = {
  level: PropTypes.oneOf([0, 1, 3]).isRequired,
};

export default Difficulty;