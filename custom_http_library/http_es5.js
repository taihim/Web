function easyHTTP(){
    this.http = new XMLHttpRequest();

    //Make an HTTP GET request
        easyHTTP.prototype.get = function(url, callback)
        {
            this.http.open('GET', url, true);
            //This is out of scope in the function so we need to assign a variable.
            //This issue is resolved using arrow functions in ES6
            let self = this;

            this.http.onload = function(){
                if (self.http.status === 200)
                {
                    callback(null, JSON.parse(self.http.responseText));
                }
                else
                {
                    callback('Error: ' + self.http.status, null);
                }
            }
            this.http.send();

        }
    //Make an HTTP POST request
        easyHTTP.prototype.post = function(url, data, callback)
        {
            this.http.open('POST', url, true);

            this.http.setRequestHeader('Content-type', 'application/json');

            let self = this;

            this.http.onload = function(){
                
                    callback(null, JSON.parse(self.http.responseText));
                 
            }

            this.http.send(JSON.stringify(data));
        }
    //Make an HTTP PUT request

        easyHTTP.prototype.put = function(url, data, callback)
        {
            this.http.open('PUT', url, true);

            this.http.setRequestHeader('Content-type', 'application/json');

            let self = this;

            this.http.onload = function(){
                
                    callback(null, JSON.parse(self.http.responseText));
                
            }

            this.http.send(JSON.stringify(data));
        }
    //Make an HTTP DELETE request
    easyHTTP.prototype.delete = function(url, callback)
    {
        this.http.open('DELETE', url, true);
        //This is out of scope in the function so we need to assign a variable.
        //This issue is resolved using arrow functions in ES6
        let self = this;

        this.http.onload = function(){
            if (self.http.status === 200)
            {
                callback(null, 'Post deleted');
            }
            else
            {
                callback('Error: ' + self.http.status, null);
            }
        }
        this.http.send();

    }




}