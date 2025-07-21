export const createResponse = (statusCode, body, headers = {}) => {
  // console.log("Creating response:", {
  //   statusCode,
  //   body,
  //   headers,
  // });

  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      ...headers,
    },
    body: JSON.stringify(body),
  };
};

export const successResponse = (data) => {
  console.log("Success response data:", data);
  return createResponse(200, data);
};

export const errorResponse = (error, statusCode = 500) => {
  console.error("Error response:", {
    statusCode,
    error: error?.message || error,
    stack: error?.stack,
  });

  return createResponse(statusCode, {
    error: error?.message || error,
  });
};

export const validationError = (message) => {
  console.warn("Validation error:", message);
  return createResponse(400, { error: message });
};
