const wait = ms => new Promise((r, j) => setTimeout(r, ms));

module.exports = {
  content(req, timeout) {
    return {
      main: `<h2 class="blog-post-title"><b>Currency Conversion</b></h2>
              <script>
              function convert() {
                const conversionHttp = new XMLHttpRequest();
                let conversionType = $("input[name='conversionType']:checked").val();
                let conversionNumber = $("input[name='conversionRequest']").val().toString();
                
                conversionHttp.onreadystatechange=function() {
                  if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("answer").value = JSON.parse(this.responseText).totalCalculatedAmount;
                    document.getElementById("conversionPort").value = JSON.parse(this.responseText).port;
                  }
                };
                let url = "http://localhost:8765/currency-conversion-service/currency-converter-feign/from/" 
                + conversionType + "/to/INR/quantity/" + conversionNumber;
                
                conversionHttp.open("GET", url, true);
                conversionHttp.send();
              }
              </script>
              
              <h4>Convert Currency From:</h4>
              
              <input type="radio" name="conversionType" value="USD" checked>USD<br>
              <input type="radio" name="conversionType" value="EUR">EUR<br>
              <hr />`
    }
  },
  placeholder() {
    return `<h2 class="blog-post-title"><b>Currency Conversion</b> - <small>Loading</small></h2>
                <p><small>Loading...</small></p>`;
  },
  async data(req) {
    const timeout = req.query.post1 || 1;
    await wait(+timeout);
    return {
      data: timeout
    }
  }
};
