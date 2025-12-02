import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import SingleTiersPage from "../components/app_components/TiersPage/SingleTiersPage";
import TierProjectLayoutPage from "../components/app_components/TiersPage/TierProjectLayoutPage";
import SingleProjectEnvPage from "../components/app_components/ProjectEnvPage/SingleProjectEnvPage";
import ProjectEnvProjectLayoutPage from "../components/app_components/ProjectEnvPage/ProjectEnvProjectLayoutPage";
import SingleProjectClustersPage from "../components/app_components/ProjectClustersPage/SingleProjectClustersPage";
import ProjectClusterProjectLayoutPage from "../components/app_components/ProjectClustersPage/ProjectClusterProjectLayoutPage";
import SingleIpAddressPage from "../components/app_components/IpAddressPage/SingleIpAddressPage";
import IpAddressProjectLayoutPage from "../components/app_components/IpAddressPage/IpAddressProjectLayoutPage";
import SingleBillingPage from "../components/app_components/BillingPage/SingleBillingPage";
import BillingProjectLayoutPage from "../components/app_components/BillingPage/BillingProjectLayoutPage";
import SingleDatabaseUserPage from "../components/app_components/DatabaseUserPage/SingleDatabaseUserPage";
import DatabaseUserProjectLayoutPage from "../components/app_components/DatabaseUserPage/DatabaseUserProjectLayoutPage";
import SingleProjectsPage from "../components/app_components/ProjectsPage/SingleProjectsPage";
import ProjectProjectLayoutPage from "../components/app_components/ProjectsPage/ProjectProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
    return (
        <Routes>
            {/* ~cb-add-unprotected-route~ */}
            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
<Route path="/tiers/:singleTiersId" exact element={<SingleTiersPage />} />
<Route path="/tiers" exact element={<TierProjectLayoutPage />} />
<Route path="/projectEnv/:singleProjectEnvId" exact element={<SingleProjectEnvPage />} />
<Route path="/projectEnv" exact element={<ProjectEnvProjectLayoutPage />} />
<Route path="/projectClusters/:singleProjectClustersId" exact element={<SingleProjectClustersPage />} />
<Route path="/projectClusters" exact element={<ProjectClusterProjectLayoutPage />} />
<Route path="/ipAddress/:singleIpAddressId" exact element={<SingleIpAddressPage />} />
<Route path="/ipAddress" exact element={<IpAddressProjectLayoutPage />} />
<Route path="/billing/:singleBillingId" exact element={<SingleBillingPage />} />
<Route path="/billing" exact element={<BillingProjectLayoutPage />} />
<Route path="/databaseUser/:singleDatabaseUserId" exact element={<SingleDatabaseUserPage />} />
<Route path="/databaseUser" exact element={<DatabaseUserProjectLayoutPage />} />
<Route path="/projects/:singleProjectsId" exact element={<SingleProjectsPage />} />
<Route path="/projects" exact element={<ProjectProjectLayoutPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
        </Routes>
    );
}

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(AppRouter);
