function verifyAge(isAdult) {
    if (isAdult) {
      document.getElementById('ageVerificationModalUnique').style.display = 'none';
    } else {
     
      window.close(); // This will attempt to close the current tab/window
      // Fallback for browsers that block window.close()
      if (!window.closed) {
        window.location.href = 'about:blank';
      }
    }
  }

  window.onload = function() {
    document.getElementById('ageVerificationModalUnique').style.display = 'flex';
  }