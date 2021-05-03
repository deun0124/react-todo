import React, { useState,useEffect } from 'react'
import axios, {post} from 'axios'

import { TextField, Button} from '@material-ui/core'


import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
function MemoAdd(props) {

    const [info, setinfo] = useState(
       { content : ''}
    )
    const {content} = info;


  

    // function add(){
    //     const url = "/api/todolist";
    //     const formData = new FormData();
    //     formData.append('content', info.content);
        
    //     const config ={
    //         headers : {
    //             'content-type' : "multipart/form-data"
    //         }
    //     }
       
    //     return post(url,formData, config)
    // }

    
    //   .then(function (response) {
    //     alert(response.data)
    //   })
    //   .catch(function (error) {
    //   });
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        // add()
        // .then((response)=>{
        //     console.log(response.data)
        // })
        axios({
            method:'post',
            url:'/api/todolist',
            data: {
              content : info.content,
              
            }
          })
        setinfo({
            content : ''
        })
      
    props.handleClose()
       props.refreshComponents()
        
      
    }

    const handleValueChange=(e)=>{

        const { name, value} = e.target;
        setinfo({
            ...info,
            [name] : value
        })
        

        
    }
    

        
    return (


        <>
          
          <DialogContent>

        <TextField  type="text" name="content" value={content} onChange={handleValueChange}/>

</DialogContent>
       
       <DialogActions>
         <Button onClick={props.handleClose} color="primary">
          취소
         </Button>
         <Button  onClick={handleSubmit} color="primary">
           To-do 입력
         </Button>
       </DialogActions>
                
         
            
     
    </>
        // <div>
        //     <input type="text" name = "content" value={content} onChange={handleValueChange}></input>
        //     <button type="submit" onClick={handleSubmit} >추가</button>
        // </div>
    )
}

export default MemoAdd
