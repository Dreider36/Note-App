sessionStorage.setItem('LANG', 'uk');

const LANGS = document.querySelector('.langs');

let langs = {
    en: {
        'note-add': 'Add Note',
        'note-title': 'Note Title',
        'note-text': 'Description',
    },
    uk: {
        'note-add': 'Додати нотатку',
        'note-title': 'Заголовок нотатки',
        'note-text': 'Опис',
    },
};
export default langs;

LANGS.addEventListener('click', (e) => {
    if (e.target.nodeName != 'IMG') return;
    const LANG = e.target.classList[0];
    if (sessionStorage.LANG == LANG) return;
    sessionStorage.setItem('LANG', `${LANG}`);
    update_text(LANG);
});

function update_text (LANG) {
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        if (element.id == '') return;
        element.innerText = langs[LANG][element.id]
    });
};