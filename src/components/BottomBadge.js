import { styled } from '@material-ui/styles';

const BottomBadge = styled('div')(({
  theme
}) => ({
  position: 'fixed',
  bottom: '0',
  right: '10px',
  background: theme.color,
  borderRadius: '0.2em 0.2em 0 0',
  fontSize: '10px',
  '& a': {
    color: theme.backgroundColor,
    textDecoration: 'none',
    opacity: 0.6,
    padding: '0 1em',
    display: 'block',
    lineHeight: '2.5em'
  },
  '& a:hover': {
    opacity: 1,
  }
}));

export default BottomBadge