"use client";

import LoadingLogo from "@/components/shared/LoadingLogo";
import { Button } from "@/components/ui/button";
import { ClerkProvider, SignedOut, SignInButton, useAuth } from "@clerk/nextjs";
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children} </Authenticated>
        <SignedOut>
          <header className="h-full w-full flex justify-center items-center">
            <Button>
              <SignInButton />
            </Button>
          </header>
        </SignedOut>
        <AuthLoading>
          <LoadingLogo />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
