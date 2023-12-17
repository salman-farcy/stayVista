import axiosSecure from "."


//save user data in database
export const saveUser = async user => {
     const currentUser = {
          email: user.email,
          role: 'guest',
          status: 'Verified',
     }
     const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
     return data
}


//get token form server
export const getToken = async email => {
     const {data} = await axiosSecure.post(`/jwt`, email)
     console.log('Token recived form server ----->');
     
     return data
}


//Remove token from browser
export const clearCookie = async () => {
     const {data} = await axiosSecure.get(`/logout`)
     return data
}