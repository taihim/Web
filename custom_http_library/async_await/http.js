class http{
    //Make http GET request
    async get(url){
        
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
        }

    //Make http POST request
    async post(url, data){
        
           const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = response.json();
            return resData;
    }

    //Make http PUT request
    async put(url, data){
          const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = res.json();
            return resData;
    }

    //Make http DELETE request
    async delete(url){
           const res = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            });
            const resData = await 'Resource deleted';
            return resData;
    }

    

}