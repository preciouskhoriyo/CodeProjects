import { useState } from "react";

const InputField = ({type, placeholder, icon}) => {
    //state to toggle password visibility
    const [isPasswordShown, setIsPasswordShown] = useState (false);
    return (
       <div className='input-wrapper'>
            <input 
            type={ type} 
            placeholder={placeholder} className='input-field' 
            required
            />
            <span><i className='material-symbols-rounded'>{icon}</i></span>
            {type=== 'password' && (
              <i onClick={() => setIsPasswordShown(prevState => !prevState)} className='material-symbols-rounded eye-icon'>
               {isPasswordShown ? '' : ''}
              </i>  
            )}
          </div> 
    )
}

export default InputField