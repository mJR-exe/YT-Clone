import React from "react";
import { AppBar, Box, Button, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Toolbar, Typography, Hidden } from "@material-ui/core";
import { AccountCircle, VideoCall, MoreVert, Apps, Home as HomeIcon, Subscriptions, Whatshot, VideoLibrary, History, AddCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer = 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  grow: {
    flexGrow: 1
  },
  icons: {
    paddingRight: theme.spacing(2)
  },
  menuIcon: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(6),
  },
  logo: {
    height: 30
  },
  lisItemText: {
    fontSize: 14
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase'
  }
}));

const videos = [
  {
    id: 1,
    title: "Vídeo de Exemplo #1",
    channel: "Jr.",
    view: "11mi de visualizações",
    data: "há 1 semana",
    avatar: "/images/logo.png",
    thumb: "/images/video.jpg",
  },
  {
    id: 2,
    title: "Vídeo de Exemplo #1",
    channel: "Jr.",
    view: "11mi de visualizações",
    data: "há 1 semana",
    avatar: "/images/logo.png",
    thumb: "/images/video.jpg",
  },
  {
    id: 3,
    title: "Vídeo de Exemplo #1",
    channel: "Jr.",
    view: "11mi de visualizações",
    data: "há 1 semana",
    avatar: "/images/logo.png",
    thumb: "/images/video.jpg",
  },
  {
    id: 4,
    title: "Vídeo de Exemplo #1",
    channel: "Jr.",
    view: "11mi de visualizações",
    data: "há 1 semana",
    avatar: "/images/logo.png",
    thumb: "/images/video.jpg",
  },
  {
    id: 5,
    title: "Vídeo de Exemplo #1",
    channel: "Jr.",
    view: "11mi de visualizações",
    data: "há 1 semana",
    avatar: "/images/logo.png",
    thumb: "/images/video.jpg",
  },
  {
    id: 6,
    title: "Vídeo de Exemplo #1",
    channel: "Jr.",
    view: "11mi de visualizações",
    data: "há 1 semana",
    avatar: "/images/logo.png",
    thumb: "/images/video.jpg",
  },
]

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={classes.menuIcon}
          >
            <MenuIcon />
          </IconButton>
          <img src="/images/logo.png" alt="Logo." className={classes.logo} />
          <div className={classes.grow} />
          <IconButton
            size="large"
            sx={{ mr: 2 }}
            className={classes.icons}
          >
            <VideoCall />
          </IconButton>
          <IconButton
            size="large"
            sx={{ mr: 2 }}
            className={classes.icons}
          >
            <Apps />
          </IconButton>
          <IconButton
            size="large"
            sx={{ mr: 2 }}
            className={classes.icons}
          >
            <MoreVert />
          </IconButton>
          <Button startIcon={<AccountCircle />} variant="outlined" color="primary">Fazer Login</Button>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button key={'Início'} classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.lisItemText }} primary={'Início'} />
                </ListItem>
                <ListItem button key={'Em Alta'} classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.lisItemText }} primary={'Em Alta'} />
                </ListItem>
                <ListItem button key={'Inscrições'} classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<Whatshot />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.lisItemText }} primary={'Inscrições'} />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button key={'Biblioteca'} classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.lisItemText }} primary={'Biblioteca'} />
                </ListItem>
                <ListItem button key={'Histórico'} classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<History />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.lisItemText }} primary={'Histórico'} />
                </ListItem>
              </List>
              <Divider />
              <Box p={2}>
                <Typography variant="body2">
                  Faça login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button variant="outlined" color="secondary" startIcon={<AccountCircle />}>
                    Fazer login
                  </Button>
                </Box>
              </Box>
              <Divider />
              <List component="nav" aria-labelledby="nested-list-subheader" subheader={
                <ListSubheader component="div" id="nested-list-subheader" className={classes.subheader}>
                  O melhor do Youtube
                </ListSubheader>
              }
              >
                <ListItem button key={'Início'} classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.lisItemText }} primary={'Início'} />
                </ListItem>
                <ListItem button key={'Em Alta'} classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.lisItemText }} primary={'Em Alta'} />
                </ListItem>
                <ListItem button key={'Inscrições'} classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.lisItemText }} primary={'Inscrições'} />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Box p={2}>
          <Toolbar />
          <Typography variant="h5" color="textPrimary" style={{ fontWeight: 600 }}>
            Recomendados
          </Typography>
          <Grid container spacing={4}>
            {
              videos.map((item, index) => (
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <Box>
                    <img style={{ width: "100%" }} alt={item.title} src={item.thumb} />
                    <Box>
                      <Typography style={{ fontWeight: 600 }} gutterBottom variant="body1" color="textPrimary">
                        {item.title}
                      </Typography>
                      <Typography display="block" variant="body2" color="textSecondary">
                        {item.channel}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {`${item.view} = ${item.data}`}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;