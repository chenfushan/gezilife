create table user(
	userId int primary key auto_increment,
	birthday date not null,
	age int not null
	);

create table action(
	userId int not null,
	startDate date not null,
	endDate date not null,
	actionContent varchar(255) not null,
	actionColor varchar(15) not null
	);