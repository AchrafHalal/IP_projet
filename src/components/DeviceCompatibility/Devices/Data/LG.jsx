export const LG =   {
    id: 'lg',
    label: 'LG Smart TV',
    deviceImage: '/DeviceLogos/LG.png',
    appName: 'LG Smart TV',
    appColor: '#ef4444',
    description:
      'Works on LG WebOS Smart TVs (2016 and newer) using the SS IPTV or Smart IPTV app.',
    steps: [
      {
        title: 'Open LG Content Store',
        text: 'Press Home on your Magic Remote and open the LG Content Store.',
        image: '/steps/lg/step1.png'
      },
      {
        title: 'Install SS IPTV',
        text: 'Search for "SS IPTV" and install the free app.',
        image: '/steps/lg/step2.png'
      },
      {
        title: 'Open SS IPTV',
        text: 'Launch SS IPTV from your Home screen.',
        image: '/steps/lg/step3.png'
      },
      {
        title: 'Add Your Playlist',
        text: 'Go to Settings → Playlists → Add Playlist. Choose "Remote" and enter your M3U URL.',
        image: '/steps/lg/step4.png'
      },
      {
        title: 'Load the Playlist',
        text: 'Tap Update to load all channels. This may take a few seconds.',
        image: '/steps/lg/step5.png'
      },
      {
        title: 'Start Streaming',
        text: 'Use your Magic Remote to browse categories and start watching.',
        image: '/steps/lg/step6.png'
      }
    ],
    features: [
      'WebOS 2016+',
      'SS IPTV app',
      'Magic Remote support',
      'Full HD & 4K'
    ]
  }