// import axios from 'axios'
// import React from 'react'

// const Status = async ({}) => {
//   const spotify = await getSpotifyStats()
//   //   console.log(spotify)

//   return <div>Status</div>
// }

// export const getSpotifyStats = async () => {
//   var client_id = '0'
//   var client_secret = '0'

//   const headers = {
//     Authorization:
//       'Basic ' +
//       new Buffer.from(client_id + ':' + client_secret).toString('base64'),
//     form: {
//       grant_type: 'client_credentials'
//     },
//     json: true
//   }

//   const spotify = await axios.post(
//     'https://accounts.spotify.com/api/token',
//     {},
//     { headers: headers }
//   )

//   console.log(spotify)

//   return spotify
// }

// export default Status
