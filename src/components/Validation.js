
const Validation = (values) => {
    let errors={};
    if(!values.firstName){
        errors.firstName="First Name is required !";
    }else if(!/^[a-z ]*[A-Z ]*$/i.test(values.firstName)){
        errors.firstName="Only Letters Allowed !";
    }
    if(!values.lastName){
        errors.lastName="Last Name is required !";
    }else if(!/^[a-z ]*[A-Z ]*$/i.test(values.lastName)){
        errors.lastName="Only Letters Allowed !";
    }
    if(!values.email){
        errors.email="Email is required !";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Invalid Email !!";
    }
    if(!values.password){
        errors.password="Password is required !";
    }else if(!/^[ A-Za-z0-9_@./#&+-]{8,}$/i.test(values.password)){
        errors.password="Password must be > 8 characters..";
    }
    if(!(values.confirmPassword === values.password)){
        errors.confirmPassword="Password doesnt match !!"
    }
  return errors;
}

export default Validation