const sendError = (res, statusCode, message) => {
  return res.status(statusCode).json({error: message})
}

const sendSuccess = (res, statusCode, message) => {
  return res.status(statusCode).json({message})
}

const InternalServerError = (res, message = "Internal server error") => {
  return sendError(res, 500, message)
}

const InvalidRequestBody = (res, message = "Invalid request body") => {
  return sendError(res, 400, message)
}

const entityAlreadyExists = (res, entity) => {
  const message = `${entity} already exists`
  return sendError(res, 400, message)
}

const entityCreatedSuccessfully = (res, entity) => {
  const message = `${entity} created successfully`
  return sendSuccess(res, 200, message)
}

const entityNotExist = (res, entity) => {
  const message = `${entity} doesn't exist`
  return sendSuccess(res, 404, message)
}