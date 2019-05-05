const wait = ms => new Promise((r, j) => setTimeout(r, ms));

module.exports = {
  content(req, timeout) {
    return {
      main: `<h4>Currency Amount:</h4>
              <input type="number" name="conversionRequest" value="0"><br>
              
              <div class="btn btn-info" onclick="convert()">Convert</div>
              
              <br>
              Your Currency Conversion: <input type="text" id="answer" size="5"> INR
              <br>
              Conversion Instance Port: <input type="text" id="conversionPort" size="5">
              
              <p>Content streamed after ${timeout}ms</p>
              
            <p>Content streamed after ${timeout}ms</p>
            <p>This post has no placeholder.</p>`
    }
  },
  placeholder() {
    return ``;
  },
  async data(req) {
    const timeout = req.query.post2 || 1;
    await wait(+timeout);
    return {
      data: timeout
    }
  }
};
