import { randomPick } from '../utils/array'
import { getSpecialIdentities, locations, regions, specialLocations } from '../utils/remakeList'

export default eventHandler(() => {
  const region = randomPick(regions)
  if (region) {
    let location: string
    let identity: string
    if (Object.keys(specialLocations).includes(region)) {
      location = randomPick(
        specialLocations[region],
      )
    }
    else {
      location = randomPick(locations)
    }

    identity = randomPick(getSpecialIdentities(location))

    return {
      code: 200,
      message: `重开成功！你出生在${region}的${location}, 是${identity}！`,
    }
  }

  return {
    code: 500,
    message: '重开失败！你没能出生！',
  }
})
