//Получаем все кнопки (Верхние) и все элементы карточек.
const btns = document.querySelectorAll(".button");
const cards = document.querySelectorAll(".card");

//============= Функция фильтрации ==================================
//Получаем в значения категорию (Дата атрибут) и элемент (Карточки)
function filter(category, items) {
  //Каждую карточку перебираем.
  items.forEach((item) => {
    //Есть ли у карточки в наличии данный дата атрибут (При клике)
    const isItemFiltred = item.classList.contains(category);
    //карточка с названием all (Нижний резистор для простоты)
    const isShowAll = category.toLowerCase() === `all`;

    //Если карточки с данной категорией(При клике) НЕ найдено и карточка all с названием не нажата, то добавляем класс anime (Скрывает), иначе, удаляем класс.
    if (!isItemFiltred && !isShowAll) {
      item.classList.add("anime");
    } else {
      item.classList.remove("hide");
      item.classList.remove("anime");
    }
  });
}
//===================================================================

//====================== Перебор карточек ===========================
//Перебираем все кнопки и получаем по 1-й кнопке.
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //При клике на каждую кнопку мы считываем ее дата атрибут и запускаем функцию filter, куда пепедаем в значения ее дата атрибут и все карточки.
    const currentCategory = btn.getAttribute("data-filter");
    filter(currentCategory, cards);
  });
});
//===================================================================

//Анмация
cards.forEach((card) => {
  card.ontransitionend = function () {
    if (card.classList.contains("anime")) {
      card.classList.add("hide");
    }
  };
});
