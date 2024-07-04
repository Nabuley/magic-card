/*// 이미지를 오른쪽에서 왼쪽으로 이동시키는 함수
function slideImages() {
    const heroImage = document.getElementById('hero-image');
    const combatScreenshot = document.getElementById('combat-screenshot');

    // 왼쪽 끝까지 이동 후, 오른쪽 끝으로 다시 보내는 로직
    if (heroImage.style.left === '100%') {
        heroImage.style.left = '-100%';
    } else {
        heroImage.style.left = '-100%';
    }

    if (combatScreenshot.style.left === '100%') {
        combatScreenshot.style.left = '-100%';
    } else {
        combatScreenshot.style.left = '-100%';
    }

    // 5초마다 함수 재호출
    setTimeout(slideImages, 5000);
}
// 이미지 스크롤 효과 적용
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // 이미지들에 대해 스크롤에 따라 변환(transform) 적용
    const heroImage = document.getElementById('hero-image');
    const combatScreenshot = document.getElementById('combat-screenshot');

    heroImage.style.transform = `translateX(-${scrollPosition}px)`;
    combatScreenshot.style.transform = `translateX(-${scrollPosition}px)`;
});


// 페이지 로드 후 최초 호출
slideImages();
*/