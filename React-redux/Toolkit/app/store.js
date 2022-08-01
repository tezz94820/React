const configureStore = require('@reduxjs/toolkit').configureStore //use configreStore function in place of createStore()
//importing reducers
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')

//middleware addition
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

//async thunk user list reducer
const userReducer = require('../features/user/userSlice')


const store = configureStore( {
    reducer : {                       //combining multiple reducers and setting it in the store
        cake : cakeReducer ,
        icecream : icecreamReducer,
        user : userReducer
    } ,
    // middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)        //adding middleware to the store
    //there are some middlewares running for configurestore so we need to run that middlewares and then concat our middleware to it.
} )

module.exports = store