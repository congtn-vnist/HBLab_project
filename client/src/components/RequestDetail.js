import React from "react";
import { Table, Form, Pagination } from 'react-bootstrap';
function RequestDetail(props) {
return(
<div class="container-md ms-5 mb-5 mt-5 border border-dark px-5 py-5"  >
    <div className='request-title'>
         
            <h3>Request title</h3>
        <div class="pe-3">
         <button type="button" class="btn btn-primary float-right">
            In Progess 
        </button>
        </div>
    </div>
      <div className='request-info'>
             <table class="table">
                 <tr>
                     <td>
                     <img  class="rounded float-start" ></img>
                     </td>
                    <td><h4>author name</h4>
                         <p>date</p>
                    </td>
                </tr>
             </table>
         <div class="pe-5 ps-5 mt-4 mb-4">
            <p>this is title content</p>
         </div>
         
        <div class="container-fluid">
            <div class="row " >
                <div class="font-weight-bold col ">Category</div>
                 < div class="col ">  category name</ div>
                 <div class="col"></div>
                 <div class="font-weight-bold col">Assign</div>
                  <div class="col">name assign</div>
            </div>
        </div>

     </div>
     <div className='container'>
        <div class='pt-5'><h5>comment(2)</h5></div>
         <div class='border border-dark py-3'>
         <div className='mx-3 my-3'>
             
             <h5><img alt= "avatar"></img>author name</h5>
             <p>date</p>
             <p>comment content</p>
             <div>
             <table class='table-light'></table>
             </div>
         </div>
         <div className='mx-3 my-3'>
             
             <h5><img alt= "avatar"></img>author name</h5>
             <p>date</p>
             <p>comment content</p>
         </div>
         </div>
        
         <div className='input-box mb-2 pt-5 '>
            <input type="text" class="form-control border border-dark" placeholder="write a comment" aria-label="comment"></input>
         </div>
        
     </div>
</div>


);

}

export default RequestDetail;
