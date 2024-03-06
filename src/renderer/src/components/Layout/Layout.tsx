import { Box } from '@mui/material'
import { SideBar } from '@renderer/components/organisms'
import { FC, Suspense, useEffect } from 'react'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'



type Props = {

}

const Layout: FC<Props> = ({ }): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (location.pathname == '/') {
      navigate('todos')
    }
  }, [location])
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Suspense fallback={<>loading...</>}>
        <Outlet />
      </Suspense>
    </Box>
  )
}

export default Layout