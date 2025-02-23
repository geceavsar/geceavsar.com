import React from "react";

const ErrorPage = ({ errorCode }) => {
  const messages = {
    400: "Bad Request – The server couldn't understand your request.",
    401: "Unauthorized – You need to log in to access this resource.",
    403: "Forbidden – You don't have permission to access this resource.",
    404: "Page Not Found – The requested page doesn't exist.",
    408: "Request Timeout – The server timed out waiting for your request.",
    418: "I'm a Teapot – ☕ (Yes, this is real.)",
    429: "Too Many Requests – You've sent too many requests in a short time.",
    500: "Internal Server Error – Something went wrong on our side.",
    502: "Bad Gateway – The server received an invalid response.",
    503: "Service Unavailable – The server is temporarily unavailable.",
    504: "Gateway Timeout – The server took too long to respond.",
  };

  const message = messages[errorCode] || "An unexpected error occurred.";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-800 px-4">
      <div className="text-center bg-transparent p-6 max-w-md">
        <h1 className="text-5xl font-bold text-black-500 dark:text-white dark:opacity-70 mb-4">{errorCode}</h1>
        <p className="text-lg text-gray-600 mb-6">{message}</p>
        <a href="/" className="hover:text-blue-500 dark:text-white dark:opacity-70 transition">back</a>
      </div>
    </div>
  );
};

export default ErrorPage;
