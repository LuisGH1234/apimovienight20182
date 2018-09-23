use movienightdb;

INSERT INTO `friendships`
(`user_id`,
`friend_id`,
`confirmed`)
VALUES
(1,2,true);

INSERT INTO `friendships`
(`user_id`,
`friend_id`,
`confirmed`)
VALUES
(1,3,true);

INSERT INTO `friendships`
(`user_id`,
`friend_id`,
`confirmed`)
VALUES
(2,1,true);

INSERT INTO `friendships`
(`user_id`,
`friend_id`,
`confirmed`)
VALUES
(2,3,true);

select * from friendships;