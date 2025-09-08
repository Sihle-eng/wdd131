const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    const chapter = input.value.trim();

    if (chapter !== '') {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        // li.append(deleteBtn);

        li.textContent = chapter;
        deleteBtn.textContent = '❌';
        list.appendChild(deleteBtn);
        list.appendChild(li);

        deleteBtn.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        input.value = '';
        input.focus();

    };
});

