import React from 'react'

async function getDiscord () {
  const data = await fetch(
    'https://api.lanyard.rest/v1/users/619925060387340299'
  )
  const discord = data.json()

  return discord
}

const Discord = async () => {
  const discord = await getDiscord()

  return <div className='absolute w-64 h-32 bg-gray-950/40 left-4 top-4 rounded-xl'>
    
  </div>
}

export default Discord
