import React, { useState, useEffect } from 'react'
import {TableBody, TableCell, TableRow, Button} from '@material-ui/core'
import axios from 'axios'
import Memocomplete from './MemoComplete'
function MemoList(props) {

  

    return (
      <TableRow key={props.id}>
        <TableCell align="left" >
          {props.id}
        </TableCell>
        <TableCell align="center">{props.content}</TableCell>
        <TableCell align="right">
          <Memocomplete id={props.id} status={props.status} />



        </TableCell>

      </TableRow>
    )
}

export default MemoList
