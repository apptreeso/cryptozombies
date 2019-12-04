<template>
  <div>
    <section class="question">
      <div class="question-wrapper">
        <div class="text">
          <span style="color:#CB4444">2What does this</span> mean
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
            <div class="anim aa1 blink" :style="{visibility: flagA ? 'visible' : 'hidden'}">
              <div class="answer-block" @click="onHandleClick('1')">
                <div id="a1" class="answer start">
                  <div class="variant">
                    <span class="pronounce">1</span>
                  </div>
                  <div class="text">Hello</div>
                </div>
              </div>
            </div>
            <div class="anim aa2 blink" :style="{visibility: flagB ? 'visible' : 'hidden'}">
              <div class="answer-block" @click="onHandleClick('2')">
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
            <div class="anim aa3 blink" :style="{visibility: flagC ? 'visible' : 'hidden'}">
              <div class="answer-block" @click="onHandleClick('3')">
                <div id="a3" class="answer start">
                  <div class="variant">
                    <span class="pronounce">3</span>
                  </div>
                  <div class="text">Be careful</div>
                </div>
              </div>
            </div>
            <div class="anim blink" :style="{visibility: flagD ? 'visible' : 'hidden'}">
              <div class="answer-block" @click="onHandleClick('4')">
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
  name: "QA1",
  components: {},
  data() {
    return {
      correctAnswer: "3",
      attemptCount: 0,
      flagA: true,
      flagB: true,
      flagC: true,
      flagD: true
    };
  },
  methods: {
    onHandleClick(idx) {
      switch (idx) {
        case "1": {
          this.flagA = false;
          break;
        }
        case "2": {
          this.flagB = false;
          break;
        }
        case "3": {
          this.flagC = false;
          break;
        }
        default:
          this.flagD = false;
      }

      this.attemptCount++;
      this.$store.dispatch("setAttemptCountAction", this.attemptCount);
      if (idx === this.correctAnswer)
        this.$store.dispatch("setFlagEndAction", true);
    }
  },
  mounted() {
    this.$store.dispatch("setAttemptCountAction", 0);
    this.$store.dispatch("setFlagEndAction", false);
  }
};
</script>

<style scoped>
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
