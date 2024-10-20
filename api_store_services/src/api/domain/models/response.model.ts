export const successResponse = (data: any) => {
    return {
      status: true,
      code: 200,
      data: data,
    };
  };

  export const validateResponse = (validation: any) => {
    const cleanedMessage = validation.replace(/\"/g, "");
    return {
      status: false,
      code: 400,
      error: cleanedMessage,
    };
  };