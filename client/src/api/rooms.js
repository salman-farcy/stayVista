import axiosSecure from "."


//Fetch all room from db
export const getAllRooms = async () => {
     const {data} = await axiosSecure('/rooms')
     return data
}


// Fetch single room data  from db
export const getRoomDtails = async (id) => {
     const {data} = await axiosSecure(`/room/${id}`)
     return data
}