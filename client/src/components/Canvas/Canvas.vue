<template>
  <div class="canvas">
    {{ lastPressed }}
    {{ pressCount }}
    <!-- Canvas -->
    <canvas id="c">
    </canvas>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Canvas',

  data() {
    return {
      vueCanvas: null,
      rectWidth: 0,
    };
  },

  computed: {
    lastPressed() {
      return this.$store.getters['toolbarstore/lastPressed'];
    },

    pressCount() {
      return this.$store.getters['toolbarstore/pressCount'];
    },
  },

  mounted() {
    const c = document.getElementById('c');
    const ctx = c.getContext('2d');
    this.vueCanvas = ctx;
  },

  methods: {
    drawRect() {
      // clear canvas
      this.vueCanvas.clearRect(0, 0, 400, 200);

      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.rect(20, 20, this.rectWidth, 100);
      this.vueCanvas.stroke();
    },

    addWidth() {
      this.rectWidth += 10;
      this.drawRect();
    },

    subWidth() {
      this.rectWidth -= 10;
      this.drawRect();
    },
  },

};
</script>

<style scoped>
#c {
  height: 200px;
  width: 400px;
  border: 1px solid gray;
}
</style>
