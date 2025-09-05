import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';

const MNCompassEmbeds = ({ 
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
  const [currentItemId, setCurrentItemId] = useState(null);
  const chartContainerRef = useRef(null);
  
  // Get route parameters
  const { itemId: routeItemId } = useParams();

  // Validate item ID format - accepts k###, b####-1, b####-2, etc.
  const isValidItemId = (id) => {
    if (!id || typeof id !== 'string') return false;
    // Match patterns: k followed by numbers, or b followed by numbers-numbers
    return /^[kKbB]\d+(-\d+)?$/.test(id.trim());
  };

  // Parse item ID from URL
  const parseItemIdFromUrl = () => {
    // Priority 1: Route parameter (/mncompass-embed/k173)
    if (routeItemId && isValidItemId(routeItemId)) {
      console.log('Using route item ID:', routeItemId);
      return routeItemId;
    }

    // Priority 2: URL search params (?item=k173 or ?itemId=k173)
    const urlParams = new URLSearchParams(window.location.search);
    const searchItemId = urlParams.get('item') || urlParams.get('itemId');
    if (searchItemId && isValidItemId(searchItemId)) {
      console.log('Using search param item ID:', searchItemId);
      return searchItemId;
    }

    // Priority 3: Hash fragment (#k173)
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      // Remove leading # and any router path
      let hashPart = hash.substring(1);
      
      // If it contains the route path, extract just the item ID part
      const routeMatch = hashPart.match(/\/mncompass-embed\/([kKbB]\d+(?:-\d+)?)/);
      if (routeMatch && isValidItemId(routeMatch[1])) {
        console.log('Using hash route item ID:', routeMatch[1]);
        return routeMatch[1];
      }
      
      // Check if hash directly contains item ID (fallback)
      const directMatch = hashPart.match(/^([kKbB]\d+(?:-\d+)?)/);
      if (directMatch && isValidItemId(directMatch[1])) {
        console.log('Using direct hash item ID:', directMatch[1]);
        return directMatch[1];
      }
    }

    console.log('No valid item ID found in URL');
    return null;
  };

  // Update item ID when URL changes
  useEffect(() => {
    const newItemId = parseItemIdFromUrl();
    
    if (newItemId && newItemId !== currentItemId) {
      console.log('Updating item ID from', currentItemId, 'to', newItemId);
      setCurrentItemId(newItemId);
    } else if (!newItemId && !currentItemId) {
      // Only show error if no item ID is provided at all
      setError('No valid item ID provided. Please include a valid item ID (k###, b####-1, etc.) in the URL.');
      setIsLoading(false);
    }
  }, [routeItemId, currentItemId]);

  // Load and embed chart
  useEffect(() => {
    const loadAndEmbedChart = async () => {
      if (!currentItemId) {
        console.log('No current item ID, skipping embed');
        return;
      }

      if (!isValidItemId(currentItemId)) {
        setError(`Invalid item ID format: ${currentItemId}. Expected formats: k###, b####-1, b####-2, etc.`);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        console.log('Starting embed for item ID:', currentItemId);

        // Load MN Compass script if not already loaded
        if (!window.wilder || !window.wilder.compass) {
          console.log('Loading MN Compass script...');
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
        
        // Call the embed function
        window.wilder.compass.embed(currentItemId, embedOptions);
        
        // Set a timeout to check if embed was successful
        setTimeout(() => {
          if (chartContainerRef.current && chartContainerRef.current.children.length === 0) {
            setError(`Chart failed to load. Please verify that item ID "${currentItemId}" exists in MN Compass.`);
          }
          setIsLoading(false);
        }, 3000);

      } catch (err) {
        console.error('Chart embedding error:', err);
        setError(`Failed to load chart: ${err.message}`);
        setIsLoading(false);
      }
    };

    loadAndEmbedChart();
  }, [currentItemId, width, height, showDetails, options]);

  // Listen for URL changes (back/forward buttons, manual URL changes)
  useEffect(() => {
    const handlePopState = () => {
      const newItemId = parseItemIdFromUrl();
      if (newItemId && newItemId !== currentItemId) {
        setCurrentItemId(newItemId);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentItemId]);

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
          {currentItemId && (
            <div className="mt-2 text-sm">
              Item ID: {currentItemId}
            </div>
          )}
          <div className="mt-2 text-sm">
            <strong>Valid formats:</strong> k### (e.g., k173), b####-1 (e.g., b1234-1), b####-2 (e.g., b5678-2)
          </div>
        </div>
      )}
      
      {isLoading && currentItemId && (
        <div className="flex items-center justify-center py-12 bg-gray-50 rounded-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Loading chart {currentItemId}...</span>
        </div>
      )}
      
      {currentItemId && (
        <div 
          ref={chartContainerRef}
          id={`mn-compass-${currentItemId.replace(/[^a-zA-Z0-9]/g, '-')}-${Date.now()}`}
          className="compass-chart-container"
          style={{ 
            minHeight: isLoading ? 0 : height,
            width: '100%',
            display: isLoading ? 'none' : 'block'
          }}
        />
      )}
      
      {!currentItemId && !error && (
        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded">
          <strong>No chart specified.</strong> Please add an item ID to the URL.
          <div className="mt-2 text-sm">
            <strong>Examples:</strong><br/>
            • .../mncompass-embed/k173<br/>
            • .../mncompass-embed/b1234-1<br/>
            • .../mncompass-embed?item=k568
          </div>
        </div>
      )}
    </div>
  );
};

export default MNCompassEmbeds;