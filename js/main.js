var ul = document.getElementById('list');
var li; //List Item

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

// var removeAllButton = document.getElementById('removeAll');
// removeAllButton.addEventListener('click', removeAllItem);

function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    var textNode = document.createTextNode(item);

    if(item === ''){
        // var newPara = document.createElement('p')
        // var paraValue = document.createTextNode('Enter your todo');
        // newPara.appendChild(paraValue);
        // document.querySelector('#input').append(newPara);
        return false;
    }else{
        // Create li
        li = document.createElement('li');
        
        // Create Checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');
        checkbox.setAttribute('class', 'checkbox_input');

        // Create Label
        var label = document.createElement('label');
        label.setAttribute('class', 'checkLabel');

        // Adding the elements on Web Page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]) //  li -> child ul -> where to insert ul.childNodes[0] -> Assign at the First
        
        setTimeout(() => {
            li.className = 'myCheck';
            // li.className = 'myCheck';
        }, 2);
        
        input.value = '';


    }
}

function removeItem(){
    // console.log('Delete Button Clicked')
    li = ul.children;
    // console.log(li);

    for(let i = 0; i < li.length; i++){
        while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i]);
        }
    }
}

// function removeAllItem(){
//     li = ul.children;
//     for(let j = 0; j <= li.length; j++){
//         while(li[j] && li[j].children[0]){
//             ul.removeChild(li[j])
//         }
//     }
// }