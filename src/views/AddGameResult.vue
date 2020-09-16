<template>
  <div>
    <h1>
      Add Game Result {{selectName.winner}} {{selectName.loser && 'and'}} {{selectName.loser}}
    </h1>
    <CustomSelector
      message="Choose winner:"
      :selectedOpponentName="selectName.loser"
      :data="personsData"
      @trigger-change="winnerChange"
    />
    <CustomSelector
      message="Choose loser:"
      :selectedOpponentName="selectName.winner"
      v-bind:data="personsData"
      @trigger-change="loserChange"
    />
    <ButtonComponent
      :isDisabled="buttonDisabled"
      button-title='SEND RESULT'
      @handle-click-button="sendData"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomSelector from '@/components/CustomSelector.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default defineComponent({
  name: 'AddGameResult',
  components: {
    CustomSelector,
    ButtonComponent,
  },
  data() {
    return {
      personsData: [
        { name: 'Dawid' },
        { name: 'Piotr' },
        { name: 'Paweł' },
      ],
      selectName: {
        winner: '',
        loser: '',
      },
    };
  },
  methods: {
    winnerChange(selected: string) {
      this.selectName.winner = selected;
    },
    loserChange(selected: string) {
      this.selectName.loser = selected;
    },
    sendData() {
      const { winner, loser } = this.selectName;
      const payload = {
        winner,
        loser,
      };
      console.log('send -> ', payload);
    },
    buttonDisabled(): boolean {
      console.log('refresh buttonDisabled');
      const { winner, loser } = this.selectName;
      return !winner || !loser;
    },
  },
});
</script>
