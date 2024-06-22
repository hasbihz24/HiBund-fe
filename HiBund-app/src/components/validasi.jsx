import React from "react";
// Utility function to validate GitHub URL
function validateGithubUrl(url) {
    const githubPattern = /^https?:\/\/(?:www\.)?github\.com\/[a-zA-Z0-9_-]+$/;
    return githubPattern.test(url);
  }

  export default validateGithubUrl