const getS = selector => document.querySelector(selector); // ф-ція при виклику якої ми отримуємо певний елемент і можемо з ним працювати

// фунцкція btn_edit
getS('.btn_edit').onclick = function () {
    getS('.edit_block').classList.add('show');
    getS('.style_block').classList.remove('show');
    // const content = getS('.top_block').innerHTML;
    // getS('.edit_area').value = content; ^
    getS('.edit_area').value = getS('.top_block').innerHTML; // це ж саме що і ^^^^ закоментоване
}

// фунцкція btn_save
getS('.btn_save').onclick = function () {
    getS('.edit_block').classList.remove('show');
    getS('.top_block').innerHTML = getS('.edit_area').value;
}
// фунцкція btn_style
getS('.btn_style').addEventListener('click', () => {
    getS('.style_block').classList.add('show');
    getS('.edit_block').classList.remove('show');
})

// задання розміру тексту
function fontSize() {
    // console.log(event.target.value);
    getS('.top_block').style.fontSize = event.target.value;
}

// задання шрифту тексту
let fF = document.getElementById('font_family');
fF.onchange = function (e) {
    // console.log(e.target.value);
    // console.log(this.value);
    getS('.top_block').style.fontFamily = this.value;
}

// Заповнення квадратів кольорами масиву за допомогою яких можна змінювати колір тектсу
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'brown', 'purple', 'gray'];
for (let i = 0; i < getS('.colors').children.length; i++) {
    getS('.colors').children[i].style.backgroundColor = colors[i];
    getS('.colors').children[i].onclick = function () {
        getS('.top_block').style.color = this.style.backgroundColor;
    }
}

getS('.btn_color_text').addEventListener('click', () => {
    getS('.colors').style.display = 'flex';
    getS('.background_colors').style.display = 'none';
})

// -----------------------------------------------------------------------------
// Заповнення квадратів кольорами масиву за допомогою яких можна змінювати задній фон блоку
for (let i = 0; i < getS('.background_colors').children.length; i++) {
    getS('.background_colors').children[i].style.backgroundColor = colors[i];
    getS('.background_colors').children[i].onclick = function () {
        getS('.top_block').style.backgroundColor = this.style.backgroundColor;
    }
}

getS('.btn_background_color').addEventListener('click', () => {
    getS('.background_colors').style.display = 'flex';
    getS('.colors').style.display = 'none';
})
// -----------------------------------------------------------------------------

// Жирність тексту
function fontWeight() {
    if (event.target.checked) {
        getS('.top_block').classList.add('bold');
    } else {
        getS('.top_block').classList.remove('bold');
    }
}
// -----------------------------------------------------------------------------

function cursiveText() {
    if (event.target.checked) {
        getS('.top_block').classList.add('cursive');
    } else {
        getS('.top_block').classList.remove('cursive');
    }
}

getS('.btn_add').addEventListener('click', () => {
    getS('.the_first').classList.remove('show');
    getS('.the_second').classList.add('show');
})

// Функція створення списку


const list = document.forms['form_list'];
getS('.btn_create_list').addEventListener('click', () => {
    const countLi = list.count.value;
    const countType = list.type.value;
    // console.log(countLi,countType);
    getS('.edit_area').value += `<ul style="list-style-type:${countType}">`;
    for (let i = 0; i < countLi; i++) {
        getS('.edit_area').value += `<li>item${i + 1}</li>`;
    }
    getS('.edit_area').value += '</ul>';
    getS('.the_first').classList.add('show');
    getS('.the_second').classList.remove('show');

})


function tableListChecked() {
    if (event.target.value === 'list') {
        getS('.create_list').classList.remove('hide');
        getS('.create_table').classList.add('hide');
    } else if (event.target.value === 'table') {
        getS('.create_list').classList.add('hide');
        getS('.create_table').classList.remove('hide');
    }
}


const create_table_form = document.forms['forms_table'];
getS('.btn_create_table').addEventListener('click', () => {
    const countTr = create_table_form.count_tr.value;
    const countTd = create_table_form.count_td.value;
    const widthTd = create_table_form.width_td.value;
    const heightTd = create_table_form.height_td.value;
    const widthOfBorder = create_table_form.width_of_border.value;
    const typeOfBorder = create_table_form.type_of_border.value;
    const colorOfBorder = create_table_form.color_of_border.value;

    console.log(countTr);
    console.log(countTd);
    console.log(widthTd);
    console.log(heightTd);
    console.log(widthOfBorder);
    console.log(typeOfBorder);
    console.log(colorOfBorder);

    getS('.edit_area').value += `<table>`;
    for (let i = 0; i < countTr; i++) {
        getS('.edit_area').value += `<tr>`;
        for (let j = 0; j < countTd; j++) {
            getS('.edit_area').value += `<td style="width:${widthTd}px;height:${heightTd}px;border:${widthOfBorder}px ${typeOfBorder} ${colorOfBorder}"></td>`;
        }
        getS('.edit_area').value += '</tr>';
    }
    getS('.edit_area').value += `</table>`;

    getS('.the_first').classList.add('show');
    getS('.the_second').classList.remove('show');
})