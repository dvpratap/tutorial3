import React from 'react'

const ProfilePage = (props) => {

  return (
    <div className='container'>
        <div className='page-wrapper'>
            <div className='profile'> Profile Page </div>
            <div className='form-wrapper'>
            <div className='name'>
                    <label className='details'> First Name: {props.state.firstName}</label>
            </div>
            <div className='name'>
                    <label className='details'> Last Name: {props.state.lastName}</label>
            </div>
            <div className='name'>
                    <label className='details'> Email: {props.state.email}</label>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage