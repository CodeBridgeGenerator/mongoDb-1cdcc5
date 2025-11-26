/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const getSchemaValidationErrorsStrings = (errorObj) => {
  let errMsg = {};
  for (const key in errorObj.errors) {
    if (Object.hasOwnProperty.call(errorObj.errors, key)) {
      const element = errorObj.errors[key];
      if (element?.message) {
        errMsg.push(element.message);
      }
    }
  }
  return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const DatabaseUserEditDialogComponent = (props) => {
  const [_entity, set_entity] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const urlParams = useParams();

  useEffect(() => {
    set_entity(props.entity);
  }, [props.entity, props.show]);

  const onSave = async () => {
    let _data = {
      userId: _entity?.userId,
      projectId: _entity?.projectId,
      mongodbUser: _entity?.mongodbUser,
      mongodbPassword: _entity?.mongodbPassword,
      role: _entity?.role,
    };

    setLoading(true);
    try {
      const result = await client
        .service("databaseUser")
        .patch(_entity._id, _data);
      props.onHide();
      props.alert({
        type: "success",
        title: "Edit info",
        message: "Info databaseUser updated successfully",
      });
      props.onEditResult(result);
    } catch (error) {
      console.debug("error", error);
      setError(
        getSchemaValidationErrorsStrings(error) || "Failed to update info",
      );
      props.alert({
        type: "error",
        title: "Edit info",
        message: "Failed to update info",
      });
    }
    setLoading(false);
  };

  const renderFooter = () => (
    <div className="flex justify-content-end">
      <Button
        label="save"
        className="p-button-text no-focus-effect"
        onClick={onSave}
        loading={loading}
      />
      <Button
        label="close"
        className="p-button-text no-focus-effect p-button-secondary"
        onClick={props.onHide}
      />
    </div>
  );

  const setValByKey = (key, val) => {
    let new_entity = { ..._entity, [key]: val };
    set_entity(new_entity);
    setError({});
  };

  return (
    <Dialog
      header="Edit Database User"
      visible={props.show}
      closable={false}
      onHide={props.onHide}
      modal
      style={{ width: "40vw" }}
      className="min-w-max scalein animation-ease-in-out animation-duration-1000"
      footer={renderFooter()}
      resizable={false}
    >
      <div
        className="grid p-fluid overflow-y-auto"
        style={{ maxWidth: "55vw" }}
        role="databaseUser-edit-dialog-component"
      >
        <div className="col-12 md:col-6 field">
          <span className="align-items-center">
            <label htmlFor="userId">userId:</label>
            <InputText
              id="userId"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.userId}
              onChange={(e) => setValByKey("userId", e.target.value)}
            />
          </span>
          <small className="p-error">
            {!_.isEmpty(error["userId"]) && (
              <p className="m-0" key="error-userId">
                {error["userId"]}
              </p>
            )}
          </small>
        </div>
        <div className="col-12 md:col-6 field">
          <span className="align-items-center">
            <label htmlFor="projectId">project_id:</label>
            <InputText
              id="projectId"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.projectId}
              onChange={(e) => setValByKey("projectId", e.target.value)}
            />
          </span>
          <small className="p-error">
            {!_.isEmpty(error["projectId"]) && (
              <p className="m-0" key="error-projectId">
                {error["projectId"]}
              </p>
            )}
          </small>
        </div>
        <div className="col-12 md:col-6 field">
          <span className="align-items-center">
            <label htmlFor="mongodbUser">mongodb_user:</label>
            <InputText
              id="mongodbUser"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.mongodbUser}
              onChange={(e) => setValByKey("mongodbUser", e.target.value)}
            />
          </span>
          <small className="p-error">
            {!_.isEmpty(error["mongodbUser"]) && (
              <p className="m-0" key="error-mongodbUser">
                {error["mongodbUser"]}
              </p>
            )}
          </small>
        </div>
        <div className="col-12 md:col-6 field">
          <span className="align-items-center">
            <label htmlFor="mongodbPassword">mongodb_password:</label>
            <InputText
              id="mongodbPassword"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.mongodbPassword}
              onChange={(e) => setValByKey("mongodbPassword", e.target.value)}
            />
          </span>
          <small className="p-error">
            {!_.isEmpty(error["mongodbPassword"]) && (
              <p className="m-0" key="error-mongodbPassword">
                {error["mongodbPassword"]}
              </p>
            )}
          </small>
        </div>
        <div className="col-12 md:col-6 field">
          <span className="align-items-center">
            <label htmlFor="role">role:</label>
            <InputText
              id="role"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.role}
              onChange={(e) => setValByKey("role", e.target.value)}
            />
          </span>
          <small className="p-error">
            {!_.isEmpty(error["role"]) && (
              <p className="m-0" key="error-role">
                {error["role"]}
              </p>
            )}
          </small>
        </div>
        <div className="col-12">&nbsp;</div>
        <small className="p-error">
          {Array.isArray(Object.keys(error))
            ? Object.keys(error).map((e, i) => (
                <p className="m-0" key={i}>
                  {e}: {error[e]}
                </p>
              ))
            : error}
        </small>
      </div>
    </Dialog>
  );
};

const mapState = (state) => {
  const { user } = state.auth;
  return { user };
};
const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(DatabaseUserEditDialogComponent);
