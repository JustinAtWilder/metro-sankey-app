import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

// Only load the script once
let compassScriptPromise = null;
function loadCompassScript() {
  if (window.wilder && window.wilder.compass) return Promise.resolve();
  if (compassScriptPromise) return compassScriptPromise;
  compassScriptPromise = new Promise((resolve, reject) => {
    if (document.querySelector('script[src="https://api.mncompass.org/compass.min.js"]')) {
      const checkLoaded = setInterval(() => {
        if (window.wilder && window.wilder.compass) {
          clearInterval(checkLoaded);
          resolve();
        }
      }, 50);
      setTimeout(() => {
        clearInterval(checkLoaded);
        reject(new Error("MN Compass script load timeout"));
      }, 10000);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://api.mncompass.org/compass.min.js";
    script.async = true;
    script.onload = () => {
      if (window.wilder && window.wilder.compass) resolve();
      else reject(new Error("MN Compass script loaded but not available"));
    };
    script.onerror = () => reject(new Error("Failed to load MN Compass script"));
    document.body.appendChild(script);
  });
  return compassScriptPromise;
}

const isValidItemId = (id) => /^[kKbB]\d+(-\d+)?$/.test((id || "").trim());

function getCurrentItemId(routeItemId) {
  if (routeItemId && isValidItemId(routeItemId)) return routeItemId;
  const urlParams = new URLSearchParams(window.location.search);
  const searchItemId = urlParams.get("item") || urlParams.get("itemId");
  if (searchItemId && isValidItemId(searchItemId)) return searchItemId;
  const hash = window.location.hash;
  if (hash && hash.length > 1) {
    let hashPart = hash.substring(1);
    const routeMatch = hashPart.match(
      /\/mncompass-embed\/([kKbB]\d+(?:-\d+)?)/,
    );
    if (routeMatch && isValidItemId(routeMatch[1])) return routeMatch[1];
    const directMatch = hashPart.match(/^([kKbB]\d+(?:-\d+)?)/);
    if (directMatch && isValidItemId(directMatch[1])) return directMatch[1];
  }
  return null;
}

const MNCompassEmbeds = ({
  width = 1200,
  height = 400,
  showDetails = false,
  title = null,
  showTitle = false,
  className = "",
  options = {},
}) => {
  const { itemId: routeItemId } = useParams();
  const chartContainerRef = useRef(null);

  // Only use state for error and loading
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Derive item ID directly from URL/route
  const currentItemId = getCurrentItemId(routeItemId);

  // Stable container ID per item ID
  const chartContainerIdRef = useRef("");
  useEffect(() => {
    chartContainerIdRef.current = `mn-compass-${
      currentItemId ? currentItemId.replace(/[^a-zA-Z0-9]/g, "-") : "none"
    }`;
    // eslint-disable-next-line
  }, [currentItemId]);
  const chartContainerId = chartContainerIdRef.current;

  useEffect(() => {
    let cancelled = false;

    // Only set loading/error if changed
    if (!currentItemId) {
      if (isLoading) setIsLoading(false);
      if (error) setError(null);
      return;
    }
    if (!isValidItemId(currentItemId)) {
      if (!error) setError(
        `Invalid item ID format: ${currentItemId}. Expected formats: k###, b####-1, b####-2, etc.`
      );
      if (isLoading) setIsLoading(false);
      return;
    }

    if (!isLoading) setIsLoading(true);
    if (error) setError(null);

    loadCompassScript()
      .then(() => {
        if (cancelled) return;
        if (
          !window.wilder ||
          !window.wilder.compass ||
          !window.wilder.compass.embed
        ) {
          if (!error) setError("MN Compass script failed to load.");
          if (isLoading) setIsLoading(false);
          return;
        }
        if (chartContainerRef.current) {
          chartContainerRef.current.innerHTML = "";
        }

        // Parse URL parameters for chart options
        const urlParams = new URLSearchParams(window.location.search);
        const urlWidth = urlParams.get("width");
        const urlHeight = urlParams.get("height");
        const urlShowDetails = urlParams.get("showDetails");

        // Calculate width
        let chartWidth = urlWidth ? parseInt(urlWidth) : width;
        if (typeof chartWidth === "string" && chartWidth.includes("%")) {
          const containerWidth =
            chartContainerRef.current?.parentElement?.clientWidth || 1200;
          chartWidth = Math.floor(
            (parseInt(chartWidth) / 100) * containerWidth,
          );
        }
        chartWidth = Number(chartWidth) || 1200;

        let chartHeight = urlHeight ? parseInt(urlHeight) : height;
        chartHeight = Number(chartHeight) || 400;

        const embedOptions = {
          id: chartContainerId,
          width: chartWidth,
          height: chartHeight,
          api: "api.mncompass.org",
          hash: false,
          details:
            urlShowDetails === "true" || (!urlShowDetails && showDetails)
              ? undefined
              : "no",
          ...options,
        };

        Object.keys(embedOptions).forEach((key) => {
          if (embedOptions[key] === undefined || embedOptions[key] === null) {
            delete embedOptions[key];
          }
        });

        window.wilder.compass.embed(currentItemId, embedOptions);

        setTimeout(() => {
          if (cancelled) return;
          if (
            chartContainerRef.current &&
            chartContainerRef.current.children.length === 0
          ) {
            if (!error) setError(
              `Chart failed to load. Please verify that item ID "${currentItemId}" exists in MN Compass.`
            );
          }
          if (isLoading) setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        if (!cancelled) {
          if (!error) setError(`Failed to load MN Compass script: ${err.message}`);
          if (isLoading) setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
    // Only rerun when currentItemId or sizing/options change
    // eslint-disable-next-line
  }, [currentItemId, width, height, showDetails, options]);

  // Get display title from URL or props
  const getDisplayTitle = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlTitle = urlParams.get("title");
    return urlTitle ? decodeURIComponent(urlTitle) : title;
  };

  const shouldShowTitle = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlShowTitle = urlParams.get("showTitle");
    return urlShowTitle === "true" || (urlShowTitle === null && showTitle);
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
            <div className="mt-2 text-sm">Item ID: {currentItemId}</div>
          )}
          <div className="mt-2 text-sm">
            <strong>Valid formats:</strong> k### (e.g., k173), b####-1 (e.g.,
            b1234-1), b####-2 (e.g., b5678-2)
          </div>
        </div>
      )}

      {isLoading && currentItemId && (
        <div className="flex items-center justify-center py-12 bg-gray-50 rounded-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">
            Loading chart {currentItemId}...
          </span>
        </div>
      )}

      {currentItemId && (
        <div
          ref={chartContainerRef}
          id={chartContainerId}
          className="compass-chart-container"
          style={{
            minHeight: isLoading ? 0 : height,
            width: "100%",
            display: isLoading ? "none" : "block",
          }}
        />
      )}

      {!currentItemId && !error && (
        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded">
          <strong>No chart specified.</strong> Please add an item ID to the URL.
          <div className="mt-2 text-sm">
            <strong>Examples:</strong>
            <br />
            • .../mncompass-embed/k173
            <br />
            • .../mncompass-embed/b1234-1
            <br />• .../mncompass-embed?item=k568
          </div>
        </div>
      )}
    </div>
  );
};

export default MNCompassEmbeds;