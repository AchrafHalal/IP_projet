export const AppleTv =   {
    id: 'appletv',
    label: 'Apple TV',
    appName: 'Apple TV',
    appColor: '#64748b',
    description:
      'Works on Apple TV 4th gen and Apple TV 4K using the GSE Smart IPTV or IPTV Smarters app.',
    steps: [
      {
        title: 'Open the App Store',
        text: 'On your Apple TV home screen, open the App Store.',
        image: '/steps/appletv/step1.png'
      },
      {
        title: 'Install GSE Smart IPTV',
        text: 'Search for "GSE Smart IPTV" and install it.',
        image: '/steps/appletv/step2.png'
      },
      {
        title: 'Open the App',
        text: 'Launch GSE Smart IPTV and navigate to "Remote Playlists".',
        image: '/steps/appletv/step3.png'
      },
      {
        title: 'Add Xtream Codes',
        text: 'Tap "+" and choose "Xtream Codes API". Enter your server URL, username, and password.',
        image: '/steps/appletv/step4.png'
      },
      {
        title: 'Load Your Content',
        text: 'Tap your playlist to load all channels and VOD content.',
        image: '/steps/appletv/step5.png'
      },
      {
        title: 'Watch on Your TV',
        text: 'Select any channel or movie and enjoy it on your big screen via Apple TV.',
        image: '/steps/appletv/step6.png'
      }
    ],
    features: [
      'Apple TV 4K',
      'GSE Smart IPTV',
      'Siri Remote support',
      'Dolby Vision HDR'
    ]
  }