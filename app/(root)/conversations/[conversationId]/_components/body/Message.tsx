import React from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  fromCurrenUser: boolean;
  senderImage: string;
  senderName: string;
  lastByUser: boolean;
  content: string[];
  createdAt: number;
  type: string;
};

const Message = ({
  fromCurrenUser,
  senderImage,
  senderName,
  lastByUser,
  content,
  createdAt,
  type,
}: Props) => {
  const formatTime = (timestamp: number) => {
    return format(timestamp, "HH:mm");
  };

  return (
    <div className={cn("flex items-end", { "justify-end": fromCurrenUser })}>
      <div
        className={cn("flex flex-col w-full mx-2", {
          "order-1 items-end": fromCurrenUser,
          "order-2 items-start": !fromCurrenUser,
        })}
      >
        <div
          className={cn("px-4 py-2 rounded-lg max-w-[70%]", {
            "bg-primary text-primary-foreground": fromCurrenUser,
            "bg-secondary text-secondary-foreground": !fromCurrenUser,
            "rounded-br-none": !lastByUser && fromCurrenUser,
            "rounded-bl-none": !lastByUser && !fromCurrenUser,
          })}
        >
          {type === "text" ? (
            <p className="text-wrap break-words whitespace-pre-wrap break-all">
              {content}
            </p>
          ) : null}
          <p
            className={cn("text-xs flex w-full my-1", {
              "text-primary-foreground justify-end": fromCurrenUser,
              "text-secondary-foreground justify-start": !fromCurrenUser,
            })}
          >
            {formatTime(createdAt)}
          </p>
        </div>
      </div>
      <Avatar
        className={cn("relative w-8 h-8", {
          "order-8": fromCurrenUser,
          "order-1": !fromCurrenUser,
          invisible: lastByUser,
        })}
      >
        <AvatarImage src={senderImage} />
        <AvatarFallback>{senderName.substring(0, 1)}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Message;
