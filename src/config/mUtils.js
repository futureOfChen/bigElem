/*
* 存储localstorage
*/ 

export const setStore = (name, value) => {
    if(!name) return ;
    if( typeof value !== 'string' ){
        value = JSON.stringify(value);
    }

    widow.localStorage.setItem(name,value);
}

// 获取localStorage
export const getStore = name => {
    if(!name) return ;
    return widow.localStorage.getItem(name);
}

// 删除localStorage
export const removeStore = name => {
    if(!name) return ;
    widow.localStorage.removeItem(name);
}