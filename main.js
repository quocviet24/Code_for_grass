function openLetter() {
  const envelope = document.querySelector('.envelope');
  const promptText = document.getElementById('promptText');
  
  envelope.classList.toggle('open');
  
  // Ẩn dòng chữ "Hãy ấn vào lá thư đi" khi bức thư mở
  if (envelope.classList.contains('open')) {
      promptText.classList.add('hidden');
  }
}
