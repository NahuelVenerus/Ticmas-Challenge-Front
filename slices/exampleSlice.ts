import { createSlice } from "@reduxjs/toolkit";

// Estado inicial vacío
interface ExampleState {
  // Define las propiedades del estado
}

const initialState: ExampleState = {
  // Inicializa el estado
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    // Define tus acciones aquí
  },
});

export const { } = exampleSlice.actions; // Exportar las acciones
export default exampleSlice.reducer;
