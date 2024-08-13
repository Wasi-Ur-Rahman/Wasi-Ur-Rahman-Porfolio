import Link from "next/link"
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const socials = [
    {
        icon: <FaGithub/>, path: 'https://github.com/Wasi-Ur-Rahman',
    },
    {
        icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/wasi-ur-rahman-2686a5183/'
    },
    {
        icon: <SiCodeforces/>, path: 'https://codeforces.com/profile/Wasi_Ur',
    },
    {
        icon: <SiLeetcode/>, path: 'https://leetcode.com/u/Wasi_Ur/',
    },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {
            socials.map((item, index) => {
                return <Link className={iconStyles} key={index} href={item.path}>{item.icon}</Link>
            })
        }
    </div>
  )
}

export default Social