import './Index.style';
import { HeaderAppStyle } from './Index.style';
import AddPage from './components/AddPage';
import AdditionalInfo from './components/AdditionalInfo';
import { CustomButtonTextEnum } from './enam';
import { useDispatch, useSelector } from 'react-redux';
import { AccountPagesState } from './types';
import { ButtonElement } from './components/button/ButtonElement';
import { useNavigate } from 'react-router-dom';
import { addSteper } from './store/globalSlice';
import {useCallback, useState} from 'react';
import SearchField from './components/SearcField';
import Auth from "./components/Auth";

export const App = () => {
  const stepper = useSelector((state: AccountPagesState | any) => state.globalState.count);
  const [checkAuth, setCheckAuth] = useState(false)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleCall = useCallback(() => {
    dispatch(addSteper(stepper + 1));
    navigate('/avtorized');
  }, [stepper]);

  return (
    <>

      {checkAuth ? <HeaderAppStyle step={stepper}>
        <SearchField />
        <AddPage />
        <AdditionalInfo />
        <ButtonElement text={CustomButtonTextEnum.titleNext} handleClick={handleCall} variant="contained" />
      </HeaderAppStyle> :
        <Auth name={"SUS"}/>
      }

    </>
  );
};

export default App;
