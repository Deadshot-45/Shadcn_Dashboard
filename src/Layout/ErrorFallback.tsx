export const ErrorFallback = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-red-50 text-center px-6">
      <h1 className="text-3xl font-bold text-red-600 mb-2">
        Something went wrong
      </h1>

      <p className="text-gray-700 max-w-md">
        An unexpected error occurred. Please reload the page or try again later.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-5 py-2 rounded-lg bg-red-600 text-white font-medium shadow hover:bg-red-700 transition-all"
      >
        Reload Page
      </button>
    </div>
  );
};
