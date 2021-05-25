import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGlassMartiniAlt } from 'react-icons/fa';

function History(props) {
  const listRequest = [
    {
      mail: 'example@gmail.com',
      name: 'request1',
      time: '10:30 10/5/2005',
    },
    {
      mail: 'example@gmail.com',
      name: 'request2',
      time: '10:30 10/5/2005',
    },
    {
      mail: 'example@gmail.com',
      name: 'request3',
      time: '10:30 10/5/2005',
    },
    {
      mail: 'example@gmail.com',
      name: 'request4',
      time: '10:30 10/5/2005',
    },
    {
      mail: 'example@gmail.com',
      name: 'request5',
      time: '10:30 10/5/2005',
    },
  ];

  return (
    <div
      className="history "
      style={{
        width: '80%',
        'font-size': '16px',
        height: '100%',
      }}
    >
      <ListGroup
        className="border border-dark"
        style={{ minHeight: '75vh', height: '100%' }}
      >
        <ListGroup.Item style={{ textAlign: 'center' }}>
          History Request
        </ListGroup.Item>
        {listRequest.length > 0
          ? listRequest.map((rq, index) => (
              <ListGroup.Item key={index} action>
                <div>
                  <AiOutlineMail /> {rq.mail}
                </div>
                <div>{rq.name}</div>
                <div>{rq.time}</div>
              </ListGroup.Item>
            ))
          : null}
        <ListGroup.Item style={{ textAlign: 'center' }}>
          Pagination
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default History;
