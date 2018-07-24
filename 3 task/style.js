var bold_Items;
window.onload = getBold_items();

function getBold_items() 
{
  bold_Items = document.getElementsByTagName('strong'); 
}

function before (){
    for(var i =0; i<bold_Items.length; i++){
        bold_Items[i].style.color = '#6476b7';
    }
}

function after (){
    for(var i =0; i<bold_Items.length; i++){
        bold_Items[i].style.color = '#6fb5e4';
    }
}


 
