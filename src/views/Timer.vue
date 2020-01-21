<template>
  <div class="timer text-center">
    <div id="title" class="text-center h4">{{ title }}</div>
    <div id="timer-note" class="text-center small text-muted w-200">{{ notes }}</div>
    <div id="work-n-rest" class="text-center work">{{ $t("timer.working") }}</div>
    <div id="now-timing" class="text-center h1 work">
      {{ h }}
      {{ $t("timer.h") }}
      {{ min }}
      {{ $t("timer.min") }}
      {{ s }}
      {{ $t("timer.s") }}
    </div>
    <div id="backer" class="small text-muted" v-if="backer">{{ $t("timer.backer") }}</div>
    <div class="text-center h3">
      <b-button
        variant="link"
        size="lg"
        toggle-class="text-decoration-none"
        v-on:click="stopper()"
        id="stopper"
        class="text-muted"
      >
        <i class="fa fa-pause"></i>
      </b-button>
    </div>
    <div class="text-center" id="more-options">
      <b-button
        class="text-muted"
        variant="link"
        size="lg"
        toggle-class="text-decoration-none"
        v-on:click="skipper()"
      >
        <i class="fa fa-angle-double-right" id="skipper"></i>
      </b-button>
    </div>
    <audio id="h5Notification" muted>
      <source src="h5Notification.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
