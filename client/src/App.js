import logo from './logo.svg';
import './App.css';
import Memolist from './component/MemoList'
import MemoAdd from './component/MemoAdd'
import MemoDelete from './component/MemoDelete'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { TableBody, TableCell, TableHead, TableRow, Table, Button } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import { CheckBoxOutlineBlank, SettingsInputComponent } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import DialogTitle from '@material-ui/core/DialogTitle';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App() {

  //const [Memo, setMemo] = useState("");
  const [completed, setCompleted] = useState(0);
  const [isLoad, setIsLoad] = useState(false);


  // useEffect(() => {
  // let complete = 0;
  // let timer = (() => {
  //   if (complete >= 100) {
  //     complete = 0
  //   } else {
  //     complete += 1;
  //   }
  //   setCompleted(complete);
  //   if (isLoad) {
  //     clearInterval(timer);
  //   }
  // }, 20);



  //   callApi().then(res => {
  //     setMemo(res);
  //   }).
  //     catch(err => console.log(err));
  // }, []);

  // const callApi = async () => {
  //   const response = await fetch('/api/todolist');
  //   const body = await response.json();
  //   setIsLoad(true);

  //   return body;

  // }








  const [Memo, setMemo] = useState([])
  const [progress, setProgress] = useState(0);
  // useEffect(()=>{

  //   const result =  axios.get('/api/todolist')
  //   setMemo(result.data)
  //   console.log(result.data)

  // },[]);

  useEffect(
    async () => {

      const result = await axios.get("./api/todolist");
      setMemo(result.data);
      console.log(result.data)
    }, []);


  
  const refreshComponents =
    async () => {
      const result = await axios.get("./api/todolist");
      setMemo(result.data);
    }


  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true);
    console.log(open)


  }



  const handleClose = () => {
    setOpen(false);
  }

  const [check, setCheck] = useState(false)
  const handleCheck =()=>{
    setCheck(!check);
    
  }
  console.log(check)

  const list = Memo.map((c) => {
    return (
      <Memolist id={c.id} content={c.content} status={c.status} check={
        
   check} />

    )
  })

  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="center">To-do</TableCell>
            <TableCell align="right">

              <Button onClick={handleClickOpen} startIcon={<CreateIcon />} />
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">오늘 할 일</DialogTitle>
                <MemoAdd handleClose={handleClose} refreshComponents={refreshComponents} />

              </Dialog>
               <Button check={check} onClick={handleCheck} startIcon={<DeleteForeverIcon />} /> 
            </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {list}
        </TableBody>
      </Table>
      {/* <MemoAdd /> */}
    </div>
  );
}

export default App;
