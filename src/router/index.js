import Vue from "vue";
import VueRouter from "vue-router";
import AssessmentTest from "@/views/AssessmentTest.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AssessmentTest",
    component: AssessmentTest
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
