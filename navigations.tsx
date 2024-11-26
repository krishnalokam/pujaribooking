import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LanguageSettings from './src/Language Settings/LanguageSettings';
import CircularProgress from './src/components/circularProgress';
import BookAppointment from './src/pages/bookAppointment';
import BookingSuccess from './src/pages/bookingSuccess';
import ChangePassword from './src/pages/changePassword';
import ChatList from './src/pages/chatList';
import ChatView from './src/pages/chatView';
import DashBoardScreen from './src/pages/dashboard';
import DoctorDashBoard from './src/pages/doctors/doctorDashboard';
import DoctorOverView from './src/pages/doctors/doctorOverview';
import DoctorProfile from './src/pages/doctors/doctorProfile';
import HoursView from './src/pages/doctors/hours';
import LocationView from './src/pages/doctors/location';
import MyPatient from './src/pages/doctors/myPatient';
import Reviews from './src/pages/doctors/reviews';
import ScheduleTimings from './src/pages/doctors/scheduleTimings';
import FavouritesScreen from './src/pages/favouritesScreen';
import ForgotPassword from './src/pages/forgotPassword';
import InvoiceList from './src/pages/invoiceList';
import InvoiceView from './src/pages/invoiceView';
import NotificationScreen from './src/pages/notifications';
import Pages from './src/pages/pages';
import AppointmentList from './src/pages/patients/appointments';
import Billing from './src/pages/patients/billing';
import MedicalRecords from './src/pages/patients/medicalRecords';
import PatientOverView from './src/pages/patients/overView';
import PatientAppointments from './src/pages/patients/patientAppointment';
import PatientProfile from './src/pages/patients/patientProfile';
import PrescriptionList from './src/pages/patients/prescriptions';
import ProfileSettings from './src/pages/profileSettings';
import AboutMe from './src/pages/profileSettings/aboutMe';
import Awards from './src/pages/profileSettings/awards';
import BasicInfo from './src/pages/profileSettings/basicInfo';
import ClinicInfo from './src/pages/profileSettings/clinicInfo';
import ContactDetails from './src/pages/profileSettings/contactDetails';
import Education from './src/pages/profileSettings/education';
import Pricing from './src/pages/profileSettings/pricing';
import Registrations from './src/pages/profileSettings/registraction';
import SearchDoctor from './src/pages/searchDoctor';
import SideMenu from './src/pages/sideMenu';
import SignInScreen from './src/pages/signInScreen';
import SignUpScreen from './src/pages/signUpScreen';
import SocialMedia from './src/pages/socialMedia';
import VideoCall from './src/pages/videoCall';
import VoiceCall from './src/pages/voiceCall';
import { screenName } from './src/utils/screenName';
import Checkout from './src/pages/checkout';
import BookNow from './src/pages/BookNow';
import Pujas from './src/pages/doctors/Pujas';
import Choice from './src/pages/priest_user';
import Priest from './src/pages/doctors/Priest';
import EventPujaSupply from './src/pages/doctors/BookEventPujaSupplies';
import EventPujaSupplies from './src/pages/doctors/EventPujaSupplies';

