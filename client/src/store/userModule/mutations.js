// Quand le serveur me confirme que le log est sauvé
export const hasAvatarImgMutation = (state, data) => {
  console.log('userModule/mutations.js/hasAvatarImgMutation: ' + data)
  state.userConnected.hasAvatarImg = !state.userConnected.hasAvatarImg
}
