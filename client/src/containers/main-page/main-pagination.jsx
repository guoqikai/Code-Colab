import { connect } from "react-redux";
import { mainPageSelectors } from "../../redux/selectors";
import { mainPageActions } from "../../redux/actions";
import Pagination from "../../components/pagination";

const mapStateToProps = (state) => ({
  page: mainPageSelectors.selectPage(state),
  maxPage: mainPageSelectors.selectMaxPage(state),
});

const mapDispatchToProps = {
  onClick: mainPageActions.updatePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
