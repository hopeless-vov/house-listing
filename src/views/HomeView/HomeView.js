import { getHouses } from '@/core/api/http/apiModules/houses.js'
import TabNavigation from '@/components/TabNavigation/TabNavigation.vue'
import HouseItem from '@/components/HouseItem/HouseItem.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    TabNavigation,
    HouseItem
  },
  data: () => {
    return {
      search: '',
      activeTab: 'price',
      tabsList: [
        {
          text: 'Price',
          value: 'price'
        },
        {
          text: 'Size',
          value: 'size'
        }
      ]
    }
  },
  mounted () {
    this.getHousesList()
  },
  computed: {
    ...mapState(['houseList']),
    sortedHouses () {
      return this.houseList.sort((prev, curr) => curr[this.activeTab] - prev[this.activeTab])
    },
    findedHouses () {
      let results = []
      const findBySearchCriterion = (param) => (param + '').toLowerCase().includes(this.search.toString().toLowerCase())
      if (this.search) {
        results = this.sortedHouses.filter(el => findBySearchCriterion(el.location.city) ||
          findBySearchCriterion(el.location.zip) ||
          findBySearchCriterion(el.location.street) ||
          findBySearchCriterion(el.size) ||
          findBySearchCriterion(el.price)
        )
      }
      return this.search ? results : this.sortedHouses
    }
  },
  methods: {
    ...mapMutations(['setHouseList', 'setSpinnerState']),
    async getHousesList () {
      try {
        this.setSpinnerState(true)
        const { data } = await getHouses()
        this.setHouseList(data)
      } catch (err) {
        console.log('error', err)
      } finally {
        this.setSpinnerState(false)
      }
    },
    setActiveTab (value) {
      this.activeTab = value
    }
  }
}
