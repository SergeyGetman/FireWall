import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonElement from './button/ButtonElement';
import { getTransports } from '../api/api';
import { useDispatch } from 'react-redux';

import { CustomTextEnum } from '../enam';
import { useAppDispatch } from '../hooks/redux';

const AddPage = () => {
  const notify = () => toast(CustomTextEnum.textMessageAdd);
  const [showNotif, setShowNotif] = useState(false);



  const dispatch = useAppDispatch();

  useEffect(() => {
    getTransports().then((response) => {
      const statusResponce = response.status;


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
