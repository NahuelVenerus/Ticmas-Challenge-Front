import { UserSignupDTO } from "@/src/DTOs/userSignupDTO";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  loggedUser: UserSignupDTO | null;
}

const defaultUser: UserSignupDTO = {
    id: 0,
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const initialState: userState = {
  loggedUser: defaultUser,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLoggedUser: (state, action: PayloadAction<UserSignupDTO | null>) => {
      state.loggedUser = action.payload;
    },
    logoutUser: (state) => {
      state.loggedUser = defaultUser;
      sessionStorage.clear();
    },
  },
});

export const { setLoggedUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
