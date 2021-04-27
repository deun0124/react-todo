import logo from './logo.svg';
import './App.css';
import Memolist from './component/MemoList'
import MemoAdd from './component/MemoAdd'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TableBody, TableCell, TableHead, TableRow, Table } from '@material-ui/core'

function App() {

  const [Memo, setMemo] = useState("");
  const [completed, setCompleted] = useState(0);
  const [isLoad, setIsLoad] = useState(false);


  useEffect(() => {
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



    callApi().then(res => {
      setMemo(res);
    }).
      catch(err => console.log(err));
  }, []);

  const callApi = async () => {
    const response = await fetch('/api/todolist');
    const body = await response.json();
    setIsLoad(true);

    return body;

  }




  console.log(Memo)

  // const list = Memo.map((c) => {
  //   return (
  //     <TableRow key={c.id}>
  //       <TableCell >
  //         {c.id}
  //       </TableCell>
  //       <TableCell align="right">{c.content}</TableCell>
  //       <TableCell align="right">{c.status}</TableCell>

  //     </TableRow>
  //   )
  // })




  return (
    <div className="App">

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">To-do</TableCell>
            <TableCell align="right">완료</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {/* { list } */}
        </TableBody>
      </Table>
      <MemoAdd />
    </div>
  );
}

export default App;
