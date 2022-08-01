const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')


//initial state
const initialState = {
    loading:false,
    users:[],
    error:''
}

//actions
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'


//action creators
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload : users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload : error
    }
}

//reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTED :
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEEDED :
            return {
                loading : false,
                users : action.payload
            }
        case FETCH_USERS_FAILED :
            return {
                loading : false ,
                users : [] , 
                error : action.payload
            }
        default :
            return state
    }
}

//async action creator. as this is a action creator but as we includede reduxthunk middleware so we can even return the function from the action creator.
//we can use the dispatch method to call the sync action creatorsinside async action creators.
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUsersFailure(error.message))
        })
    }
}


//applying thunk middleware which enables action creators to return the function as well.
const store = createStore(reducer , applyMiddleware(thunkMiddleware)) 

store.subscribe( () => console.log(store.getState()) )

store.dispatch(fetchUsers())
