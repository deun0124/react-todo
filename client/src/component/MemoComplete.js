import React, {useState} from 'react'
import {Button} from  '@material-ui/core'

import axios from 'axios'
function MemoComplete(props) {

    const [info, setinfo] = useState({
        status : props.status
      })
    
      
    const {status} = info;
    const handleComplete=(id)=> {
      
    setinfo({
        status :1
    })
    console.log(info.status)
   
      axios({
        method:'DELETE',
        url:'/api/completed/'+ id,
        data: {
          status : info.status
          
        }
      })//김즨 천재 
     
  
      }
    return (
        <div>
            <Button onClick={(e)=>{ 
                 
                handleComplete(props.id)}}>{info.status !=0? "완료" : "진행"} </Button>
        </div>
    )
}

export default MemoComplete
