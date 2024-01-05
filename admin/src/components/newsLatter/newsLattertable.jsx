import { useTranslation } from "react-i18next";
import { Avatar, TableBody, TableCell, TableRow } from "@windmill/react-ui";

//internal import
import useUtilsFunction from "@/hooks/useUtilsFunction";

const NewsLatterTbale = ({ dataTable }) => {
  const { t } = useTranslation();
  return (
    <>
      <TableBody>
        {dataTable?.map((itme) => (
          <TableRow>
            <TableCell>
              <span className="font-semibold  text-xs">
                {itme?._id?.substring(20, 24)}
              </span>
            </TableCell>
            <TableCell>
              <span className="font-semibold  text-xs">
                {itme?.email}
              </span>
            </TableCell>
            <TableCell>
              <span className="font-semibold  text-xs">
                {itme?.product?.title?.en}
              </span>
            </TableCell>

            <TableCell>
              <span className="font-semibold  text-xs">
                {itme?.attribute}
              </span>
            </TableCell>

            {/* <TableCell>
              <EditDeleteButtonTwo
                attribute
                variant={variant}
                setTapValue={setTapValue}
                deleteModalShow={deleteModalShow}
                handleEditVariant={handleEditVariant}
                handleRemoveVariant={handleRemoveVariant}
              />
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default NewsLatterTbale;
