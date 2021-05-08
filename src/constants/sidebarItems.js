import * as ROUTES from "./routes";
import bookIcon from "@iconify-icons/akar-icons/book";
import fileIcon from "@iconify-icons/akar-icons/file";
import houseLine from "@iconify-icons/ph/house-line";
import noodleBowl from "@iconify-icons/carbon/noodle-bowl";
import personIcon from "@iconify-icons/bi/person";

export const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: houseLine,
    route: ROUTES.OVERVIEW,
  },
  {
    name: "Meal Plan Editor",
    icon: fileIcon,
    route: ROUTES.EDITOR,
  },
  {
    name: "Profile",
    icon: personIcon,
    route: ROUTES.PROFILE,
  },
  {
    name: "Meals",
    icon: noodleBowl,
    route: ROUTES.MEALS,
  },
  {
    name: "Recipes",
    icon: bookIcon,
    route: ROUTES.RECIPES,
  },
];
