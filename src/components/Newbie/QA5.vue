<template>
  <div class="content" :style="handleBackground">
    <section class="timer-wrapper mb-4">
      <div class="d-flex">
        <div class="timer-bar-left" :style="{width: leftBarWidth}"></div>
        <div class="timer-bar-right"></div>
      </div>
    </section>
    <section class="question" v-if="showQuestion">
      <div class="question-wrapper">
        <div class="text">
          <span style="color:#CB4444">What does this</span> mean
          <span style="color:#CB4444">?</span>
        </div>
        <div class="symbols show">
          <span id="char0" class="list-complete-item">What is "See you next time" in Chinese?</span>
        </div>
      </div>
    </section>
    <section v-if="showAnswer">
      <div class="answers d-flex mb-0 justify-content-center align-items-center">
        <div class="answers-inner d-flex justify-content-center">
          <div class="answer-row">
            <div class="anim aa1 blink" :style="{visibility: flagA ? 'visible' : 'hidden'}">
              <div class="answer-block" @click="onHandleAnswer('1')" @mouseover="mouseOver">
                <div id="a1" class="answer" :class="{start: isActive[0]}">
                  <div class="variant">
                    <span :class="{pronounce: isActive[0]}">1</span>
                  </div>
                  <div class="text">见</div>
                </div>
              </div>
            </div>
            <div class="anim aa2 blink" :style="{visibility: flagB ? 'visible' : 'hidden'}">
              <div class="answer-block" @click="onHandleAnswer('2')" @mouseover="mouseOver">
                <div id="a2" class="answer" :class="{start: isActive[1]}">
                  <div class="variant">
                    <span :class="{pronounce: isActive[1]}">2</span>
                  </div>
                  <div class="text">下次</div>
                </div>
              </div>
            </div>
          </div>
          <div class="answer-row">
            <div class="anim aa3 blink" :style="{visibility: flagC ? 'visible' : 'hidden'}">
              <div class="answer-block" @click="onHandleAnswer('3')" @mouseover="mouseOver">
                <div id="a3" class="answer" :class="{start: isActive[2]}">
                  <div class="variant">
                    <span :class="{pronounce: isActive[2]}">3</span>
                  </div>
                  <div class="text">下次见</div>
                </div>
              </div>
            </div>
            <div class="anim blink" :style="{visibility: flagD ? 'visible' : 'hidden'}">
              <div class="answer-block" @click="onHandleAnswer('4')">
                <div id="a4" class="answer" :class="{start: isActive[3]}">
                  <div class="variant">
                    <span :class="{pronounce: isActive[3]}">4</span>
                  </div>
                  <div class="text">次</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="showAnswer">
      <div class="row justify-content-center mt-3 mb-5 mx-0">
        <b-button
          variant="info"
          class="skip anim px-5"
          @click="onHandleSkip"
          @mouseover="mouseOver"
        >I don't know</b-button>
      </div>
      <!-- <div class="debuginfo row justify-content-center mt-5">
        <label>Timer:&nbsp;&nbsp;{{seconds}}:{{milliseconds}}</label>
      </div>
      <div class="debuginfo row justify-content-center">
        <label>3 Seconds:&nbsp;&nbsp;{{flagThreeSeconds}}</label>
      </div>
      <div class="debuginfo row justify-content-center">
        <label>8 Seconds:&nbsp;&nbsp;{{flagEightSeconds}}</label>
      </div>
      <div class="debuginfo row justify-content-center">
        <label>I don't know:&nbsp;&nbsp;{{flagSkip}}</label>
      </div>
      <div class="debuginfo row justify-content-center">
        <label>Frustration Level:&nbsp;&nbsp;{{frustrationLevel}}</label>
      </div>-->
    </section>
  </div>
</template>

