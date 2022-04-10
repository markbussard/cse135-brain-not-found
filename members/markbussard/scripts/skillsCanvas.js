function main () {
  try {
    TagCanvas.Start('skills-canvas', 'tags', {
      textFont: 'Roboto, sans-serif',
      textColour: '#333',
      textHeight: 20,
      fadeIn: 1500,
      noSelect: true,
      wheelZoom: false,
    });
  } catch (e) {
    console.error(`Error occured while trying to load skills-canvas: ${e}`);
    document.getElementById('skills-canvas-container').style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', main);