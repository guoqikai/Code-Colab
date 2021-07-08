import { useSelector, useDispatch } from "react-redux";
import { mainPageActions } from "../../redux/actions";
import { mainPageSelectors } from "../../redux/selectors";
import { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import QuestionCard from "../../components/question-card";
import "./main-question-group.css";

const MainQuestionGroup = () => {
  const quetsions = useSelector(mainPageSelectors.selectQuestions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mainPageActions.search());
  }, [dispatch]);

  return quetsions.length === 0 ? (
    <h3 className="m-5 p-5 text-muted">No Result Found</h3>
  ) : (
    <TransitionGroup>
      {quetsions.map((q, ind) => (
        <CSSTransition
          key={q._id}
          timeout={200}
          classNames="main-question-group"
        >
          <>
            <QuestionCard {...q} />
            {ind !== quetsions.length - 1 && <hr className="m-0"/>}
          </>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default MainQuestionGroup;
