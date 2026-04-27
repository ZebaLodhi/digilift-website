export default function SuccessPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful! 🎉</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you! Your payment has been processed successfully.
        </p>
  
        <a
          href="/"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold"
        >
          Go back home
        </a>
      </div>
    );
  }
  