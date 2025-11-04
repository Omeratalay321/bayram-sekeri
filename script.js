// HTML'deki buton ve diğer elementleri buluyoruz
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.querySelector('.question');
const buttonsDiv = document.querySelector('.buttons');


// --- HAYIR BUTONU İŞLEMLERİ (KAÇIŞ SİHRİ) ---

// 'Hayır' butonunun üzerine fare yaklaştığında çalışacak fonksiyon
noBtn.addEventListener('mouseover', function() {
    
    // Rastgele yeni X (yatay) ve Y (dikey) koordinatları hesaplıyoruz
    // Bu, butonun ekranın içinde rastgele bir yere zıplamasını sağlar
    const newX = Math.random() * (window.innerWidth - noBtn.clientWidth * 2); 
    const newY = Math.random() * (window.innerHeight - noBtn.clientHeight * 2);
    
    // Butonun yeni pozisyonunu belirliyoruz
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
});


// --- EVET BUTONU İŞLEMLERİ (KAZANMA ANI) ---

yesBtn.addEventListener('click', function() {
    
    // Sayfadaki "Hayır" butonu ve diğer elementleri temizliyoruz
    buttonsDiv.innerHTML = ''; 
    
    // Yeni bir "kazanma" mesajı yazıyoruz
    question.textContent = 'Biliyordum! Seni Seviyorum! ❤️';
    
    // Arka planı değiştirip zaferi belli ediyoruz
    document.body.style.backgroundColor = '#90ee90'; // Açık yeşil
    
    // Eğer istersen buraya konfeti, balon gibi şeyler de eklenebilir!
});