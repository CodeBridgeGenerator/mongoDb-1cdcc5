import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import { connect } from "react-redux";
import ProjectClustersPage from "./ProjectClustersPage";

const ProjectClusterProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <ProjectClustersPage />
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

export default connect(mapState, mapDispatch)(ProjectClusterProjectLayoutPage);