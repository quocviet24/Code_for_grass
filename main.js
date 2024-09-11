function openLetter() {
  const envelope = document.querySelector('.envelope');
  const promptText = document.getElementById('promptText');
  const body = document.querySelector('body');
  const heart = document.querySelector('.heart');
  
  envelope.classList.toggle('open');
  
  if (envelope.classList.contains('open')) {
    promptText.classList.add('hidden');
    heart.style.opacity = '1';
    
    setTimeout(function() {
      body.classList.add('fadeout');
      setTimeout(function() {
        window.location.href = 'heart.html';
      }, 1000); // Thời gian cho hiệu ứng fade-out hoàn tất
    }, 5000); // Thời gian chờ trước khi bắt đầu hiệu ứng
  } else {
    heart.style.opacity = '0';
  }
}
