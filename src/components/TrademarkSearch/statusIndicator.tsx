
// import React from "react";

// interface StatusIndicatorProps {
//   status: "searching" | "noResults" | "error" | "results";
//   count?: number;
// }

// const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, count }) => {
//   let message = "";
//   switch (status) {
//     case "searching":
//       message = "Searching...";
//       break;
//     case "noResults":
//       message = "No Results Found";
//       break;
//     case "error":
//       message = "Error Occurred";
//       break;
//     case "results":
//       message = `About ${count} Trademarks found for "nike"`;
//       break;
//   }

//   return (
//     <div className="text-base font-bold leading-loose text-gray-600">
//       {message}
//     </div>
//   );
// };

// export default StatusIndicator;

import React from 'react';

interface StatusIndicatorProps {
  status: 'searching' | 'completed'; // Adjust this based on your actual status values
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  return (
    <div className="status-indicator">
      {status === 'searching' ? (
        <p>Searching...</p>
      ) : (
        <p>Search Completed</p>
      )}
    </div>
  );
};

export default StatusIndicator;
