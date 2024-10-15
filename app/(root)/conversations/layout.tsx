import React from "react";

type Props = React.PropsWithChildren<{ children: React.ReactNode }>;

const ConversationsLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default ConversationsLayout;
