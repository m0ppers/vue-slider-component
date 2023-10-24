export default {
  example1: `
<template>
  <div>
    <vue-slider v-model="value" :enable-cross="false"></vue-slider>
  </div>
</template>

<script>
  module.exports = {
    components: {
      VueSlider
    },
    data: function () {
      return {
        value: [0, 30],
      }
    }
  }
</script>
  `,
  example2: `
<template>
  <div>
    <vue-slider
      v-model="value1"
      :min-range="20"
      :max-range="50"
    ></vue-slider>
    <vue-slider v-model="value2" :fixed="true"></vue-slider>
  </div>
</template>

<script>
  module.exports = {
    components: {
      VueSlider
    },
    data: function () {
      return {
        value1: [0, 30],
        value2: [0, 30],
      }
    }
  }
</script>
  `,
  example3: `
<template>
  <div>
    <vue-slider
      v-model="value"
      :range-fn="rangeCheck"
    ></vue-slider>
  </div>
</template>

<script>
  module.exports = {
    components: {
      VueSlider
    },
    data: function () {
      return {
        value: [0, 15, 30, 75],
      }
    },
    methods: {
      rangeCheck: (newPos, changedIndex, positions) => {
        let min = 0;
        let max;

        let i;
        for (i = 1;i<positions.length;i++) {
          max = positions[i];
          if (changedIndex < i) {
            break;
          }
          min = positions[i-1];
        }
        if (i >= positions.length) {
          max = 100;
        }

        const pos = Math.max(min, Math.min(newPos, max))
        const inRange = newPos >= min && newPos <= max
        return {
          pos,
          inRange,
        }
      }
    }
  }
</script>
  `,
}
