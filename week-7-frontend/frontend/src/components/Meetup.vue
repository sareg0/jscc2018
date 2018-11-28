<script>
  export default {
    name: 'meetup',
    data: props,
  }
</script>

<template lang="pug">
div
  div {{data._id}}
  div {{data.name}}
  div {{data.location}}
</template>

<style>
</style>