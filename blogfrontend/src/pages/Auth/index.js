//isLoggedIn

export const isLoggedIn = () =>{
    let data =localStorage.getItem("data");
    if(data !=null){
        return true;
    }
    else{
        return false;
    }
};

//doLogin -- data=>set to localstroage

export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data)); 
    next()
};

//doLogout --> remove from localstorage

export const doLogout=(next)=>{
    localStorage.removeItem("data");
    next()
}

//get currentuser
export const getCurrentUserDetails=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).user;
    }
    else{
        return undefined;
    }
};