import { SideBar } from '@renderer/components/organisms'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'



type Props = {

}

const Layout: FC<Props> = ({ }): JSX.Element => {

  return (
    <>
      <SideBar />
      <Outlet />
    </>
  )
}

export default Layout