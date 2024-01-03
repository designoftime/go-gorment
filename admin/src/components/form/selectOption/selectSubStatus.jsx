import React, { useContext } from "react";
import { Select } from "@windmill/react-ui";

//internal import
import { notifySuccess, notifyError } from "@/utils/toast";
import { SidebarContext } from "@/context/SidebarContext";
import CustomerServices from "@/services/CustomerServices";

const SelectSubStatus = ({ subscriptionId, order }) => {
  const { setIsUpdate } = useContext(SidebarContext);
  const handleChangeStatus = (e) => {
    CustomerServices.updateCustomerSub({ subscriptionId: e.target.value })
      .then((res) => {
        notifySuccess(res.message);
        setIsUpdate(true);
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
      <Select onChange={(e) => handleChangeStatus(e)} className="h-8">
        <option value="status" defaultValue hidden>
          {order?.status}
        </option>
        <option
          defaultValue={order?.status === "Inactive"}
          value={subscriptionId}
        >
          Inactive
        </option>
      </Select>
    </>
  );
};

export default SelectSubStatus;
