 function volume_sphere() {
      const radiusStr = document.getElementById('radius').value;
      const radius = Number(radiusStr);

      if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
      }

      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
      const roundedVolume = volume.toFixed(4);
      document.getElementById('volume').value = roundedVolume;
    }

    // Attach the function to the button click event
    document.getElementById('submit').addEventListener('click', volume_sphere);
