import React, { useState } from 'react'
import axios, {post} from 'axios'
function MemoAdd() {

    // const [info, setinfo] = useState([
    //    {
    //     content : ""
    //    }
    // ])

    // function add() {
    //     const url = '/api/todoadd'
    //     const formData = new FormData();
    //     formData.append('info', info.content);
    //     const config={
    //         headers:{
    //             'content-type' : 'multipart/form-data'
    //         }
    //     }
    //     return post(url, formData, config);
    // }


    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     add()
    //     .then((response) => {
    //         console.log(response.data)
           
    //     })
    //     setinfo({
    //        content:''
    //     })

       
        
      
    // }
    return (
        <div>
            <input type="text"></input>
            <button >추가</button>
        </div>
    )
}

export default MemoAdd
