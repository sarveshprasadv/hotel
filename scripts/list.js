var options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
    params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '1207a9f092mshbb4a416bbfbcf10p1d7030jsndd935a5be564'
    }
  };

  const getData = async () =>{
      const resp = await fetch(options)
      const data = await resp.json()
      console.log(data)
  } 

  getData()