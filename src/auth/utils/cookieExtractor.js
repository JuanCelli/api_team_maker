const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwtCookieToken']
    }
    return token;
}

export default cookieExtractor