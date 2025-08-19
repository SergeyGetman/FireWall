import { Box, styled, Typography } from '@mui/material';




export const CircularStyle = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: '1fr',
  gridColumnGap: '10px',
  gridRowGap: '10px',

  height: '100vh',
  width: '100%',
  margin: 0,
  padding: 0,
  marginTop: '5%',

  '& > *': {
    border: '3px solid blue',
  }
}));

export const FormCards = styled(Box)(() => ({
  display: "flex",
  justifyContent: 'space-between',
  borderRadius: '5px',
  backgroundColor: "grey",
  margin: '10px',
  marginTop: '10px',
  color: '#230c0c',
  fontSize: '25px',
  fontWeight:  700,
  cursor: 'pointer',



  border: '3px solid black',
  height: '200px',
  width: '300px',

  transition: '0.3s',
  '&:hover': {
    backgroundColor: '#f0f0f0',
    borderColor: 'red',
    transform: 'scale(1.05)',
  },

}));
