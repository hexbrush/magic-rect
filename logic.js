
function ccolor(l1, l2)
{
    if (l1 && l2)
    {
        return 'greenyellow'
    }
    if (l1 || l2)
    {
        return 'lightgreen'
    }
    return 'white'
}

function check()
{           
    var table = document.getElementById('challenge_table');
    var first = ''
    var second = ''
    for (c=0; c<3; c++)
    {
        first = first + table.rows[0].cells[c].innerText;
        second = second + table.rows[1].cells[c].innerText;
    }
    if (first.length != 3)
    {
        first = ''
    }
    if (second.length != 3)
    {
        second = ''
    }

    a = table.rows[0].cells[0].innerText + table.rows[1].cells[0].innerText
    b = table.rows[0].cells[1].innerText + table.rows[1].cells[1].innerText
    c = table.rows[0].cells[2].innerText + table.rows[1].cells[2].innerText

    first_legal = check_three_letter_word(first)
    second_legal = check_three_letter_word(second)
    a_legal = check_two_letter_word(a)
    b_legal = check_two_letter_word(b)
    c_legal = check_two_letter_word(c)
    
    table.rows[0].cells[0].style.backgroundColor = ccolor(first_legal, a_legal)
    table.rows[0].cells[1].style.backgroundColor = ccolor(first_legal, b_legal)
    table.rows[0].cells[2].style.backgroundColor = ccolor(first_legal, c_legal)
    table.rows[1].cells[0].style.backgroundColor = ccolor(second_legal, a_legal)
    table.rows[1].cells[1].style.backgroundColor = ccolor(second_legal, b_legal)
    table.rows[1].cells[2].style.backgroundColor = ccolor(second_legal, c_legal)

    if(a_legal && b_legal && c_legal && first_legal && second_legal)
    {
        document.getElementById('well_done').style.display = 'block';
    }
}

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

var riddle = generate_riddle();
var table = document.getElementById('letters_table');

var indices = [0,1,2,3,4,5]
shuffle(indices)
table.rows[0].cells[indices[0]].innerText = riddle.first[0]
table.rows[0].cells[indices[1]].innerText = riddle.first[1]
table.rows[0].cells[indices[2]].innerText = riddle.first[2]
table.rows[0].cells[indices[3]].innerText = riddle.second[0]
table.rows[0].cells[indices[4]].innerText = riddle.second[1]
table.rows[0].cells[indices[5]].innerText = riddle.second[2]


var selectedElement;
var tds = document.getElementsByClassName("box");
for (var i = 0; i < tds.length; i++) {
    tds[i].addEventListener('click', function(e) 
    {
        e = e || window.event;
        var target = e.target || e.srcElement,
            text = target.textContent || target.innerText;
        tableId = target.parentElement.parentElement.parentElement.id
        
        target.style.backgroundColor = 'white'

        if (selectedElement && selectedElement == target)
        {
            selectedElement.style.backgroundColor = 'white';
            selectedElement = undefined
            return;
        }

        if (selectedElement && text == '')
        {
            target.innerText = selectedElement.innerText;
            selectedElement.innerText = "";
            selectedElement.style.backgroundColor = 'white';
            selectedElement = undefined
            check()
            return;
        }

        if (!selectedElement && text != '')
        {
            selectedElement = target;
            target.style.backgroundColor = 'yellow';
            return;
        }

    }, false);        
}