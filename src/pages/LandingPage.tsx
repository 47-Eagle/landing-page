export default function LandingPage() {
  const handleLaunch = () => {
      window.location.href = 'https://app.47eagle.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 font-sans transition-colors duration-500">
      {/* Navigation */}
      <nav className="w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="font-bold tracking-tight text-xl text-gray-900 dark:text-white">47 EAGLE</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a href="#features" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Features</a>
            <a href="#ecosystem" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Ecosystem</a>
            <a href="https://docs.47eagle.com" target="_blank" rel="noreferrer" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
              Docs
            </a>
          </div>

          <button
            onClick={handleLaunch}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
          >
            Launch App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30 text-amber-700 dark:text-amber-400 text-xs font-bold tracking-widest uppercase mb-8">
            <span>🚀 V2.1.0 Live on Mainnet</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
            Automate Your <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Cross-Chain Yield
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            The first omnichain yield aggregator for WLFI. Bridge, stake, and compound in a single transaction. Powered by LayerZero V2.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleLaunch}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
            >
              Start Earning
              <span>→</span>
            </button>
            <button
              onClick={() => window.open('https://docs.47eagle.com', '_blank')}
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Read Docs
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Architecture</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Built on LayerZero V2 for seamless cross-chain interoperability and maximum capital efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-500/30 transition-colors">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-amber-600">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">One-Click Atomic Withdrawal</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Withdraw EAGLE from any chain and receive WLFI on Ethereum in a single transaction.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-500/30 transition-colors">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-amber-600">🌐</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Unified Liquidity</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                One address across all EVM chains. No more confusion. Assets are fungible and transferable.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-500/30 transition-colors">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-amber-600">📈</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Optimized Yield</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Assets deployed into Charm Finance Alpha Vaults, earning trading fees with automated rebalancing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 opacity-70">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">© 2025 47 Eagle Protocol</span>
            </div>

            <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
