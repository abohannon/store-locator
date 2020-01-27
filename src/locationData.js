export const shops = {
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Allied Tattoo',
        street: '48 1/2, Grattan Street',
        city: 'Brooklyn',
        state: 'NY',
        postal_code: '11237',
        country: 'United States',
        phone: '(347) 725-4861',
      },
      geometry: {
        coordinates: [-73.933471, 40.705617],
        type: 'Point',
      },
      id: '270fa324095a732970da109ac8b1a22e',
    },
    {
      type: 'Feature',
      properties: {
        name: 'All-Star Tattoo Co.',
        street: '19114 Telegraph Rd',
        city: 'Brownstown Charter Twp',
        state: 'MI',
        postal_code: '48174',
        country: 'United States',
        phone: '(734) 992-4891',
      },
      geometry: {
        coordinates: [-83.269679, 42.16601],
        type: 'Point',
      },
      id: '45b70c3517057773e5f78949cef8ab21',
    },
    {
      type: 'Feature',
      properties: {
        name: '717 Tattoo',
        street: '4901 Jonestown Rd',
        city: 'Harrisburg',
        state: 'PA',
        postal_code: '17109',
        country: 'United States',
        phone: '(717) 652-7717',
      },
      geometry: {
        coordinates: [-76.809328, 40.304719],
        type: 'Point',
      },
      id: '5b16b4f81bc8a55a1335806f297b965f',
    },
    {
      type: 'Feature',
      properties: {
        name: 'Aether Tattoo Club',
        street: '7720 Shedhorn Dr Unit C',
        city: 'Bozeman',
        state: 'MT',
        postal_code: '59718',
        country: 'United States',
        phone: '(406) 624-0432',
      },
      geometry: {
        coordinates: [-111.184522, 45.671695],
        type: 'Point',
      },
      id: '6256d453967c8379616add223d7f5d02',
    },
    {
      type: 'Feature',
      properties: {
        name: '37 Tattoo',
        street: '532, Calle Piura',
        city: 'Miraflores',
        state: '',
        postal_code: '15074',
        country: 'Peru',
        phone: '(+51) 1 4601333',
      },
      geometry: {
        coordinates: [-77.03623, -12.115859],
        type: 'Point',
      },
      id: 'd47ed43e22b73bdc660ebb28b2adadfb',
    },
  ],
  type: 'FeatureCollection',
}

const modifyShops = () => {
  shops.features.forEach((shop, i) => {
    shop.properties.id = i
  })
}

modifyShops()
