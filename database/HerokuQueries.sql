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

INSERT INTO `heroku_f1cf93086df67b3`.`responsabilities`
(`product_name`,`description`,`participant_event_id`)
VALUES
('Product 2', 'Description Product 2', 261);

INSERT INTO `heroku_f1cf93086df67b3`.`playlists`
(`event_id`,`original`,`description`,`name`)
VALUES
(291,false,'Description Playlist 2','Playlist 2');

INSERT INTO `heroku_f1cf93086df67b3`.`media_contents`
(`playlist_id`,`title`,`year`,`image_url`)
VALUES
(61,'Doctor Strange', '2016','https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg');

INSERT INTO `heroku_f1cf93086df67b3`.`snacklists`
(`event_id`,`original`,`description`,`name`)
VALUES
(291,0,'Description for Snacklist 2', 'Snacklist 2');

INSERT INTO `heroku_f1cf93086df67b3`.`snacks`
(`snacklist_id`,`name`,`trademark`)
VALUES
(31,'Product 2','Trademark 2');


select * from roles;
select * from users;
select * from personal_playlists;
select * from personal_media_contents;
select * from notifications;
select * from friendships;
select * from events;
select * from participant_events where event_id = 291;
select * from responsabilities;
select * from playlists where event_id=291;
select * from media_contents;
select * from snacklists;
select * from snacks;

delete from users where (id) in (43);
delete from personal_media_contents where id=21;
delete from notifications where id=41;
delete from participant_events where (id) in (191,211);
delete from events where (id) in (271);
delete from participant_events where (event_id) in (271);

ALTER TABLE media_contents MODIFY title NVARCHAR(100);
ALTER TABLE snacklists MODIFY name NVARCHAR(50);
ALTER TABLE notifications MODIFY date datetime;
ALTER TABLE events MODIFY location nvarchar(80) null;
ALTER TABLE events MODIFY date datetime null;
ALTER TABLE playlists MODIFY description text null;
ALTER TABLE snacklists MODIFY description text null;
ALTER TABLE responsabilities MODIFY description text null;
-- users
ALTER TABLE users MODIFY user_code bigint(20) null;
ALTER TABLE users MODIFY phone nvarchar(9) null;
ALTER TABLE users MODIFY firstname nvarchar(50) not null;
ALTER TABLE users MODIFY lastname nvarchar(50) null;
ALTER TABLE users MODIFY email nvarchar(50) not null;
ALTER TABLE users MODIFY password nvarchar(50) not null;
ALTER TABLE users MODIFY image_url text null;
-- end
ALTER TABLE events ADD created_by bigint(20) not null;
-- latitud decimal(8,6) -> -99.999999 | 99.999999
ALTER TABLE events ADD latitude decimal(8,6) null;
-- longitud decimal(9,6) -> -999.999999 | 999.999999
ALTER TABLE events ADD longitude decimal(9,6) null;
ALTER TABLE events ADD image_url text null;
ALTER TABLE users ADD image_url text null;
ALTER TABLE playlists ADD image_url text null;
ALTER TABLE events ADD description text null;
ALTER TABLE media_contents ADD imdb_id nvarchar(30) null;
ALTER TABLE personal_media_contents ADD imdb_id nvarchar(30) null;

-- IN es para uso propio del storer rpocedure
DROP procedure IF exists insertEvent;
DELIMITER //
create procedure insertEvent (in name_ varchar(50), in user_rol int(11), in user_id_ bigint(20), in img text)
begin
		insert into events (name, created_by, image_url) values (name_, user_id_, img);
        set @last_id := (select max(id) from events where created_by=user_id_);
        insert into participant_events (event_id, user_id, rol_id) values (@last_id, user_id_, user_rol);
end//
DELIMITER ;

DROP procedure IF exists deleteEvent;
DELIMITER //
create procedure deleteEvent (in _id bigint(20))
begin
		delete from participant_events where event_id=_id;
        delete from events where (id) in (_id);
end//
DELIMITER ;

call insertEvent('ProcedureEvent', 11, 71);

SELECT * 
FROM snacks s left join snacklists sl on s.snacklist_id=sl.id
WHERE snacklist_id = 1;

select m.id, m.title, m.year, m.image_url
from media_contents m left join playlists p on m.playlist_id=p.id
where p.event_id=291 and m.playlist_id=61;

select s.id, s.name, s.trademark
from snacks s left join snacklists sl on s.snacklist_id=sl.id
where sl.event_id=291 and s.snacklist_id=31;

select r.id, r.product_name, r.description
from responsabilities r left join participant_events pe on r.participant_event_id=pe.id
where pe.user_id=71 and pe.event_id=291;

drop procedure if exists updateEvent;
DELIMITER //
create procedure updateEvent (in _name varchar(50), in _location varchar(80), 
	in _date datetime, in lat decimal(8,6), in lon decimal(9,6), in img text, in _id bigint(20))
begin
    set @twoOrNothing := 1;
    
	if  lat < -90.000000 or lat > 90.000000 then
		set @twoOrNothing = 0;
	end if;
    
    if lon < -180.000000 or lon > 180.000000 then
		set @twoOrNothing = 0;
	end if;
    
    if @twoOrNothing = 0 then
		set lat = null;
        set lon = null;
        select 'Latitude and/or Longitude out of range';
	end if;
    
    update events set name=_name,location=_location,date=_date,latitude=lat,longitude=lon,image_url=img
    where id=_id;
end;//
DELIMITER ;

SELECT pe.id 'participant_event_id', e.id 'event_id', e.name 'name_event', e.location 'location', e.date 'date', pe.rol_id, e.latitude, e.longitude, e.image_url, e.description 
                FROM participant_events pe right join events e on e.id=pe.event_id
			    WHERE pe.user_id = 71
