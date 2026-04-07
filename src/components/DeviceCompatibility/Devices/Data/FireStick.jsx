export const FireStick = {
  id: 'firestick',
  label: 'Fire Stick',
  appName: 'Fire Stick',
  appColor: '#f59e0b',
  description:
    'Follow these steps to install the player on your Fire TV device using the Downloader app.',
  steps: [
    {
      title: 'Install IPTV Smarters Pro',
      text: ', click **Install**, and then select **Open**.',
      image: '/Instructions/FireStick/pic1.png'
    },
    {
      title: 'Open IPTV Smarters Pro',
      text: ', Open the app.',
      image: '/Instructions/FireStick/pic2.png'
    },
    {
      title: 'Login Method',
      text: 'Select **TV** when asked for your device. On the main screen, choose **"Login with Xtream Codes API"**.',
      image: '/Instructions/FireStick/pic3.png'
    },
    {
      title: 'Enter Credentials',
      text: 'Enter any name (e.g., "MyTV"), then input the **Username, Password, and Server URL** from your email. Tap **Add User**.',
      image: '/Instructions/FireStick/pic4.png'
    },
    {
      title: 'Done!',
      text: 'You have successfully added your IPTV account. Enjoy watching!',
      image: '/Instructions/FireStick/pic5.png'
    }
  ],
  features: [
    'Direct APK Installation',
    'Xtream Codes Compatibility',
    'Supports 4K Streaming',
    'Full EPG Support'
  ]
};