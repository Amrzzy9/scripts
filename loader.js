(function() {
  const scripts = [
    'https://raw.githubusercontent.com/Amrzzy9/scripts/main/Luna-Theme%20v2.js',
    'https://cdn.jsdelivr.net/gh/Amrzzy9/scripts@main/important%20for%20theme.js'
  ];

  scripts.forEach(src => {
    const s = document.createElement('script');
    s.src = src + '?cache=' + Date.now(); // cache buster to ensure latest version
    document.head.appendChild(s);
  });
})();