import styles from '../styles/profile/Profile.module.scss'
import {useSession} from "next-auth/react";

export default async function Profile() {
  const session = useSession();

  return (
      <div className={styles.wrapperProfile}>
          {session?.data?.user?.image &&
              <img className={styles.imgProfile} src={session?.data?.user.image} alt="image"/>
          }
          <h1 className={styles.nameProfile}>{session?.data?.user?.name}</h1>
      </div>
  )
}
