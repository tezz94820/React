const redux = require('redux')
const produce = require('immer').produce       //here we used the immer .see in the reducer


const initialState = {
    name:'Tejas Itankar',
    address : {
        street:'123 main Street',
        city:'Mumbai',
        state:'MH'
    }
}

//action
const STREET_UPDATED = 'STREET_UPDATED'

//action creator
const updateStreet = (street) => {
    return {
        type:STREET_UPDATED,
        payload:street
    }
}

//reducer
const reducer = (state = initialState , action) => {
    switch(action.type){
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address:{
            //         ...state.address,                //so here nesting has happened a lot .so to reduce it we use immer library
            //         street:action.payload
            //     }
            // }
            return produce( state , (draft) => {        //it takes stateand a function with parameter draft.with draft we can directly access the state .and change only property we want to change .immer will keep every other property normal 
                draft.address.street = action.payload
            } )
        default:
            return state
    }
}

const store = redux.createStore(reducer)
console.log("Initial state" , store.getState())

const unSubscribe = store.subscribe( () => {
    console.log("updated State",store.getState())
} )


store.dispatch(updateStreet('456 main street'))
unSubscribe()

