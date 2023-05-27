import axios from 'axios';


export const RegisterUser = async (UserData) => {
    try {
        return await axios.post(`${process.env.REACT_APP_BASE_URL}/Register`,UserData);
    } catch(error) {
        console.log("error while calling register user api ");
    }
}

export const LoginUser = async (LoginData) => {
    try {
        //console.log("Login User")
        return await axios.post(`${process.env.REACT_APP_BASE_URL}/Login`,LoginData, {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json'
            }
          });
    } catch(error) {
        console.log("Some error occured while calling Login api ",error);
        return {data: "SOme error"};
    }
}

export const ChatGPT = async (navigate,setUserData) => {
    //console.log("Chatgpt inside abhi")
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/Home`,{
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //console.log(`Response data ${response.data.UserData.fullname}`);
        const temp =response.data.UserData;
        setUserData(prevState => {
            return {...prevState, "fullname": temp.fullname, "email": temp.email};
          });
        if(response.status===400)
        {
            throw new Error(response.error);
        }
    } catch(err) {
        console.log("Some error occured while calling Login api ",err);
        navigate('/Login');
        return {data: "SOme error"};
    }
}

export const LogoutApi = async (navigate) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/Logout`,{
            withCredentials: true,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if(response.status===200)
        {
            navigate("/Login");
        }
        else
        {
            throw new Error(response.error);
        }
    } catch(err) {
        console.log(err);
    }
}
export const ChatResponse = async (Question) => {
    try {
        //console.log("Login User2")
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/Respond`,Question, {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json'
            }
          });
        //console.log(" Response received from ChatGpt ", response.data);
        if(response.status!==200)
        {
            throw new Error(" unable to recieve response from ChatGpt ");
        }else {
            return response.data;
        }
    } catch(error) {
        console.log("Some error occured while calling Login api ",error);
        return {data: "SOme error"};
    }
}
export const ChatToDatabase = async (item) => {
    try {
        //console.log("Login User2")
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/Store`,item, {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json'
            }
          });
        //console.log(" Response received from ChatGpt ", response.data);
        if(response.status!==200)
        {
            throw new Error(" unable to store data in database ");
        }else {
            return response.data;
        }
    } catch(error) {
        console.log("Some error occured while calling Login api ",error);
        return {data: "SOme error"};
    }
}
export const RetriveData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/AllQueries`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //console.log("Response of User Queries ", response.data);
        if(response.status!==200)
        {
            throw new Error(" unable to retrieve data from database ");
        }else {
            return response.data;
        }
    } catch(error) {
        console.log("Some error occured while calling Login api ",error);
        return {data: "SOme error"};
    }
}