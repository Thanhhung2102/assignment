class User {
    email: String;
    phone: String;
    password: String;
    role: number;
    constructor(
        email: String,
        phone: String,
        password: String,
        role: number
    ){
        this.email = email,
        this.phone = phone,
        this.password = password,
        this.role = role
    }
}


export default User