import userRepository from "../repositories/user.repository"


type User = {
    uuid?: string
    username: string
    password?: string
}

export default User