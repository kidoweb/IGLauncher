const translations = {
    en: {
        play: "Play",
        shop: "Shop",
        news: "News",
        discord: "Discord",
        settings: "Settings",
        status: "Status",
        online_players: "Players online",
        connect: "Connect",
        language: "Change Language",
        toggle_particles: "Disable particle animation",
        minimize_launcher: "Minimize launcher after game start",
        coming_soon: "Coming Soon..."
    },
    ru: {
        play: "Играть",
        shop: "Магазин",
        news: "Новости",
        discord: "Discord",
        settings: "Настройки",
        status: "Статус",
        online_players: "Онлайн игроков",
        connect: "Подключиться",
        language: "Смена языка",
        toggle_particles: "Отключить анимацию партиклов",
        minimize_launcher: "Сворачивать лаунчер после запуска игры",
        coming_soon: "В разработке..."
    },
    be: {
        play: "Гуляць",
        shop: "Крама",
        news: "Навіны",
        discord: "Discord",
        settings: "Налады",
        status: "Статус",
        online_players: "Онлайн гульцы",
        connect: "Падключыцца",
        language: "Змяніць мову",
        toggle_particles: "Адключыць анімацыю часціц",
        minimize_launcher: "Згортваць лаунчар пасля запуску гульні",
        coming_soon: "Скора будзе..."
    },
    uk: {
        play: "Грати",
        shop: "Магазин",
        news: "Новини",
        discord: "Discord",
        settings: "Налаштування",
        status: "Статус",
        online_players: "Гравців онлайн",
        connect: "Підключитися",
        language: "Змінити мову",
        toggle_particles: "Вимкнути анімацію часток",
        minimize_launcher: "Згортати лаунчер після запуску гри",
        coming_soon: "Незабаром..."
    }
};


function translatePage(language) {
    document.querySelector('[data-section="play"]').innerText = translations[language].play;
    document.querySelector('[data-section="shop"]').innerText = translations[language].shop;
    document.querySelector('[data-section="news"]').innerText = translations[language].news;
    document.querySelector('.menu-item[href*="discord"]').innerText = translations[language].discord;
    document.querySelector('[data-section="settings"]').innerText = translations[language].settings;
    
    document.querySelector('.server-info h2').innerText = translations[language].status;
    document.querySelector('#server-status').parentNode.firstChild.textContent = `${translations[language].status}: `;
    document.querySelector('#server-online-count').parentNode.firstChild.textContent = `${translations[language].online_players}: `;
    
    document.querySelector('.play-button').innerText = translations[language].connect;
    
    document.querySelector('label[for="language-select"]').innerText = translations[language].language;
    document.querySelector('label[for="toggle-particles"]').innerText = translations[language].toggle_particles;
    document.querySelector('label[for="minimize-launcher"]').innerText = translations[language].minimize_launcher;

    document.querySelector('#shop-section h1').innerText = translations[language].shop;
    document.querySelector('#shop-section p').innerText = translations[language].coming_soon;
    
    document.querySelector('#news-section h1').innerText = translations[language].news;
    document.querySelector('#news-section p').innerText = translations[language].coming_soon;
}
