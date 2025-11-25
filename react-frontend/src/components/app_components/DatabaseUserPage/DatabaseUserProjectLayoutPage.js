import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import { connect } from "react-redux";
import DatabaseUserPage from "./DatabaseUserPage";

const DatabaseUserProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <DatabaseUserPage />
    </ProjectLayout>
  );
};

const mapState = (state) => {
  const { user, isLoggedIn } = state.auth;
  return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(DatabaseUserProjectLayoutPage);