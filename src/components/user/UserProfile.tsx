import React from 'react'

const UserProfile = ({username}:{username:string}) => {
  return (
    <h2 className='text-2xl font-bold'>{username}</h2>
  )
}

export default UserProfile