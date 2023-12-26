import Multiselect from "multiselect-react-dropdown";
import Tree from "rc-tree";

//internal import
import useAsync from "@/hooks/useAsync";
import useUtilsFunction from "@/hooks/useUtilsFunction";
import ThemeServices from "@/services/themeServices";

const SelectTheme = ({ setSelectTheme, selectTheme }) => {
  // console.log(selectTheme);
  const { data, loading, error } = useAsync(ThemeServices?.getAllThemes);
  const { showingTranslateValue } = useUtilsFunction();

  const STYLE = `
  .rc-tree-child-tree {
    display: block;
  }
  .node-motion {
    transition: all .3s;
    overflow-y: hidden;
  }
`;

  const motion = {
    motionName: "node-motion",
    motionAppear: false,
    onAppearStart: (node) => {
      return { height: 0 };
    },
    onAppearActive: (node) => ({ height: node.scrollHeight }),
    onLeaveStart: (node) => ({ height: node.offsetHeight }),
    onLeaveActive: () => ({ height: 0 }),
  };

  const renderThemeData = (ThemeData) => {
    let myThemeData = [];
    for (let theme of ThemeData) {
      myThemeData.push({
        title: theme.theme.theme_unique_name,
        key: theme._id,
      });
    }
    return myThemeData;
  };

  // const findObject = (obj, target) => {
  //   return obj._id === target
  //     ? obj
  //     : obj?.children?.reduce(
  //         (acc, obj) => acc ?? findObject(obj, target),
  //         undefined
  //       );
  // if (obj._id === target) return obj;

  // for (let c of obj.children) {
  //   let x = findObject(target, c);
  //   console.log('c', c);
  //   if (x) return x;
  // }
  // };

  const handleSelect = (key) => {
    if (Array.isArray(data) && data.length >= 0) {
      const getTheme = data.filter((value) => value._id === key.toString());
      getTheme?.map((item) => {
        setSelectTheme([
          // ...item,
          {
            name: item?.theme?.theme_unique_name,
            _id: item?._id,
          },
        ]);
      });
    }
  };

  const handleRemove = (v) => {
    setSelectTheme(v);
  };

  return (
    <>
      <div className="mb-2">
        <Multiselect
          displayValue="name"
          groupBy="name"
          isObject={true}
          hidePlaceholder={true}
          onKeyPressFn={function noRefCheck() {}}
          onRemove={(v) => handleRemove(v)}
          onSearch={function noRefCheck() {}}
          onSelect={(v) => handleSelect(v)}
          // options={selectTheme}
          selectedValues={Array.isArray(selectTheme) ? selectTheme : ["home"]}
          placeholder={"Select Theme"}
          options={Array.isArray(selectTheme) ? selectTheme : ["home"]}
        ></Multiselect>
      </div>

      {!loading && data !== undefined && (
        <div className="draggable-demo capitalize">
          <style dangerouslySetInnerHTML={{ __html: STYLE }} />
          <Tree
            expandAction="click"
            treeData={renderThemeData(data)}
            // defaultCheckedKeys={id}
            onSelect={(v) => handleSelect(v)}
            motion={motion}
            animation="slide-up"
          />
        </div>
      )}
    </>
  );
};

export default SelectTheme;
