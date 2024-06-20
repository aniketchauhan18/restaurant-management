const sendError = (res, statusCode, message) => {
  return res.status(statusCode).json({ error: message });
};

const sendSuccess = (res, statusCode, message) => {
  return res.status(statusCode).json({ message });
};

const sendResponse = (res, statusCode, data) => {
  return res.status(statusCode).json({ data });
};

const InternalServerError = (res, message = "Internal server error") => {
  return sendError(res, 500, message);
};

const InvalidRequestBody = (res, message = "Invalid request body") => {
  console.log(message);
  return sendError(res, 400, message);
};

const entityAlreadyExists = (res, entity) => {
  const message = `${entity} already exists`;
  console.log(message);
  return sendError(res, 400, message);
};

const entityCreatedSuccessfully = (res, entity) => {
  const message = `${entity} created successfully`;
  console.log("hhoooo");
  return sendSuccess(res, 200, message);
};

const entityNotExist = (res, entity) => {
  const message = `${entity} doesn't exist`;
  return sendError(res, 404, message);
};

const entityDeletedSucessfully = (res, entity) => {
  const message = `${entity} deleted sucessfully`;
  return sendSuccess(res, 200, message);
};

const entityUpdatedSuccessfully = (res, entity) => {
  const message = `${entity} updated Successfully`;
  return sendSuccess(res, 200, message);
};

const sendEntityResponse = (res, data) => {
  return sendResponse(res, 200, data);
};

module.exports = {
  InternalServerError,
  InvalidRequestBody,
  entityAlreadyExists,
  entityCreatedSuccessfully,
  entityNotExist,
  entityDeletedSucessfully,
  entityUpdatedSuccessfully,
  sendEntityResponse,
};
