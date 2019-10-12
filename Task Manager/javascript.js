var file_name;
// For close Modal window ...................
window.onclick = function (event) {
    var modal = document.getElementById('modal');
    var input_title = document.getElementById('input_title');
    if (event.target == modal) {
        modal.style.display = "none";
        create_btn.style.cursor = 'not-allowed';
        create_btn.style.color = 'rgba(128, 128, 128, 0.4)';
        input_title.value = "";
    }
}
function close_modal() {
    var input_title = document.getElementById('input_title');
    var modal_window = document.getElementsByClassName('overlay_modal')[0];
    modal_window.style.display = 'none';
    create_btn.style.cursor = 'not-allowed';
    create_btn.style.color = 'rgba(128, 128, 128, 0.4)';
    input_title.value = "";
}
// appear modal window .....
function appear_modal() {
    var modal = document.getElementsByClassName('overlay_modal')[0];
    modal.style.display = 'block';
}
// Changing wallpaper of the background grid in modal ....
function switch_background(file_name) {
    var background_img = document.getElementsByClassName('left_side_modal')[0];
    background_img.style.backgroundImage = "url(images/modal_background/" + file_name +".jpg)";
    this.file_name = file_name;
}
// Activate the create board button ...
function enable_create_btn() {
    var input_title = document.getElementById('input_title');
    var create_btn = document.getElementById('create_btn');
    if(input_title.value != "") {
        create_btn.style.color = 'black';
        create_btn.style.cursor = 'pointer';
    }
    else {
        create_btn.style.color = 'rgba(128, 128, 128, 0.4)';
        create_btn.style.cursor = 'not-allowed';
    }
}

function create_board() {
    var input_title = document.getElementById('input_title');
    var modal = document.getElementsByClassName('overlay_modal')[0];
    
    if(input_title.value != "") {
        // Creating elements for variety boards ...
        var ul_node = document.getElementsByClassName('list_container')[0];
        var li_node = document.createElement('li');
        li_node.setAttribute('class', 'dynamic_board');
        file_name == undefined ? li_node.style.backgroundImage = 'url(images/modal_background/beach.jpg)' : li_node.style.backgroundImage = `url(images/modal_background/${file_name}.jpg`;
        var span_node = document.createElement('span');
        span_node.innerHTML = input_title.value;
        span_node.setAttribute('class', 'dynamic_text');
        ul_node.appendChild(li_node).appendChild(span_node);
        close_modal();
        var create_board_btn = document.getElementsByClassName('create_board_item')[0];
        create_board_btn.remove();
        var create_board_again = document.createElement('li');
        create_board_again.setAttribute('class','create_board_item');
        create_board_again.addEventListener('click', function() {
            modal.style.display = 'block';
        });
        var text_span = document.createElement('span');
        text_span.setAttribute('class', 'text');
        text_span.innerHTML = 'ایجاد تابلوی جدید';
        ul_node.appendChild(create_board_again).appendChild(text_span);
    }
}