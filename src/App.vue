<template>
  <div
    id="app"
    class="app"
    :class="{
      'isMobileDevice': showMobileNavigation,
      'back-image': backImage
    }">
    <navigation-bar
      :mobileNavigation="showMobileNavigation" />
    <delete-modal
      v-if="deleteModal.isActive"/>
    <spinner-block
      v-if="isActiveSpenner"/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import DeleteModal from '@/components/DeleteModal/DeleteModal.vue'
import SpinnerBlock from '@/components/SpinnerBlock/SpinnerBlock.vue'
import { CONTAINER_WIDTH } from '@/helpers/constants.js'
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    NavigationBar,
    DeleteModal,
    SpinnerBlock
  },
  data: () => {
    return {
      windoWidth: 0
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    ...mapState(['deleteModal', 'isActiveSpenner']),
    showMobileNavigation () {
      return CONTAINER_WIDTH > this.windoWidth
    },
    backImage () {
      if (this.$route?.name) {
        return this.$route?.name.includes('update') || this.$route?.name.includes('create')
      }
      return false
    }
  },
  methods: {
    handleResize () {
      this.windoWidth = window.innerWidth
    }
  }
}
</script>

<style scoped lang="scss" src="./app.scss">
</style>
