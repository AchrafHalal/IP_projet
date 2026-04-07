export const MagBox =   {
    id: 'mag',
    label: 'MAG Box',
    appName: 'MAG Set-Top Box',
    appColor: '#f97316',
    description:
      'Works on all MAG set-top boxes (MAG 250, 254, 256, 322, 324, 351, 410, 420). Portal-based setup.',
    steps: [
      {
        title: 'Go to System Settings',
        text: 'Press the Setup button on your MAG remote and navigate to System Settings.',
        image: '/Instructions/MagBox/pic1.png'
      },
      {
        title: 'Open Servers',
        text: 'Inside System Settings, select Servers then Portals.',
        image: '/Instructions/MagBox/pic2.png'
      },
      {
        title: 'Enter Portal URL',
        text: 'In the Portal 1 Name field, type any name. In the Portal 1 URL field, paste the URL we sent you.',
        image: '/Instructions/MagBox/pic3.png'
      },
      {
        title: 'Save and Restart',
        text: 'Press OK to save, then go back and choose Restart Portal.',
        image: '/Instructions/MagBox/pic4.png'
      },
      {
        title: 'Channels Load Automatically',
        text: 'After restart, your MAG box will connect to our server and load all channels.',
        image: '/Instructions/MagBox/pic5.png'
      },
      {
        title: 'Done!',
        text: 'Use your MAG remote to browse live TV, movies, and series.',
        image: '/Instructions/MagBox/pic5.png'
      }
    ],
    features: [
      'All MAG models',
      'Portal URL setup',
      'Auto EPG guide',
      'No extra app needed'
    ]
  }