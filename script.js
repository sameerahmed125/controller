function chWidth(){
    change = document.getElementById('stream');
    change2 = document.getElementById('map')

    if(change.className == 'w40' && change2.className == 'w400'){
        change.className = 'w400'
        change2.className = 'w40'
    }
    else if(change.className == 'w400' && change2.className == 'w40'){
        change.className = 'w40'
        change2.className = 'w400'
    }
    else{
        change.className = 'w40'
    }
}