export const VLC = {
  id: 'vlc',
  label: 'VLC / Any Player',
  appName: 'VLC Media Player',
  appColor: '#f97316',
  description:
    'The universal method. Use your M3U link to stream on VLC, Kodi, or any classic IPTV player on any operating system.',
  steps: [
    {
      title: 'Copy Your M3U Link',
      text: 'Find the **M3U Playlist URL** in your activation email. Copy the entire link to your clipboard.',
      image: '/Instructions/VLC/pic1.png'
    },
    {
      title: 'Open Network Stream',
      text: 'Launch VLC. Go to the **Media** menu at the top left and select **"Open Network Stream..."** (or press Ctrl+N).',
      image: '/Instructions/VLC/pic2.png'
    },
    {
      title: 'Paste the URL',
      text: 'Paste your M3U link into the box labeled **"Please enter a network URL"** and click the **Play** button.',
      image: '/Instructions/VLC/pic3.png'
    },
    {
      title: 'Access the Playlist',
      text: 'To see all your channels, go to **View** > **Playlist** (or press Ctrl+L). Your categories will appear here.',
      image: '/Instructions/VLC/pic4.png'
    },
    {
      title: 'Search Channels',
      text: 'Use the **Search bar** at the top of the playlist window to quickly find specific sports, news, or movie channels.',
      image: '/Instructions/VLC/pic5.png'
    },
    {
      title: 'Instant Streaming',
      text: 'Double-click any channel to start the stream. VLC will automatically handle the buffer for a smooth experience.',
      image: '/Instructions/VLC/pic5.png'
    }
  ],
  features: [
    'Universal M3U Support',
    'Cross-Platform (Win/Mac/Linux)',
    'Lightweight & Reliable',
    'No Login Required (Link Only)'
  ]
};