import React, { useState } from 'react'
import ProfilePage from './ProfilePage';
import SignupForm from './SignupForm'

const Form = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        form: "",
    });
    const getData=(ChildData)=>{
        setValues({...ChildData});
        console.log(values);
        console.log(values.form);
    }
  return (
    <div>{!values.form ? (<SignupForm setData={getData}/>):(<ProfilePage state={values} />)}</div>
  )
}

export default Form