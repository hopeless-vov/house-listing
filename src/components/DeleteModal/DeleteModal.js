import { mapState, mapMutations } from 'vuex'
import { deleteHouse } from '@/core/api/http/apiModules/houses.js'

export default {
  name: 'DeleteModal',
  computed: {
    ...mapState(['deleteModal', 'houseList'])
  },
  methods: {
    ...mapMutations(['setDeleteModal', 'setHouseList', 'setSpinnerState']),
    closeModal () {
      this.setDeleteModal({
        isActive: false,
        itemToDelete: ''
      })
    },
    pushToMainPage () {
      if (this.$route.params.id) {
        this.$router.push({ name: 'home' })
      }
    },
    async deleteItem () {
      try {
        this.setSpinnerState(true)
        await deleteHouse(this.deleteModal.itemToDelete)
        const newHouseList = this.houseList.filter(el => el.id !== this.deleteModal.itemToDelete)
        this.setHouseList(newHouseList)
        this.pushToMainPage()
        this.closeModal()
      } catch (err) {
        console.log('error', err)
      } finally {
        this.setSpinnerState(false)
      }
    }
  }
}
