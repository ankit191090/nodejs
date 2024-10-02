

const success = function(data, message){
    data = data || {}
    return { code : 200, data: data, message :message};
}

const error = function(error, data){
    error = error || {}
    if (!code && !data) {
        return { code: code, message: 'Internal Server Error' }
    }

    return { code: code, data: (data ? (data.message ? data.message : data) : 'Something went wrong!'), error: true }
}

const generateErrorObject = (code, data) => {
    code = code || 500;
   return { code: code, message: (data.message?data.message:'Something went wrong!'), error: true }
}



module.exports= {
    success,
    error,
    generateErrorObject,
}