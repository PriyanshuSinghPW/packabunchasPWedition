/**
 * Configuration - Game and bridge settings for Packabunchas
 */

const CONFIG = {
  // API Configuration
  api: {
    // Set to null if backend provides payload directly
    progressUrl: null,
    timeout: 5000,
    retryAttempts: 2,
    cacheDuration: 60000, // 1 minute
    // If true, expects payload from backend instead of fetching
    useProvidedPayload: false, // Changed to false for local-first approach
  },

  // Level Configuration (for Packabunchas, this represents levels completed)
  levels: {
    minLevel: 0,      // Starting point (0 levels completed)
    maxLevel: 13312,  // Maximum polyominos to rescue
    defaultLevel: 0,  // Default starting point
  },

  // Storage Configuration
  storage: {
    storageKey: 'packabunchas_progress',
    useAsyncStorage: false, // Web browser uses localStorage
  },

  // Sync Configuration
  sync: {
    // How often to sync progress (in milliseconds)
    syncInterval: 300000, // 5 minutes
    
    // Auto-save after level completion
    autoSave: true,
    
    // Send analytics after level completion
    sendAnalytics: true,
  },

  // Feature Flags
  features: {
    // Enable offline play
    offlineMode: true,
    
    // Prefer API data over local storage when both available
    preferApiData: false, // Prefer local for this game
    
    // Validate all data before using
    strictValidation: true,
  },

  // Logging
  logging: {
    enabled: true,
    logLevel: 'info', // 'debug', 'info', 'warn', 'error'
  },
};

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
