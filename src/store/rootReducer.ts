import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import diaryReducer from "../features/diary/diarySlice";
import entryReducer from "../features/entry/entrySlice";

const rootReducer = combineReducers({
    auth: authReducer,
    diary: diaryReducer,
    entry: entryReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;