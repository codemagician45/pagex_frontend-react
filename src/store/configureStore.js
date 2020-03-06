import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import getDataReducer from './reducers/GetDataReducer/GetDataReducer';
import accountVerifData from './reducers/SignupReducer/ValidationCodeReducer';
import codeIsValid from './reducers/SignupReducer/CodeValidationreducer';
import userRegisterInfo from './reducers/SignupReducer/StoreUserInfoReducer';
import passionsList from './reducers/PassionReducers/getAllPassionsReducer';
import signedUpUser from './reducers/SignupReducer/signupNewUserReducer';
import loginUser from './reducers/LoginReducer/LoginUserReducer';

const reducers = combineReducers({
  loginUser: loginUser,
  signedUpUser: signedUpUser,
  passionsList: passionsList,
  userRegisterInfo: userRegisterInfo,
  codeIsValid: codeIsValid,
  accountVerifData: accountVerifData,
  getDataReducer: getDataReducer,
  router: routerReducer,
});

export default reducers;