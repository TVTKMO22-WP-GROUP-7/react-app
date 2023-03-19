PGDMP     /    2                {            dumptest    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                        1262    16522    dumptest    DATABASE     �   CREATE DATABASE dumptest WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE dumptest;
                postgres    false            �            1259    16523 	   V1_annual    TABLE     �   CREATE TABLE public."V1_annual" (
    year character varying(20) NOT NULL,
    global_anomaly double precision NOT NULL,
    northern_anomaly double precision NOT NULL,
    southern_anomaly double precision NOT NULL
);
    DROP TABLE public."V1_annual";
       public         heap    postgres    false            �            1259    16526 
   V1_monthly    TABLE     �   CREATE TABLE public."V1_monthly" (
    year character varying(20) NOT NULL,
    global_anomaly double precision NOT NULL,
    northern_anomaly double precision NOT NULL,
    southern_anomaly double precision NOT NULL
);
     DROP TABLE public."V1_monthly";
       public         heap    postgres    false            �            1259    16529    V1_reconstruction    TABLE     d   CREATE TABLE public."V1_reconstruction" (
    year character varying(20),
    t double precision
);
 '   DROP TABLE public."V1_reconstruction";
       public         heap    postgres    false            �            1259    16552 	   V3_carbon    TABLE     �   CREATE TABLE public."V3_carbon" (
    "time" integer NOT NULL,
    carbondata double precision NOT NULL,
    carbondixioxe double precision NOT NULL
);
    DROP TABLE public."V3_carbon";
       public         heap    postgres    false            �            1259    16547    V3_event    TABLE     Y   CREATE TABLE public."V3_event" (
    "time" integer NOT NULL,
    event text NOT NULL
);
    DROP TABLE public."V3_event";
       public         heap    postgres    false            �            1259    16555 	   V3_global    TABLE     g   CREATE TABLE public."V3_global" (
    "time" integer NOT NULL,
    global double precision NOT NULL
);
    DROP TABLE public."V3_global";
       public         heap    postgres    false            �            1259    16532    V5_all    TABLE     `   CREATE TABLE public."V5_all" (
    sector text NOT NULL,
    share double precision NOT NULL
);
    DROP TABLE public."V5_all";
       public         heap    postgres    false            �            1259    16537    V5_sub    TABLE     `   CREATE TABLE public."V5_sub" (
    sector text NOT NULL,
    share double precision NOT NULL
);
    DROP TABLE public."V5_sub";
       public         heap    postgres    false            �            1259    16542    V5_subfurther    TABLE     g   CREATE TABLE public."V5_subfurther" (
    sector text NOT NULL,
    share double precision NOT NULL
);
 #   DROP TABLE public."V5_subfurther";
       public         heap    postgres    false           