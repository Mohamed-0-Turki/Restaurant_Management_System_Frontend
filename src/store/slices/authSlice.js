import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService } from "../../services/auth.services";
import { showToast } from "../../utils/index.utils";

export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await loginService(email, password);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    token: null,  // Store token if needed
    role: null,  // Store user role
    userId: null,  // Store user ID
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;

        // Get token from the response
        const token = action.payload.data.token;
        state.token = token;

        // Decode the token to extract user information
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        state.userId = decodedToken.id;  // Extracting the user ID
        state.role = decodedToken.role.toLowerCase();;  // Extracting the user role

        state.user = decodedToken; // Optionally store the entire decoded token
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
        showToast("error", "Login failed, please try again.");
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
