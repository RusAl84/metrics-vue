<template>
  <v-container>
    <v-card>
    <v-card-title> Введите текст для анализа: {{$root.text}}</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import TextFormC from "@/components/TextFormC";

export default {
    data: () => {
      return {
      }
    },
  mounted() {
   // this.my_text = ""
  },
  methods: {
    // Реакция на кнопку отправки
  },
  }
</script>
<style lang="sass" scoped>
.text-analiz-vcard
  //border: 1px solid black
  border-radius: 3px
  overflow-x: hidden
  overflow-y: scroll
  height: 60vh

.text-analiz-textarea
  //background: #9fc8ea
  border: 1px solid black
  border-radius: 3px
  padding: 20px
  margin: 20px

</style>
