import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card } from './App.styles';

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments', { params: { _page: page, _limit: 5 } })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <div className="App">
      <Container>
        {data.map((d) => {
          return (
            <Card>
              <div>
                <b>Comment Id</b>
                <span>{d.id}</span>
              </div>
              <div>
                <b>Email</b>
                <span>{d.email}</span>
              </div>
              <div className="comment-box">
                <b>Comment</b>
                <span>{d.body}</span>
              </div>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
