class Fetch {

    static get (url, params = {}) {

        return Fetch.request('GET', url, params)

    }

    static delete (url, params = {}) {

        return Fetch.request('DELETE', url, params)

    }

    static put (url, params = {}) {

        return Fetch.request('PUT', url, params)

    }

    static post (url, params = {}) {

        return Fetch.request('POST', url, params)

    }

    static request (method, url, params = {}) {

        return new Promise ((resolve, reject) => {

            let request

            switch (method.toLoweCase()) {

                case 'get':
                    request = url
                break
                default:
                request = new Request(url, {

                    method,
                    body: JSON.stringify(params),
                    headers: new Headers({
                        'Content-Type':'application/json'
                    })
    
                }) 
    

            } 

           fetch(url).then(response => {

                response.json().then(json => {

                    resolve(json)

                }).catch(e => {

                    reject(e)

                })

           }).catch(e => {

            reject(e)

        })

        })

        

    }

}