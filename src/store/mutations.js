export default {
  symb(state, message) { 
    state.a=0
    for (var i = 0; i < state.s.length; i++) {
      state.s.charAt(i);
    }
    for (var i = 0; i < state.s.length; i++) {
      state.let=message
      if (message === state.s[i]) {
        state.word[i]=state.s[i];
         state.count++;
      }else {
        state.a++;
        if(state.a===state.s.length){
          console.log(state.a)
        state.errors++
     }
        
        if(state.word[i] !== '(...)' && state.word[i]===undefined)
      {
        state.word[i] = '(...)'
      }
      } 
    }
    if(state.count===state.s.length){
      var won=confirm("Вы победили! Заданное слово:"+state.s+" Хотите сыграть ещё раз?")}
    if(state.errors===6){
      var won=confirm("Вы проиграли!Правильный ответ:"+state.s+" Хотите сыграть ещё раз?")}
      if(won===true){
        state.count= 0;
        state.let='';
        state.s = state.words[Math.floor(Math.random()*(6-0))+0];
        state.errors=0;
        state.a=0;
        state.word=[];
        state.alph=state.temp;
      }
    
  },
};
