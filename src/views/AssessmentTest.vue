<template>
  <div>
    <section class="menu-wrap">
      <div class="row mx-auto justify-content-center align-items-center navbar-test">
        <div class="d-flex controls-group">
          <div class="menu"></div>
          <div class="step">
            <span class="current">2</span>
            <span class="rest">/8</span>
          </div>
        </div>
        <div class="d-flex right-controls-wrap">
          <label class="checkbox">
            <input type="checkbox" class="visually-hidden" />
          </label>
          <div class="button-save">Save &amp; Exit</div>
        </div>
      </div>
    </section>
    <div>
      <div class="timer-wrap d-flex">
        <div class="timer-bar-left"></div>
        <div class="timer-bar-right"></div>
      </div>
      <div class="bottom-spacer"></div>
    </div>
    <section class="question">
      <div class="question-wrapper">
        <div class="text">
          <span style="color:#CB4444">What does this</span> mean
          <span style="color:#CB4444">?</span>
        </div>
        <div class="symbols show">
          <span id="char0" class="list-complete-item">谢</span>
          <span id="char1" class="list-complete-item">谢</span>
        </div>
        <div class="pinyin hide delay">Xièxiè</div>
      </div>
    </section>
    <section>
      <div class="answers d-flex mb-0 justify-content-center align-items-center">
        <div class="answers-inner d-flex justify-content-center">
          <div class="answer-row">
            <div class="anim aa1 blink">
              <div class="answer-block">
                <div id="a1" class="answer start">
                  <div class="variant">
                    <span class="pronounce">1</span>
                  </div>
                  <div class="text">Hello</div>
                </div>
              </div>
            </div>
            <div class="anim aa2 blink">
              <div class="answer-block">
                <div id="a2" class="answer start">
                  <div class="variant">
                    <span class="pronounce">2</span>
                  </div>
                  <div class="text">Thank you</div>
                </div>
              </div>
            </div>
          </div>
          <div class="answer-row">
            <div class="anim aa3 blink">
              <div class="answer-block">
                <div id="a3" class="answer start">
                  <div class="variant">
                    <span class="pronounce">3</span>
                  </div>
                  <div class="text">Be careful</div>
                </div>
              </div>
            </div>
            <div class="anim blink">
              <div class="answer-block">
                <div id="a4" class="answer start">
                  <div class="variant">
                    <span class="pronounce">4</span>
                  </div>
                  <div class="text">Bless you!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AssessmentTest",
  data() {
    return {
      // ========================
      timer: null,
      totalTime: 25 * 60,
      resetButton: false,
      title: "Let the countdown begin!!"
      // ========================
    };
  },
  // ========================
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
      this.title = "Greatness is within sight!!";
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
      this.title = "Never quit, keep going!!";
    },
    resetTimer: function() {
      this.totalTime = 25 * 60;
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
      this.title = "Let the countdown begin!!";
    },
    padTime: function(time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function() {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer();
      }
    }
  },
  // ========================
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #message {
  color: #DDD;
  font-size: 50px;
  margin-bottom: 20px;
}

#timer {
  font-size: 200px;
  line-height: 1;
  margin-bottom: 40px;
} */

.menu-wrap {
  position: relative;
  z-index: 10;
  background: #304155;
}

.navbar-test {
  height: 70px;
}

.controls-group {
  position: relative;
}

