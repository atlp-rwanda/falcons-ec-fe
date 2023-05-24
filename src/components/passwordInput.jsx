import React from 'react';

const PasswordInput = ({
  type,
  name,
  placeholder,
  register,
  error
}) => {
  return (
   <div>
     <input type={type} name={name} placeholder={placeholder} {...register}/>
     { error  && <p className="error">{error.message}</p>}  
   </div>
  )
};

export default PasswordInput;
