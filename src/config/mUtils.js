/*
* 存储localstorage
*/ 

export const setStore = (name, value) => {
    if(!name) return ;
    if( typeof value !== 'string' ){
        value = JSON.stringify(value);
    }

    window.localStorage.setItem(name,value);
}

// 获取localStorage
export const getStore = name => {
    if(!name) return ;
    return window.localStorage.getItem(name);
}

// 删除localStorage
export const removeStore = name => {
    if(!name) return ;
    window.localStorage.removeItem(name);
}