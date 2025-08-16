import React, {FC} from 'react';
import {string} from "yup";
import ModalWindow from "./modal/ModalWindow";

type IAuth = {
    name: string
}
const initialStateName: IAuth = {
    name: "Biola"
}

interface MSignProps {
    text: string;
    checkAvtorized?: boolean;
    onClick?: () => void;
}
interface ISubmitResult {
    status: boolean;
    statusCode: string;
    apiToken: string;
}

const initialState: ISubmitResult = {
    status: false,
    statusCode: "",
    apiToken: "",
};

interface IUser {
    apiKey?: any;
    apiLogin?: any;
}


const Auth :FC<IAuth> = ({name}) => {
    return (
        <div>
            <h1>THIS IS AUTH PAGE</h1>
            {name}
            <ModalWindow />
        </div>
    );
};

export default Auth;