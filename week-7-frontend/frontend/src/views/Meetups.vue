<script>
import { mapActions, mapState } from 'vuex';
import Meetup from '@/components/Meetup.vue';

export default {
  name: 'meetups',
  created() {
    this.fetchMeetups();
  },
  components: {
    Meetup
  },
  computed: {
    ...mapState({
      meetups: state => state.meetups.data,
      likes: state => state.likes,
    }),
  },
  methods: {
    ...mapActions(['fetchMeetups', 'addLikes', 'fetchMeetup'])
  },
};
</script>

<template lang="pug">
div
  h1 Hello!
  button(@click="addLikes") Like!
  div Likes: {{likes}}
  div(v-if="meetups.length")
    p Here are the meetups:
    div.meetups-list
      div.meetup(v-for="meetup in meetups")
        meetup(:data="meetup")
</template>

<style>
.meetups-list {
  display: flex;
}

.meetup {
  margin: 30px;
}
</style>
