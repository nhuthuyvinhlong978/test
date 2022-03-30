import axios from "axios";

export const submitData = async (data) => {
    return await axios.post("https://server-edu-d24.herokuapp.com/api/customer-landingpage2", data).then((res) => {
       return res;
      })
      .catch((error) => {
          console.log(error.response)
        return error.response;
      });
}

