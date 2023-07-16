
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import AccountPage from './screens/accountPage/AccountPage';
import AddBaby from './screens/AddBaby/AddBaby';
import HomeBaby from './screens/AddBaby/HomeBaby';
import HomeAdminPage from './screens/Admin/HomeAdminPage';
import ManageDoctor from './screens/Admin/ManageDoctor';
import ManageParents from './screens/Admin/ManageParents';
import PaymentDetails from './screens/Admin/PaymentDetails';
import Calculator from './screens/calculator/Calculator';
import Chat from './screens/chat/Chat';
import CommonProblem from './screens/common/CommonProblem';
import ListCommonProblem from './screens/common/ListCommonProblem';
import DoctorConsultancy from './screens/Consultancy/DoctorConsultancy';
import RequestCustomize from './screens/Customize/RequestCustomize';
import { DietPlan } from './screens/DietPlan/DietPlan';
import DoctorChat from './screens/Doctor/DoctorChat';
import DoctorAdmin2 from './screens/Doctor/DoctorHome2';
import Qualification from './screens/Doctor/Qualification';
import Requests from './screens/Doctor/Requests';
import ForgetPassword from './screens/forgetPassword/ForgetPassword';
import NewPassword from './screens/forgetPassword/NewPassword';
import VerifyEmail from './screens/forgetPassword/VerifyEmail';
import AdminHome from './screens/Home/AdminHome';
import DoctorHome from './screens/Home/DoctorHome';
import Home from './screens/Home/Home';
import HomeDoctor from './screens/HomeDoctor/HomeDoctor';
import HomeDoctor2 from './screens/HomeDoctor/HomeDoctor2';
import LetAddBaby from './screens/LetAddBaby/LetAddBaby';
import MainPage from './screens/mainPage/MainPage';
import MainPage2 from './screens/mainPage/MainPage2';
import Milestones from './screens/MIlestones/Milestones';
import Payment from './screens/Payment/Payment';
import ListPhysicalActivities from './screens/physicalActivties/ListPhysicalActivities';
import PhysicalActivities from './screens/physicalActivties/PhysicalActivities';
import Recipes from './screens/recipes/Recipes';
import RecipesDetail from './screens/recipes/RecipesDetail';
import AdminLogin from './screens/signin/AdminLogin';
import DoctorLogin from './screens/signin/DoctorLogin';
import Login from './screens/signin/Login';
import Signup from './screens/signup/Signup';
import Vaccinaction from './screens/vaccinaction/Vaccinaction';
import VaccinationList from './screens/vaccinaction/VaccinationList';
import DoctorSignup from './screens/signup/DoctorSignup';
import PostCommonProblems from './screens/nutrtionist/postCommonProblems';
//import PhysicalActivities from './screens/physicalActivties/PhysicalActivities';
import PostPhysicalActivities from './screens/nutrtionist/postPhysicalActivites';
import PostDiyRemediesRecipes from './screens/nutrtionist/postDiyRemedies&Recipes';
import MotherHome from './screens/mother/motherhome';
import MotherDietPlan from './screens/MotherDietPlan/motherDietPlan';
//import Qoutes from './screens/MotherQoutes/qoutes';
import NutritionistLogin from './screens/signin/NutritionistLogin';
import NutritionistSignup from './screens/signup/NutritionistSignup';
import NutritionistHomePage from './screens/nutrtionist/HomeAdminPage';
import BabyDietPlanRequest from './screens/nutrtionist/babyDietPlanRequest';
import { AuthProvider } from './ContextApi/AuthContext';
import BabyProvider from './ContextApi/BabyContext';
import Quotes from './screens/MotherQoutes/qoutes';
import MotherDietPlanRequest from './screens/nutrtionist/motherDietPlanRequest';




function App() {
  return (
    <>
    <AuthProvider>
    <BabyProvider>
     <Routes>
      <Route path="/"  element={<MainPage/>} />
      <Route path='/account_page' element={<AccountPage/>} />
      <Route path="/main_page2"  element={<MainPage2/>} />
      <Route path="/signup"  element={<Signup/>} />
      <Route path="/login"  element={<Login/>} />
      <Route path="/admin_login"  element={<AdminLogin/>} />
      <Route path="/doctor_login"  element={<DoctorLogin/>} />
      <Route path="/doctorsignup"  element={<DoctorSignup/>} />
      <Route path="/nutritionistSignup"  element={<NutritionistSignup/>} />
      <Route path="/nutritionist_login"  element={<NutritionistLogin/>} />
      <Route path='/home_nutriHome' element={<NutritionistHomePage/>} />
      <Route path='/babyDietPlanReq' element={<BabyDietPlanRequest/>} />
      <Route path='/admin_home' element={<AdminHome/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/add_baby' element={<AddBaby/>} />
      <Route path='/home_baby' element={<HomeBaby/>} />
      <Route path='/let_add_baby' element={<LetAddBaby/>} />
      <Route path='/mother_home' element={<MotherHome/>} />
      <Route path='/mother_dietPlan' element={<MotherDietPlan/>} />
      <Route path='/qoutes' element={<Quotes/>} />
      <Route path='/request_customize' element={<RequestCustomize/>} />
      <Route path='/home_admin_page' element={<HomeAdminPage/>} />
      <Route path='/manage_parents'   element={<ManageParents/>} />
      <Route path='/manage_doctor'   element={<ManageDoctor/>} />
      <Route path='/postCommonProbelms'   element={<PostCommonProblems/>} />
      <Route path='/postPhysicalActivites'   element={<PostPhysicalActivities/>} />
      <Route path='/postDiyRemediesRecipes'   element={<PostDiyRemediesRecipes/>} />
      <Route path='/payment_details'   element={<PaymentDetails/>} />
      <Route path='/doctor_home' element={<DoctorHome/>} />
      <Route path='/doctor_admin2'  element={<DoctorAdmin2/>} />
      <Route path='/requests'  element={<Requests/>} />
      <Route path='/common_problem'  element={<CommonProblem/>} />
      <Route path='/physical_activities' element={<PhysicalActivities/>} />
      <Route path='/vaccination' element={<Vaccinaction/>} />
      <Route path='/vaccination_list' element={<VaccinationList/>} />
      <Route path='/calculator' element={<Calculator/>}  />
      <Route path='/diet_plan' element={<DietPlan/>} />
      <Route path='/milestones'  element={<Milestones/>} />
      <Route path='/recipes'  element={<Recipes/>} />
      <Route path='/qualification'  element={<Qualification/>} />
      <Route path='/verify_email'  element={<VerifyEmail/>} />

     
      <Route path='/doctor_consultancy' element={<DoctorConsultancy/>} />
      <Route path='/forget_password' element={<ForgetPassword/>} />
      <Route path='/new_password' element={<NewPassword/>}  />
       <Route path='/payment' element={<Payment/>}  />

       <Route path='/chat' element={<Chat/>} />
       <Route path='/list_common_problem' element={<ListCommonProblem/>} />
      <Route path='/list_physical_activities' element={<ListPhysicalActivities/>} />
       <Route path='/recipes_detail'  element={<RecipesDetail/>} />
       <Route path='/doctor_chat'  element={<DoctorChat/>} />
       <Route path='/home_doctor' element={<HomeDoctor/>}   />
      <Route path='/home_doctor2' element={<HomeDoctor2/>} />
      <Route path='/motherDietReq' element={<MotherDietPlanRequest/>} />

     </Routes>
     </BabyProvider>
     </AuthProvider>
    </>
  );
}

export default App;
