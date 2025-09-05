import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';

const MNCompassEmbeds = ({ 
  itemId = "k169",
  width = "100%", 
  height = 400, 
  showDetails = false,
  title = null,
  showTitle = false,
  className = "",
  options = {}
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentItemId, setCurrentItemId] = useState(itemId);
  const chartContainerRef = useRef(null);
  
  // Get route parameters
  const { itemId: routeItemId } = useParams();

  // Determine which item ID to use
  useEffect(() => {
    // Parse URL search params for additional options
    const urlParams = new URLSearchParams(window.location.search);
    const searchItemId = urlParams.get('item') || urlParams.get('itemId');
    
    // Priority: 1. Route param, 2. URL search param, 3. Component prop
    let finalItemId = routeItemId || searchItemId || itemId;
    
    console.log('Route itemId:', routeItemId);
    console.log('Search itemId:', searchItemId);
    console.log('Final itemId:', finalItemId);
    
    setCurrentItemId(finalItemId);
  }, [routeItemId, itemId]);

  // Load and embed chart
  useEffect(() => {
    const loadAndEmbedChart = async () => {
      if (!currentItemId) return;

      try {
        setIsLoading(true);
        setError(null);

        // Load MN Compass script if not already loaded
        if (!window.wilder || !window.wilder.compass) {
          await loadCompassScript();
        }

        // Clear any previous content
        if (chartContainerRef.current) {
          chartContainerRef.current.innerHTML = '';
        }

        // Parse URL parameters for chart options
        const urlParams = new URLSearchParams(window.location.search);
        const urlWidth = urlParams.get('width');
        const urlHeight = urlParams.get('height');
        const urlShowDetails = urlParams.get('showDetails');
        const urlTitle = urlParams.get('title');
        const urlShowTitle = urlParams.get('showTitle');

        // Calculate width
        let chartWidth = urlWidth ? parseInt(urlWidth) : width;
        if (typeof chartWidth === 'string' && chartWidth.includes('%')) {
          const containerWidth = chartContainerRef.current?.parentElement?.clientWidth || 800;
          chartWidth = Math.floor((parseInt(chartWidth) / 100) * containerWidth);
        }

        // Build embed options
        const embedOptions = {
          id: chartContainerRef.current.id,
          width: chartWidth,
          height: urlHeight ? parseInt(urlHeight) : height,
          api: 'api.mncompass.org',
          hash: false, // Prevent compass from changing our URL
          details: (urlShowDetails === 'true' || (!urlShowDetails && showDetails)) ? undefined : 'no',
          ...options // Allow additional options from props
        };

        // Remove undefined/null values
        Object.keys(embedOptions).forEach(key => {
          if (embedOptions[key] === undefined || embedOptions[key] === null) {
            delete embedOptions[key];
          }
        });

        console.log(`Embedding MN Compass item: ${currentItemId}`, embedOptions);
        
        window.wilder.compass.embed(currentItemId, embedOptions);
        setIsLoading(false);

      } catch (err) {
        console.error('Chart embedding error:', err);
        setError(`Failed to load chart: ${err.message}`);
        setIsLoading(false);
      }
    };

    loadAndEmbedChart();
  }, [currentItemId, width, height, showDetails, options]);

  const loadCompassScript = () => {
    return new Promise((resolve, reject) => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="compass.min.js"]');
      
      if (existingScript) {
        if (window.wilder && window.wilder.compass) {
          resolve();
          return;
        }
        
        const checkLoaded = setInterval(() => {
          if (window.wilder && window.wilder.compass) {
            clearInterval(checkLoaded);
            resolve();
          }
        }, 100);
        
        setTimeout(() => {
          clearInterval(checkLoaded);
          reject(new Error('Script loading timeout'));
        }, 10000);
        return;
      }

      // Create new script
      const script = document.createElement('script');
      script.src = 'https://api.mncompass.org/compass.min.js';
      script.async = true;
      
      script.onload = () => {
        setTimeout(() => {
          if (window.wilder && window.wilder.compass) {
            resolve();
          } else {
            reject(new Error('MN Compass library not available after script load'));
          }
        }, 100);
      };
      
      script.onerror = () => {
        reject(new Error('Failed to load MN Compass script'));
      };
      
      document.head.appendChild(script);
    });
  };

  // Get display title from URL or props
  const getDisplayTitle = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlTitle = urlParams.get('title');
    return urlTitle ? decodeURIComponent(urlTitle) : title;
  };

  const shouldShowTitle = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlShowTitle = urlParams.get('showTitle');
    return urlShowTitle === 'true' || (urlShowTitle === null && showTitle);
  };

  return (
    <div className={`mn-compass-embed ${className}`.trim()}>
      {shouldShowTitle() && getDisplayTitle() && (
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          {getDisplayTitle()}
        </h3>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          <strong>Error:</strong> {error}
          <div className="mt-2 text-sm">
            Item ID: {currentItemId}
          </div>
        </div>
      )}
      
      {isLoading && (
        <div className="flex items-center justify-center py-12 bg-gray-50 rounded-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Loading chart data...</span>
        </div>
      )}
      
      <div 
        ref={chartContainerRef}
        id={`mn-compass-${currentItemId}-${Date.now()}`}
        className="compass-chart-container"
        style={{ 
          minHeight: isLoading ? 0 : height,
          width: '100%',
          display: isLoading ? 'none' : 'block'
        }}
      />
    </div>
  );
};

export default MNCompassEmbeds;
