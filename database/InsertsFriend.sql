use movienightdb;

INSERT INTO Friend (IDUser, CodeFriend, Confirmed) VALUES (1, 111111112, true);
INSERT INTO Friend (IDUser, CodeFriend ,Confirmed) VALUES (1, 111111112, false);

select * from Friend;