import Payment from './src/pages/payment';
import Availability from './src/pages/Availability';
import Bookpujas from './src/pages/doctors/Bookpujas';
import Mypriest from './src/pages/doctors/mypriests';
import LanguageSwitcher from './src/pages/helpInfo';
import ContactUs from './src/pages/contactUs';
import AboutUs from './src/pages/aboutUs';
import TermsConditions from './src/pages/termsConditions';
import PrivacyPolicy from './src/pages/privacyPolicy';
import FAQS from './src/pages/faqs';
import Priestpujas from './src/pages/doctors/Priestpujas';
import SelectPoojaComponent from './src/components/SelectpoojaComponents';
import StripePayment from './src/pages/StripePayment';
import Thankyou from './src/pages/Thankyou';
import Priestphoto from './src/pages/doctors/Priestphoto';
import ViewBooking from './src/pages/ViewBooking';
import ViewEventBooking from './src/pages/ViewEventBooking';
import PaymentScreen from './src/pages/PaymentScreen';
import Favourite from './src/pages/Favourite';
import ScheduleBooking from './src/pages/doctors/scheduleTimings';
import PujaCheckout from './src/pages/PujaCheckout';
import Searchpujas from './src/pages/doctors/Searchpujas';
import ForgotPasswordOtpVerification from './src/pages/otpVerification';
import OtpVerification from './src/pages/otpVerification';
import Subscription from './src/pages/subscription';
import BuySubscription from './src/pages/BuySubscription';
import PriestDashBoardScreen from './src/pages/Priestdashboard';
import Photos from './src/pages/profileSettings/Photos';
import { Specialities5 } from './src/components/svgIcons';
import AddSpecialities from './src/pages/profileSettings/Specialities';
import BankDetails from './src/pages/profileSettings/Bankdetails';
import NonAvailability from './src/pages/profileSettings/NonAvailability';
import PriestSubscription from './src/pages/profileSettings/PriestSubtraction';
import Wallet from './src/pages/profileSettings/Wallet';
import WithdrawalRequest from './src/pages/WithdrawalRequest';
import DeleteAccount from './src/pages/DeleteAccount';
import PriestPayment from './src/pages/PriestPayment';
import ManageEarning from './src/pages/ManageEarning';
import PriestAvailability from './src/pages/profileSettings/PriestAvailability';
import MyProfile from './src/pages/doctors/MyProfile';
import ManageBookings from './src/pages/ManageBookings';
import AddEvent from './src/pages/Events';
import EventDetails from './src/pages/EventDetails';
import PriestViewBooking from './src/pages/PriestViewBooking';
import PriestFavourite from './src/pages/doctors/PriestFavourite';
import ForgotVerify from './src/pages/forgotVerification';
import ManagePooja from './src/pages/profileSettings/ManagePooja';
import Viewbook from './src/pages/ViewBook';
import Newevent from './src/pages/NewEvent';
import Terms from './src/pages/term';
import ResetPassword from './src/pages/ResetPassword';
import ForgotChangePassword from './src/pages/forgotChangePassword';
import BookingsByDate from './src/pages/Todaybookings';
import CheckoutScreen from './src/pages/CheckoutScreen';
import SupplierDashBoardScreen from './src/pages/SupplierDashboard'
import SupplierBankDetails from './src/pages/SupplierBankDetails';
import ManageOrders from './src/pages/ManageOrders';
import ManageProducts from './src/pages/ManageProducts';
// import ProductsReport from './src/pages/ProductsReport';
import SupplierViewOrders from './src/pages/SupplierViewOrders';
import SupplierViewProducts from './src/pages/SupplierViewProducts';
import AddProducts from './src/pages/AddProducts';
import EditProducts from './src/pages/EditProducts';
import SupplierWallet from './src/pages/SupplierManageEarning';
import SupplierMyProfile from './src/pages/doctors/SupplierMyProfile';
import EventPujaCheckoutScreen from './src/pages/doctors/EventPujaCheckoutScreen';
import EventPujaCheckout from './src/pages/EventPujaSuppliesCheckout';
import EventPujaBookings from './src/pages/doctors/EventPujaSuppliesBookings';
import EventPujaThankyou from './src/pages/doctors/EventPujaSuppliesThankyou';
import EventPujaViewBooking from './src/pages/doctors/EventPujaSuppliesViewBook';




























const Stack = createNativeStackNavigator();

interface NavigationProps {
  initialRouteName: string;
}

