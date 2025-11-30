export default function LandingPage() {
  const handleLaunch = () => {
      window.location.href = 'https://app.47eagle.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 font-sans transition-colors duration-500">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
            47 Eagle Protocol
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Cross-chain yield aggregator powered by LayerZero V2
          </p>
          <button
            onClick={handleLaunch}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Launch App
          </button>
        </div>
      </div>
    </div>
  );
}