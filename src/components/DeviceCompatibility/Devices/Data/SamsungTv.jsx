export const SamsungTv =   {
    id: 'samsung',
    label: 'Samsung Smart TV',
    appName: 'Samsung Smart TV',
    appColor: '#3b82f6',
    description:
      'Works on Samsung Tizen Smart TVs (2017 and newer) using the Smart IPTV app.',
    steps: [
      {
        title: 'Open Samsung App Store',
        text: 'Press the Smart Hub button on your remote and go to "Apps".',
        image: '/Instructions/Samsung/pic1.png'
      },
      {
        title: 'Search Smart IPTV',
        text: 'Type "Smart IPTV" in the search and install the app.',
        image: '/Instructions/Samsung/pic2.png'
      },
      {
        title: 'Open IPTV App',
        text: "Open Smart IPTV — Add the Details that we provided after purchase and click on 'Add Playlist'.",
        image: '/Instructions/Samsung/pic3.png'
      },
      {
        title: 'Done!',
        text: 'Navigate channels with your TV remote. Enjoy full HD and 4K content.',
        image: '/Instructions/Samsung/pic4.png'
      }
    ],
    features: [
      'Tizen 2017+',
      'Smart IPTV app',
      '4K & HDR',
      'Remote-friendly UI'
    ]
  }