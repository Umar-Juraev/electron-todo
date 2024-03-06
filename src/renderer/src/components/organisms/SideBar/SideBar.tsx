import { FC } from 'react'
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'


type Props = {

}

interface SidebarItem {
  id: number;
  text: string;
  to: string;
}

const sidebarItems: SidebarItem[] = [
  { id: 1, text: 'Todos', to: '/todos' },
  { id: 2, text: 'History', to: '/history' }
];
const SideBar: FC<Props> = ({}) => (
    <Drawer
      sx={{
        width: 150,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {sidebarItems.map(item => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton component={Link} to={item.to}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
);

export default SideBar;