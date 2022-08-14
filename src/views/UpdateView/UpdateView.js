import { updateHouse, addNewHouseImage } from '@/core/api/http/apiModules/houses.js'
import FormFields from '@/components/FormFields/FormFields.vue'
import { mapMutations } from 'vuex'
import { formatedHouseValues } from '@/helpers/helpers.js'

export default {
  name: 'UpdateView',
  components: {
    FormFields
  },
  data: () => {
    return {
      formatedHouse: {}
    }
  },
  mounted () {
    this.getFormatedHouse()
    if (!this.house) {
      this.$router.push({ name: 'home' })
    }
  },
  computed: {
    house () {
      return this.$route.params.house
    }
  },
  methods: {
    ...mapMutations(['setSpinnerState']),
    async submit (value) {
      try {
        this.setSpinnerState(true)
        await updateHouse(value.id, value)
        const sortedHouse = formatedHouseValues(value)
        if (typeof sortedHouse.image === 'object') {
          this.submitImage(sortedHouse)
        } else {
          this.$router.push({ name: 'house', params: { id: sortedHouse.id, house: sortedHouse } })
        }
      } catch (err) {
        console.log('error', err)
      } finally {
        this.setSpinnerState(false)
      }
    },
    async submitImage (sortedHouse) {
      try {
        await addNewHouseImage(sortedHouse.id, sortedHouse.image)
        this.$router.push({ name: 'house', params: { id: sortedHouse.id, house: sortedHouse } })
      } catch (err) {
        console.log('error', err)
      }
    },
    getFormatedHouse () {
      for (const x in this.house) {
        if (typeof this.house[x] === 'object' && this.house[x] !== null && x !== 'image') {
          for (const y in this.house[x]) {
            if (y === 'street') {
              const spitedStreet = this.house[x][y].split(' ')
              this.formatedHouse.streetName = spitedStreet[0]
              this.formatedHouse.houseNumber = spitedStreet[1]
            } else {
              this.formatedHouse[y] = this.house[x][y]
            }
          }
        } else {
          this.formatedHouse[x] = this.house[x]
        }
      }
    }
  }
}
