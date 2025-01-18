import { Button as ButtonBase } from "./Button";
import { withLoading } from "../../hoc/withLoading";

export const Button = ButtonBase;

export const ButtonWithLoading = withLoading(ButtonBase);
