window.onload = () => {
  loading.classList.add("fadeAway");
  setTimeout(() => {
    loading.classList.add("hide");
  }, 300);
  app.classList.remove("hide");
  const vm = new Vue({
    el: "#app",
    data() {
      return {
        openDrawer: false,
        isDark: false,
        snackbar: false,
        snackbarText: "",
        loading: false,
        items: [
          { title: "Home", subTitle: "回到頂端", icon: "home" },
          {
            title: "Profile",
            subTitle: "關於我",
            icon: "assignment_ind"
          },
          { title: "Experience", subTitle: "經歷", icon: "assignment" },
          {
            title: "Skills",
            subTitle: "技能 / 知識",
            icon: "offline_bolt"
          },
          { title: "Protfolio", subTitle: "作品集", icon: "pages" },
          { title: "Contact", subTitle: "聯繫我", icon: "phone" }
        ],
        right: null,
        htmlCss: [
          {
            type: "html",
            icon: "fa-html5",
            color: "#e44d26",
            level: 0,
            toLevel: 90
          },
          {
            type: "css",
            icon: "fa-css3-alt",
            color: "#016db5",
            level: 0,
            toLevel: 90
          },
          {
            type: "sass",
            icon: "fa-sass",
            color: "#c76495",
            level: 0,
            toLevel: 80
          },
          {
            type: "bootstrap",
            icon: "fa-bootstrap",
            color: "#4c2874",
            level: 0,
            toLevel: 50
          }
        ],
        Js: [
          {
            type: "javascript",
            icon: "fab fa-js",
            color: "#e9d54d",
            level: 0,
            toLevel: 85,
            hasicon: true
          },
          {
            type: "es6",
            icon:
              "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/es6/es6.png",
            color: "#e9d54d",
            level: 0,
            toLevel: 65,
            hasicon: false
          },
          {
            type: "node js",
            icon: "fab fa-node-js",
            color: "#88c349",
            level: 0,
            toLevel: 35,
            hasicon: true
          }
        ],
        Vue: [
          {
            type: "vue",
            icon: "fab fa-vuejs",
            color: "#3fb37f",
            level: 0,
            toLevel: 75,
            hasicon: true
          },
          {
            type: "vue-router",
            icon:
              "https://user-images.githubusercontent.com/7110136/29002858-a09570d2-7ab4-11e7-8faa-5dd6d4458b0d.png",
            color: "#3fb37f",
            level: 0,
            toLevel: 65,
            hasicon: false
          },
          {
            type: "vuex",
            icon:
              "https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png",
            color: "#3fb37f",
            level: 0,
            toLevel: 25,
            hasicon: false
          },
          {
            type: "vuetify",
            icon: "https://cdn.vuetifyjs.com/images/logos/v-alt.svg",
            color: "primary",
            level: 0,
            toLevel: 50,
            hasicon: false
          }
        ],
        chips: [
          {
            icon: "fab fa-php",
            title: "PHP",
            color: "#7478ae",
            hasicon: true
          },
          {
            icon: "./apache.png",
            title: "apache",
            color: "#bb2043",
            hasicon: false
          },
          {
            icon: "fas fa-code-branch",
            title: "Git",
            color: "#ef5130",
            hasicon: true
          },
          {
            icon: "fab fa-npm",
            title: "NPM",
            color: "#cc0000",
            hasicon: true
          },
          {
            icon: "./webpack.png",
            title: "Webpack",
            color: "#1c78c0",
            hasicon: false
          },
          {
            icon: "./adobeXD.png",
            title: "adobe XD",
            color: "#ae1982",
            hasicon: false
          },
          {
            icon: "./adobePS.png",
            title: "Photoshop",
            color: "#37c5ff",
            hasicon: false
          },
          {
            icon:
              "https://pbs.twimg.com/profile_images/1090208956440633345/Okg4uYbh_400x400.jpg",
            title: "Nuxt.js",
            color: "#3fb37f",
            hasicon: false
          },
          {
            icon:
              "https://cdn.freebiesupply.com/logos/thumbs/2x/firebase-1-logo.png",
            title: "Firebase",
            color: "#f58410",
            hasicon: false
          }
        ],
        protfolios: [
          {
            img: "./tsaiYiPage.jpg",
            href: "https://www.tsaiyitech.com/",
            name: "采億科技 2019 官方網站"
          },
          {
            img: "./chat-it-up.jpg",
            href: "https://red4.herokuapp.com/chat/",
            name: "NUXT + socket 線上聊天室"
          },
          {
            img: "./7red4_2019.jpg",
            href: "https://7red4.github.io/",
            name: "Vue + Vuetify 作品集網站"
          }
        ],
        formScheamas: [
          {
            dataName: "name",
            label: "您的大名",
            placeholder: "李紅柿",
            rule: [v => !!v || "這欄是要填的喔~"],
            required: true
          },
          {
            dataName: "email",
            label: "Email",
            placeholder: "abc@gmail.com",
            rule: [
              v => !!v || "這欄是要填的喔~",
              v => /.+@.+/.test(v) || "Email 格式是不是填錯啦~"
            ],
            required: true
          },
          {
            dataName: "phone",
            label: "電話",
            placeholder: "0987654321",
            rule: [v => !!v || "這欄是要填的喔~"],
            required: true
          },
          {
            dataName: "company",
            label: "您所屬的公司",
            placeholder: "吃太多OOXX股份有限公司",
            rule: [],
            required: false
          },
          {
            dataName: "location",
            label: "您所在的地區",
            placeholder: "OO市",
            rule: [],
            required: false
          }
        ],
        formDatas: {
          name: "",
          email: "",
          phone: "",
          company: "",
          location: "",
          needs: ""
        }
      };
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        let hook = window.innerHeight;
        const vm = this;
        const profile_content = document.getElementsByClassName(
          "profile_content"
        );
        const event = document.getElementsByClassName("event");
        const big_title = document.getElementsByClassName("big_title")[0];
        const protfolio_block = document.getElementsByClassName(
          "protfolio_block"
        );
        const topBar = document.getElementsByClassName("top_bar")[0];
        const toolbarH = document.getElementsByClassName(
          "v-toolbar__content"
        )[0].offsetHeight;
        function triggerScrollClass(el, className) {
          if (st > $(el).offset().top - hook * 0.8) {
            el.classList.add(className);
          } else {
            el.classList.remove(className);
          }
        }
        function triggerProgressBar(els) {
          for (let i = 0; i < $("." + els).length; i++) {
            var el = $("." + els)[i];
            if (st > $(el).offset().top - hook * 0.8) {
              vm[els][i].level = vm[els][i].toLevel;
            } else {
              vm[els][i].level = 0;
            }
          }
        }

        if (st > big_title.scrollTop - toolbarH) {
          topBar.classList.remove("glassed");
        } else {
          topBar.classList.add("glassed");
        }

        for (let i = 0; i < profile_content.length; i++) {
          triggerScrollClass(profile_content[i], "in");
        }
        for (let i = 0; i < event.length; i++) {
          triggerScrollClass(event[i], "in");
        }

        triggerProgressBar("htmlCss");
        triggerProgressBar("Js");
        triggerProgressBar("Vue");
      },
      scrollDown() {
        const toolbarH = document.getElementsByClassName(
          "v-toolbar__content"
        )[0].offsetHeight;
        var body = $("html, body");
        body
          .stop()
          .animate({ scrollTop: $("#Profile").offset().top - toolbarH }, 800);
      },
      scrollTo(element) {
        const toolbarH = document.getElementsByClassName(
          "v-toolbar__content"
        )[0].offsetHeight;
        if (document.getElementById(element) != null) {
          var body = $("html, body");
          body
            .stop()
            .animate(
              { scrollTop: $("#" + element).offset().top - toolbarH },
              800
            );
          vm.openDrawer = false;
        }
      },
      submit() {
        if (this.$refs.form.validate()) {
          this.loading = true;
          var data = this.formDatas;
          var db = firebase.database().ref("/contactData/");
          db.push()
            .set(data)
            .then(() => {
              this.snackbarText = "感謝您的填寫，將會盡快與您聯繫";
              this.loading = false;
              this.snackbar = true;
              this.$refs.form.reset();
              db.once("value").then(snap => {
                console.log(snap);
              });
            });
        } else {
          this.snackbarText = "表單填寫是否有誤呢";
          this.snackbar = true;
        }
      },
      reset() {
        this.$refs.form.reset();
      }
    }
  });
};
