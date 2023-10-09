import axios from "axios";
import { createContext, useState } from "react";

export let passwordContext = createContext();

export default function PasswordContextProvider({ children }) {
  let [dataStatus, setDataStatus] = useState(null);

  async function sendVerificationCode(values) {
    try {
      let data = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        values
      );

      setDataStatus(data.data);
      return data;
    } catch (error) {
      console.log(error.response.data);
      // abdo(error);
      setDataStatus(error.response.data);
      // console.log("iam error from context", error.response.data);

      // setDataStatus(error.response.data);
      return error;
    }
  }
  async function confirmVerifyCode(values) {
    try {
      let data = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
        values
      );

      return data;
    } catch (error) {
      return error;
    }
  }
  async function resetPassword(values) {
    try {
      let data = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
        values
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  return (
    <passwordContext.Provider
      value={{
        sendVerificationCode,
        dataStatus,
        confirmVerifyCode,
        resetPassword,
      }}
    >
      {children}
    </passwordContext.Provider>
  );
}
