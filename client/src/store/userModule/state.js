export default {
  userConnected: {
    _id: 'etco',
    firstName: 'Etienne',
    lastName: 'Convié',
    fullName: 'Etienne Convié',
    hasAvatarImg: true, // Par défaut, on dit que chaque user possède une image d'avatar. C'est au moment de charger l'image qu'on voit s'il y en a vraiment une. Si pas alors on passe cette variable à false
    roles: ['admin', 'visitor', 'user']
  }
}
