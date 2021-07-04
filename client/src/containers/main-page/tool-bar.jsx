import { useState } from "react";
import {
  ButtonGroup,
  ButtonToolbar,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { mainPageActions } from "../../redux/actions";
import { mainPageSelectors } from "../../redux/selectors";

const ToolBar = () => {
  const [searchString, setSearchString] = useState("");
  const sortby = useSelector(mainPageSelectors.selectSortBy);
  const dispatch = useDispatch();
  return (
    <ButtonToolbar className="justify-content-between">
      <ButtonGroup>
        <Button
          variant="outline-dark"
          className={sortby === "hot" ? "colab-bg-green text-dark" : ""}
          onClick={() => dispatch(mainPageActions.updateSortBy("hot"))}
        >
          Hot
        </Button>
        <Button
          variant="outline-dark"
          className={sortby === "newest" ? "colab-bg-green text-dark" : ""}
          onClick={() => dispatch(mainPageActions.updateSortBy("newest"))}
        >
          Newest
        </Button>
        <Button
          variant="outline-dark"
          className={sortby === "Top" ? "colab-bg-green text-dark" : ""}
          onClick={() => dispatch(mainPageActions.updateSortBy("Top"))}
        >
          Top
        </Button>
      </ButtonGroup>

      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search"
          className="border-dark"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(mainPageActions.updateSearchString(searchString));
            }
          }}
        />
        <InputGroup.Append>
          <Button
            variant="outline-dark"
            onClick={() =>
              dispatch(mainPageActions.updateSearchString(searchString))
            }
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </ButtonToolbar>
  );
};

export default ToolBar;
