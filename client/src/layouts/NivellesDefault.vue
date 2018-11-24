<template>
  <q-layout view="HHH LpR LfR"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar
        :color="header.toolbar.color"
      >
        <q-btn
          flat
          round
          dense
          :icon="header.toolbar.iconLeftDrawer"
          @click="leftDrawerOpenMutation"
        />
        <q-toolbar-title>
          {{ header.toolbar.headerTitle }}
          <span slot="subtitle">{{ header.toolbar.headerSubtitle }}</span>
        </q-toolbar-title>
        <!-- USER -->
        <q-btn
          round
          :color="avatar.bgColor"
          :text-color="avatar.textColor"
          class="q-chip-side"
          v-if="userConnected._id"
        >
          <!-- Je charge l'image de l'avatar, mais si le chargement génère une erreur (404 pcq l'image n'existe pas) alors j'affiche un rond avec le première lettre du prénom et du nom en majuscules -->
          <img v-if="userConnected.hasAvatarImg" :src="`statics/avatars/${userConnected._id}.jpg`" class="q-chip-side" @error="hasAvatarImgMutation(false)" />
          <span v-else>{{ userConnected.firstName | capitalizeFirstLetter }}{{ userConnected.lastName | capitalizeFirstLetter }}</span>
          <q-popover>
            <!-- ME -->
            <q-item>
              <q-item-main>
                <q-item-tile label>{{ userConnected.fullName }}</q-item-tile>
                <q-item-tile sublabel>{{ userConnected._id }}</q-item-tile>
              </q-item-main>
              <!--
              <q-item-side>
                <q-btn dense flat :icon="$appConfig.idp_home.toolbar.user.me.icon" v-close-overlay @click="disconnectUserAction">
                  <q-tooltip class="text-no-wrap">{{ $appConfig.idp_home.toolbar.user.me.tooltip }}</q-tooltip>
                </q-btn>
              </q-item-side>
              -->
            </q-item>
            <!-- DEVICE -->
            <!--
            <q-item v-if="userDevice.hasOwnProperty('name')">
              <q-item-main>
                <q-item-tile label>{{ userDevice.name }}</q-item-tile>
                <q-item-tile sublabel><i>{{ $appConfig.idp_home.toolbar.user.device.sublabel }}</i></q-item-tile>
              </q-item-main>
              <q-item-side>
                <q-btn dense flat icon="create" color="grey-5" v-close-overlay @click="promptUserDeviceNameMutation" />
              </q-item-side>
            </q-item>
            -->
          </q-popover>
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <!-- (Optional) The Footer -->
    <q-layout-footer>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          Footer
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer
      side="left"
      v-model="header.toolbar.leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
        <q-list
          no-border
          link
        >
          <q-list-header>{{ leftDrawer.list.header }}</q-list-header>
          <q-item to="/nivelles" exact>
            <q-item-side icon="home" />
            <q-item-main label="Accueil" />
          </q-item>
          <q-item to="/nivelles/moi">
            <q-item-side icon="favorite" />
            <q-item-main label="Moi" />
          </q-item>
          <q-item to="/nivelles/autour-de-moi">
            <q-item-side icon="file_upload" />
            <q-item-main label="Autour de moi" />
          </q-item>
          <q-item to="/nivelles/dernieres-nouvelles">
            <q-item-side icon="assignment" />
            <q-item-main label="Dernières nouvelles" />
          </q-item>
          <q-item to="/nivelles/qui-sommes-nous">
            <q-item-side icon="settings" />
            <q-item-main label="Qui sommes nous ?" />
          </q-item>
          <q-item to="/nivelles/help">
            <q-item-side icon="help_outline" />
            <q-item-main label="Aide" />
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-layout-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex' // , mapGetters, mapMutations, mapActions
export default {
  // name: 'LayoutName',
  data () {
    return {
      // leftDrawer: true
    }
  },
  filters: {
    capitalizeFirstLetter: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase()
    }
  },
  computed: {
    ...mapState(
      'nivellesModule',
      [
        'header',
        'leftDrawer',
        'avatar'
      ]
    ),
    ...mapState(
      'userModule',
      [
        'userConnected'
      ]
    )
  },
  methods: {
    ...mapMutations(
      'nivellesModule',
      [
        'leftDrawerOpenMutation'
      ]
    ),
    ...mapMutations(
      'userModule',
      [
        'hasAvatarImgMutation'
      ]
    )
  }
}
</script>

<style>
</style>
