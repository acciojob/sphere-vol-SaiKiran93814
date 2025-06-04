function volume_sphere() {
  // Get the radius input value as a string
  const radiusStr = document.getElementById('radius').value;

  // Convert to number
  const radius = Number(radiusStr);

  // Validate: radius must be a non-negative number
  if (isNaN(radius) || radius < 0) {
    // Invalid input - show NaN
    document.getElementById('volume').value = 'NaN';
    return;
  }

  // Calculate volume using formula V = (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round to 4 decimal places
  const roundedVolume = volume.toFixed(4);

  // Display result
  document.getElementById('volume').value = roundedVolume;
}


  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeOutput.value = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
