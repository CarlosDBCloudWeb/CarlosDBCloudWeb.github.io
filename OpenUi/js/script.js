// script.js
function toggleSize(element) {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    } else {
      document.querySelectorAll('.image-box').forEach(box => box.classList.remove('active'));
      element.classList.add('active');
    }
  }
  
  // 打开全屏图片
  function openImage(element) {
    const imgSrc = element.querySelector('img').src;
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    overlayImage.src = imgSrc;
    overlay.style.display = 'flex';
  }
  
  // 关闭全屏图片
  function closeImage() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }
  