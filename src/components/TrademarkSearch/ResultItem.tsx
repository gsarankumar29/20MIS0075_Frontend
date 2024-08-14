import React from "react";

interface ResultItemProps {
  mark: string;
  owner: string;
  serialNumber: string;
  filingDate: string;
  status: string;
  registrationDate: string;
  expirationDate: string;
  description: string;
  classes: string[];
}

const ResultItem: React.FC<ResultItemProps> = ({
  mark,
  owner,
  serialNumber,
  filingDate,
  status,
  registrationDate,
  expirationDate,
  description,
  classes,
}) => {
  // Function to render the green dot if the status is 'Live/Registered'
  const renderStatus = (status: string) => {
    if (status === "Live/Registered") {
      return (
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          {status}
        </div>
      );
    }
    return status;
  };

  return (
    <div className="flex justify-between gap-8 w-full px-4 py-2 border-b border-stone-200">
      <div className="w-1/5">{mark}</div>
      <div className="w-1/5">
        <div>Owner: {owner}</div>
        <div>Serial Number: {serialNumber}</div>
        <div>Filing Date: {filingDate}</div>
        <div>Registration Date: {registrationDate}</div>
        <div>Expiration Date: {expirationDate}</div>
      </div>
      <div className="w-1/5">
        {renderStatus(status)}
      </div>
      <div className="w-1/5">
        <div>Description: {description}</div>
        <div>Classes: {classes.join(", ")}</div>
      </div>
    </div>
  );
};

export default ResultItem;

