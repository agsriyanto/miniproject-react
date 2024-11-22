import React from "react";

const DetailUser = (props) => {
  const users = props?.users.find((el) => el.id === props.idDetail);

  return (
    <>
      <button onClick={() => props.setIsDetail(0)}>Back List</button>
      <div style={{display: 'flex', gap: '20px'}}>
        <p>{users?.id}</p>
        <p>{users?.firstName}</p>
        <p>{users?.gender}</p>
        <p>{users?.Age}</p>
      </div>
    </>
  )
};

export default DetailUser;