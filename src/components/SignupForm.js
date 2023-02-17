import React, {useState} from 'react'
import Validation from './Validation';

const SignupForm = (props) => {
    const [values,setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        form: false,
    })
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange=(event) =>{
        setValues({...values,
        [event.target.name]:event.target.value,});
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        setIsSubmit(true);
        setInputData({firstName:values.firstName, lastName: values.lastName, email: values.email, form: isSubmit,});
        if(Object.keys(errors).length === 0 && isSubmit){
            props.setData(inputData);
        }
    };
  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Register Here</h2>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>First Name</label>
                    <input className='input' type='text' name='firstName' value={values.firstName} onChange={handleChange}/>
                    {errors.firstName && <p className='error'>{errors.firstName}</p>}
                </div>
                <div className='name'>
                    <label className='label'>Last Name</label>
                    <input className='input' type='text' name='lastName' value={values.lastName} onChange={handleChange}/>
                    {errors.lastName && <p className='error'>{errors.lastName}</p>}
                </div>
                <div className='email'>
                    <label className='label'>Email</label>
                    <input className='input' type='email' name='email' value={values.email} onChange={handleChange}/>
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div className='password'>
                    <label className='label'>Password</label>
                    <input className='input' type='password' name='password' value={values.password} onChange={handleChange}/>
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>
                <div className='password'>
                    <label className='label'>Confirm Password</label>
                    <input className='input' type='password' name='confirmPassword' value={values.confirmPassword} onChange={handleChange}/>
                    {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                </div>
                <div>
                <button className='submit' onClick={handleFormSubmit}>Register</button>
                </div>
            </form>

        </div>

    </div>
  )
}

export default SignupForm