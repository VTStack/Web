/*
  Warnings:

  - A unique constraint covering the columns `[name,user_id]` on the table `Group` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,group_id]` on the table `GroupMembers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[invite_owner_id,group_id]` on the table `Invite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Group_name_user_id_key" ON "Group"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "GroupMembers_user_id_group_id_key" ON "GroupMembers"("user_id", "group_id");

-- CreateIndex
CREATE UNIQUE INDEX "Invite_invite_owner_id_group_id_key" ON "Invite"("invite_owner_id", "group_id");
