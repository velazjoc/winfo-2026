"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import  Link from "next/link";
import { set } from "mongoose";
import { signIn } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignIn() {
  const [email, loginEmail] = React.useState("")
  const [password, loginPassword] = React.useState("")
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const router = useRouter();
  
  async function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    setError("")
    setLoading(true)
    try{
      const result = await signIn.email({
        email, 
        password,
      });
      if (result.error){
        setError(result.error.message?? "Failed to Login")
      } else {
        router.push("\home")
      }
    } catch(err) {
      setError("Failed to Login")
    } finally {
      setLoading(false)
    }

  }
  return <div className="min-h-screen bg-[#A0B16D] flex flex-col items-center justify-end">
    
    <form onSubmit={handleSubmit}className="bg-[#F9F5F2] w-full justify-center items-center py-30 px-20 ">
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">email</Label>
        <Input type="email" id="email"  placeholder="email" required value={email} onChange={(e) => loginEmail(e.target.value)} />
      </div>
      <div className="flex flex-col gap-2">
                      <Label htmlFor="password">password</Label>
                      <Input type="password" id="password"  minLength={8} placeholder="*********" required value={password} onChange={(e) => loginPassword(e.target.value)} />
      </div>
      <Button disabled={loading} type="submit" className="bg-primary mt-4">
                      {loading ? "Signing In..." : "Sign In"}
      </Button>
      <p>If you already have an account <Link href="/sign-up" className="text-primary underline">Sign In</Link></p>
    </form>

    </div>
}




