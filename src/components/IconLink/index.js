import { styled } from '@material-ui/styles';

const IconLink = styled(`a`)({
  '&:hover': {
    opacity: '0.7'
  }
})

IconLink.displayName = "IconLink";

export default IconLink