import { ConvexError } from "convex/values";
import { query } from "./_generated/server";
import { getUserByClerkId } from "./_utils";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const currentUser = await getUserByClerkId({
      ctx,
      clerkId: identity.subject,
    });

    if (!currentUser) {
      throw new ConvexError("User not found");
    }

    const conversationMemberships = await ctx.db
      .query("conversationMembers")
      .withIndex("by_memberId", (q) => q.eq("memberId", currentUser._id))
      .collect();

    const conversations = Promise.all(
      conversationMemberships?.map(async (membership) => {
        const conversation = await ctx.db.get(membership.conversationId);

        if (!conversation) {
          throw new ConvexError("Conversation could not be found");
        }

        return conversation;
      })
    );

    const conversationsWithDetails = await Promise.all(
      (await conversations).map(async (conversation) => {
        const allConversationMemberships = await ctx.db
          .query("conversationMembers")
          .withIndex("by_conversationId", (q) =>
            q.eq("conversationId", conversation?._id)
          )
          .collect();

        if (conversation.isGroup) {
          return { conversation };
        } else {
          const otherMembership = allConversationMemberships.filter(
            (membership) => membership.memberId !== currentUser._id
          )[0];

          const otherMember = await ctx.db.get(otherMembership.memberId);

          return { conversation, otherMember };
        }
      })
    );
    return conversationsWithDetails;
  },
});
