import { mapMutations, mapGetters } from 'vuex'
import HouseItem from '@/components/HouseItem/HouseItem.vue'

export default {
  name: 'HouseView',
  components: {
    HouseItem
  },
  mounted () {
    if (!this.house) {
      this.$router.push({ name: 'home' })
    }
  },
  computed: {
    ...mapGetters(['recommendedHouseList']),
    house () {
      return this.$route.params.house
    },
    formatedPrice () {
      return Intl.NumberFormat('en-US').format(this.house.price)
    },
    housePreview () {
      return this.house?.previewImage ? this.house.previewImage : this.house.image
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
