<template>
  <div class="summary-wrap">
    <div class="summary-wrap-A" v-if="group == 'A'">
      <div class="bg-wrap-A flex-screen"></div>
      <div class="ex1-A flex-screen keep-ratio" v-if="ex1[0]"></div>
      <div class="ex2-A flex-screen keep-ratio" v-if="ex2[0]"></div>
      <div class="ex3-A flex-screen keep-ratio" v-if="ex3[0]"></div>
      <div class="ex4-A flex-screen keep-ratio" v-if="ex4[0]"></div>
      <div class="ex5-A flex-screen keep-ratio" v-if="ex5[0]"></div>
      <div class="ex6-A flex-screen keep-ratio" v-if="ex6[0]"></div>
      <div class="ex7-A flex-screen keep-ratio" v-if="ex7[0]"></div>
      <div class="ex8-A flex-screen keep-ratio" v-if="ex8[0]"></div>
      <div class="ex9-A flex-screen keep-ratio" v-if="ex9[0]"></div>
      <div class="ex10-A flex-screen keep-ratio" v-if="ex10[0]"></div>
    </div>
    <div class="summary-wrap-BC" v-if="group == 'BC'">
      <div class="bg-wrap-BC flex-screen"></div>
      <div class="ex1-BC flex-screen keep-ratio" v-if="ex1[1]"></div>
      <div class="ex2-BC flex-screen keep-ratio" v-if="ex2[1]"></div>
      <div class="ex3-BC flex-screen keep-ratio" v-if="ex3[1]"></div>
      <div class="ex4-BC flex-screen keep-ratio" v-if="ex4[1]"></div>
      <div class="ex5-BC flex-screen keep-ratio" v-if="ex5[1]"></div>
      <div class="ex6-BC flex-screen keep-ratio" v-if="ex6[1]"></div>
      <div class="ex7-BC flex-screen keep-ratio" v-if="ex7[1]"></div>
      <div class="ex8-BC flex-screen keep-ratio" v-if="ex8[1]"></div>
      <div class="ex9-BC flex-screen keep-ratio" v-if="ex9[1]"></div>
      <div class="ex10-BC flex-screen keep-ratio" v-if="ex10[1]"></div>
      <div class="ex11-BC flex-screen keep-ratio" v-if="ex11[1]"></div>
      <div class="ex12-BC flex-screen keep-ratio" v-if="ex12[1]"></div>
    </div>
    <div class="summary-wrap-D" v-if="group == 'D'">
      <div class="bg-wrap-D flex-screen"></div>
      <div class="ex1-D flex-screen keep-ratio" v-if="ex1[3]"></div>
      <div class="ex2-D flex-screen keep-ratio" v-if="ex2[3]"></div>
      <div class="ex3-D flex-screen keep-ratio" v-if="ex3[3]"></div>
      <div class="ex4-D flex-screen keep-ratio" v-if="ex4[3]"></div>
      <div class="ex5-D flex-screen keep-ratio" v-if="ex5[3]"></div>
      <div class="ex6-D flex-screen keep-ratio" v-if="ex6[3]"></div>
      <div class="ex7-D flex-screen keep-ratio" v-if="ex7[3]"></div>
      <div class="ex8-D flex-screen keep-ratio" v-if="ex8[3]"></div>
      <div class="ex9-D flex-screen keep-ratio" v-if="ex9[3]"></div>
      <div class="ex10-D flex-screen keep-ratio" v-if="ex10[3]"></div>
      <div class="ex11-D flex-screen keep-ratio" v-if="ex11[3]"></div>
      <div class="ex12-D flex-screen keep-ratio" v-if="ex12[3]"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QA10",
  components: {},
  props: ["group"],
  data() {
    return {
      ex1: [false, false, false, false],
      ex2: [false, false, false, false],
      ex3: [false, false, false, false],
      ex4: [false, false, false, false],
      ex5: [false, false, false, false],
      ex6: [false, false, false, false],
      ex7: [false, false, false, false],
      ex8: [false, false, false, false],
      ex9: [false, false, false, false],
      ex10: [false, false, false, false],
      ex11: [false, false, false, false],
      ex12: [false, false, false, false]
    };
  },
  methods: {
    summary() {
      if (this.group == "A") {
        this.playAudio(require("../../assets/audio/summary/summary.A.mp3"));

        setTimeout(
          function(self) {
            self.ex1 = [true, false, false, false];
          },
          4 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex2 = [true, false, false, false];
          },
          7 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex3 = [true, false, false, false];
          },
          9 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex4 = [true, false, false, false];
          },
          13 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex1 = [false, false, false, false];
            self.ex2 = [false, false, false, false];
            self.ex3 = [false, false, false, false];
            self.ex4 = [false, false, false, false];
            self.ex5 = [true, false, false, false];
          },
          17 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex6 = [true, false, false, false];
          },
          21 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex5 = [false, false, false, false];
            self.ex6 = [false, false, false, false];
            self.ex7 = [true, false, false, false];
          },
          28 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex8 = [true, false, false, false];
          },
          30 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex7 = [false, false, false, false];
            self.ex8 = [false, false, false, false];
            self.ex9 = [true, false, false, false];
          },
          43 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex10 = [true, false, false, false];
          },
          46 * 1000,
          this
        );
      }

      if (this.group == "BC") {
        this.playAudio(require("../../assets/audio/summary/summary.BC.mp3"));

        setTimeout(
          function(self) {
            self.ex1 = [false, true, false, false];
          },
          9 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex2 = [false, true, false, false];
          },
          14 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex3 = [false, true, false, false];
          },
          16 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex4 = [false, true, false, false];
          },
          20 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex1 = [false, false, false, false];
            self.ex2 = [false, false, false, false];
            self.ex3 = [false, false, false, false];
            self.ex4 = [false, false, false, false];
            self.ex5 = [false, true, false, false];
          },
          24 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex6 = [false, true, false, false];
          },
          28 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex5 = [false, false, false, false];
            self.ex6 = [false, false, false, false];
            self.ex7 = [false, true, false, false];
          },
          32 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex8 = [false, true, false, false];
          },
          35 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex7 = [false, false, false, false];
            self.ex8 = [false, false, false, false];
            self.ex9 = [false, true, false, false];
          },
          41 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex10 = [false, true, false, false];
          },
          45 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex9 = [false, false, false, false];
            self.ex10 = [false, false, false, false];
            self.ex11 = [false, true, false, false];
          },
          52 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex12 = [false, true, false, false];
          },
          54 * 1000,
          this
        );
      }

      if (this.group == "D") {
        this.playAudio(require("../../assets/audio/summary/summary.D.mp3"));

        setTimeout(
          function(self) {
            self.ex1 = [false, false, false, true];
          },
          9 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex2 = [false, false, false, true];
          },
          14 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex3 = [false, false, false, true];
          },
          16 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex4 = [false, false, false, true];
          },
          20 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex1 = [false, false, false, false];
            self.ex2 = [false, false, false, false];
            self.ex3 = [false, false, false, false];
            self.ex4 = [false, false, false, false];
            self.ex5 = [false, false, false, true];
          },
          24 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex6 = [false, false, false, true];
          },
          28 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex5 = [false, false, false, false];
            self.ex6 = [false, false, false, false];
            self.ex7 = [false, false, false, true];
          },
          32 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex8 = [false, false, false, true];
          },
          35 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex7 = [false, false, false, false];
            self.ex8 = [false, false, false, false];
            self.ex9 = [false, false, false, true];
          },
          41 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex10 = [false, true, false, false];
          },
          45 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex9 = [false, false, false, false];
            self.ex10 = [false, false, false, false];
            self.ex11 = [false, false, false, true];
          },
          52 * 1000,
          this
        );

        setTimeout(
          function(self) {
            self.ex12 = [false, false, false, true];
          },
          54 * 1000,
          this
        );
      }
    },
    playAudio(uri) {
      let flagMute = this.$store.state.flagMute;
      if (!flagMute) {
        let audio = new Audio(uri);
        audio.play();
      }
    }
  },
  mounted() {},
  created: function() {
    this.summary();
  }
};
</script>

