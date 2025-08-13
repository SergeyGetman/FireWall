import React, { useCallback, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { findSearch } from '../store/globalSlice';

const SearchField = () => {
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);

  const arraySort = [1, 4, 3, 2, 2, 6, 8, 0, 2, 3, 1, -1];

  function sortArr(arr) {
    let newArr = [];
    let min = Infinity;
    let minNumb = Math.min.apply(null, arr);
    let manNumb = Math.max.apply(null, arr);
    console.log('minNumb ', minNumb, ' + ', ' manNumb ', manNumb);
    for (let i = 0; i < arr.length; i++) {
      const curentElement = arr[i];
      console.log('this is index', i);
      if (manNumb > curentElement) {
        newArr.push(curentElement);
      }
    }
    console.log('this is newArr', newArr);
    return newArr;
  }

  sortArr(arraySort);

  const handleSearchShow = useCallback(() => {
    setShowInput(true);
  }, [showInput]);

  return (
    <>
      <Box>
        <SearchIcon onClick={handleSearchShow} />
        {showInput && (
          <TextField
            onChange={(e: any) => {
              dispatch(findSearch(e.target.value));
            }}
          />
        )}
      </Box>
    </>
  );
};

export default SearchField;
