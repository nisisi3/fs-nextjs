import Image from "next/image";
import Link from "next/link";

export default function NavMenu() {
  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <Link href={"/"}>
              <Image
                src={
                  "https://media.discordapp.net/attachments/978346129504739439/1082297062114201716/maev-sketch-crop.png?ex=66d517ef&is=66d3c66f&hm=d337592d1e82d1184a27d4641a47aaa44a70caf19bdf484961f20d3a16642389&=&format=webp&quality=lossless&width=702&height=701"
                }
                alt=""
                width={42}
                height={42}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/users"}>Users</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
