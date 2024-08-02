import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch("http://localhost:5000/api/products");
  const data = await response.json();
  localStorage.setItem("products", JSON.stringify(data));
  localStorage.setItem("lastUpdated", Date.now()); // Set the timestamp for last update
  return data;
};

export const fetchPosters = async () => {
  const response = await fetch("http://localhost:5000/api/getposters");
  const data = await response.json();
  localStorage.setItem("posters", JSON.stringify(data));
  return data;
};

export const clearLocalStorageAndFetchData = async () => {
  localStorage.clear(); // Clear all data from localStorage
  await fetchData(); // Fetch new data
  await fetchPosters(); // Fetch new posters
};
export const updateProducts = async () => {
  localStorage.removeItem("products"); // Clear products from localStorage
  localStorage.removeItem("lastUpdated"); // Clear lastUpdated from localStorage
  await fetchData(); // Fetch new data
};

const ProgressBar = () => {
  const [width, setWidth] = useState(5);

  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
    enabled: !localStorage.getItem("products"), // Only enable query if products are not available in localstorage
  });
  const postersQuery = useQuery({
    queryKey: ["posters"],
    queryFn: fetchPosters,
    enabled: !localStorage.getItem("posters"),
  });

  useEffect(() => {
    let currentWidth = 0;
    const interval = setInterval(() => {
      currentWidth += 1;
      if (currentWidth <= 98) {
        setWidth(currentWidth);
      } else {
        clearInterval(interval);
      }
    }, 10);

    // Check if it's time to clear localStorage and fetch new data
    const clearLocalStorageInterval = setInterval(() => {
      const lastUpdated = localStorage.getItem("lastUpdated");
      if (lastUpdated) {
        const threeHoursAgo = Date.now() - 3 * 60 * 60 * 1000; // Calculate 3 hours ago
        const oneMinuteAgo = Date.now() - 1 * 60 * 1000; // Calculate 1 minute ago for testing purpose

        if (lastUpdated <= threeHoursAgo) {
          clearLocalStorageAndFetchData();
        }
      }
    }, 60000); // Check every minute

    return () => {
      clearInterval(interval);
      clearInterval(clearLocalStorageInterval);
    };
  }, [isLoading, error, data]);

  return (
    <>
      {isLoading && (
        <div className="w-full bg-gray-200 fixed z-[102] top-0 rounded-full h-[2px] mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-[2px] rounded-full dark:bg-blue-500"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      )}
    </>
  );
};

export default ProgressBar;
