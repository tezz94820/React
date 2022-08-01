import React,{useState , useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post , setPost] = useState({})     //we made a state for post
    const [ id , setId] = useState(1)
    const [idFromButtonclick , setIdFromButtonClick] = useState(1)

    const handleClick = () => {
      setIdFromButtonClick(id)
    }
    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)   //usingaxios to get the data from the server 'url'.
        .then( response =>{                                       //then is used to chain .
            console.log(response)
            setPost(response.data)                                //setting the post to data array
        })
        .catch( error => {
            console.log(error)
        })
    } , [idFromButtonclick])                                                       //[] is used to fetch the data only once
 


  return (
    <div>
      <input type="text" value={id} onChange={event => setId(event.target.value)} />
      <button onClick={handleClick}>Fetch Button</button>
      <div>{post.title}</div>
      
      
      {/* <ul>                                                                          //for posting entire array
        {
        post.map( eachpost => <li key={eachpost.id}>{eachpost.title}</li>)    
        }
      </ul> */}

    </div>
  )
} 

export default DataFetching
