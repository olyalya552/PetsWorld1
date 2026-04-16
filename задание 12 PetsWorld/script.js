// 1. Текущий год
document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
});

// 2. Корзина
let cartCount = 0;
const cartCounter = document.querySelector('.cart-count');
if (cartCounter) {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.product-card');
            const productName = card?.dataset?.name || card?.querySelector('h3')?.innerText || 'Товар';
            cartCount++;
            cartCounter.textContent = cartCount;
            console.log(`Товар "${productName}" добавлен в корзину`);
            alert(` ${productName} добавлен в корзину!`);
        });
    });
}

// 3. Бургер-меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('open');
    });
}

// 4. Фильтрация в каталоге
const filterBtns = document.querySelectorAll('.filter-btn');
const catalogCards = document.querySelectorAll('.product-card');
if (filterBtns.length && catalogCards.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.cat;
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            catalogCards.forEach(card => {
                if (cat === 'all' || card.dataset.category === cat) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// 5. Табы на странице товара (product.html)
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
if (tabBtns.length) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) content.classList.add('active');
            });
        });
    });
}

// 6. Форма подписки (alert)
const subForm = document.querySelector('.subscribe-form');
if (subForm) {
    subForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за подписку! Скидка ждёт вас на почте ');
        subForm.reset();
    });
}

// 7. Форма обратной связи (contacts)
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Сообщение отправлено! Мы свяжемся с вами.');
        contactForm.reset();
    });
}

// Тест: подбор породы
const form = document.getElementById('pet-test-form');
const resultDiv = document.getElementById('quiz-result');
const breedNameSpan = document.getElementById('breed-name');
const breedDescSpan = document.getElementById('breed-desc');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // отменяем отправку формы

    // Получаем выбранные ответы
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if (!q1 || !q2 || !q3) {
      alert('Ответьте на все вопросы, чтобы узнать свою породу!');
      return;
    }

    let breed = '';
    let description = '';

    const activity = q1.value;
    const space = q2.value;
    const mood = q3.value;

    // Логика подбора породы (как в оригинальном файле script)
    if (mood === 'calm') {
      if (space === 'flat') {
        breed = 'Французский бульдог';
        description = 'Спокойный, не требует много места, любит уют.';
      } else {
        breed = 'Мопс';
        description = 'Ленивый, но любящий, отлично подходит для дома.';
      }
    } else { // активный
      if (space === 'flat') {
        breed = 'Джек-рассел-терьер';
        description = 'Энергичный, но уживается в квартире при хороших прогулках.';
      } else {
        breed = 'Лабрадор';
        description = 'Идеальный друг для активной семьи с домом.';
      }
    }

    // Корректировка при малом времени
    if (activity === 'low') {
      breed = 'Рыбки или хомяк';
      description = 'Вам лучше завести неприхотливого питомца, который не требует много внимания.';
    }

    breedNameSpan.textContent = breed;
    breedDescSpan.textContent = description;
    resultDiv.style.display = 'block';

    // Прокрутка к результату
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

