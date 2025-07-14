const ErrorDisplay = ({ message = "Something went wrong. Please try again later." }) => {
  return (
    <div className="flex items-center justify-center h-full p-4 text-red-600">
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default ErrorDisplay;
