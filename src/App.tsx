import './Index.style';
import { HeaderAppStyle } from './Index.style';
import AddPage from './components/AddPage';

import { CustomButtonTextEnum } from './enam';
import { useDispatch, useSelector } from 'react-redux';
import { AccountPagesState } from './types';
import { ButtonElement } from './components/button/ButtonElement';
import { useNavigate } from 'react-router-dom';
import { addSteper } from './store/globalSlice';
import {useCallback, useState} from 'react';
import { useAppDispatch } from './hooks/redux';
import Kanban from './pages/Kanban';



export const App = () => {
  const stepper = useSelector((state: AccountPagesState | any) => state.globalState.count);
  const [checkAuth, setCheckAuth] = useState(false)
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleCall = useCallback(() => {
    dispatch(addSteper(stepper + 1));
    navigate('/');
  }, [stepper]);

  return (
    <>

      {handleCall ? <HeaderAppStyle step={stepper}>

        <AddPage />

        <ButtonElement text={CustomButtonTextEnum.titleNext} handleClick={handleCall} variant="contained" />
      </HeaderAppStyle> : []

      }

    </>
  );
};

export default App;
