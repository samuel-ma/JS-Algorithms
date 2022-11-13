function generation(x,y){
    if(x == -3){
        if(y == "m"){
            return "great grandfather";
        } else if(y == "f"){
            return "great grandmother";
        }
    } else if(x == -2){
        if(y == "m"){
            return "grandfather";
        } else if(y == "f"){
            return "grandmother";
        }
    } else if(x == -1){
        if(y == "m"){
            return "father";
        } else if(y == "f"){
            return "mother";
        }
    } else if(x == 0){
        if(y == "m"){
            return "me!";
        } else if(y == "f"){
            return "me!";
        }
    } else if(x == 1){
        if(y == "m"){
            return "son";
        } else if(y == "f"){
            return "daughter";
        }
    } else if(x == 2){
        if(y == "m"){
            return "grandson";
        } else if(y == "f"){
            return "granddaughter";
        }
    } else if(x == -1){
        if(y == "m"){
            return "great grandson";
        } else if(y == "f"){
            return "great granddaughter";
        }
    }
}

generation(2, "f");
