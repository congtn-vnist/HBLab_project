import React from 'react';
import { Table, Form, Pagination } from 'react-bootstrap';
import Search from './Search';
import { HiFilter } from 'react-icons/hi';
const ListDataTable = [
  {
    id: 1,
    name: 'Mark So',
    content: 'Content request',
    author: 'name',
    date: '10/5/2021',
    category: 'category name',
    assignee: 'name Assignee',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Mark So',
    content: 'Content request',
    author: 'name',
    date: '10/5/2021',
    category: 'category name',
    assignee: 'name Assignee',
    status: 'approve',
  },
  {
    id: 3,
    name: 'Mark So',
    content: 'Content request',
    author: 'name',
    date: '10/5/2021',
    category: 'category name',
    assignee: 'name Assignee',
    status: 'approve',
  },
  {
    id: 4,
    name: 'Mark So',
    content: 'Content request',
    author: 'name',
    date: '10/5/2021',
    category: 'category name',
    assignee: 'name Assignee',
    status: 'pending',
  },
];
const ListRequests = () => {
  return (
    <div style={{ fontSize: '14px' }}>
      <div className="border border-dark" style={{ minHeight: '75vh' }}>
        <h1 className="text-center my-3">List requests</h1>
        <div className="mx-5">
          <div className="mb-3">
            
              <Search />
            
          </div>
          <div
            className="table"
            style={{
              border: '1px solid #ced4da',
              height: 'calc(75vh - 170px)',
              overflowY: 'scroll',
            }}
          >
            <Table striped bordered hover>
              <thead>
                <tr style={{ color: '#73b9ab' }}>
                  <th>Name request</th>
                  <th>Content request</th>
                  <th>Author request</th>
                  <th>Date create</th>
                  <th>Category</th>
                  <th>Assignee</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {ListDataTable.map((item) => (
                  <tr
                    key={item.id}
                    style={{ fontWeight: 'bold', color: '#545454' }}
                  >
                    <td>{item.name}</td>
                    <td>{item.content}</td>
                    <td>{item.author}</td>
                    <td>{item.date}</td>
                    <td>{item.category}</td>
                    <td>{item.assignee}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <Pagination className="justify-content-md-center">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ListRequests;
