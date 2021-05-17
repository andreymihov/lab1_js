let isclose = true;
function Click(){
    Script();
    document.querySelector('.dropbtn').disabled = true;
    isclose = false; 
    Time();
}

function CloseClick(){
    Script();
    document.querySelector('.dropbtn').disabled = false;
}


function Script(){
    document.querySelector('.droplist').classList.toggle('show');
    document.querySelector('.wrapper-off').classList.toggle('wrapper-on')
    document.querySelector('.dropbtn').classList.toggle("dropbtn-off");
    isclose = true;
}

function Time(){
    setTimeout(function(){
        if(isclose == true){
        }else{
            Script();
            document.querySelector('.dropbtn').disabled = false;
        }
    }, 10000)
}



