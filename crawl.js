function normalizeURL(url) {
    url = url.trim();
  
    url = url.toLowerCase();
  
    if (url.startsWith('http://') || url.startsWith('https://')) {
      url = url.substring(url.indexOf('://') + 3);
    }
  
    if (url.endsWith('/')) {
      url = url.substring(0, url.length - 1);
    }
  
    return url;
  }
  
  module.exports = {
    normalizeURL
  };