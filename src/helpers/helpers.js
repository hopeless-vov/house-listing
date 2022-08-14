import { FIELDS_TO_FORMATE } from '@/helpers/constants.js'

export const formatedHouseValues = (params) => {
  const sortedHouse = {
    ...params,
    rooms: {
      bedrooms: params.bedrooms,
      bathrooms: params.bathrooms
    },
    location: {
      city: params.city,
      street: params.streetName + ' ' + params.houseNumber,
      zip: params.zip
    }
  }
  for (const x in sortedHouse) {
    if (FIELDS_TO_FORMATE.includes(x)) {
      delete sortedHouse[x]
    }
  }
  return sortedHouse
}
