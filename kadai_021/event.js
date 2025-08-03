const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
  setTimeout(() => {
    const txt = document.getElementById('text');
    txt.textContent = 'ボタンをクリックしました';
  }, 2000);
});