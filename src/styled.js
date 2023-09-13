import { Grid, Typography, styled } from "@mui/material";

export const MainWrapp = styled(Grid)(() => ({
  height: '100vh',
  width: '100vw',
}));

export const LogoText = styled(Typography)(() => ({
  color: '#eaf6f6',
}));

export const Item = styled('div')(() => ({
  padding: 0,
  textAlign: 'center',
  overflow: 'auto',
  height: '100%',
}));

export const HeaderGrid = styled(Grid)(() => ({
  backgroundColor: '#66bfbf',
  height: '15%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const SideBarGrid = styled(Grid)(() => ({
  backgroundColor: '#eaf6f6',
  height: '70%',
}));

export const MainGrid = styled(Grid)(() => ({
  backgroundColor: '#fcfefe',
  height: '70%',
}));

export const FooterGrid = styled(Grid)(() => ({
  backgroundColor: '#f76b8a',
  height: '15%',
}));