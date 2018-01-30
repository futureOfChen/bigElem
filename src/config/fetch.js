import { baseUrl } from './env'

export default async (url='',data={},type='GET',method='fetch') => {
    type = type.toUpperCase();
    url = baseUrl + url ;

    if(type === 'GET') {
        let dataStr = '';
        Object.keys(data).forEach( (key) => {
            dataStr += key + '=' + data[key] + '&';
        } )

        if( dataStr != '' ) {
            dataStr = dataStr.substr( 0 , dataStr.indexOf('&') );
            url = url + '?' + dataStr ;
        }
    }

    if(window.fetch && method == 'fetch') {
        let requestConfig = {
            credentials:'include',
            method:type,
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode:'cors',
            cache: 'force-cache'
        }

        if( type == 'POST') {
            Object.defineProperty(requestConfig,'body',{
                value: JSON.stringify(data)
            })
        }

        try {
            const response = await fetch(url,requestConfig);
            const responseJson = response.json();
            return responseJson;
        } catch(err) {
            throw new Error(err);
        }
    } else {
        return new Promise( (resolve, reject) => {
            let xhr = null;
            if(window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            }else {
                xhr = new ActiveXObject;
            }
            let sendData = '';
            if(type == 'POST') {
                sendData = JSON.stringify(data);
            }

            xhr.open(url,type,true);
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhr.send(sendData);


            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        let obj = xhr.response;
                        if( typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj);
                    }else {
                        reject(xhr);
                    }
                }
            }
        } )
    }

}