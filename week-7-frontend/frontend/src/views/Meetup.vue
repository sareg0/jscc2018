<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'meetup',
  created() {
    console.log(this.$route.params.id)
    this.fetchMeetup(this.$route.params.id)
  },
  computed: {
    ...mapState({
      meetup: state => state.meetups.meetup,
    }),
  },
  methods: {
    ...mapActions(['fetchMeetup'])
  },
}
</script>

<template lang="pug">
div
  h1 {{meetup.name}}
  h3 {{meetup.location}}
</template>

<style>
</style>