<style scoped>
.summary-wrap,
.summary-wrap-A {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.flex-screen {
  position: fixed;
  left: 0;
  top: 70px;
  width: 100vw;
  height: calc(100vh - 70px);
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
}

.keep-ratio {
  max-height: calc(100vh - 70px);
  background-size: 100% 100% !important;
}

.bg-wrap-A {
  background: url("../../assets/image/summary/landscape/4121.summary.A.background.l.png");
}

.ex1-A {
  background-image: url("../../assets/image/summary/landscape/4121.summary.A.ex1.l.png");
}

.ex2-A {
  background: url("../../assets/image/summary/landscape/4121.summary.A.ex2.l.png");
}

.ex3-A {
  background: url("../../assets/image/summary/landscape/4121.summary.A.ex3.l.png");
}

.ex4-A {
  background: url("../../assets/image/summary/landscape/4121.summary.A.ex4.l.png");
}

.ex5-A {
  background: url("../../assets/image/summary/landscape/4121.summary.A.ex5.l.png");
}

.ex6-A {
  background: url("../../assets/image/summary/landscape/4121.summary.A.ex6.l.png");
}

.ex7-A {
  background: url("../../assets/image/summary/landscape/4121.summary.A.ex7.l.png");
}

.ex8-A {
  background: url("../../assets/image/summary/landscape/4121.summary.A.ex8.l.png");
}

.ex9-A {
  background: url("../../assets/image/summary/landscape/4121.summary.A.ex9.l.png");
}

.ex10-A {
  background: url("../../assets/image/summary/landscape/4121.summary.A.ex10.l.png");
}

.bg-wrap-BC {
  background: url("../../assets/image/summary/landscape/4121.summary.BC.background.l.png");
}

.ex1-BC {
  background-image: url("../../assets/image/summary/landscape/4121.summary.BC.ex1.l.png");
}

.ex2-BC {
  background: url("../../assets/image/summary/landscape/4121.summary.BC.ex2.l.png");
}

.ex3-BC {
  background: url("../../assets/image/summary/landscape/4121.summary.BC.ex3.l.png");
}

.ex4-BC {
  background: url("../../assets/image/summary/landscape/4121.summary.BC.ex4.l.png");
}

.ex5-BC {
  background: url("../../assets/image/summary/landscape/4121.summary.BC.ex5.l.png");
}

.ex6-BC {
  background: url("../../assets/image/summary/landscape/4121.summary.BC.ex6.l.png");
}

.ex7-BC {
  background: url("../../assets/image/summary/landscape/4121.summary.BC.ex7.l.png");
}

.ex8-BC {
  background: url("../../assets/image/summary/landscape/4121.summary.BC.ex8.l.png");
}

.ex9-BC {
  background: url("../../assets/image/summary/landscape/4121.summary.BC.ex9.l.png");
}

.ex10-BC {
  background: url("../../assets/image/summary/landscape/4121.summary.BC.ex10.l.png");
}

.ex11-BC {
  background: url("../../assets/image/summary/landscape/4121.summary.BC.ex11.l.png");
}

.ex12-BC {
  background: url("../../assets/image/summary/landscape/4121.summary.BC.ex12.l.png");
}

.bg-wrap-D {
  background: url("../../assets/image/summary/landscape/4121.summary.D.background.l.png");
}

.ex1-D {
  background-image: url("../../assets/image/summary/landscape/4121.summary.D.ex1.l.png");
}

.ex2-D {
  background: url("../../assets/image/summary/landscape/4121.summary.D.ex2.l.png");
}

.ex3-D {
  background: url("../../assets/image/summary/landscape/4121.summary.D.ex3.l.png");
}

.ex4-D {
  background: url("../../assets/image/summary/landscape/4121.summary.D.ex4.l.png");
}

.ex5-D {
  background: url("../../assets/image/summary/landscape/4121.summary.D.ex5.l.png");
}

.ex6-D {
  background: url("../../assets/image/summary/landscape/4121.summary.D.ex6.l.png");
}

.ex7-D {
  background: url("../../assets/image/summary/landscape/4121.summary.D.ex7.l.png");
}

.ex8-D {
  background: url("../../assets/image/summary/landscape/4121.summary.D.ex8.l.png");
}

.ex9-D {
  background: url("../../assets/image/summary/landscape/4121.summary.D.ex9.l.png");
}

.ex10-D {
  background: url("../../assets/image/summary/landscape/4121.summary.D.ex10.l.png");
}

.ex11-D {
  background: url("../../assets/image/summary/landscape/4121.summary.D.ex11.l.png");
}

.ex12-D {
  background: url("../../assets/image/summary/landscape/4121.summary.D.ex12.l.png");
}

@media (max-width: 800px) {
  .flex-screen {
    top: 62px;
    height: calc(100vh - 62px);
  }

  .bg-wrap-A {
    background: url("../../assets/image/summary/portrait/4121.summary.A.background.p.png");
  }

  .ex1-A {
    background-image: url("../../assets/image/summary/portrait/4121.summary.A.ex1.p.png");
  }

  .ex2-A {
    background: url("../../assets/image/summary/portrait/4121.summary.A.ex2.p.png");
  }

  .ex3-A {
    background: url("../../assets/image/summary/portrait/4121.summary.A.ex3.p.png");
  }

  .ex4-A {
    background: url("../../assets/image/summary/portrait/4121.summary.A.ex4.p.png");
  }

  .ex5-A {
    background: url("../../assets/image/summary/portrait/4121.summary.A.ex5.p.png");
  }

  .ex6-A {
    background: url("../../assets/image/summary/portrait/4121.summary.A.ex6.p.png");
  }

  .ex7-A {
    background: url("../../assets/image/summary/portrait/4121.summary.A.ex7.p.png");
  }

  .ex8-A {
    background: url("../../assets/image/summary/portrait/4121.summary.A.ex8.p.png");
  }

  .ex9-A {
    background: url("../../assets/image/summary/portrait/4121.summary.A.ex9.p.png");
  }

  .ex10-A {
    background: url("../../assets/image/summary/portrait/4121.summary.A.ex10.p.png");
  }

  .bg-wrap-BC {
    background: url("../../assets/image/summary/portrait/4121.summary.BC.background.p.png");
  }

  .ex1-BC {
    background-image: url("../../assets/image/summary/portrait/4121.summary.BC.ex1.p.png");
  }

  .ex2-BC {
    background: url("../../assets/image/summary/portrait/4121.summary.BC.ex2.p.png");
  }

  .ex3-BC {
    background: url("../../assets/image/summary/portrait/4121.summary.BC.ex3.p.png");
  }

  .ex4-BC {
    background: url("../../assets/image/summary/portrait/4121.summary.BC.ex4.p.png");
  }

  .ex5-BC {
    background: url("../../assets/image/summary/portrait/4121.summary.BC.ex5.p.png");
  }

  .ex6-BC {
    background: url("../../assets/image/summary/portrait/4121.summary.BC.ex6.p.png");
  }

  .ex7-BC {
    background: url("../../assets/image/summary/portrait/4121.summary.BC.ex7.p.png");
  }

  .ex8-BC {
    background: url("../../assets/image/summary/portrait/4121.summary.BC.ex8.p.png");
  }

  .ex9-BC {
    background: url("../../assets/image/summary/portrait/4121.summary.BC.ex9.p.png");
  }

  .ex10-BC {
    background: url("../../assets/image/summary/portrait/4121.summary.BC.ex10.p.png");
  }

  .ex11-BC {
    background: url("../../assets/image/summary/portrait/4121.summary.BC.ex11.p.png");
  }

  .ex12-BC {
    background: url("../../assets/image/summary/portrait/4121.summary.BC.ex12.p.png");
  }

  .bg-wrap-D {
    background: url("../../assets/image/summary/portrait/4121.summary.D.background.p.png");
  }

  .ex1-D {
    background-image: url("../../assets/image/summary/portrait/4121.summary.D.ex1.p.png");
  }

  .ex2-D {
    background: url("../../assets/image/summary/portrait/4121.summary.D.ex2.p.png");
  }

  .ex3-D {
    background: url("../../assets/image/summary/portrait/4121.summary.D.ex3.p.png");
  }

  .ex4-D {
    background: url("../../assets/image/summary/portrait/4121.summary.D.ex4.p.png");
  }

  .ex5-D {
    background: url("../../assets/image/summary/portrait/4121.summary.D.ex5.p.png");
  }

  .ex6-D {
    background: url("../../assets/image/summary/portrait/4121.summary.D.ex6.p.png");
  }

  .ex7-D {
    background: url("../../assets/image/summary/portrait/4121.summary.D.ex7.p.png");
  }

  .ex8-D {
    background: url("../../assets/image/summary/portrait/4121.summary.D.ex8.p.png");
  }

  .ex9-D {
    background: url("../../assets/image/summary/portrait/4121.summary.D.ex9.p.png");
  }

  .ex10-D {
    background: url("../../assets/image/summary/portrait/4121.summary.D.ex10.p.png");
  }

  .ex11-D {
    background: url("../../assets/image/summary/portrait/4121.summary.D.ex11.p.png");
  }

  .ex12-D {
    background: url("../../assets/image/summary/portrait/4121.summary.D.ex12.p.png");
  }
}
</style>
