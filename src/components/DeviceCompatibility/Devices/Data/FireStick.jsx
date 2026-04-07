export const FireStick = {
  id: 'firestick',
  label: 'Fire Stick',
  deviceImage: '/DeviceLogos/Fire_Stick.png',
  appName: 'Fire Stick',
  Vid:'/Instructions/FireStick/FireStick_Instructions.mp4',
  appColor: '#f59e0b',
  description:
    'Follow these steps to install the player on your Fire TV device using the Downloader app.',
  steps: [
    {
      title: 'Get the Downloader App',
      text: 'From your Home screen, go to **Find** > **Search** and type "Downloader". Select the orange icon and click **Download**.',
    },
    {
      title: 'Enter the URL',
      text: 'Open Downloader, allow permissions, and type the **APK URL** we provided into the address bar. Click **Go**.',
    },
    {
      title: 'Authorize Installation',
      text: 'If a security popup appears, click **Settings** > **Install Unknown Apps** and set Downloader to **ON**.',
    },
    {
      title: 'Finalize Install',
      text: 'Press the back button to return to Downloader, click **Install**, and then select **Open**.',
    },
    {
      title: 'Login Method',
      text: 'Select **TV** when asked for your device. On the main screen, choose **"Login with Xtream Codes API"**.',
    },
    {
      title: 'Enter Credentials',
      text: 'Enter any name (e.g., "MyTV"), then input the **Username, Password, and Server URL** from your email. Tap **Add User**.',
    }
  ],
  features: [
    'Direct APK Installation',
    'Xtream Codes Compatibility',
    'Supports 4K Streaming',
    'Full EPG Support'
  ]
};