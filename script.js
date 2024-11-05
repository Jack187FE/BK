const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const toggle = header.querySelector('.accordion-toggle');

    // Переключаем класс .active для анимации
    content.classList.toggle('active');
    toggle.classList.toggle('active'); // Убедитесь, что этот класс добавляется

    // Закрываем остальные карточки
    accordionHeaders.forEach((otherHeader) => {
      if (otherHeader !== header) {
        const otherContent = otherHeader.nextElementSibling;
        otherContent.classList.remove('active');
        otherHeader.querySelector('.accordion-toggle').classList.remove('active');
      }
    });
  });
});



// JavaScript для скрытия preloader после загрузки
window.addEventListener("load", function() {
    const preloader = document.querySelector(".preloader");
    preloader.style.opacity = "0";  // Плавное исчезновение
    document.body.style.overflow = "auto"; // Возвращаем прокрутку после загрузки

    setTimeout(() => {
        preloader.style.display = "none"; // Полностью убираем после анимации
    }, 3000); // Таймер синхронизирован с переходом на 3 секунды
});


// Функция для обновления прогресс-бара
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const scrollTop = window.scrollY; // Расстояние прокрутки от верха страницы
    const windowHeight = window.innerHeight; // Высота окна
    const documentHeight = document.documentElement.scrollHeight; // Общая высота документа
    const totalDocScrollLength = documentHeight - windowHeight; // Длина всей страницы для прокрутки
    const progressWidth = (scrollTop / totalDocScrollLength) * 100; // Рассчитываем процент
    progressBar.style.width = `${progressWidth}%`; // Обновляем ширину прогресс-бара
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', updateProgressBar);












$("body").prepend('<div class="cursor-dot-outline"></div>');
$("body").prepend('<div class="cursor-dot"></div>');

var cursor = {
    delay: 11,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),

    init: function() {
        this.setupEventListeners();
        this.animateDotOutline();
    },

    setupEventListeners: function() {
        var self = this;

        // Обрабатываем наведение на ссылки
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });

        // Обработка нажатия и отпускания мыши
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });

        // Обработка перемещения мыши
        document.addEventListener('mousemove', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            self.endX = e.pageX;  // Координаты относительно всей страницы
            self.endY = e.pageY;
            self.$dot.style.top = `${self.endY}px`;
            self.$dot.style.left = `${self.endX}px`;
        });

        // Показ курсора при входе на страницу
        document.addEventListener('mouseenter', function() {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });

        // Скрытие курсора при выходе
        document.addEventListener('mouseleave', function() {
            self.cursorVisible = false;
            self.toggleCursorVisibility();
        });
    },

    animateDotOutline: function() {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = `${self._y}px`;
        self.$outline.style.left = `${self._x}px`;

        requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function() {
        if (this.cursorEnlarged) {
            this.$dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            this.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            this.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            this.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },

    toggleCursorVisibility: function() {
        if (this.cursorVisible) {
            this.$dot.style.opacity = 1;
            this.$outline.style.opacity = 1;
        } else {
            this.$dot.style.opacity = 0;
            this.$outline.style.opacity = 0;
        }
    }
}

cursor.init();





