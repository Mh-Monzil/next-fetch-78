"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const route = useRouter();
  const session = useSession();
  console.log(session);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Comments",
      path: "/comments",
    },
  ];

  const login = () => {
    route.push("/api/auth/signin");
  };

  

  return (
    <nav className="bg-red-500 p-4 flex items-center justify-between">
      <h2 className="text-3xl font-bold">
        Next <span className="text-slate-950">Meal</span>{" "}
      </h2>
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <Link
            className={`${
              pathName === link.path && "text-slate-900 font-semibold"
            }`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      {session.status === "authenticated" ? (
        
        <div className="flex items-center gap-5">
        <Image
          height={20}
          width={30}
          className="rounded-full h-10 w-10"
          src={session?.data?.user?.image}
          alt={session?.data?.user?.name}
        />
        <h6>
          {session?.data?.user?.name}
          <br />
          {session?.data?.user?.type}
        </h6>
        <button className="bg-white py-2 px-5 rounded-sm font-bold text-slate-900" onClick={() => signOut()}>Logout</button>
      </div>
      ) : (
        <div className="flex gap-2">
        <button
          onClick={login}
          className="bg-white py-2 px-5 rounded-sm font-bold text-slate-900"
        >
          Login
        </button>
        <Link href={'/api/auth/signup'}
          
          className="bg-white py-2 px-5 rounded-sm font-bold text-slate-900"
        >
          SignUp
        </Link>
        </div>
        
      ) }
      
    </nav>
  );
};

export default Navbar;
