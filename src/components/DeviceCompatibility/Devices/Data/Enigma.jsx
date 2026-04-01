export const Enigma =   {
    id: 'enigma',
    label: 'Enigma2 / Dreambox',
    deviceImage: '/DeviceLogos/Fire_Stick.png',
    appName: 'Enigma2 & Dreambox',
    appColor: '#06b6d4',
    description:
      'Works on Enigma2 receivers, Dreambox, VU+, Zgemma, and all OpenATV / OpenPLi boxes via E2M3U2Bouquet.',
    steps: [
      {
        title: 'Install E2M3U2Bouquet Plugin',
        text: 'On your Enigma2 box, go to Plugins → Plugin Browser → search "E2M3U2Bouquet" and install it.',
        image: '/steps/enigma/step1.png'
      },
      {
        title: 'Open the Plugin',
        text: 'Press Plugins from the menu and launch E2M3U2Bouquet.',
        image: '/steps/enigma/step2.png'
      },
      {
        title: 'Configure M3U URL',
        text: 'Select "Configure" and enter your M3U URL in the M3U List URL field.',
        image: '/steps/enigma/step3.png'
      },
      {
        title: 'Set EPG Source',
        text: 'Enter your EPG XMLTV URL in the EPG URL field for full TV guide.',
        image: '/steps/enigma/step4.png'
      },
      {
        title: 'Build Bouquets',
        text: 'Go back and select "Build Bouquets". The system will create all your channel lists.',
        image: '/steps/enigma/step5.png'
      },
      {
        title: 'Restart Enigma2',
        text: 'Restart the GUI (not the full box). Your bouquets will appear in the channel list.',
        image: '/steps/enigma/step6.png'
      }
    ],
    features: [
      'Dreambox / VU+ / Zgemma',
      'OpenATV / OpenPLi',
      'Full bouquet support',
      'XMLTV EPG'
    ]
  }