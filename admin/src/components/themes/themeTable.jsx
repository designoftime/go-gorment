import {
  Avatar,
  Badge,
  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

//internal import
import useUtilsFunction from "@/hooks/useUtilsFunction";
import CheckBox from "@/components/form/others/CheckBox";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import DeleteModal from "@/components/modal/DeleteModal";
import MainDrawer from "@/components/drawer/MainDrawer";
import ShowHideButton from "@/components/table/ShowHideButton";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import ThemeDrawer from "../drawer/themeDrawer";

const ThemeTable = ({ isCheck, themes, setIsCheck }) => {
  const [updatedthemes, setUpdatedthemes] = useState([]);

  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  const { currency, globalSetting, showingTranslateValue } =
    useUtilsFunction();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    const result = themes?.map((el) => {
      const newDate = new Date(el?.updatedAt).toLocaleString("en-US", {
        timeZone: globalSetting?.default_time_zone,
      });
      const newObj = {
        ...el,
        updatedDate: newDate,
      };
      return newObj;
    });
    setUpdatedthemes(result);
  }, [themes, globalSetting?.default_time_zone]);
  return (
    <>
      {isCheck.length < 1 && <DeleteModal id={serviceId} title={title} />}

      {isCheck.length < 2 && (
        <MainDrawer>
          <ThemeDrawer id={serviceId} />
        </MainDrawer>
      )}

      <TableBody>
        {updatedthemes?.map((data, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name={data?.theme?.section_one.first_title}
                id={data._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(data._id)}
              />
            </TableCell>

            <TableCell>
              <div className="flex items-center">
                {data?.theme ? (
                  <Avatar
                    className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                    src={data?.theme?.section_one.first_img}
                    alt="product"
                  />
                ) : (
                  <Avatar
                    src={`https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png`}
                    alt="product"
                  />
                )}
                <div>
                  <span className="text-sm">
                   {data?.theme?.theme_unique_name}
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <ShowHideButton id={data?._id} status={data?.theme?.section_one.section_status} />
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={data?._id}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={data?.theme?.theme_unique_name}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default ThemeTable;
