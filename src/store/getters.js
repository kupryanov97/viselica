export default {
  alph: (state) => {
    return state.alph=state.alph.filter(item=> item!==state.let)},
  word: (state) => {
    
    if(state.s.length===0)
    {
      state.s = state.words[Math.floor(Math.random()*(6-0))+0];}
    for (var i = 0; i < state.s.length; i++) {
    if(state.word[i] !== '(...)' && state.word[i]===undefined)
      {
        state.word[i] = '(...)'
      }
    }
    return state.word},
};
