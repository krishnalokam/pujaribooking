import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import RootNavigation from './navigations';
import i18n from './src/Language Settings/i18nConfig';
import {screenName} from './src/utils/screenName';
import Loader from './src/components/loader';
import SplashScreen from 'react-native-splash-screen';
import {View, Image} from 'react-native';

interface AppProps {
  onLanguageChange: (language: string) => void;
}

const App: React.FC<AppProps> = ({onLanguageChange}) => {
  const [initialLanguage, setInitialLanguage] = useState('');
  const [initialRoute, setInitialRoute] = useState('Choice');
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchLanguageAndUser = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
        const user = await AsyncStorage.getItem('auth-user');

        if (user) {
          const userr = JSON.parse(user);
          const userType = Number(userr?.user_type);

          // Ensure you set the initial route based on the user type
          if (userType === 1) {
            setInitialRoute(screenName.DashBoardScreen);
          } else if (userType === 2) {
            setInitialRoute('PriestDashboardScreen');
          } else if (userType === 3) {
            setInitialRoute('SupplierDashboardScreen');
          }
        }

        // Handle language setting
        if (savedLanguage) {
          i18n.changeLanguage(savedLanguage);
          setInitialLanguage(savedLanguage);
          onLanguageChange(savedLanguage);
        }
        setTimeout(() => {
          SplashScreen.hide(); // Hide the splash screen
          setLoading(false); // Set loading to false after 1 second
        }, 1000);
      } catch (error) {
        console.log(error);
      }

      setActive(true); // Mark the app as ready after fetching data
    };

    fetchLanguageAndUser();
  }, [onLanguageChange]);
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF',
        }}>
        <Image
          source={require('./android/app/src/main/res/drawable/pujaribookinglogo.jpg')}
          style={{width: 200, height: 200, resizeMode: 'contain'}}
        />
      </View>
    );
  }

  return (
    <>
      {active ? (
        <MenuProvider>
          <RootNavigation
            initialRouteName={initialRoute}
            currentLanguage={initialLanguage}
            onLanguageChange={onLanguageChange}
          />
        </MenuProvider>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
