import axios from "axios"

const API_KEY = 'AIzaSyCFsUJxsW8zxO4q8WUOXuxVkOCnxqoI5gs'

class Geocode {

    async getByAddress(address: string) {
        const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${API_KEY}`)

        const en2pt: any = {
            "postal_code": "ds_cep",
            "country": "ds_pais",
            "administrative_area_level_1": "ds_estado",
            "administrative_area_level_2": "ds_cidade",
            "sublocality_level_1": "ds_bairro",
            "route": "ds_logradouro",
            "street_number": "ds_numero",
        }

        let list = null

        if (res && res.data && res.data.results) {
            list = res.data.results.map((v: any) => {
                let address: any = {}

                v.address_components.forEach((item: any) => {
                    let i = Object.keys(en2pt).filter((v, i) => item.types.indexOf(v) >= 0)[0] || null

                    if (i) {
                        address[en2pt[i]] = en2pt[i] === "ds_estado" ? item.short_name : item.long_name
                    }
                })

                return {
                    address: address,
                    location: v.geometry.location
                }
            })
        }

        return list
    }

}

export default new Geocode()