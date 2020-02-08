<template>
  <div>
    <div
      class="row justify-content-center mt-6 debuginfo-title mx-0"
    >You scored {{parseInt(Math.abs(frustrationLevel-8.5)/16.5*100)}}</div>
    <div class="row justify-content-center debuginfo mt-5">
      <label>Timer:&nbsp;&nbsp;{{seconds}}:{{milliseconds}}</label>
    </div>
    <div class="row justify-content-center debuginfo">
      <label>3 Seconds:&nbsp;&nbsp;{{flagThreeSeconds}}</label>
    </div>
    <div class="row justify-content-center debuginfo">
      <label>8 Seconds:&nbsp;&nbsp;{{flagEightSeconds}}</label>
    </div>
    <div class="row justify-content-center debuginfo">
      <label>I don't know:&nbsp;&nbsp;{{flagSkip}}</label>
    </div>
    <div class="row justify-content-center debuginfo">
      <label>Frustration Level:&nbsp;&nbsp;{{frustrationLevel}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "QA10",
  components: {},
  data() {
    return {
      correctAnswer: "3",
      attemptCount: 0,
      flagA: true,
      flagB: true,
      flagC: true,
      flagD: true,
      limitSecond: 30,
      seconds: "00",
      milliseconds: "00",
      // For debug
      flagEightSeconds: false,
      flagThreeSeconds: false,
      flagSkip: false,
      frustrationLevel: 0
    };
  },
  methods: {
    onHandleAnswer(idx) {
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
        case "4": {
          this.flagD = false;
        }
      }

      if (idx === this.correctAnswer) {
        if (this.limitSecond - parseInt(this.seconds) < 3 && !this.flagSkip) {
          this.flagThreeSeconds = true;
          this.frustrationLevel--;
        }

        this.frustrationLevel--;

        this.$store.dispatch(
          "setFrustrationLevelAction",
          this.frustrationLevel
        );
        this.$store.dispatch("setFlagEndAction", "true");
      }
    },
    onHandleSkip() {
      this.flagSkip = true;
      this.frustrationLevel += 0.5;
      this.$store.dispatch("setFrustrationLevelAction", this.frustrationLevel);
      this.$store.dispatch("setFlagEndAction", "true");
    },
    runTimer(me) {
      let interval = 1,
        second = interval * 100,
        millisecond = interval;

      let countDown = this.limitSecond * 100,
        now = 0;
      let timer = setInterval(function() {
        let distance = countDown - now;
        now++;

        me.milliseconds = (distance % second) / millisecond;
        me.seconds = (distance - me.milliseconds) / second;

        if (parseInt(me.milliseconds) < 10)
          me.milliseconds = "0" + me.milliseconds;
        if (parseInt(me.seconds) < 10) me.seconds = "0" + me.seconds;

        if (
          me.limitSecond - parseInt(me.seconds) > 8 &&
          !me.flagEightSeconds &&
          !me.flagSkip
        ) {
          me.flagEightSeconds = true;
          me.frustrationLevel++;
        }

        if (distance == 0) {
          clearInterval(timer);
        }
      }, 10);
    }
  },
  mounted() {
    this.$store.dispatch("setFlagEndAction", "none");
    this.$store.dispatch("setFlagEightSecondsAction", false);
    this.$store.dispatch("setFlagThreeSecondsAction", false);
    this.$store.dispatch("setFlagSkipAction", false);
    this.frustrationLevel = this.$store.state.frustrationLevel;
  },
  created: function() {
    // this.runTimer(this);
  }
};
</script>

<style scoped>
.skip {
  font-size: 2em;
  color: #dc3545;
}

.debuginfo-title {
  margin-top: 60px;
  color: #dc3545;
  font-size: calc(42px + 0.4vw);
}

.debuginfo {
  margin: 0 auto;
  display: flex;
  align-items: right;
  color: #dc3545;
  text-align: center;
}

.debuginfo label {
  font-size: 1.5em;
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

#a1:hover {
  box-shadow: 0 0 10px 10px red;
}

#a2:hover {
  box-shadow: 0 0 10px 10px blue;
}

#a3:hover {
  box-shadow: 0 0 10px 10px #975300;
}

#a4:hover {
  box-shadow: 0 0 10px 10px green;
}

.skip:hover {
  box-shadow: 0 0 10px 10px #01695b;
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
