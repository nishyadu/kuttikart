const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-primary-600"></div>
        <p className="mt-4 text-lg text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;

