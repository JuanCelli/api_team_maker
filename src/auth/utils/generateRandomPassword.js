export const generateRandomPassword = (length = 16) =>{
    let password = ""
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(let i = 0; i < length ;i++){
        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters.charAt(randomIndex)
    }
    console.log(password)
    return password
}