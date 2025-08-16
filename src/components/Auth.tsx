import React, {FC} from 'react';
import ModalWindow from "./modal/ModalWindow";

import { findExample, setStatusEnter } from '../store/checkedEnterSlice';
import { useAppDispatch } from '../hooks/redux';

type IAuth = {
    name: string
}



const Auth :FC<IAuth> = ({name}) => {
    const num = 1;

    const dispatch = useAppDispatch();
    dispatch(setStatusEnter(42))
    console.log("this is", dispatch(findExample()));

    return (
        <div>
            <h1>THIS IS AUTH PAGE</h1>
            {name}
            <ModalWindow />
        </div>
    );
};

export default Auth;