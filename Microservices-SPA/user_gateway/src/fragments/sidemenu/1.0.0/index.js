const wait = ms => new Promise((r, j) => setTimeout(r, ms));

module.exports = {
  content(req, timeout) {
    return {
      main: `<p>This section is coming from User Gateway</p>
                
              <h3><b>Currency Exchange</b></h3>
              
              <script>
              function exchange() {
                const exchangeHttp = new XMLHttpRequest();
                let exchangeType = $("input[name='exchangeType']:checked").val();
                
                exchangeHttp.onreadystatechange=function() {
                  if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("multiple").value = JSON.parse(this.responseText).conversionMultiple;
                    document.getElementById("exchangePort").value = JSON.parse(this.responseText).port;
                  }
                };
                let url = "http://localhost:8765/currency-exchange-service/currency-exchange/from/" + exchangeType + "/to/INR/";
                
                exchangeHttp.open("GET", url, true);
                exchangeHttp.send();
              }
              </script>
              
              <p>Convert Currency From:</p>
              
              <input type="radio" name="exchangeType" value="USD" checked>USD<br>
              <input type="radio" name="exchangeType" value="EUR">EUR<br>
              <div class="btn btn-info" onclick="exchange()">Get Multiple</div>
              
              <br>
              Your Exchange Multiple: <input type="text" id="multiple" size="5">
              <br>
              Exchange Instance Port: <input type="text" id="exchangePort" size="5">
              
                
            <p>Content streamed after ${timeout}ms</p>`
    }
  },
  placeholder() {
    return `<h4>Loading Side menu...</h4>`;
  },
  async data(req) {
    const timeout = req.query.sidemenu || 1;
    await wait(+timeout);
    return {
      data: timeout
    }
  }
};
