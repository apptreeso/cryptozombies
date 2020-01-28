<template>
  <div>
    <section class="menu-wrap">
      <!-- <div class="row mx-auto justify-content-center align-items-center navbar-test"> -->
      <div class="menu-block">
        <div class="d-flex controls-group">
          <div class="menu"></div>
          <div class="step">
            <span class="current">{{currentStep}}</span>
            <span class="rest">/6</span>
          </div>
        </div>
        <div class="d-flex right-controls-wrap">
          <label class="checkbox">
            <input type="checkbox" class="visually-hidden" />
            <span class="checkbox__text" />
          </label>
          <div class="button-save">Save &amp; Exit</div>
        </div>
      </div>
    </section>
    <QA1 v-if="currentQANumber == 1"></QA1>
    <QA2 v-if="currentQANumber == 2"></QA2>
    <QA3 v-if="currentQANumber == 3"></QA3>
    <QA4 v-if="currentQANumber == 4"></QA4>
    <QA5 v-if="currentQANumber == 5"></QA5>
    <QA6 v-if="currentQANumber == 6"></QA6>
    <QA7 v-if="currentQANumber == 7"></QA7>
    <QA8 v-if="currentQANumber == 8"></QA8>
    <QA9 v-if="currentQANumber == 9"></QA9>
  </div>
</template>

<script>
import QA1 from "@/components/newbie/QA1.vue";
import QA2 from "@/components/newbie/QA2.vue";
import QA3 from "@/components/newbie/QA3.vue";
import QA4 from "@/components/newbie/QA4.vue";
import QA5 from "@/components/newbie/QA5.vue";
import QA6 from "@/components/newbie/QA6.vue";
import QA7 from "@/components/newbie/QA7.vue";
import QA8 from "@/components/newbie/QA8.vue";
import QA9 from "@/components/newbie/QA9.vue";

export default {
  name: "AssessmentTest",
  components: {
    QA1,
    QA2,
    QA3,
    QA4,
    QA5,
    QA6,
    QA7,
    QA8,
    QA9
  },
  data() {
    return {
      currentStep: 1,
      currentQANumber: 1
    };
  },
  computed: {
    getNextQANumber() {
      return this.$store.state.flagEnd !== "none" ? true : false;
    }
  },
  watch: {
    getNextQANumber: function(flagNext) {
      if (flagNext) {
        let nextQA = 0,
          frustrationLevel = this.$store.state.frustrationLevel;
        if (this.currentStep === 1) {
          nextQA = 2;
        } else if (this.currentStep === 2) {
          if (frustrationLevel >= -2 && frustrationLevel <= 1) {
            nextQA = 3;
          } else {
            nextQA = 4;
          }
        } else if (this.currentStep === 3) {
          if (frustrationLevel >= -4 && frustrationLevel <= 0) {
            nextQA = 6;
          } else {
            nextQA = 5;
          }
        } else if (this.currentStep === 4) {
          if (frustrationLevel >= -6 && frustrationLevel <= -4) {
            nextQA = 8;
          } else if (frustrationLevel >= -3.5 && frustrationLevel <= 3) {
            nextQA = 7;
          } else {
            nextQA = 6;
          }
        } else {
          nextQA = 9;
        }

        this.currentStep++;
        this.currentQANumber = nextQA;
      }
    }
  },
  methods: {}
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-wrap {
  position: relative;
  z-index: 10;
  background: #304155;
}

.menu-block {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 80px;
  max-width: 1300px;
  -webkit-box-pack: justify;
  margin: auto;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
}

@media (max-width: 1370px) {
  .menu-block {
    height: 70px;
  }
}

@media (max-width: 550px) {
  .menu-block {
    height: 62px;
  }
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

.menu:hover {
  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.step {
  font-size: 64px;
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

.right-controls-wrap {
  align-items: center;
}

label {
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.visually-hidden {
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 20px;
}

.checkbox__text {
  position: relative;
  cursor: pointer;
}

.checkbox__text:before {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK0SURBVHgB7VmNddowED76OgDdQBuUDcoGzQawQegEuBMUJrA7QZsJnEwAG5hMQDa43MUiOYQkW0I2znv+3rtnYZ/u7tP/CYARI0Z8akwgIRBxSo8FyctkMvkLPeArJAIFr+hRkij9e0Ykfjl0meiahJ/PJI8ke9J/gVuAgyep8ByVR3+JdpQkC+gTjuCbCKzQj6oXIjxMSI6uIBrqci/8I9k1EFHQBbiFPME3EjBsKU2osthhH3eQEmTwHpvRmoBh+85BJM2QIkNrbIcoAsJPlpxEQPBXE9D+zNWKh9MMYkAV/2AYribgIFFhvY+cKfEkKtE/KUPhW0bZ30775IZRDSTMZTczjaUMvA0B2/jO0WzZ8zql0D2+62K9FncBH4G5qw46egPrhpbITh+6QtNGxptggZYjiIeEbOzjTQkYLVsYdUto13PzmxMQwW0ugrPryfm6+gLDQUZyEL/XDr0HUZ4PhoDOBbbiFc8R26q0F+XvQ+oBxn9R5uCVRUcmPdNBEaBeOBivbD0gdYZFIAaDIoCXBzVbjqzk96H1wL0oH2hI7S06SuoMhgDWu+9SvHp0qP4Q5WeuWGE3CE0pK6O+suhNDZ0F98AWbggKYkmPHZwPjd+WFYlh5sZPJyMZpkfTYW6N9mP8xlOnEnpv56W3mzliywQKKv4k+eaovwD7xhIM3eqZ5dOWYll56ijxqoBAp7ZxGtUDeJlhleg4vDl8x6WrgSTaXGzx9Yxq4bc0bMffE+FHPnsVgQB/uWF3A9cC6+Ws7JKA9pGbNtGTN8c4KboggHXmVVmCV5Aa6F6CgwnowHObLezqklc7zmII6GHCQfNkLh0Nwe/TDZsAEjuPbpuFgDe5FfQJrG+WTzduM49e1hB41kurx0ITNYPOsd4bggJP+i9lCPBj5z04Dm4jRoxogVfFReHuykT/aQAAAABJRU5ErkJggg==);
  -webkit-transition: 0.2s;
  transition: 0.2s;
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