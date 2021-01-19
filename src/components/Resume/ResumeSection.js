import styled from 'styled-components';

const ResumeSection = styled.div(({
  theme
}) => ({
  marginBottom: '3em',
  '>div': {
    borderBottom: `1px dashed ${theme.dividerColor}`,
  },
  'h3': {
    color: theme.emphasisTextColor,
    marginBottom: '0'
  },
  'h4': {
    color: theme.emphasisLabelColor,
    textTransform: 'uppercase'
  },
  'p': {
    whiteSpace: 'pre-line',
    marginTop: '0.5em'
  },
  'span': {
    fontSize: '0.9em',
    color: theme.lightTextColor
  }
}));

ResumeSection.displayName = "ResumeSection";

export default ResumeSection;