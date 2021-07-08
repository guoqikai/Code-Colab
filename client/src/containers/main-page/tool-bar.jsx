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
import { SecondaryButton, SwitchButton } from "../../components/buttons";

const ToolBar = () => {
  const [searchString, setSearchString] = useState("");
  const sortby = useSelector(mainPageSelectors.selectSortBy);
  const dispatch = useDispatch();
  return (
    <ButtonToolbar className="justify-content-between">
      <ButtonGroup>
        <SwitchButton
          isSelected={sortby === "hot"}
          onClick={() => dispatch(mainPageActions.updateSortBy("hot"))}
        >
          Hot
        </SwitchButton>
        <SwitchButton
          isSelected={sortby === "newest"}
          onClick={() => dispatch(mainPageActions.updateSortBy("newest"))}
        >
          Newest
        </SwitchButton>
        <SwitchButton
          isSelected={sortby === "Top"}
          onClick={() => dispatch(mainPageActions.updateSortBy("Top"))}
        >
          Top
        </SwitchButton>
      </ButtonGroup>

      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search"
          className="border border-right-0 focus-light"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(mainPageActions.updateSearchString(searchString));
            }
          }}
        />
        <InputGroup.Append>
          <SecondaryButton
            className="border border-left-0"
            onClick={() =>
              dispatch(mainPageActions.updateSearchString(searchString))
            }
          >
            <i className="bi bi-search" />
          </SecondaryButton>
        </InputGroup.Append>
      </InputGroup>
    </ButtonToolbar>
  );
};

export default ToolBar;
