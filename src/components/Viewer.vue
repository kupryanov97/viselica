<template class="template">
  <div>
    <div class="answer">
      <span v-for="(item, index) in word">{{item}}</span>
    </div>
    <div class="errors">
      <div v-for="(i tem,id) in error" :key="id" >
      <img  class="image" v-if="errors===item.num" :src="item.link">
      </div>
      <span> Число ошибок:{{errors}}</span> <br>
      <span>Выберите букву:</span> <br>
    </div>
    <div class="alph">
    
    <button class="balph" @click="symb(item)" v-for="(item, index) in alph" :key="index">{{item}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      error:[
        {
          num:0,
          link:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hangman-0.png/50px-Hangman-0.png',
        },
        {
          num:1,
          link:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hangman-1.png/50px-Hangman-1.png',
        },
        {
          num:2,
          link:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Hangman-2.png/50px-Hangman-2.png',
        },
        {
          num:3,
          link:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Hangman-3.png/50px-Hangman-3.png',
        },
        {
          num:4,
          link:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Hangman-4.png/50px-Hangman-4.png',
        },
        {
          num:5,
          link:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hangman-5.png/50px-Hangman-5.png',
        },
        {
          num:6,
          link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Hangman-6.png/50px-Hangman-6.png',
        },
      ]
    };
  },
  computed: {
    alph() {
      
      return this.$store.getters.alph;
    },
    errors() {
      return this.$store.state.errors;
    },
    word() {
      console.log(this.$store.getters.word)
      return this.$store.getters.word;
    },
    },
  methods:{
     symb(e) {
      this.$store.commit('symb', e);
  },
    changeWork(){
      return this.check='2';
    },
  },
};
</script>

<style>
.answer{
  font-size:20px;
   margin-left:41%;
  margin-top:10%;
  width:300px;
} 
.alph{
  margin-left:42%;
  width: 200px;
} 
.image{
  width:100px;
  height:100px;
}
.balph{
  width:10%;
height:10%;
  margin-left:10%;
  margin-top:10%;
  outline: 2px solid black;
}
.errors{
  margin-left:43%;
}
</style>
