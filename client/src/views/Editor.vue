<template>
  <div>
    <Toolbar/>
    <Canvas/>
  </div>
</template>

<script>
import Canvas from '@/components/Canvas/Canvas.vue';
import Toolbar from '@/components/Canvas/Toolbar.vue';

export default {
  name: 'Editor',
  components: {
    Canvas,
    Toolbar,
  },
};
</script>

<style scoped>

</style>
