import { REQUIRED_FIELDS } from '@/helpers/constants.js'

export default {
  name: 'FormFields',
  props: {
    formatedHouse: {
      type: Object,
      default: () => null
    }
  },
  data: () => {
    return {
      house: {
        constructionYear: '',
        description: '',
        hasGarage: true,
        image: '',
        streetName: '',
        city: '',
        zip: '',
        houseNumber: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        size: '',
        addition: ''
      },
      previewImage: '',
      key: 0
    }
  },
  mounted () {
    this.bindValues()
  },
  computed: {
    checkFields () {
      for (const key of REQUIRED_FIELDS) {
        if (this.house[key] === null || this.house[key] === '') {
          return false
        }
      }
      return true
    },
    isCreateListingPage () {
      return this.$route?.params?.id
    }
  },
  methods: {
    bindValues () {
      if (this.formatedHouse) {
        this.house = this.formatedHouse
        console.log('1', this.formatedHouse)
        if (this.formatedHouse?.previewImage) {
          console.log('1', this.formatedHouse?.previewImage)
          this.previewImage = this.formatedHouse.previewImage
        }
      }
    },
    selectImage () {
      if (!this.house.image) {
        this.$refs.fileInput.click()
      }
    },
    pickFile () {
      const img = this.$refs.fileInput.files[0]
      const fd = new FormData()
      const reader = new FileReader()
      fd.append('image', img)
      this.house.image = fd
      reader.onload = e => {
        this.previewImage = e.target.result
      }
      reader.readAsDataURL(img)
    },
    sendForm () {
      if (this.checkFields) {
        this.$emit('submit', {
          ...this.house,
          previewImage: this.previewImage ? this.previewImage : this.house.image
        })
      }
    },
    clearImage () {
      this.key++
      this.house.image = ''
      this.previewImage = ''
    }
  }
}
