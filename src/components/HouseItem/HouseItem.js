import { mapMutations } from 'vuex'

export default {
  name: 'HouseItem',
  props: {
    house: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    formatedPrice () {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.house.price)
    }
  },
  methods: {
    ...mapMutations(['setDeleteModal']),
    deleteItem (itemToDelete) {
      this.setDeleteModal({
        isActive: true,
        itemToDelete
      })
    }
  }
}
