import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';

function AuthorList(props) {
  const { authors, setAuthors, removeFromDom } = props;

  useEffect( () =>{
    axios.get("http://localhost:8000/api/authors")
    .then((res) => {
      setAuthors(res.data.authors)
    })
    .catch((err) => {
      console.log("list get err:", err)
    })
  }, [authors, setAuthors])
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
        {
          authors.map((author) => 
          <tr key={author._id}>
          <td>
            {author.name}
          </td>
          <td>
            <Link className="btn btn-success" to={`/edit/${author._id}`}>Edit</Link>
            <DeleteButton cssStyle={"danger"} 
              authorId = {author._id}
              callbackFunction={()=>removeFromDom(author._id)}/>
          </td>
        </tr>
          )
        }
        </tbody>
      </table>
    </div>
  )
}

export default AuthorList;