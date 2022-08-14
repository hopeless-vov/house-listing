import DesctopNavigation from './DesctopNavigation/DesctopNavigation.vue'
import MobileNavigation from './MobileNavigation/MobileNavigation.vue'

export default {
  name: 'NavigationBar',
  props: {
    mobileNavigation: {
      type: Boolean,
      default: false
    }
  },
  components: {
    DesctopNavigation,
    MobileNavigation
  },
  computed: {
    component () {
      return this.mobileNavigation ? 'mobile-navigation' : 'desctop-navigation'
    }
  }
}
