import { IPLocationService } from "https://raw.githubusercontent.com/michael-spengler/location/master/iplocationservice.ts"
import { CityLocationService } from "https://raw.githubusercontent.com/michael-spengler/location/master/citylocationservice.ts"


const ip = '49.12.6.159'
const ipLocation = await IPLocationService.getIPLocation(ip)

console.log(`\nI found the following location for ip ${ip}: \n${JSON.stringify(ipLocation)}\n`)




const countryCode = 'DE'
const cityName = 'Heidelberg'
const cityLocation = await CityLocationService.getCityLocation(countryCode, cityName)

console.log(`The city you asked for is about here: \n${JSON.stringify(cityLocation)}\n`)

