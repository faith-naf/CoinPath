import React from 'react'
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <div><Show when="signed-out">
  <SignInButton />
  <SignUpButton>
    <button className="rounded-full bg-purple-700 px-4 py-2 text-white">
      Sign Up
    </button>
  </SignUpButton>
</Show>

<Show when="signed-in">
  <UserButton />
</Show></div>
  )
}

export default Header