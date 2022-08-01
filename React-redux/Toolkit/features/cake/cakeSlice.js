const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfCakes:10
}

//we will define individual slices in the model to ease the preocess
const cakeSlice = createSlice({
    name:'cake',        //name of the slice
    initialState,       //initial state of the cake slice
    reducers : {        //reducers
        ordered : (state) => {
            state.numberOfCakes--
        } ,
        restocked : (state , action) => {
            state.numberOfCakes += action.payload
        }
    }
})
//in reducers we do not need to write switchCases . we can neglect ...state spred operator because immer package is already install in redux toolkit


module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions          //ac=utomaticlaly makes the actions and action creators.the actions are of the same name as named in the reducers.i.e ordered and restocked
