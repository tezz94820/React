import React , {useReducer , useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading : true,
    error : '',
    post : {}
}

const reducer = (state , action) => {
    switch(action.type){
        case 'FETCH_SUCCESS' : 
            return{
                loading : false ,
                error : '',
                post : action.payload
            }
        case 'FETCH_ERROR' : 
            return{
                loading : false , 
                post : {} , 
                error : 'something went wrong'
            }
        default : return state
    }
}

function DataFetchingTwo() {

    const [state , dispatch] = useReducer(reducer , initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then( response => {
            dispatch( {type : 'FETCH_SUCCESS' , payload : response.data} )
        })
        .catch( error => {
            dispatch( {type : 'FETCH_ERROR'} ) 
        })
    }, [])

  return (
    <div>
        {state.loading ? 'Loading' : state.post.title}
        {state.error ? 'Error' : null}
    </div>
  )
}

export default DataFetchingTwo
//usestate vs usereducers

//1) type os state                  usestate => number,string,boolean               usereducers => arrays,objects
//2) number of state transition     useestate => one ,two                           usereducers => too many
//3) related state transitions      usestate => no                                  usereudcers => yes
//4) local vs global                usestate => local                               usereducers => global
