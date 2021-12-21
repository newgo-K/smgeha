import { withStyles } from '@material-ui/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import palette from 'lib/styles/palette';

export const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {},
})(MuiAccordion);

export const AccordionSummary = withStyles({
  root: {
    borderTop: `1px solid ${palette.grey[2]}`,
    borderBottom: `1px solid ${palette.grey[2]}`,
    marginBottom: -1,
    padding: '0 5px',
    minHeight: 35,
    '&$expanded': {
      minHeight: 35,
    },
  },
  content: {
    margin: 0,
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {
    margin: 0,
  },

  expandIcon: {
    marginRight: 0,
    color: 'transparent',
  },
})(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme) => ({
  root: {
    height: 26,
    padding: 3,
    marginLeft: 13,
  },
}))(MuiAccordionDetails);
