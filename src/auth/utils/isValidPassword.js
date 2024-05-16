import bcypt from 'bcrypt'

const isValidPassword = (password,hash) => {
    return bcypt.compareSync(password,hash)
}

export default isValidPassword
