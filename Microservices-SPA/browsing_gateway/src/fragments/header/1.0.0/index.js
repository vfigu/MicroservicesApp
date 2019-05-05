const wait = ms => new Promise((r, j) => setTimeout(r, ms));

module.exports = {
  content(req, timeout) {
    return {
      main: `<p>This section is coming from Browsing Gateway.</p>
            <script>
              function getLimit() {
                const limitHttp = new XMLHttpRequest();
                
                limitHttp.onreadystatechange=function() {
                  if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("max").value = JSON.parse(this.responseText).maximum.toString();
                    document.getElementById("min").value = JSON.parse(this.responseText).minimum.toString();
                  }
                };
                let url = "http://localhost:8080/limits";
                
                limitHttp.open("GET", url, true);
                limitHttp.send();
              }
            </script>
            
            
            <h1 class="blog-title"><b>Currency Converter</b></h1>
            <div class="row">
              <div class="col-sm-7">
                <div class="lead blog-description">
                    <h4>Source Code</h4>
                    <ol class="list-unstyled">
                        <li>Application: <a href="https://github.com/vfigu/MicroservicesApp">MicroservicesApp</a></li>
                    </ol>
                </div>
                <div class="lead blog-description">
                    <h4>References</h4>
                    <ol class="list-unstyled">
                        <li>Front End: <a href="https://github.com/puzzle-js/PuzzleJs-Demo">PuzzleJs</a></li>
                        <li>Back End:  <a href="https://github.com/in28minutes/spring-microservices/tree/master/03.microservices">SpringMicroservices</a></li>
                    </ol>
                </div>
              </div>
              
              <div class="col-sm-5">
                  <h5>Limit Service</h5>
                  <br>
                  Max: <input type="text" id="max" size="5" readonly/>
                  <br>
                  Min: <input type="text" id="min" size="5" readonly/>
                  <br>
                  <div class="btn btn-info" onclick="getLimit()">Get Limits</div>
              </div>
            
            </div>
            
            <hr/>
            
            
            <p>Content streamed after ${timeout}ms</p>`
    }
  },
  placeholder() {
    return `<p><small>Loading</small></p>
            <h1 class="blog-title"><b>Page Header</b> - <small>Loading</small></h1>
            <p class="lead blog-description"><h4><small>Loading</small></h4></p>`;
  },
  async data(req) {
    const timeout = req.query.header || 1;
    await wait(+timeout);
    return {
      data: timeout
    }
  }
};
