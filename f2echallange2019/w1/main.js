$(() => {
  const app = new Vue({
    el: "#app",
    data() {
      return {
        newMission: "",
        missionlists: ["SECOND", "THIRD", "FORTH"]
      };
    }
  });
});
