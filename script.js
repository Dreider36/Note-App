import langs from '/langs.js';

const notesEl = document.querySelector('.notes');
const addBtn = document.querySelector('.note-add');

function createNote (title, text) {
  const noteEl = document.createElement ('div');
  noteEl.classList.add('note');
  noteEl.innerHTML = `
    <div class="note-header">
      <h3 id ='note-title'>${title}</h3>
      <textarea class='note-title-input hidden'>${title}</textarea>
      <div class='note_btns'>
        <button class = "note-edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class = "note-delete"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
    <p id = 'note-text'>${text}</p>
    <textarea class='note-textarea-input hidden', rows='13'>${text}</textarea>
    <input type='color' value="#f9f9f9" id='note-bgcolor-input' class='hidden'>
  `

  const editBtn = noteEl.querySelector('.note-edit');
  const deleteBtn = noteEl.querySelector('.note-delete');
  const titleEl = noteEl.querySelector('#note-title');
  const textEl = noteEl.querySelector('#note-text');
  const titleInputEl = noteEl.querySelector('.note-title-input');
  const textInputEl = noteEl.querySelector('.note-textarea-input');

  editBtn.addEventListener('click', (e) => {
    titleEl.classList.toggle('hidden');
    textEl.classList.toggle('hidden');

    titleInputEl.classList.toggle('hidden');
    textInputEl.classList.toggle('hidden');
  });

  deleteBtn.addEventListener('click', (e) => {
    noteEl.remove();
  });

  titleInputEl.addEventListener('input', (e) =>{
    titleEl.innerText = e.target.value;
  });

  textInputEl.addEventListener('input', (e) =>{
    textEl.innerText = e.target.value;
  });

  return noteEl;
};

addBtn.addEventListener('click', (e) => {
  const LANG = sessionStorage.getItem('LANG');
  const el = createNote(`${langs[LANG]['note-title']}`, `${langs[LANG]['note-text']}`);
  notesEl.appendChild(el);
});