const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener('input', function() {
  const newSize = fontSizeControl.value + 'px';
  text.style.fontSize = newSize;
});