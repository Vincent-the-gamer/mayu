import { meiziTypes } from "../constants"
import { useBaseUrl } from "../utils/base"

export default eventHandler(async (event) => {
  const baseUrl = useBaseUrl(event) 

  const { type, all }: any = getQuery(event)
  let _type: string

  if (type && meiziTypes.includes(type)) {
    _type = type
  }
  else {
    _type = randomPick(meiziTypes)
  }

  const meiziMap: any = await useStorage('assets:server').getItem('meizi.json')
  const meizi = randomPick(meiziMap[_type])

  if(all) {
    return {
      code: 200,
      meiziMap
    }
  }

  return {
    code: 200,
    url: `${baseUrl}/pictures/${_type}/${meizi}`,
  }
})