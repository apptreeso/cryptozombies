<template>
  <div>
    <section class="menu-wrap">
      <div class="row mx-auto justify-content-center align-items-center navbar-test">
        <div class="d-flex controls-group">
          <div class="menu"></div>
          <div class="step">
            <span class="current">{{currentStep}}</span>
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
    <QA1 v-if="currentQANumber == 1"></QA1>
    <QA2 v-if="currentQANumber == 2"></QA2>
    <QA3 v-if="currentQANumber == 3"></QA3>
    <QA4 v-if="currentQANumber == 4"></QA4>
    <QA5 v-if="currentQANumber == 5"></QA5>
  </div>
</template>

<script>
import QA1 from "@/components/newbie/QA1.vue";
import QA2 from "@/components/newbie/QA2.vue";
import QA3 from "@/components/newbie/QA3.vue";
import QA4 from "@/components/newbie/QA4.vue";
import QA5 from "@/components/newbie/QA5.vue";

export default {
  name: "AssessmentTest",
  components: {
    QA1,
    QA2,
    QA3,
    QA4,
    QA5
  },
  data() {
    return {
      // ========================
      timer: null,
      totalTime: 25 * 60,
      resetButton: false,
      title: "Let the countdown begin!!",
      // ========================
      currentStep: 1,
      currentQANumber: 1
    };
  },
  computed: {
    getNextQANumber() {
      // var attempCount = this.$store.state.attemptCount;
      return this.$store.state.flagEnd;
    }
  },
  watch: {
    getNextQANumber: function(flag) {
      if (flag) {
        this.currentStep++;
        this.currentQANumber++;
      }
    }
  },
  methods: {
    // ========================
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
    // ========================
  }
  // ========================
  // computed: {
  //   minutes: function() {
  //     const minutes = Math.floor(this.totalTime / 60);
  //     return this.padTime(minutes);
  //   },
  //   seconds: function() {
  //     const seconds = this.totalTime - this.minutes * 60;
  //     return this.padTime(seconds);
  //   }
  // }
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
</style>