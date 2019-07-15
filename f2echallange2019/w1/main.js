$(() => {
  const app = new Vue({
    el: "#vueWrapper",
    data() {
      return {
        newMission: "",
        missionlists: ["SECOND", "THIRD", "FORTH"]
      };
    },
    mounted() {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.handleResize);
    },
    methods: {
      handleResize() {
        let svg = $(".v-progress-circular svg");
        let w = svg.width();
        let h = svg.height();
        $(".v-progress-circular__info").css({
          width: `${w + 2}px`,
          height: `${w + 2}px`
        });
        $(".v-progress-circular").css({
          height: `${w}px`
        });
      }
    }
  });
});
