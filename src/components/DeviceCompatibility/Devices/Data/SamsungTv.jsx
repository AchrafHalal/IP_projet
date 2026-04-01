export const SamsungTv =   {
    id: 'samsung',
    label: 'Samsung Smart TV',
    deviceImage: '/DeviceLogos/SamsungTv.png',
    appName: 'Samsung Smart TV',
    appColor: '#3b82f6',
    description:
      'Works on Samsung Tizen Smart TVs (2017 and newer) using the Smart IPTV app.',
    steps: [
      {
        title: 'Open Samsung App Store',
        text: 'Press the Smart Hub button on your remote and go to "Apps".',
        image: '/steps/samsung/step1.png'
      },
      {
        title: 'Search Smart IPTV',
        text: 'Type "Smart IPTV" in the search and install the app.',
        image: '/steps/samsung/step2.png'
      },
      {
        title: 'Note Your MAC Address',
        text: "Open Smart IPTV — your TV's MAC address is shown on the screen. Note it down.",
        image: '/steps/samsung/step3.png'
      },
      {
        title: 'Activate on the Website',
        text: 'Visit the Smart IPTV website on your phone, enter your MAC address, and upload your M3U link.',
        image: '/steps/samsung/step4.png'
      },
      {
        title: 'Restart the App',
        text: 'Close and reopen Smart IPTV on your TV. Your channels will now load.',
        image: '/steps/samsung/step5.png'
      },
      {
        title: 'Done!',
        text: 'Navigate channels with your TV remote. Enjoy full HD and 4K content.',
        image: '/steps/samsung/step6.png'
      }
    ],
    features: [
      'Tizen 2017+',
      'Smart IPTV app',
      '4K & HDR',
      'Remote-friendly UI'
    ]
  }