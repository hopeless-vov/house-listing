
export default {
  name: 'TabNavigation',
  props: {
    activeTab: {
      type: String,
      default: 'price'
    },
    tabsList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    setActiveTab (value) {
      if (value !== this.activeTab) {
        this.$emit('setActiveTab', value)
      }
    }
  }
}
