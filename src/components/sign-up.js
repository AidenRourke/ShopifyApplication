import React from 'react';

const SignUp = ({handleClick}) => {

  return (
    <div>
      <button
        className="SignUpButton"
        onClick={() => handleClick()}>
        Sign up now
      </button>
    </div>
  );
}

export default SignUp;
