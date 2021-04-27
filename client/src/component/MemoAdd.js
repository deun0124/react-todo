import React, { useState } from 'react'
import axios, {post} from 'axios'

import { TextField, Button} from '@material-ui/core'


function MemoAdd() {


    const [info, setinfo] = useState(
       { content : ''}
    )
    
    const {content} = info;

    function add(){
        const url = "/api/add"
        const formData = new FormData();
        formData.append('content', info.content);
        
        const config ={
            headers : {
                'content-type' : "multipart/form-data"
            }
        }
       
        return post(url,formData, config)
    }


    
    const handleSubmit=(e)=>{
        e.preventDefault()
        add()
        .then((response)=>{
            console.log(response.data)
        })
        setinfo({
            content : ''
        })

       
        
      
    }

    const handleValueChange=(e)=>{

        const { name, value} = e.target;
        setinfo({
            ...info,
            [name] : value
        })
        

        
    }
    

       
        
    return (


        <div>
      
                <TextField  type="text" name="content" value={content} onChange={handleValueChange}/><br/>
                
         
                <Button variant="contained" color="primary" onClick={handleSubmit}>추가</Button>
            
        
    </div>
        // <div>
        //     <input type="text" name = "content" value={content} onChange={handleValueChange}></input>
        //     <button type="submit" onClick={handleSubmit} >추가</button>
        // </div>
    )
}

export default MemoAdd
