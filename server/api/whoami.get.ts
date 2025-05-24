/**
 * get local IP of current machine.
 */
import os from 'node:os'

export default eventHandler(() => {
  // get network interfaces info.
  const networkInterfaces = os.networkInterfaces()

  // get the first non-loopback IPV4 address.
  let localIP = ''
  for (const interfaceName in networkInterfaces) {
    for (const network of networkInterfaces[interfaceName]!) {
      if (network.family === 'IPv4' && !network.internal) {
        localIP = network.address
        break
      }
    }
    if (localIP)
      break
  }

  return {
    ip: localIP,
  }
})