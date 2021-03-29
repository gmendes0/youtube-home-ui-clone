import {
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from "@material-ui/core";

interface IDrawerItemProps {
  text: string;
  icon: JSX.Element;
}

const useStyles = makeStyles(theme => ({
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
  },
}));

const DrawerItem: React.FC<IDrawerItemProps> = ({ text, icon }) => {
  const classes = useStyles();

  return (
    <ListItem button classes={{ root: classes.listItem }}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText classes={{ primary: classes.listItemText }}>
        {text}
      </ListItemText>
    </ListItem>
  );
};

export default DrawerItem;
