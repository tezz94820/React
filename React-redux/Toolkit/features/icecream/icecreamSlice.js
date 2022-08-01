const createSlice = require('@reduxjs/toolkit').createSlice
const cakeActions = require('../cake/cakeSlice').cakeActions


const initialState = {
    numberOfIcecreams : 20
}

const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers : {                             //this should be 'reducers' and not 'reducer' 
        ordered : (state) => {
            state.numberOfIcecreams--
        } , 
        restocked : (state , action) => {
            state.numberOfIcecreams += action.payload
        } 
    } , 
    //extraReducers work to handle the other reducer actions but having effect on ice cream state
        //ex :- for every cake ordered one ice cream is given free.
        // extraReducers : {
        //     ['cake/ordered'] : (state) => {
        //         state.numberOfIcecreams--   
        //     }
        // }
        //toolkit recommends to use the extraReduceres as a function with builder as a parameter . under which the case is added and the action and the work done on that action is given
    extraReducers : (builder) => {
        builder.addCase(cakeActions.ordered , (state) => { 
            state.numberOfIcecreams--
        } )
    } 
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions