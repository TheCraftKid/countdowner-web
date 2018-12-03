<template>
  <main>
    <section id="countdowns">
      <div class="countdown-list" v-if="countdowns.length">
        <md-card v-for="countdown in countdowns" :key="countdown.id">
          <countdown-timer :countdown="countdown"></countdown-timer>
        </md-card>
      </div>
      <div v-else>
        No countdowns? Create one.
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
import Timer from "@/components/Timer.vue";

export default {
  name: "home",
  components: {
    "countdown-timer": Timer,
  },
  computed: {
    ...mapState({
      countdowns(state) {
        return state.countdowns;
      },
    }),
  }
};
</script>

<style lang="scss">
</style>

