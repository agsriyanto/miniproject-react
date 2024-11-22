import { useState, useEffect } from 'react'
import './App.css'
import DetailUser from './components/detail';

function App() {
  const [users, setUsers] = useState([]);
  const [isDetail, setIsDetail] = useState(0);
  const [filterFirstName, setFilterFirstName] = useState('');

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data?.users)
      })
      .catch(rejected => {
        console.log(rejected);
      });
  }, [])

  useEffect(() => {
    const userFilter = users.filter((el) => el.firstName.toLowerCase() === filterFirstName.toLowerCase());
    console.log({userFilter})
  }, [filterFirstName, users])

  const handleSearch = (firstName) => {
    const value = firstName.target.value;
    setFilterFirstName(value);
    // const userFilter = users.filter((el) => el.firstName.toLowerCase() === value.toLowerCase());

    // console.log({userFilter})
  }

  return (
    <>
      {isDetail !== 0 ? (
        <DetailUser users={users} idDetail={isDetail} setIsDetail={setIsDetail} />
      ) : (
        <>
          <input onChange={handleSearch} placeholder='Filter First Name' />
          <ul>
            {users?.map((res) => (
              <li key={res.id}>
                <div style={{display: 'flex', gap: '20px'}} onClick={() => setIsDetail(res.id)}>
                  <p>{res.id}</p>
                  <p>{res.firstName}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default App
