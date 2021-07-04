import { useSelector } from "react-redux";
import { mainPageSelectors } from "../../redux/selectors";

const MainQuestionGroupHeader = () => {
  const searchString = useSelector(mainPageSelectors.selectSearchString);
  const isLoading = useSelector(mainPageSelectors.selectLoading);

  return (
    <h4>
      {searchString
        ? isLoading
          ? `Searching "${searchString}"`
          : `Search Results for "${searchString}"`
        : "All Questions"}
    </h4>
  );
};

export default MainQuestionGroupHeader;