.menu {
  width: 48px;
  height: 48px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALISURBVHgB3ZrtbdswEIZfFf1fZ4KwE7SdoOkk8QbxBlYncDtBuoG7gbuB3QmoTGB3gisvogCFoqTjiUmIPABhWyCPPJH3QdJAZojozhVLQ46u3KJk3AC3NM8GJeIGZkjG2ZUVMvEO+TDCejz4r8iEWAH/hqfenIGcK4z3s+K+IGRWAW+UZ/fVusLTv0/pQIp/QQfug/vyjmCZ0U8Ype0r4d/akeQcg/aG4p6L2UIDzXsU60pN7YycSce9l2Fn6qUp4RqsqTyi7rcaUYDXu0FZXKqqGhj/wIipXZsG5cF2dh0+jHmhC8rlX/hgoICbJlbgD8rjtx/bE8ZswLgP9skGOk6+PPjfPPWffdHQuPLNKdCIW9C0b47BrpRd4mpG5g9Kc7uWtIHTD0jCIaUTr4g08NXQQm2gmeMXlHBbgfw9NJAsPT5iIdTO3hST6XfVE8SVbtCmu8wdpo2OPcKXJMOKK2Dcx7HXbwx2CD/994bLk37JZ5yUxg6ZILmt9dl2jbV5j0EmqM1mNWy4cUoa3LF47UeU0IzDciTWBJcT8vMX6RjtnvgB+WmgIOem/lXQKnCN/BgoYAUapKNNyqb4hHRObP0b0pHtcIrkh2Iht50ATSCpkQkna0dpcNB93CP3UwmDdh0a/6jUVOJxwxXb3ISCVzSfXhywEJIFMAMN1J75zHEPJSRL1yflz7lRSXRcU3DSJhh4d4y4FlTXBU3SbSl3U4pQuyy3lHFL+TY39SRb+y9N1GFUkcGzOzujTK5C9xkz4mwR9hn4ED4YswGegdIU4X3wx/DhmBv9jvKoUypL8iPr60jOdmJ011WSC44aGmhcCUvDK6LUK6ZV0N5SzsH3hK8D4QeKBBZKO91YR9qzEvtAyRvkgmauWZcq0JOTdM36XlpREAVTLkYajPdzwWtcspAs/e4wKBGSbU9rlIy3hZhHsvQM/1T5D5E25EJuqdcVAAAAAElFTkSuQmCC);
  margin-right: 40px;
}

.step {
  font-size: 50px;
  top: 9px;
  position: relative;
  color: white;
  line-height: 35px;
  font-weight: 700;
}

.rest {
  position: relative;
  color: white;
  font-size: 24px;
  font-weight: 400;
}

.visually-hidden {
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 20px;
}

.button-save {
  width: 160px;
  height: 40px;
  margin-left: 50px;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  color: white;
  text-transform: uppercase;
  background: #516c8b;
  border-radius: 20px;
  cursor: pointer;
}

.timer-wrap {
  height: 10px;
  border-radius: 10px;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.15);
}

.timer-bar-left {
  width: 0%;
  background: #cb4444;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}

.timer-bar-right {
  width: 100%;
}

.bottom-spacer {
  height: 0;
}

.question {
  min-height: 200px;
}

.question-wrapper {
  text-align: center;
}

.question .text {
  font-size: 24px;
  color: #384c63;
  transition: all 1s;
  line-height: 34px;
  height: 34px;
}

.question .symbols.show {
  font-size: calc(30px + 3vw);
}

.symbols.show {
  font-size: 90px;
}

.symbols.show {
  animation: fadeInBlur 1s both;
  transition: all 1s;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.pinyin hide delay {
  animation: fadeInBlur 1s ease-in forwards;
}

.question .symbols {
  color: #384c63;
}

.question .symbols {
  text-align: center;
}

.question .pinyin {
  color: #518dd4;
  opacity: 0;
}

.question .pinyin.delay {
  animation: fadeInBlur 1s ease-in forwards;
}

.pinyin.hide.small,
.pinyin.hide.smaller,
.pinyin.hide {
  font-size: 24px;
  transition: all 1s;
}

@keyframes fadeInBlur {
  0% {
    opacity: 0;
    filter: blur(5px);
  }

  100% {
    opacity: 1;
    filter: blur(0);
  }
}

.answers {
  position: relative;
  align-items: center;
  color: white;
  z-index: 2;
}

.answers-inner {
  justify-content: space-between;
  margin-right: 40px;
  margin-left: 40px;
  max-width: 1300px;
  flex-wrap: wrap;
  -webkit-box-flex: 1;
  flex: 1;
}

.answer-row {
  display: flex;
  justify-content: center;
}

.anim.aa1 {
  animation-delay: 0s;
  z-index: 7;
}

.anim.aa2 {
  z-index: 6;
}

.anim.aa3 {
  z-index: 5;
}

.anim {
  animation: fadeInLeft 1s ease-in-out 1 backwards;
}

.answer-block {
  position: relative;
}

.answer#a1.start {
  animation: blinkPronounceA1S 0.3s 3;
}

.answer#a2.start {
  animation: blinkPronounceA2S 0.3s 3;
}

