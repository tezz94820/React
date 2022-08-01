const redux = require('redux')
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const applyMiddleware = require('redux').applyMiddleware
//logger middleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()



//creating action 
//cakes
const CAKE_ORDERED = 'CAKE_ORDERED' //action string 
const CAKE_RESTOCKED = 'CAKE_RESTOCKED' //action string 
//Ice Creams
const ICECREAM_ORDERED = 'ICECREAM_ORDERED' //action string 
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED' //action string 



//action creator :- a function which returns an action object
//cakes
const orderCake = () => {
    return {        //action object
        type : CAKE_ORDERED,
        payload : 1         //payload here means quamtity
    } 
}

const restockCake = (qty = 1) => {
    return {
        type : CAKE_RESTOCKED,
        payload : qty
    }
}

//Ice creams
const orderIcecream = () => {
    return {
        type : ICECREAM_ORDERED,
        payload : 1 
    }
}

const restockIceCream = ( qty = 1) => {
    return {
        type : ICECREAM_RESTOCKED,
        payload : qty 
    }
}

//single object consisting of all the states 
// const initialState = {
//     numberOfCakes : 10,
//     numberOfIceCreams : 20
// }
            //we will make separate initialObjects for cak and ice creams

const initialCakes = {
    numberOfCakes : 10
}
const initialIceCreams = {
    numberOfIceCreams : 20
}
 



//creating Reducer 

const cakeReducer = (state =  initialCakes , action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state ,                                      //if ther are more than one property in the state and only the numberofcakes is changing .soby spread operator we made a copy of the complete state and then changed the single property to
                numberOfCakes : state.numberOfCakes - 1
            } 
        case CAKE_RESTOCKED :
            return {
                ...state,
                numberOfCakes : state.numberOfCakes + action.payload
            }
        default : 
        return state
    }
}

const iceCreamReducer = (state =  initialIceCreams , action) => {
    switch(action.type){
        case ICECREAM_ORDERED:
            return {
                ...state ,                                      //if ther are more than one property in the state and only the numberofcakes is changing .soby spread operator we made a copy of the complete state and then changed the single property to
                numberOfIceCreams : state.numberOfIceCreams - 1
            } 
        case ICECREAM_RESTOCKED :
            return {
                ...state,
                numberOfIceCreams : state.numberOfIceCreams + action.payload
            }
        default : 
        return state
    }
}
//on the basis of action type state will change


//creating a store


//combining multiple reducers
const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : iceCreamReducer
})
const store = createStore(rootReducer , applyMiddleware(logger));     //holds application state   . used rootReducer where iceCream and Cake reducers are combined
//passed the logger middleware

console.log("Initial state" , store.getState()) //// can access the current state using the getstate method

const unSubscribe = store.subscribe( () => {        //subscribe methods tells us what to return at every state change
    // console.log("updated state" , store.getState())
})
//unSubscribe method stops the user to change the state

//dispatch method is a way to change the state on the basis of actions.
// store.dispatch(orderCake())     //here we pass action creator
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

                //alternate to do above thing using bindActionCreators
const actions = bindActionCreators({orderCake , restockCake , orderIcecream , restockIceCream },store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)

actions.orderIcecream()
actions.orderIcecream()
actions.restockIceCream(2)


unSubscribe()       //after unsubscribing the dispatch method will not run anymore

// store.dispatch(orderCake()) //will not execute because unsubscribtion has already been executed



//to use middleware in redux
//1) import applyMiddleware from redux
//2) in the createStore after reducer write apllyMiddlewaqre(middlewarename)