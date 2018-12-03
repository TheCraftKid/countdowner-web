<template>
  <div class="timer-box">
    <div class="big-text">{{timeLeft}}</div>
    <div class="event-text">until {{countdown.name}}</div>
    <div class="options-container">
      <md-button class="md-icon-button">
        <i class="material-icons">fullscreen</i>
      </md-button>
    </div>
  </div>
</template>

<script>
import * as moment from "moment";
import * as countdown from "countdown";
import * as momentCountdown from "moment-countdown";

export default {
  props: {
    countdown: Object
  },
  data() {
    return {
      countdownInterval: 1000,
      interval: null,
      startDate: "",
      endDate: "",
      currentTime: 0,
      timeLeft: 0,
    };
  },
  computed: {
    timerText() {
      return `${this.timeLeft ? this.timeLeft : "0 days"} left`;
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      const diff = moment().countdown(this.countdown.end, countdown.DAYS);
      this.timeLeft = diff.toString();
    }, this.countdownInterval);
  }
};
</script>

<style lang="scss" scoped>
.timer-box {
  display: block;
  padding: 16px;
  margin-top: 8px;
  min-height: 120px;
  text-align: center;
}

.big-text {
  line-height: 64px;
  font-size: 56px;
  font-family: "Raleway";
}

.event-text {
  font-size: 16px;
  line-height: 16px;
}

.options-container {
  align-self: flex-end;
}
</style>
