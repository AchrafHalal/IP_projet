export const FireStick =   {
    id: 'firestick',
    label: 'Fire Stick',
    deviceImage: '/DeviceLogos/Fire_Stick.png',
    appName: 'Fire Stick',
    appColor: '#f59e0b',
    description:
      'Works on Fire Stick 4K, 4K Max, Lite, and all Fire TV devices. Uses the IPTV Smarters Pro app.',
    steps: [
      {
        title: 'Enable Apps from Unknown Sources',
        text: 'Go to Settings → My Fire TV → Developer Options and turn on "Apps from Unknown Sources".',
        image: '/steps/firestick/step1.png'
      },
      {
        title: 'Install Downloader',
        text: 'Search for "Downloader" in the Amazon App Store and install it. This lets you sideload apps.',
        image: '/steps/firestick/step2.png'
      },
      {
        title: 'Download IPTV Smarters Pro',
        text: 'Open Downloader and enter the IPTV Smarters APK URL we provide you after purchase.',
        image: '/steps/firestick/step3.png'
      },
      {
        title: 'Open IPTV Smarters Pro',
        text: 'Launch the app, tap "Add User" then choose "Login with Xtream Codes API".',
        image: '/steps/firestick/step4.png'
      },
      {
        title: 'Enter Your Credentials',
        text: 'Enter the Username, Password, and Server URL we sent you after purchase. Tap Add User.',
        image: '/steps/firestick/step5.png'
      },
      {
        title: 'Start Watching',
        text: 'Your channels, movies, and series are now loaded. Browse and enjoy!',
        image: '/steps/firestick/step6.png'
      }
    ],
    features: [
      'Fire Stick Lite / 4K / Max',
      'IPTV Smarters Pro',
      '4K support',
      'EPG guide included'
    ]
  }