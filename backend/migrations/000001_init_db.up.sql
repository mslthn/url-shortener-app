create table if not exists "users" (
    "id" serial primary key,
    "email" varchar(255) unique not null,
    "fullname" varchar(255),
    "description" varchar(255),
    "password_hash" varchar(255) not null,
    "created_at" timestamp default now()
);

create table if not exists "links" (
    "id" serial primary key,
    "user_id" integer REFERENCES users(id) on delete CASCADE,
    "original_url" text not null,
    "slug" varchar(255) unique not null,
    "created_at" timestamp default now(),
    "deleted_at" timestamp,
    "click_count" integer DEFAULT 0
);