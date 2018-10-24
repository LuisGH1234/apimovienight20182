use heroku_f1cf93086df67b3;


select * from playlists;
select * from events;
select * from media_contents;

INSERT INTO `heroku_f1cf93086df67b3`.`personal_playlists`
(`user_id`, `name`, `description`)
VALUES
(71, 'mySecondPlaylist', 'Description for my second personal Playlist');

INSERT INTO `heroku_f1cf93086df67b3`.`personal_media_contents`
(`title`,`year`,`personal_playlist_id`,`image_url`)
VALUES
('Avengers: Infinity War','2018',1,'https://en.wikipedia.org/wiki/Avengers:_Infinity_War#/media/File:Avengers_Infinity_War_poster.jpg');

INSERT INTO `heroku_f1cf93086df67b3`.`personal_media_contents`
(`title`,`year`,`personal_playlist_id`,`image_url`)
VALUES
('Thor: Ragnarok','2017',1,'https://en.wikipedia.org/wiki/Thor:_Ragnarok#/media/File:Thor_Ragnarok_poster.jpg');

INSERT INTO `heroku_f1cf93086df67b3`.`notifications`
(`date`,`reciever_id`,`sender_id`,`description`)
VALUES
(NOW(), 71, 1, 'User Luis notify me. (second time)');

INSERT INTO `heroku_f1cf93086df67b3`.`friendships`
(`user_id`,`friend_id`,`confirmed`)
VALUES
(71, 11, true);


select * from users;
select * from personal_playlists;
select * from personal_media_contents;
select * from notifications;
select * from friendships;
select * from events;

delete from users where (id) in (43);
delete from personal_media_contents where id=21;
delete from notifications where id=41;

ALTER TABLE personal_media_contents MODIFY title VARCHAR(100);
ALTER TABLE notifications MODIFY date datetime;
ALTER TABLE events MODIFY location nvarchar(80) null;
ALTER TABLE events MODIFY date datetime null;

create procedure insertEvent (name_ varchar(50), location_ nvarchar(80), date_ )