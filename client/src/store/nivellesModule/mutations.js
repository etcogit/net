// Sert à modifier la valeur du v-model qui va afficher le leftDrawer
export const leftDrawerOpenMutation = (state, data) => {
  console.log('nivellesModule/mutations.js/leftDrawerOpenMutation: ')
  state.header.toolbar.leftDrawerOpen = !state.header.toolbar.leftDrawerOpen
}
