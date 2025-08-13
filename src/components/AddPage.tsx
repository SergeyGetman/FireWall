import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonElement from './button/ButtonElement';
import { getTransports } from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { addDataPages, getStatus } from '../store/globalSlice';
import { AccountPagesState } from '../types';
import { CustomTextEnum } from '../enam';

const AddPage = () => {
  const notify = () => toast(CustomTextEnum.textMessageAdd);
  const [showNotif, setShowNotif] = useState(false);
  const { status } = useSelector((state: AccountPagesState | any) => state.globalState);
  const st = useSelector((state) => console.log('this is state222', state));
  console.log(st);

  const dispatch = useDispatch();

  useEffect(() => {
    getTransports().then((response) => {
      const statusResponce = response.status;
      dispatch(getStatus(status, response.status));
      dispatch(addDataPages(response.data, response));
      if (statusResponce == 200) {
        setShowNotif(true);
      }
    });
  }, []);
  return (
    <>
      <ButtonElement onClick={notify}>{CustomTextEnum.Notification}</ButtonElement>
      {showNotif && <ToastContainer />}
    </>
  );
};

export default AddPage;
