import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Link,
  makeStyles,
  Toolbar,
  List,
  Divider,
  Box,
  Typography,
  ListSubheader,
  Grid,
  Hidden,
  useTheme,
  Menu,
  MenuItem,
  Switch,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  MoreVert as MoreVertIcon,
  Apps as AppsIcon,
  VideoCall as VideoCallIcon,
  Home as HomeIcon,
  Explore as ExploreIcon,
  Subscriptions as SubscriptionsIcon,
  VideoLibrary as VideoLibraryIcon,
  History as HistoryIcon,
  Album as AlbumIcon,
  SportsBasketball as SportsBasketballIcon,
  SportsEsports as SportsEsportsIcon,
  Theaters as TheatersIcon,
  Receipt as ReceiptIcon,
  LiveTv as LiveTvIcon,
  EmojiObjects as EmojiObjectsIcon,
  YouTube as YouTubeIcon,
  SettingsInputSvideo as SettingsInputSvideoIcon,
  AddCircle as AddCircleIcon,
  NightsStay as NightsStayIcon,
  Close as CloseIcon,
} from "@material-ui/icons";
import React, { useState } from "react";
import DrawerItem from "./components/DrawerItem";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  icons: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: 24,
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: "none",
  },
  listItemText: {
    fontSize: 14,
  },
  divider: {
    marginTop: 12,
    marginBottom: 12,
  },
  drawerSignInButton: {
    marginTop: 15,
  },
  subheader: {
    textTransform: "uppercase",
  },
}));

const videos = [
  // {
  //   id: 1,
  //   title: "FAMOSOS TENDO UM DIA PIOR Q O SEU",
  //   channel: "Maicon Küster",
  //   views: "1.5M views",
  //   date: "2 weeks ago",
  //   avatar:
  //     "https://yt3.ggpht.com/ytc/AAUvwngvQCeGwtWKoJrdCOQso5joUVVfnJKpa_3cGDwIuw=s68-c-k-c0x00ffffff-no-rj",
  //   thumb:
  //     "https://i.ytimg.com/vi/NgDX7pA0ZLQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcPErOhekyoMpo1q1ONREuN4PloA",
  // },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
  {
    id: 1,
    title: "THIAGO VENTURA - GATILHO Ep 05 | Temp 02",
    channel: "Thiago Ventura",
    views: "1.5M views",
    date: "7 months ago",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhOSe-nZ3d7QbCDtS2eATheKH7ZFvJ-mmvIYKZoNw=s68-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/hFiFchGanwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPEPMQCPifamoOWcZiUTP8zf3kAg",
  },
];

const Home: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const drawerGroupsBeforeLogin = [
    [
      { text: "Home", icon: <HomeIcon /> },
      { text: "Explore", icon: <ExploreIcon /> },
      { text: "Subscriptions", icon: <SubscriptionsIcon /> },
    ],
    [
      { text: "Library", icon: <VideoLibraryIcon /> },
      { text: "History", icon: <HistoryIcon /> },
    ],
  ];

  const drawerGroupsAfterLogin = [
    [
      { text: "Music", icon: <AlbumIcon /> },
      { text: "Sports", icon: <SportsBasketballIcon /> },
      { text: "Gaming", icon: <SportsEsportsIcon /> },
      { text: "Movies", icon: <TheatersIcon /> },
      { text: "News", icon: <ReceiptIcon /> },
      { text: "Live", icon: <LiveTvIcon /> },
      { text: "Learning", icon: <EmojiObjectsIcon /> },
      { text: "Spotlight", icon: <YouTubeIcon /> },
      { text: "360º Video", icon: <SettingsInputSvideoIcon /> },
    ],
  ];

  const [
    settingsIconElement,
    setSettingsIconElement,
  ] = useState<null | HTMLElement>();

  // Context API
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const handleSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSettingsIconElement(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.icons} edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Link href="/" title="Youtube home page">
            <img
              src={`/images/logo/${
                theme.palette.type === "light" ? "preto.png" : "branco.png"
              }`}
              alt="Youtube"
              className={classes.logo}
            />
          </Link>

          <div className={classes.grow} />

          <Switch
            className={classes.icons}
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          ></Switch>

          <IconButton
            className={classes.icons}
            aria-label="create"
            title="Create"
          >
            <VideoCallIcon />
          </IconButton>

          <IconButton
            className={classes.icons}
            aria-label="Youtube Apps"
            title="Youtube apps"
          >
            <AppsIcon />
          </IconButton>

          <IconButton
            className={classes.icons}
            aria-label="settings"
            title="Settings"
            onClick={handleSettings}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            open={Boolean(settingsIconElement)}
            anchorEl={settingsIconElement}
            keepMounted
            onClose={() => setSettingsIconElement(null)}
          >
            <MenuItem>Dark Mode</MenuItem>
            <MenuItem>Light Mode</MenuItem>
          </Menu>

          <Button
            color="secondary"
            variant="outlined"
            startIcon={<AccountCircleIcon color="inherit" />}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Hidden smDown>
          <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
          >
            <Toolbar />
            <div>
              <List>
                {drawerGroupsBeforeLogin.map((drawerOptions, key) => (
                  <React.Fragment key={key}>
                    {drawerOptions.map((drawerOption, key) => (
                      <DrawerItem
                        key={key}
                        icon={drawerOption.icon}
                        text={drawerOption.text}
                      />
                    ))}

                    <Divider classes={{ root: classes.divider }} />
                  </React.Fragment>
                ))}

                <Box paddingX={4} paddingY={1}>
                  <Typography variant="body2">
                    Sign in to like videos, comment, and subscribe.
                  </Typography>

                  <Button
                    className={classes.drawerSignInButton}
                    variant="outlined"
                    startIcon={<AccountCircleIcon />}
                    color="secondary"
                  >
                    Sign In
                  </Button>
                </Box>

                <Divider classes={{ root: classes.divider }} />

                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                      component="div"
                      id="nested-list-subheader"
                      className={classes.subheader}
                    >
                      Best of Youtube
                    </ListSubheader>
                  }
                  disablePadding
                >
                  {drawerGroupsAfterLogin.map((drawerOptions, key) => (
                    <React.Fragment key={key}>
                      {drawerOptions.map((drawerOption, key) => (
                        <DrawerItem
                          icon={drawerOption.icon}
                          text={drawerOption.text}
                        />
                      ))}

                      <Divider classes={{ root: classes.divider }} />
                    </React.Fragment>
                  ))}
                </List>

                <Box>
                  <DrawerItem text="Browse Channels" icon={<AddCircleIcon />} />
                </Box>
              </List>
            </div>
          </Drawer>
        </Hidden>

        <Box padding={2}>
          <Toolbar />
          <Typography
            variant="h5"
            style={{ fontWeight: 600 }}
            color="textPrimary"
          >
            Recommended
          </Typography>

          <Grid container spacing={2}>
            {videos.map((video, key) => (
              <Grid key={key} item xl={2} lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    src={video.thumb}
                    alt={video.title}
                    style={{ width: "100%" }}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ fontWeight: 600 }}
                    gutterBottom
                  >
                    {video.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    display="block"
                  >
                    {video.channel}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                  >{`${video.views} • ${video.date}`}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
