import {createSlice} from "@reduxjs/toolkit";

export const sliceCheckedFormData = createSlice({
    name: 'pageEntered',
    initialState: {
        statusEnter: 0,
        statusView: false
    },

    reducers : {
        findExample(action) {
            console.log("this is action", action)
        }
    }
})

export default sliceCheckedFormData.reducer