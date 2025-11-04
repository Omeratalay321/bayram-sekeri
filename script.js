// HTML'deki buton ve diğer elementleri buluyoruz
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.querySelector('.question');
const buttonsDiv = document.querySelector('.buttons');

// --- BUTON KAÇIŞ FONKSİYONU ---
// Hem fare hem dokunma olayları için kullanıyoruz.
function moveNoBtn(e) {
    // Mobil cihazlarda varsayılan dokunma hareketini (kaydırma/zoom) engeller.
    // Bu, butona dokunulduğunda hemen kaçmasını sağlar.
    if (e && e.type === 'touchstart') {
        e.preventDefault(); 
    }
    
    // Rastgele yeni X (yatay) ve Y (dikey) koordinatları hesaplıyoruz
    const newX = Math.random() * (window.innerWidth - noBtn.clientWidth * 2); 
    const newY = Math.random() * (window.innerHeight - noBtn.clientHeight * 2);
    
    // Butonun yeni pozisyonunu belirliyoruz
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
}

// --- HAYIR BUTONU İŞLEMLERİ (KAÇIŞ SİHRİ) ---
// Fare (PC) ve DOKUNMA (MOBİL) olaylarında kaçması için dinliyoruz.
noBtn.addEventListener('mouseover', moveNoBtn);
noBtn.addEventListener('touchstart', moveNoBtn);


// --- EVET BUTONU İŞLEMLERİ (KAZANMA ANI) ---

yesBtn.addEventListener('click', function() {
    
    // Sayfadaki "Hayır" butonu ve diğer elementleri temizliyoruz
    buttonsDiv.innerHTML = ''; 
    
    // Yeni bir "kazanma" mesajı yazıyoruz
    question.textContent = 'Biliyordum! Seni Seviyorum! ❤️';
    
    // Arka planı değiştirip zaferi belli ediyoruz
    document.body.style.backgroundColor = '#90ee90'; // Açık yeşil
});
