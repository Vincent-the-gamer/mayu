import { useBaseUrl } from "../../utils/base"

const validCodes: number[] = [
  100,
  101,
  102,
  103,
  200,
  201,
  202,
  203,
  204,
  205,
  206,
  207,
  208,
  214,
  226,
  300,
  301,
  302,
  303,
  304,
  305,
  307,
  308,
  400,
  401,
  402,
  403,
  404,
  405,
  406,
  407,
  408,
  409,
  410,
  411,
  412,
  413,
  414,
  415,
  416,
  417,
  418,
  419,
  420,
  421,
  422,
  423,
  424,
  425,
  426,
  428,
  429,
  431,
  444,
  450,
  451,
  495,
  496,
  497,
  498,
  499,
  500,
  501,
  502,
  503,
  504,
  506,
  507,
  508,
  509,
  510,
  511,
  521,
  522,
  523,
  525,
  530,
  599,
]

const strCodes = validCodes.map(code => code.toString())

export default eventHandler((event) => {
  const statusCode: string = getRouterParam(event, 'statusCode')!

  if (!strCodes.includes(statusCode)) {
    return {
      code: 500,
      img: null,
      msg: 'Status code is invalid!',
    }
  }

  const baseUrl = useBaseUrl(event)

  return {
    code: 200,
    img: `${baseUrl}/httpcat/${statusCode}.jpg`,
    msg: "success!"
  }
})