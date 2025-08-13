import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LinearProgress } from '@mui/material';
import { Table } from './Table';
import { AccountPagesState } from '../types';
import { CircularStyle } from '../Index.style';

const AdditionalInfo = () => {
  const [stateGeneralInfo, setStateGeneralInfo] = useState([]);
  const arrLinear = new Array(5).fill(null);
  const currentGeneralInfo = useSelector(
    (state: AccountPagesState | any) => state.globalState.globalArrayAccount,
  );

  useEffect(() => {
    if (currentGeneralInfo) {
      setStateGeneralInfo(currentGeneralInfo);
    }
  }, [stateGeneralInfo, setStateGeneralInfo, currentGeneralInfo]);

  const currenInfoSpiner = Object.entries(stateGeneralInfo).length;

  return (
    <>
      {!currenInfoSpiner ? (
        <CircularStyle>
          {arrLinear.map((_, idx: number) => (
            <LinearProgress color="secondary" key={idx} />
          ))}
        </CircularStyle>
      ) : (
        <Table arr={currentGeneralInfo} />
      )}
    </>
  );
};

export default AdditionalInfo;
