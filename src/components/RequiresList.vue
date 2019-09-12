<template>
  <div v-if="requires" class="requires-list">
    <h4 class="is-h2">requires</h4>
    <ul data-grid="small-gutter">
      <li v-for="(req, index) in requires" :key="index" data-col="fit" class="is-margin-bottom-2">
        <router-link :to="url(req)" class="code" v-text="req.name" v-if="req.link"></router-link>
        <span class="code" v-text="req.name" v-else></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['requires'],

  methods: {
    url(req) {
      return ('/' + req.type + 's' + req.link );
    },
  }
};
</script>

<style scoped lang="scss">
.requires-list {
  margin: 32px 0;
}
</style>
