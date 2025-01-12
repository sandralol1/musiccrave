<template>
<!-- https://github.com/SVGator/vue-svg -->
<!-- https://www.svgator.com/help/getting-started/add-animated-svg-to-vue-js-->
<!--https://reintech.io/blog/implementing-animations-with-svg-in-vuejs-->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <circle :cx="cx" :cy="cy" r="40" stroke="black" stroke-width="3" fill="white" />
</svg>
</template>

<script>
export default {
name: "AnimatedSVG",
data() {
  return {
    cx: 500,
    cy: 50,
  };
},
methods: {
  animate() {
    this.cx = Math.random() * 200;
    this.cy = Math.random() * 100;
  },
},
mounted() {
  setInterval(this.animate, 1000);
},
};
</script>