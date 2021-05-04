import React, { useState, useEffect } from 'react'
import { TableBody, TableCell, TableRow, Button, Checkbox } from '@material-ui/core'
import axios from 'axios'
import Memocomplete from './MemoComplete'
let checkIds = [];
function MemoList(props) {

  const [checked, setChecked] = useState(false);
  const [checkId, setcheckId] = useState({
    id : ""
  });

  // const [checkIds, setcheckIds] = useState([])
var checkIds =[];


  const hadleChange = (e) => {

    setChecked(e.target.checked);

    const {name, value} = e.target
    setcheckId({
     [name] :value
    })
    checkIds.push(value)

 
  }
  



console.log(checkIds)


  return (
    <TableRow key={props.id}>
      <TableCell align="left" >
        <Checkbox checked={checked} state={checked} onChange={hadleChange}
          name="id" value={props.id}
            
        />
      </TableCell>
      <TableCell align="center">{props.content}</TableCell>
      <TableCell align="right">
        <Memocomplete id={props.id} status={props.status} checked={checked} />



      </TableCell>

    </TableRow>
  )
}

export default MemoList