.answer#a3.start {
  animation: blinkPronounceA3S 0.3s 3;
}

.answer#a4.start {
  animation: blinkPronounceA4S 0.3s 3;
}

.answer#a1 {
  background: #cb4444;
}

.answer#a2 {
  background: #1b84bf;
}

.answer#a3 {
  background: #e48f2a;
}

.answer#a4 {
  background: #1ebf1b;
}

.answer {
  display: flex;
  width: calc(170px + 5vw);
  min-height: calc(170px + 5vw);
  overflow-wrap: break-word;
  border-radius: 30px;
  font-weight: 700;
  border: 0 solid transparent;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  /* margin-bottom: 20px;
  animation: fadeInDown 1s ease-out both; */
}

.answer .variant {
  position: absolute;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background: rgba(0, 0, 0, 0.15);
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  font-size: 36px;
  top: 0;
  right: 20px;
}

.variant .pronounce {
  display: inline-block;
  animation: shakeVariant 0.4s ease-in-out;
}

.answer .text {
  font-weight: 700;
  font-size: calc(16px + 0.4vw);
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}

@media (max-width: 1370px) {
  .answer {
    height: 46px;
    margin-bottom: 18px;
  }

  .question .symbols.show,
  .question .symbols {
    font-size: 80px;
  }

  .answer .variant {
    font-size: 32px;
  }

  .question {
    min-height: 200px;
    margin-bottom: 30px;
  }

  .question .symbols.show,
  .question .symbols {
    font-size: 80px;
  }
}

@media (max-width: 1100px) {
  .answer {
    display: flex;
    width: calc(50px + 15.9vw);
    min-height: calc(50px + 15.9vw);
    margin-left: 10px;
    margin-right: 10px;
  }

  .answer .variant {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 28px;
    right: 10px;
  }

  .question {
    min-height: 180px;
    margin-bottom: 10px;
  }

  .question .symbols.show,
  .question .symbols {
    font-size: 70px;
  }
}

@media (max-width: 800px) {
  .answer {
    width: calc(170px + 5vw);
    min-height: calc(170px + 5vw);
  }

  .answers-inner {
    display: flex;
    justify-content: space-between;
    margin-right: 40px;
    margin-left: 40px;
    max-width: 1300px;
    flex-wrap: wrap;
    flex: 1;
  }

  .answer-row {
    flex-grow: 1;
  }

  .answer .variant {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 26px;
    top: 0;
    right: 10px;
  }

  .question {
    padding-left: 10px;
    padding-right: 10px;
  }

  .question .text {
    font-size: calc(13px + 0.4vw);
    min-height: calc(13px + 0.4vw);
    line-height: calc(13px + 0.4vw);
  }

  .question .symbols.symbols.show {
    font-size: calc(30px + 3vw);
  }
}

@media (max-width: 500px) {
  .answer {
    width: calc(100px + 19vw);
    min-height: calc(100px + 19vw);
  }

  .answer .text {
    font-size: calc(15px + 0.4vw);
  }
}

@media (max-width: 390px) {
  .answer {
    width: calc(60px + 26.69vw);
    min-height: calc(60px + 26.69vw);
  }
}
</style>