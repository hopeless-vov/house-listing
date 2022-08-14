import { addNewHouse, addNewHouseImage } from '@/core/api/http/apiModules/houses.js'
import { mapMutations } from 'vuex'
import FormFields from '@/components/FormFields/FormFields.vue'

export default {
  name: 'CreateView',
  components: {
    FormFields
  },
  data: () => {
    return {
    }
  },
  methods: {
    ...mapMutations(['setSpinnerState']),
    async submit (value) {
      try {
        this.setSpinnerState(true)
        const { data } = await addNewHouse(value)
        this.submitImage(data, value.image)
      } catch (err) {
        console.log('error', err)
      } finally {
        this.setSpinnerState(false)
      }
    },
    async submitImage (data, image) {
      try {
        this.setSpinnerState(true)
        this.setSpinnerState(true)
        await addNewHouseImage(data.id, image)
        this.$router.push({ name: 'home' })
      } catch (err) {
        console.log('error', err)
      } finally {
        this.setSpinnerState(false)
      }
    }
  }
}
