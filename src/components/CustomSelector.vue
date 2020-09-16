<template>
  <div>
    <label for="person-selector">{{ message }}</label>
    <select
      name="person-selector"
      id="person-selector"
      v-model="selectedName"
      @change="changePerson()"
    >
      <option
        v-for="({name}, index) in getNames"
        :key="index"
        :value="name"
      >
        {{ name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomSelector',
  props: {
    message: String,
    selectedOpponentName: String,
    data: Array,
  },
  data() {
    return {
      selectedName: '',
    };
  },
  methods: {
    changePerson() {
      this.$emit('trigger-change', this.selectedName);
    },
  },
  computed: {
    getNames(): any {
      return this.data
        && this.data.filter((item: any) => {
          if (item) {
            return item?.name !== this.selectedOpponentName;
          }
          return null;
        });
    },
  },
});
</script>
