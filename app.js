"use strict";

const item = document.querySelector('.item');

const placeholders = document.querySelectorAll('.placeholder');


// что должно произойти когда мы начинаем перетаскивать
item.addEventListener('dragstart', dragstart);
// что сделать когда мы закончили перетаскивание
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
  // dragover - находится над placeholder куда мы можем перенести
  placeholder.addEventListener('dragover', dragover);
  // dragenter - когда мы заходим на территорию placeholder
  placeholder.addEventListener('dragenter', dragenter);
  // dragleave  - когда мы перетащили но вышли оттуда
  placeholder.addEventListener('dragleave', dragleave);
  // drop - когда мы отпустили
  placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => {
    event.target.classList.add('hide');
  }, 0)

}


function dragend(event) {
  // 1 способ
  // event.target.classList.remove('hold', 'hide');
  // 2 способ - перетираем все классы и добавляем item
  event.target.className = 'item';
}

function dragover(event) {
  event.preventDefault();
}
function dragenter(event) {
  event.target.classList.add('hovered');
}
function dragleave(event) {
  event.target.classList.remove('hovered');
}
function dragdrop(event) {
  event.target.classList.remove('hovered');
  event.target.append(item);
}
