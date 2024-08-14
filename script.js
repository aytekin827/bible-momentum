const verses = {
    en: [
        {verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16"},
        {verse: "The Lord is my shepherd, I lack nothing.", reference: "Psalm 23:1"},
        {verse: "I can do all this through him who gives me strength.", reference: "Philippians 4:13"},
        {verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", reference: "Romans 8:28"},
        {verse: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.", reference: "Galatians 5:22-23"},
        {verse: "In the beginning God created the heavens and the earth.", reference: "Genesis 1:1"},
        {verse: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?", reference: "Psalm 27:1"},
        {verse: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.", reference: "John 16:33"},
        {verse: "Trust in the Lord with all your heart and lean not on your own understanding;", reference: "Proverbs 3:5"},
        {verse: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.", reference: "Philippians 4:19"},
    ],
    ko: [
        {verse: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라", reference: "요한복음 3:16"},
        {verse: "여호와는 나의 목자시니 내가 부족함이 없으리로다", reference: "시편 23:1"},
        {verse: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라", reference: "빌립보서 4:13"},
        {verse: "우리가 알거니와 하나님을 사랑하는 자 곧 그 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라", reference: "로마서 8:28"},
        {verse: "오직 성령의 열매는 사랑과 희락과 화평과 오래 참음과 자비와 양선과 충성과 온유와 절제니 이 같은 것을 금지할 법이 없느니라", reference: "갈라디아서 5:22-23"},
        {verse: "태초에 하나님이 천지를 창조하시니라", reference: "창세기 1:1"},
        {verse: "여호와는 나의 빛이요 나의 구원이시니 내가 누구를 두려워하리요 여호와는 내 생명의 능력이시니 내가 누구를 무서워하리요", reference: "시편 27:1"},
        {verse: "이것을 너희에게 이르는 것은 너희로 내 안에서 평안을 누리게 하려 함이라 세상에서는 너희가 환난을 당하나 담대하라 내가 세상을 이기었노라", reference: "요한복음 16:33"},
        {verse: "너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라", reference: "잠언 3:5"},
        {verse: "나의 하나님이 그리스도 예수 안에서 영광 가운데 그 풍성한 대로 너희 모든 쓸 것을 채우시리라", reference: "빌립보서 4:19"},
    ],
    tr: [
        {verse: "Çünkü Tanrı dünyayı o kadar çok sevdi ki, biricik Oğlu'nu verdi. Öyle ki O'na iman edenlerin hiçbiri mahvolmasın, hepsi sonsuz yaşama kavuşsun.", reference: "Yuhanna 3:16"},
        {verse: "Rab benim çobanımdır, eksiğim olmaz.", reference: "Mezmurlar 23:1"},
        {verse: "Beni güçlendirenin aracılığıyla her şeyi yapabilirim.", reference: "Filipililer 4:13"},
        {verse: "Tanrı'nın kendisini sevenlerle, amacı uyarınca çağrılmış olanlarla birlikte her durumda iyilik için etkin olduğunu biliriz.", reference: "Romalılar 8:28"},
        {verse: "Ama Ruh'un meyvesi sevgidir, sevinçtir, esenliktir, sabırdır, şefkattir, iyiliktir, sadakattir, yumuşak huyluluktur, özdenetimdir. Böyle davranışlara karşı yasa yoktur.", reference: "Galatyalılar 5:22-23"},
        {verse: "Başlangıçta Tanrı göğü ve yeri yarattı.", reference: "Yaratılış 1:1"},
        {verse: "Rab benim ışığım ve kurtuluşumdur, kimden korkacağım? Rab hayatımın kalesidir, kimden ürkeceğim?", reference: "Mezmurlar 27:1"},
        {verse: "Bunları size söyledim ki bende esenlik bulasınız. Dünyada sıkıntınız olacak; ama cesur olun! Ben dünyayı yendim.", reference: "Yuhanna 16:33"},
        {verse: "Bütün yüreğinle Rab'be güven, kendi aklına bel bağlama;", reference: "Süleyman'ın Özdeyişleri 3:5"},
        {verse: "Tanrım, Mesih İsa'da yüceliğiyle, bütün gereksinimlerinizi karşılayacaktır.", reference: "Filipililer 4:19"},
    ]
};

// const clock = document.querySelector("#clock")

// function getClock() {
//     const date = new Date()
//     const hours = String(date.getHours()).padStart(2,"0");
//     const minute = String(date.getMinutes()).padStart(2,"0");

//     clock.innerHTML = `${hours}:${minute}`
// }
// getClock() // 이걸 지우면 00:00:00 부터 브라우저가 띄운다. 즉 맨 처음 브라우저를 띄울때부터 현재 시각이 나오도록 하려면 스크립트 안에서 맨처음 한번은 함수를 실행하도록 해야함.
// setInterval(getClock, 5000); // 30초마다 새로고침


function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.en.length);
    return randomIndex;
}

function getStoredVerse() {
    const storedData = JSON.parse(localStorage.getItem('bibleVerse')) || {};
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD 형식

    if (storedData.date !== today) {
        const randomIndex = getRandomVerse();
        storedData.date = today;
        storedData.index = randomIndex;
        localStorage.setItem('bibleVerse', JSON.stringify(storedData));
    }

    return storedData;
}

function getStoredLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en'; // 기본값: 영어
}

function displayVerse(language) {
    const verseElement = document.getElementById('verse');
    const referenceElement = document.getElementById('reference');
    const storedData = getStoredVerse();
    const verseIndex = storedData.index;
    const selectedVerse = verses[language][verseIndex];

    localStorage.setItem('selectedLanguage', language)
    verseElement.textContent = selectedVerse.verse;
    referenceElement.textContent = selectedVerse.reference;
}

document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('languageSelect');

    languageSelect.addEventListener('change', function() {
        const selectedLanguage = languageSelect.value;
        localStorage.setItem('selectedLanguage', selectedLanguage);
        displayVerse(selectedLanguage);
    });

    // 페이지 로드 시 저장된 언어로 설정하고 구절 표시
    if (localStorage.getItem('selectedLanguage')) {
        const storedLanguage = getStoredLanguage();
        languageSelect.value = storedLanguage;
        displayVerse(storedLanguage);
    } else {
        displayVerse('en');
    }

});