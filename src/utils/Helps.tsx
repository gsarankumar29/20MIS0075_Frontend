// src/utils/Helper.ts

// Define the type for the Helper object
type HelperType = {
    getUserAPI: () => string;
  };
  
  // Create and export the Helper object
  const Helper: HelperType = {
    getUserAPI: () => 'https://vit-tm-task.api.trademarkia.app/api/v3/us?1=21' // Replace with your actual endpoint
  };
  
  export default Helper;
  