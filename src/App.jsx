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

  const handleSearch = (firstName) => {
    const value = firstName.target.value;
    setFilterFirstName(value);
  }

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(filterFirstName.toLowerCase())
  );

  return (
    <>
      {isDetail !== 0 ? (
        <DetailUser users={users} idDetail={isDetail} setIsDetail={setIsDetail} />
      ) : (
        <>
          <input onChange={handleSearch} placeholder='Filter First Name' />
          <ul>
            {filteredUsers?.map((res) => (
              <li key={res.id}>
                <div style={{display: 'flex', gap: '20px', cursor: 'pointer'}} onClick={() => setIsDetail(res.id)}>
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
