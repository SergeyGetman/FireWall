import React, { useState } from 'react';
import { Box } from '@mui/material';
import { CircularStyle, FormCards } from './Kanban.style';

const Kanban = () => {
  const cardMockDataKanban = [
    { id: 1, order: 3, text: "TO DO" },
    { id: 2, order: 1, text: "IN PROGRESS" },
    { id: 3, order: 2, text: "TESTING" },
    { id: 4, order: 4, text: "DONE" },
  ];


  const [cards] = useState(cardMockDataKanban);

  return (
    <>
      <CircularStyle >

      {cards.map((el) => (
        <Box key={el.id}>
          <FormCards>
          <div>Order: {el.order}</div>
          <div>Text: {el.text}</div>
          </FormCards>
        </Box>
      ))}
      </CircularStyle>
    </>
  );
};

export default Kanban;