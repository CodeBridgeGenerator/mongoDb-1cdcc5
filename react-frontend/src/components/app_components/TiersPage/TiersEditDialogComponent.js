/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';


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

const TiersEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            tierName: _entity?.tierName,
storage: _entity?.storage,
ram: _entity?.ram,
vCpu: _entity?.vCpu,
basePrice: _entity?.basePrice,
markedUpPrice: _entity?.markedUpPrice,
finalPrice: _entity?.finalPrice,
        };

        setLoading(true);
        try {
            
        const result = await client.service("tiers").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info tiers updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Edit Tiers" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="tiers-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="tierName">Tier Name:</label>
                <InputText id="tierName" className="w-full mb-3 p-inputtext-sm" value={_entity?.tierName} onChange={(e) => setValByKey("tierName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["tierName"]) && (
              <p className="m-0" key="error-tierName">
                {error["tierName"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="storage">Storage:</label>
                <InputText id="storage" className="w-full mb-3 p-inputtext-sm" value={_entity?.storage} onChange={(e) => setValByKey("storage", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["storage"]) && (
              <p className="m-0" key="error-storage">
                {error["storage"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="ram">RAM:</label>
                <InputText id="ram" className="w-full mb-3 p-inputtext-sm" value={_entity?.ram} onChange={(e) => setValByKey("ram", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["ram"]) && (
              <p className="m-0" key="error-ram">
                {error["ram"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="vCpu">vCPU:</label>
                <InputText id="vCpu" className="w-full mb-3 p-inputtext-sm" value={_entity?.vCpu} onChange={(e) => setValByKey("vCpu", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["vCpu"]) && (
              <p className="m-0" key="error-vCpu">
                {error["vCpu"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="basePrice">Base Price:</label>
                <InputText id="basePrice" className="w-full mb-3 p-inputtext-sm" value={_entity?.basePrice} onChange={(e) => setValByKey("basePrice", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["basePrice"]) && (
              <p className="m-0" key="error-basePrice">
                {error["basePrice"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="markedUpPrice">Marked Up Price:</label>
                <InputText id="markedUpPrice" className="w-full mb-3 p-inputtext-sm" value={_entity?.markedUpPrice} onChange={(e) => setValByKey("markedUpPrice", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["markedUpPrice"]) && (
              <p className="m-0" key="error-markedUpPrice">
                {error["markedUpPrice"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="finalPrice">Final Price:</label>
                <InputText id="finalPrice" className="w-full mb-3 p-inputtext-sm" value={_entity?.finalPrice} onChange={(e) => setValByKey("finalPrice", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["finalPrice"]) && (
              <p className="m-0" key="error-finalPrice">
                {error["finalPrice"]}
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

export default connect(mapState, mapDispatch)(TiersEditDialogComponent);
