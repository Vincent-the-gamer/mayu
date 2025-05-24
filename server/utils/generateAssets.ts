/**
 * Run before build, generate meizi api data.
 */
import path from 'node:path'
import { meiziTypes, __dirname } from '../constants' 
import { readFileNames, writeFile } from './files'

// generate meizi api data
function generateMeizi() {
  const fileMap: Record<string, any> = {}
  meiziTypes.forEach((type) => {
    fileMap[type] = readFileNames(
      path.resolve(__dirname, `../../public/pictures/${type}`),
    )
  })

  writeFile(
    path.resolve(__dirname, '../assets/meizi.json'),
    JSON.stringify(fileMap),
  )
}

generateMeizi()