const HomeNavigation = (props: NavigationProps) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={props.initialRouteName}>
      <Stack.Screen name='Choice' component={Choice} />
      <Stack.Screen name={screenName.SignInScreen} component={SignInScreen} />
      <Stack.Screen name={screenName.SignUpScreen} component={SignUpScreen} />
      <Stack.Screen name={screenName.ForgotPassword} component={ForgotPassword} />
      <Stack.Screen name={screenName.ChangePassword} component={ChangePassword} />
      <Stack.Screen name={screenName.BookingSuccess} component={BookingSuccess} />
      <Stack.Screen name={screenName.DashBoardScreen} component={DashBoardScreen} />
      <Stack.Screen name={screenName.SideMenu} component={SideMenu} />
      <Stack.Screen name={screenName.PatientAppointments} component={PatientAppointments} />
      <Stack.Screen name={screenName.AppointmentList} component={AppointmentList} />
      <Stack.Screen name={screenName.PrescriptionList} component={PrescriptionList} />
      <Stack.Screen name={screenName.MedicalRecords} component={MedicalRecords} />
      <Stack.Screen name={screenName.Billing} component={Billing} />
      <Stack.Screen name={screenName.DoctorProfile} component={DoctorProfile} />
      <Stack.Screen name={screenName.DoctorOverView} component={DoctorOverView} />
      <Stack.Screen name={screenName.LocationView} component={LocationView} />
      <Stack.Screen name={screenName.Reviews} component={Reviews} />
      <Stack.Screen name={screenName.HoursView} component={HoursView} />
      <Stack.Screen name={screenName.PatientProfile} component={PatientProfile} />
      <Stack.Screen name={screenName.PatientOverView} component={PatientOverView} />
      <Stack.Screen name={screenName.MyPatient} component={MyPatient} />
      <Stack.Screen name={screenName.DoctorDashBoard} component={DoctorDashBoard} />
      <Stack.Screen name={screenName.CircularProgress} component={CircularProgress} />
      <Stack.Screen name={screenName.InvoiceList} component={InvoiceList} />
      <Stack.Screen name={screenName.InvoiceView} component={InvoiceView} />
      <Stack.Screen name={screenName.FavouritesScreen} component={FavouritesScreen} />
      <Stack.Screen name={screenName.NotificationScreen} component={NotificationScreen} />
      <Stack.Screen name={screenName.Pages} component={Pages} />
      <Stack.Screen name={screenName.SearchDoctor} component={SearchDoctor} />
      <Stack.Screen name={screenName.SocialMedia} component={SocialMedia} />
      <Stack.Screen name={screenName.ProfileSettings} component={ProfileSettings} />
      <Stack.Screen name={screenName.BasicInfo} component={BasicInfo} />
      <Stack.Screen name={screenName.AboutMe} component={AboutMe} />
      <Stack.Screen name={screenName.ClinicInfo} component={ClinicInfo} />
      <Stack.Screen name={screenName.ContactDetails} component={ContactDetails} />
      <Stack.Screen name={screenName.Pricing} component={Pricing} />
      <Stack.Screen name={screenName.Education} component={Education} />
      <Stack.Screen name={screenName.Awards} component={Awards} />
      <Stack.Screen name={screenName.Registrations} component={Registrations} />
      <Stack.Screen name={screenName.ChatList} component={ChatList} />
      <Stack.Screen name={screenName.ChatView} component={ChatView} />
      <Stack.Screen name={screenName.ScheduleTimings} component={ScheduleTimings} />
      <Stack.Screen name={screenName.BookAppointment} component={BookAppointment} />
      <Stack.Screen name={screenName.VoiceCall} component={VoiceCall} />
      <Stack.Screen name={screenName.VideoCall} component={VideoCall} />
      <Stack.Screen name={screenName.SupplierMyProfile} component={SupplierMyProfile} />

     



      <Stack.Screen name={'BookNow'} component={BookNow} />
      <Stack.Screen name={screenName.LanguageSettings} component={LanguageSettings} />
      <Stack.Screen name={'Pujas'} component={Pujas} />
      <Stack.Screen name={'EventPujaSupply'} component={EventPujaSupply} />

      <Stack.Screen name={'Priest'} component={Priest} />
      <Stack.Screen name={'EventPujaSupplies'} component={EventPujaSupplies} />

      <Stack.Screen name={'Payment'} component={Payment} />
      <Stack.Screen name={'Available'} component={Availability} />
      <Stack.Screen name={'Bookpujas'} component={Bookpujas} />
      <Stack.Screen name={'Mypriest'} component={Mypriest} />
      <Stack.Screen name={'Help&Info'} component={LanguageSwitcher} />
      <Stack.Screen name={'AboutUs'} component={AboutUs} />
      <Stack.Screen name={'ContactUs'} component={ContactUs} />
      <Stack.Screen name={'TermsConditions'} component={TermsConditions} />
      <Stack.Screen name={'Terms'} component={Terms} />
      <Stack.Screen name={'PrivacyPolicy'} component={PrivacyPolicy} />
      <Stack.Screen name={'FAQS'} component={FAQS} />
      <Stack.Screen name={'Selectpujas'} component={Priestpujas} />    
      <Stack.Screen name={'SelectpujaComponent'} component={SelectPoojaComponent} />      
      <Stack.Screen name={'Thankyou'} component={Thankyou} /> 
      <Stack.Screen name={'ViewBooking'} component={ViewBooking} />
      <Stack.Screen name={'ViewEventBooking'} component={ViewEventBooking} /> 
      <Stack.Screen name={'PaymentScreen'} component={PaymentScreen} /> 
      <Stack.Screen name={'Favourite'} component={Favourite} /> 
      <Stack.Screen name={'ScheduleBooking'} component={ScheduleBooking} /> 
      <Stack.Screen name={'PujaCheckout'} component={PujaCheckout} /> 
      <Stack.Screen name={'Searchpujas'} component={Searchpujas} /> 
      <Stack.Screen name={'otpVerification'} component={OtpVerification} /> 
      <Stack.Screen name={'Subscription'} component={Subscription} /> 
      <Stack.Screen name={'BuySubscription'} component={BuySubscription} /> 
      <Stack.Screen name={'PriestDashboardScreen'} component={PriestDashBoardScreen} /> 
      <Stack.Screen name={'Photos'} component={Photos} /> 
      <Stack.Screen name={'AddSpecialities'} component={AddSpecialities} /> 
      <Stack.Screen name={'BankDetails'} component={BankDetails} /> 
      <Stack.Screen name={'PriestAvailability'} component={PriestAvailability} /> 
      <Stack.Screen name={'Non_Availability'} component={NonAvailability} /> 
      <Stack.Screen name={'PriestSubscription'} component={PriestSubscription} /> 
      <Stack.Screen name={'Wallet'} component={Wallet} /> 
      <Stack.Screen name={'SupplierWallet'} component={SupplierWallet} /> 

      <Stack.Screen name={'Withdrawal_Request'} component={WithdrawalRequest} /> 
      <Stack.Screen name={'Delete_Account'} component={DeleteAccount} /> 
      <Stack.Screen name={'PriestPayment'} component={PriestPayment} /> 
      <Stack.Screen name={'ManageEarning'} component={ManageEarning} /> 
      <Stack.Screen name={'MyProfile'} component={MyProfile} />
      <Stack.Screen name={'Manage_Bookings'} component={ManageBookings} />
      <Stack.Screen name={'Add_Events'} component={EventDetails} />
      <Stack.Screen name={'View'} component={PriestViewBooking} />
      <Stack.Screen name={'Events'} component={AddEvent} />
      <Stack.Screen name={'WithdrawalRequest'} component={WithdrawalRequest} />
      <Stack.Screen name={'AddEvent'} component={Newevent} />
      <Stack.Screen name={'PriestFavourite'} component={PriestFavourite} />
      <Stack.Screen name={'forgotVerify'} component={ForgotVerify} />
      <Stack.Screen name={'ManagePooja'} component={ManagePooja} />
      <Stack.Screen name={'ViewBook'} component={Viewbook} />
      <Stack.Screen name={'ResetPassword'} component={ResetPassword} />
      <Stack.Screen name={'ForgotChangePassword'} component={ForgotChangePassword} />
      <Stack.Screen name={'BookingsByDate'} component={BookingsByDate} />
      <Stack.Screen name={'Checkoutscreen'} component={CheckoutScreen} />
      <Stack.Screen name="EventPujaCheckoutScreen" component={EventPujaCheckoutScreen}/>
      <Stack.Screen name="EventPujaCheckout" component={EventPujaCheckout}/>


      <Stack.Screen name={'SupplierDashboardScreen'} component={SupplierDashBoardScreen} /> 
      <Stack.Screen name={'SupplierBankDetails'} component={SupplierBankDetails} />
      <Stack.Screen name={'ManageOrders'} component={ManageOrders} />
      <Stack.Screen name={'ManageProducts'} component={ManageProducts} />
      <Stack.Screen name={'SupplierViewOrders'} component={SupplierViewOrders} /> 
      <Stack.Screen name={'SupplierViewProducts'} component={SupplierViewProducts} />
      <Stack.Screen name={'AddProducts'} component={AddProducts} /> 
      <Stack.Screen name={'EditProducts'} component={EditProducts} /> 
      <Stack.Screen name={'EventPujaBookings'} component={EventPujaBookings} />
      <Stack.Screen name={'EventPujaThankyou'} component={EventPujaThankyou} />
      <Stack.Screen name={'EventPujaViewBooking'} component={EventPujaViewBooking} />




 







    </Stack.Navigator>
  );
};
interface RootNavigationProps {
  initialRouteName: string;
  currentLanguage: string; // Add this prop
  onLanguageChange: (language: string) => void;
}
const RootNavigation = (props: RootNavigationProps) => {
  return (
    <NavigationContainer>
      <HomeNavigation initialRouteName={props.initialRouteName} />
      {/* <HomeNavigation initialRouteName={'Checkoutscreen'} /> */}

    </NavigationContainer>
  );
};

export default RootNavigation;
