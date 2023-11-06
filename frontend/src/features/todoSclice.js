import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Get all user Data
export const getAllUser = createAsyncThunk(
    "getUsers",
    async (args, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/getTodo`
            );
            const result = await response.json();
            console.log(response);
            return result;
        } catch (err) {
            return rejectWithValue("Opps found an error", err.response.data);
        }
    }
);

// Get user by id 
export const getSingleUser = createAsyncThunk(
    "getSingleUser",
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/getTodo/${id}`
            )

            const result = await response.json();
            return result;
        }
        catch (err) {
            return rejectWithValue("Opps found an error", err.response.data);
        }
    }
)

//create user
export const createUser = createAsyncThunk(
    "createUser",
    async (data, { rejectWithValue }) => {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/createTodo`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }
);

// delete user
export const deleteUser = createAsyncThunk(
    "deleteUser",
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/deleteTodo/${id}`,
                {
                    method: "DELETE",
                }
            );
            const result = await response.json();
            return result;
        } catch (err) {
            console.log(err);
            return rejectWithValue(err.response.data);
        }
    }
);

//update user
export const updateUser = createAsyncThunk(
    "updateUser",
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/updateTodo/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            const result = await response.json();
            return result;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);


// create sclice 
export const todoUser = createSlice({
    name: "todoUser",
    initialState: {
        users: [],
        loading: false,
        error: null,
        singleUser:[],
    },
    reducers: {
    },
    extraReducers: {
        [getAllUser.pending]: (state) => {
            state.loading = true;
        },
        [getAllUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getAllUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = (action.payload);
        },
        [deleteUser.pending]: (state) => {
            state.loading = true;
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
              // Use the filter function to remove the deleted user by ID
              state.users = state.users.filter((user) => user.id !== id);
            }
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getSingleUser.pending]: (state) => {
            state.loading = true;
        },
        [getSingleUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.singleUser = [action.payload];
        },
        [getSingleUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            console.log("updated user fulfilled", action.payload);
            const updatedUser = action.payload;
            // Update the state.users array with the updated user
            state.users = state.users.data.map((user) =>
              user.id === updatedUser.id ? updatedUser : user);
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export const { searchUser } = todoUser.actions;
export default todoUser.reducer;