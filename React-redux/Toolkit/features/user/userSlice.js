const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
    loading : true , 
    users : [] ,
    error : ''
}

//here we  need to write the async action creator which generats 3 actions
//1)pending 2)fulfilled 3)rejected    you can handle it in extraReducers
const fetchUsers = createAsyncThunk('user/fetchUsers' , () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data.map(user => user.id))
})

const userSlice = createSlice( {
    name:'user',
    initialState ,
    extraReducers : (builder) => {
        builder.addCase(fetchUsers.pending , (state) => {
            state.loading = true 
        })
        builder.addCase(fetchUsers.fulfilled , (state , action) => {
            state.loading=false
            state.users = action.payload
            state.error=''
        })
        builder.addCase(fetchUsers.rejected , (state , action) => {
            state.loading=false
            state.users = []
            state.error= action.error.message
        })
    }
} )


module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers  //contains actions
