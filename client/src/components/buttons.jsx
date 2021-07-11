import { Button as BootstrapButton } from "react-bootstrap";
import classNames from "classnames";

export const Button = (props) => (
  <BootstrapButton
    {...props}
    variant="success"
    className={classNames("colab-bg-green", props.className)}
  />
);

export const SecondaryButton = (props) => (
  <BootstrapButton
    {...props}
    variant="outline-light"
    className={classNames("text-dark focus-light", props.className)}
  />
);

export const SwitchButton = ({ isSelected, ...props }) => (
  <BootstrapButton
    {...props}
    variant="outline-light"
    className={classNames(
      "border focus-light",
      {
        "bg-secondary font-weight-bold text-white":
          isSelected,
        "text-muted": !isSelected,
      },
      props.className
    )}
  />
);

export const MinimalButton = (props) => (
  <BootstrapButton
    {...props}
    variant="link"
    className={classNames(
      "p-0 focus-min bg-transparent border-0 text-muted",
      props.className
    )}
  />
);

export const MinimalSwitchButton = ({ isSelected, ...props }) => (
  <BootstrapButton
    {...props}
    variant="link"
    className={classNames(
      "p-0 focus-min",
      {
        "text-dark font-weight-bold underline": isSelected,
        "text-muted": !isSelected,
      },
      props.className
    )}
  />
);
