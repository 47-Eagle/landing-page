import React, { useState, useEffect } from 'react';
import { ICONS } from '../config/icons';

// Supported chains for the landing page
type SupportedChain = 'base' | 'ethereum';

const BaseSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="50" fill="#0052FF"/>
  </svg>
);

const EthereumSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid">
    <path fill="#627EEA" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" fillOpacity=".602"/>
    <path fill="#627EEA" d="M127.962 0L0 212.32l127.962 75.639V154.158z"/>
    <path fill="#627EEA" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z" fillOpacity=".602"/>
    <path fill="#627EEA" d="M127.962 416.905v-104.72L0 236.585z"/>
    <path fill="#627EEA" d="M127.961 287.958l127.96-75.637-127.96-58.162z" fillOpacity=".2"/>
    <path fill="#627EEA" d="M0 212.32l127.96 75.638v-133.8z" fillOpacity=".602"/>
  </svg>
);

const FALLBACK_SVGS: Record<SupportedChain, React.FC<{ className?: string }>> = {
  ethereum: EthereumSVG,
  base: BaseSVG,
};

interface ChainIconProps {
  chain: SupportedChain;
  className?: string;
  alt?: string;
}

export const ChainIcon: React.FC<ChainIconProps> = ({ chain, className = "w-6 h-6", alt }) => {
  const [srcIndex, setSrcIndex] = useState(0);
  const [error, setError] = useState(false);

  const getSources = () => {
    const sources: string[] = [];

    // Use ICONS if available
    const iconKey = chain.toUpperCase() as keyof typeof ICONS;
    if (iconKey && ICONS[iconKey]) {
      sources.push(ICONS[iconKey]);
    }

    // TrustWallet fallback
    const trustWalletChain = chain === 'base' ? 'base' : 'ethereum';
    sources.push(`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${trustWalletChain}/info/logo.png`);

    return sources;
  };

  const sources = getSources();

  const handleError = () => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex(prev => prev + 1);
    } else {
      setError(true);
    }
  };

  // Reset state when chain prop changes
  useEffect(() => {
    setSrcIndex(0);
    setError(false);
  }, [chain]);

  if (error || sources.length === 0) {
    const Fallback = FALLBACK_SVGS[chain] || EthereumSVG;
    return <Fallback className={className} />;
  }

  return (
    <img
      src={sources[srcIndex]}
      alt={alt || chain}
      className={className}
      onError={handleError}
      crossOrigin="anonymous"
      loading="lazy"
    />
  );
};