import { Plugins } from "@capacitor/core";
const { LocalNotifications, Storage } = Plugins;
export default {
  data: function() {
    return {
      method: 1, //method1: workTime; method2: restTime
      timer: this.$store.state.timer,
      workTime: this.$store.state.timer.workTime,
      restTime: this.$store.state.timer.restTime,
      loop: this.$store.state.timer.loop,
      title: this.$store.state.timer.title,
      notes: this.$store.state.timer.notes,
      isOnlyRest: this.$store.state.timer.isOnlyRest, // all the timer things
      isFirstPeriod: true,
      is1MinTip: true,
      isMoreThan1: true,
      isClockWorking: null,
      startTime: null,
      int: null, //int: interval variable
      nowTime: null,
      allTime: 0,
      h: null,
      min: null,
      s: null,
      times: 0, //times: how many loops have been here
      backer: false, //back link
      intTime: 250,
      lastTimeSecond: null
    };
  },
  mounted: function() {
    Storage.get({ key: "is1MinTip" }).then(data => {
      if (data.value == "false") {
        this.is1MinTip = false;
      }
    }); // 1 min left tip
    this.startTime = new Date().getTime();
    this.s = parseInt(this.workTime / 1000);
    this.h = parseInt(this.s / 3600);
    this.min = parseInt((this.s - this.h * 3600) / 60);
    this.s -= this.h * 3600 + this.min * 60;
    this.lastTimeSecond = this.second;
    if (!this.isOnlyRest) {
      this.$store.commit("setIsWorking", true);
    }
    this.isClockWorking = 1;
    this.int = self.setInterval(this.clock, this.intTime);
    //});
  },
  beforeDestroy: function() {
    if (this.int) window.clearInterval(this.int); //prevent still counting down in homepage
  },
  methods: {
    localNotificationMessenger: function(title, body) {
      LocalNotifications.schedule({
        notifications: [
          {
            title: title,
            body: body,
            id: 1,
            sound: null,
            attachments: null,
            actionTypeId: "",
            extra: null
          }
        ]
      });
    },
    classModifier: function(queryClass, toClass) {
      var ops = document.querySelectorAll("." + queryClass);
      for (let p of ops) {
        p.classList.add(toClass);
        p.classList.remove(queryClass);
      }
    }, //to modify style by changing class
    stopper: function() {
      if (this.isClockWorking) {
        if (this.int) window.clearInterval(this.int);
        document.getElementById("stopper").innerHTML =
          "<i class='fa fa-play'></i>";
        this.isClockWorking = 0; //to stop
      } else {
        if (this.method == 1)
          this.startTime =
            new Date().getTime() -
            (this.workTime -
              this.h * 3600000 -
              this.min * 60000 -
              this.s * 1000);
        else
          this.startTime =
            new Date().getTime() -
            (this.restTime -
              this.h * 3600000 -
              this.min * 60000 -
              this.s * 1000);
        this.int = self.setInterval(this.clock, this.intTime);
        document.getElementById("stopper").innerHTML =
          "<i class='fa fa-pause'></i>";
        this.isClockWorking = 1; //to restart
      }
    },
    warningGiver: function(flag) {
      if (!this.isOnlyRest || (this.isOnlyRest && !this.isFirstPeriod)) {
        var audio = document.getElementById("h5Notification");
        audio.muted = false;
        audio.volume = 1;
        audio.play();
      }
      if (flag == 1 && !this.isOnlyRest) {
        this.$store.commit("setIsWorking", false);
        this.localNotificationMessenger(
          this.$t("timer.workTimeEnd.title"),
          this.$t("timer.workTimeEnd.body")
        );
      } else if (flag == 2) {
        this.$store.commit("setIsWorking", true);
        this.localNotificationMessenger(
          this.$t("timer.restTimeEnd.title"),
          this.$t("timer.restTimeEnd.body")
        );
      } else if (flag == 0) {
        this.$store.commit("setIsWorking", false);
        this.localNotificationMessenger(
          this.$t("timer.allTimeEnd.title"),
          this.$t("timer.allTimeEnd.body")
        );
      }
      if (this.isFirstPeriod) this.isFirstPeriod = false;
    },
    themeChanger: function() {
      if (this.method == 1) {
        this.classModifier("work", "rest");
        document.getElementById("work-n-rest").innerHTML = this.$t(
          "timer.resting"
        );
        this.method = 2;
        this.warningGiver(1);
      } else {
        this.classModifier("rest", "work");
        document.getElementById("work-n-rest").innerHTML = this.$t(
          "timer.working"
        );
        this.method = 1;
        this.warningGiver(2);
      }
    },
    ender: function() {
      this.isClockWorking = 0;
      this.backer = true;
      window.clearInterval(this.int);
      document.getElementById("work-n-rest").innerHTML =
        this.$t("timer.allTime.title") +
        "<strong>" +
        Math.round(this.allTime / 60000) +
        this.$t("timer.min") +
        "</strong>";
      document.getElementById("work-n-rest").classList.add("text-muted");
      document.getElementById("now-timing").innerHTML = this.$t("timer.ended");
      this.isClockWorking = 0;
      document.getElementById("stopper").style.display = "none";
      document.getElementById("more-options").style.display = "none";
      this.warningGiver(0);
    },
    skipper: function() {
      if (!this.isClockWorking) this.stopper();
      this.times++;
      this.allTime += this.nowTime - this.startTime;
      this.startTime = new Date().getTime();
      if (this.times < this.loop * 2) {
        this.themeChanger();
      } else if (this.times == this.loop * 2) {
        this.ender();
      }
    },
    clock: function() {
      this.nowTime = new Date().getTime();
      if (this.method == 1)
        this.s = parseInt(
          (this.workTime + this.startTime - this.nowTime) / 1000
        );
      else
        this.s = parseInt(
          (this.restTime + this.startTime - this.nowTime) / 1000
        );
      if (this.s != this.lastTimeSecond) {
        this.lastTimeSecond = this.s;
      }
      this.h = parseInt(this.s / 3600);
      this.min = parseInt((this.s - this.h * 3600) / 60);
      this.s -= this.h * 3600 + this.min * 60;
      if (this.min == 0 && this.isMoreThan1 && this.h == 0) {
        if (!this.isOnlyRest || (this.isOnlyRest && !this.isFirstPeriod)) {
          if (
            this.is1MinTip &&
            ((this.method == 1 && this.workTime > 60000) ||
              (this.method == 2 && this.restTime > 60000))
          ) {
            this.localNotificationMessenger(
              this.$t("timer.oneMinTip.title"),
              this.$t("timer.oneMinTip.body")
            );
          }
          this.isMoreThan1 = false;
        }
      }
      if (this.s <= 0 && this.min <= 0 && this.h <= 0) this.skipper();
    } //the countdown for wnr
  }
};
</script>