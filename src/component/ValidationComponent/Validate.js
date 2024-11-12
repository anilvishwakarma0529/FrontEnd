export const checkValidData = (email, mobile) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  //   const isPasswordValid =
  //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // const isMobileValid = /^([0-9]){10}$/.test(mobile);

  if (!isEmailValid)
    return "Email ID is not valid (Example : example@gmail.com)";
  //   if (!isPasswordValid)
  //     return "Password is not valid (must contain capitalletter, smallletter, special symbol & numeric digit & must be 8 character) ";
  // if (!isMobileValid)
  //   return "Mobile no is not valid (it must be number & 10 digit number)";

  return null;
};
