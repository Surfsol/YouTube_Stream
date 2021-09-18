const getVideos = async (search) => {
  console.log('in get video', search)
    try {
      let response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyDpcrJuY4lCNTkWu5WuWaaMQC4n72zRVcA`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      let json = await response.json();
      return json;
    } catch (err) {
      return 'error'
    }
  };
  
  export { getVideos };
  