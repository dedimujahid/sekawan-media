import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

//  React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

// @mui/icons-material
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [userRole, setUserRole] = useState("guest");
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleUserRoleChange = (event) => {
    setUserRole(event.target.checked ? "admin" : "guest");
  };

  const handleForgotPassword = () => {
    // Add logic to handle the "Forgot Password" functionality
    console.log("Forgot Password clicked");
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [role, setRole] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography
            variant="h4"
            fontWeight="medium"
            color="white"
            component={Link}
            to="/dashboard"
            mt={1}
          >
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>

            <MDBox mb={2}>
              <MDBox mb={1} textAlign="right">
                <MDTypography
                  variant="button"
                  color="info"
                  onClick={handleForgotPassword}
                  sx={{ cursor: "pointer", fontSize: "0.8rem" }}
                >
                  Forgot Password?
                </MDTypography>
              </MDBox>
              <OutlinedInput
                label="Password"
                value={values.password}
                fullWidth
                onChange={handleChange("password")}
                type={values.showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label="toggle password visibility"
                    >
                      {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </MDBox>

            {/* <MDBox mb={1}>
              <MDTypography variant="button" color="text">
                Select role:
              </MDTypography>
              <Switch checked={userRole === "admin"} onChange={handleUserRoleChange} />
              <MDTypography variant="button" fontWeight="regular" color="text" sx={{ ml: 1 }}>
                {userRole === "admin"
                  ? "Admin can access all features."
                  : "Guest can only create ticket."}
              </MDTypography>
            </MDBox> */}

            <MDBox mt={2} mb={1}>
              <MDTypography variant="button" fontWeight="medium" color="text" textGradient>
                Select role:
              </MDTypography>
              <select id="role-select" onChange={handleRoleChange}>
                <option value="admin" color="text">
                  Admin
                </option>
                <option value="guest" fontWeight="medium">
                  Guest{" "}
                </option>
              </select>
              {role === "admin" ? (
                <MDTypography variant="button" fontWeight="medium" color="text" textGradient>
                  Admin can access all features.
                </MDTypography>
              ) : (
                <MDTypography variant="button" color="text" fontWeight="medium" textGradient>
                  Guest can only create ticket.
                </MDTypography>
              )}
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton component={Link} to="/dashboard" variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
