<template>
  <div>
    <div class="collapsed" v-bind:style="toolbarButton">
      <button name='show' v-on:click="toggleHidden">Show</button>
    </div>

    <div class="toolbar" v-bind:style="toolbarToggle">
      <button name='draw' v-on:click="toggleDraw">Draw</button>
      <button name='clear' v-on:click="updatePressed($event.target.name)">Clear</button>
      <button name='free' v-on:click="updatePressed($event.target.name)">Free</button>
      <button name='line' v-on:click="updatePressed($event.target.name)">Line</button>
      <button name='arrow' v-on:click="updatePressed($event.target.name)">Arrow</button>
      <button name='hide' v-on:click="toggleHidden">Hide</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Toolbar',

  data() {
    return {
      hidden: true,
    };
  },

  computed: {
    toolbarToggle() {
      return {
        '--from-top': this.hidden ? '0rem' : '-5rem',
      };
    },

    toolbarButton() {
      return {
        '--from-right': this.hidden ? '-5rem' : '0rem',
      };
    },
  },

  methods: {
    updatePressed(name) {
      this.$store.dispatch('toolbarstore/updatePressed', name);
    },

    toggleDraw() {
      this.$store.dispatch('toolbarstore/toggleDraw');
    },

    toggleHidden() {
      this.hidden = !this.hidden;
    },
  },
};
</script>

<style scoped>
.toolbar {
  width: 100%;
  height: 5rem;
  top: var(--from-top);
  left: 0;
  right: 0;
  position: fixed;
  background-color: #42b983;
}

.collapsed {
  position: fixed;
  background-color: orange;
  right: var(--from-right);
  top: 0;
}
</style>
