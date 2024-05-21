import errorsEnum from "../errors.enum.js"



const ErrorHandler = (error, req, res, next) => {
    const errorsCodes = Object.values(errorsEnum)

    if(!errorsCodes.includes(error.code)){
        console.error(error.message)
        return res.status(500).json({ status: "error", error: "Internal Error!" });
    }

    console.error(error.message)
    res.status(error.code).json({ status: "error", error: error.message, cause: error.cause });
}

export default ErrorHandler