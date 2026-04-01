export const Mac =   {
    id: 'mac',
    label: 'Mac',
    deviceImage: '/DeviceLogos/Mac.jfif',
    appName: 'macOS',
    appColor: '#8b5cf6',
    description:
      'Stream on any Mac using VLC or IPTV Smarters for macOS. Works on macOS 11 Big Sur and above.',
    steps: [
      {
        title: 'Download VLC for Mac',
        text: 'Visit videolan.org, download VLC for macOS, and drag it to your Applications folder.',
        image: '/steps/mac/step1.png'
      },
      {
        title: 'Open Network Stream',
        text: 'In VLC, click "File" in the menu bar → "Open Network...".',
        image: '/steps/mac/step2.png'
      },
      {
        title: 'Enter Your M3U URL',
        text: 'Paste your personal M3U link in the URL field and click Open.',
        image: '/steps/mac/step3.png'
      },
      {
        title: 'Load Channels',
        text: 'Wait a moment for all channels to load. You can see the playlist in the sidebar.',
        image: '/steps/mac/step4.png'
      },
      {
        title: 'Browse and Play',
        text: 'Click any channel name in the playlist to start watching.',
        image: '/steps/mac/step5.png'
      },
      {
        title: 'Cast to Apple TV',
        text: 'Use AirPlay from your Mac to cast to your Apple TV or AirPlay-compatible TV.',
        image: '/steps/mac/step6.png'
      }
    ],
    features: [
      'macOS 11+',
      'VLC / IPTV Smarters',
      'AirPlay support',
      'M3U & Xtream Codes'
    ]
  }