<script>
export default {
  name: "QA5",
  components: {},
  data() {
    return {
      showQuestion: false,
      showAnswer: false,
      questionAudio: false,
      correctAnswer: "3",
      attemptCount: 0,
      isActive: [false, false, false, false],
      flagA: true,
      flagB: true,
      flagC: true,
      flagD: true,
      limitSecond: 40,
      seconds: "00",
      milliseconds: "00",
      leftBarWidth: "100vw",
      // For debug
      flagEightSeconds: false,
      flagThreeSeconds: false,
      flagSkip: false,
      frustrationLevel: 0
    };
  },
  computed: {
    handleBackground() {
      if (!this.ismobile()) {
        return {
          "background-image": `url(${require("../../assets/image/4121.Q4.AB.background.l.jpg")})`
        };
      } else {
        return {
          "background-image": `url(${require("../../assets/image/4121.Q4.AB.background.p.jpg")})`
        };
      }
    }
  },
  methods: {
    mouseOver(e) {
      if (
        e.target.className == "answer" ||
        e.target.className == "answer start"
      )
        this.playAudio(require("../../assets/audio/SFX_hoverbutton.mp3"));
    },
    ismobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
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

      clearInterval(this.timer);

      if (idx === this.correctAnswer) {
        if (this.limitSecond - parseInt(this.seconds) < 3 && !this.flagSkip) {
          this.flagThreeSeconds = true;
          this.frustrationLevel--;
        }

        // Play audio for correct answer
        this.playAudio(require("../../assets/audio/SFX_applause.mp3"));

        // Delay for audio for correct answer
        setTimeout(
          function(self) {
            // Dispatch true
            self.$store.dispatch(
              "setFrustrationLevelAction",
              self.frustrationLevel
            );

            self.$store.dispatch("setFlagEndAction", "true");
          },
          3 * 1000,
          this
        );
      } else {
        // Dispatch false
        this.frustrationLevel++;

        this.$store.dispatch(
          "setFrustrationLevelAction",
          this.frustrationLevel
        );
        this.$store.dispatch("setFlagEndAction", "false");
      }
    },
    onHandleSkip() {
      clearInterval(this.timer);

      this.flagSkip = true;
      this.frustrationLevel += 0.5;
      this.$store.dispatch("setFrustrationLevelAction", this.frustrationLevel);
      this.$store.dispatch("setFlagEndAction", "true");
    },
    runTimer(me) {
      const interval = 1,
        second = interval * 100,
        millisecond = interval;

      let countDown = this.limitSecond * 100,
        delay = 1.5 * 100,
        now = 0;

      // Play transition audio
      this.playAudio(require("../../assets/audio/SFX_transition.mp3"));

      me.timer = setInterval(function() {
        // Delay for start audio
        delay--;

        if (delay > 0) return;
        else if (delay == 0) me.showQuestion = true;

        // Normal Functionality
        let distance = countDown - now;
        now++;

        // Update Timer Bar
        me.leftBarWidth = (distance / countDown) * 100 + "vw";

        // Calculate Timer
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
          me.onHandleSkip();
        }

        // Implement the effets on the answers
        if (
          me.limitSecond - parseInt(me.seconds) == 4 &&
          me.milliseconds == 0
        ) {
          me.playAudio(require("../../assets/audio/Q4.AB.option1.mp3"));
          me.isActive = [false, false, false, false];
          me.isActive[0] = true;
        }
        if (
          me.limitSecond - parseInt(me.seconds) == 6 &&
          me.milliseconds == 0
        ) {
          me.playAudio(require("../../assets/audio/Q4.AB.option2.mp3"));
          me.isActive = [false, false, false, false];
          me.isActive[1] = true;
        }
        if (
          me.limitSecond - parseInt(me.seconds) == 8 &&
          me.milliseconds == 0
        ) {
          me.playAudio(require("../../assets/audio/Q4.AB.option3.mp3"));
          me.isActive = [false, false, false, false];
          me.isActive[2] = true;
        }
        if (
          me.limitSecond - parseInt(me.seconds) == 10 &&
          me.milliseconds == 0
        ) {
          me.playAudio(require("../../assets/audio/Q4.AB.option4.mp3"));
          me.isActive = [false, false, false, false];
          me.isActive[3] = true;
        }

        if (
          me.limitSecond - parseInt(me.seconds) == 3 &&
          me.milliseconds == 0
        ) {
          me.showAnswer = true;
        }

        // Question Audio
        if (!me.questionAudio) {
          me.playAudio(require("../../assets/audio/Q4.AB.question.mp3"));
          me.questionAudio = true;
        }
      }, 10);
    },
    playAudio(uri) {
      let flagMute = this.$store.state.flagMute;
      if (!flagMute) {
        let audio = new Audio(uri);
        audio.play();
      }
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
    this.runTimer(this);
  }
};
</script>

<style scoped>
.content {
  flex: 1;
  background-size: 100% 100% !important;
  overflow: hidden;
}

.skip {
  font-size: 2em;
  color: #dc3545;
  border-radius: 50px;
  height: 80px;
}

.debuginfo {
  margin: 0 auto;
  display: flex;
  align-items: right;
  color: #333;
  text-align: center;
}

.debuginfo label {
  font-size: 1.5em;
}

.timer-wrapper {
  display: flex;
  height: 10px;
  border-radius: 10px;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.15);
}

.timer-bar-left {
  background: #cb4444;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}

.timer-bar-right {
  width: 100vw;
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

.anim {
  animation: fadeInLeft 1s ease-in-out 1 backwards;
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
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

.answer-block {
  position: relative;
}

.answer#a1.start {
  animation: blinkPronounce 0.3s 3;
}

.answer#a2.start {
  animation: blinkPronounce 0.3s 3;
}

.answer#a3.start {
  animation: blinkPronounce 0.3s 3;
}

.answer#a4.start {
  animation: blinkPronounce 0.3s 3;
}

@keyframes blinkPronounce {
  0% {
    box-shadow: none;
  }
  100% {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 15px #cb4444;
  }
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

@keyframes shakeVariant {
  0% {
    transform: scale(1.1) rotate(12deg);
  }
  25% {
    transform: scale(1.2) rotate(-12deg);
  }
  50% {
    transform: scale(1.3) rotate(12deg);
  }
  75% {
    transform: scale(1.5) rotate(-12deg);
  }
  100% {
    transform: scale(1);
  }
}

.answer .text {
  font-weight: 700;
  font-size: calc(60px + 0.4vw);
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
    font-size: calc(42px + 0.4vw);
  }
}

@media (max-width: 390px) {
  .answer {
    width: calc(60px + 26.69vw);
    min-height: calc(60px + 26.69vw);
  }
}
</style>
