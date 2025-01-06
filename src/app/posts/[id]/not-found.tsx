export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">
        Oops! The post you&apos;re looking for doesn&apos;t exist.
      </h2>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Go Back
      </button>
    </div>
  );
}
