const users = []

const addUser = ({id, username, room}) => {
    //clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //vlidate the data
    if(!username || !room){
        return { 
            error: 'Usernmae and room are required'
        }
    }

    //check for exesting user
    const userExesist = users.find(user =>{
         return user.room === room && user.username == username
    })
    if(userExesist){
        return {
            error: 'Uername is already in use'
        }
    }

    //add the user
    const user = {id, username, room}
    users.push(user)
    return {
        user
    }
}


const removeUser = (id) => {
    const index = users.findIndex(user => {
        return user.id === id
    })

    if(index != -1){
        return users.splice(index,1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return usersInRoom = users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}