import React, { useState, useEffect } from 'react'
import { TableBody, TableCell, TableHead, TableRow, Table, Button } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function MemoDelete() {
    const [check, setCheck] = useState(false)
    const handleCheck =()=>{
      setCheck(!check);
      
    }
    console.log(check)
    return (
        <>
            <Button check={check} onClick={handleCheck} startIcon={<DeleteForeverIcon />} />
        </>
    )
}

export default MemoDelete
