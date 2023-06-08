import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./scenes/dashboard";

import Users from "./scenes/user/users";
import UserCreateForm from "./scenes/user/userCreateForm";
import UserUpdateForm from "./scenes/user/userUpdateForm";

import Orders from "./scenes/items/orders";
import Items from "./scenes/items/items";
import CreateItem from "./scenes/items/createItem";

import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/charts/bar";
import Pie from "./scenes/charts/pie";
import Line from "./scenes/charts/line";
import Geography from "./scenes/charts/geography";
import UpdateItem from "./scenes/items/updateItem";
import ViewOrder from "./scenes/items/viewOrder";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/" element={<Team />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/users" element={<Users />} />
              <Route path="/users/create" element={<UserCreateForm />} />
			        <Route path="/users/update" element={<UserUpdateForm />} />
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/view" element={<ViewOrder />} />
              <Route path="/listings" element={<Items />} />
              <Route path="/listings/create" element={<CreateItem />} />
              <Route path="/listings/update" element={<UpdateItem />} />
              
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
