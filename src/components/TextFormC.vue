<template>
  <v-container>
    <v-card class="text-analiz-vcard">
    <v-card-title> Введите текст для анализа: {{my_text}}</v-card-title>
      <v-form>
            <v-textarea class="text-analiz-textarea"
                v-model="my_text"
            >
            </v-textarea>
        <v-card-actions>
          <v-spacer></v-spacer>
              <v-btn @click="onSendClick">
                Отправить на обработку
              </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>


export default {
    data: () => {
      return {
        my_text: 'none',
      }
    },
  mounted() {
   // this.my_text = ""
  },
  methods: {
    // Реакция на кнопку отправки
    async onSendClick() {

      // try {
      //   await API.sendMessage(this.username, this.message)
      //   console.log('cleared')
      //   this.message = ''
      // } catch (e) {
      //   console.error(e)
      // }
      this.my_text = 'ggg' + this.my_text
      this.$root.text = this.my_text
      this.$router.push('TextAnaliz')
      // alert("gggfgf")
      //     .then(() => {
      //       console.log("Alert dialog closed.");
      //     });
      //
      // console.log('onSendClick')
    }
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

//
//  .message
//    background: #9fc8ea
//    border-radius: 3px
//    padding: 3px
//    margin: 5px
//
//    .message-date
//      color: rgba(255, 255, 255, 0.9)
//    .message-username
//      color: rgba(255, 255, 0, 0.8)
//    .message-text
//      color: rgba(0, 0, 0, 0.9)
</style>
