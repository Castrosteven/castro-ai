const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: "CFPAT-Ttwt5tTE2yrO92VwBgFsWV-JXMDY0Ij-kcl0ytwBLkE",
  })

  return contentfulClient
    .getSpace("7bkmtfyy5w8g")
    .then(space => space.getEnvironment("master"))
}