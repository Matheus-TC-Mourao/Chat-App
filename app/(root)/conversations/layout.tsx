import ItemList from "@/components/shared/item-list/ItemList";
import React from "react";

type Props = { children: React.ReactNode };

const ConversationsLayout = ({ children }: Props) => {
  return (
    <>
      <ItemList title="Conversations">Conversations Page</ItemList>
      {children}
    </>
  );
};

export default ConversationsLayout;
